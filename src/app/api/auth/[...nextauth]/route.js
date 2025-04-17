import { db } from "@/db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { eq } from 'drizzle-orm';
import { compare } from 'bcryptjs';
import { z } from 'zod';
import { usersTable } from "@/db/schema";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsedCredentials.success) {
          return null;
        }

        const { email, password } = parsedCredentials.data;
        
        try {
          const user = await db.select().from(usersTable).where(eq(usersTable.email, email)).limit(1);
          if (user.length === 0) {
            return null;
          }
          const isValid = await compare(password, user[0].password);
          if (!isValid) {
            return null;
          }
          return {
            id: user[0].id,
            name: user[0].name,
            email: user[0].email,
          };
        } catch (error) {
          console.error("Error fetching user:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      console.log('jwt',token,user);
      if (user) token.email = user.email;
      return token;
    },
    async session({ session, token }) {
      console.log('session',token, session);
      if (session.user) {
        session.user.email = token.email;
      }
      return session;
    },
  },
});
export { handler as GET, handler as POST };
