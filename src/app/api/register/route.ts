// app/api/register/route.ts
import { db} from '@/db';
import { usersTable } from '@/db/schema';
import { hash } from 'bcryptjs';
import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { z } from 'zod';
import { getServerSession } from 'next-auth';

const schema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    //check here current user seesion
    const session = await getServerSession();
    console.log('🚀 ~ session:', session);
    if (session) {
      return NextResponse.json({ error: 'Already logged in' }, { status: 400 });
    }
    const validation = schema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(validation.error.errors, { status: 400 });
    }

    const { name, email, password } = validation.data;

    const existingUser = await db.select().from(usersTable).where(eq(usersTable.email, email)).limit(1);

    if (existingUser.length > 0) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await db.insert(usersTable).values({
      name,
      email,
      password: hashedPassword,
    }).returning();

    return NextResponse.json({
      user: {
        id: newUser[0].id,
        name: newUser[0].name,
        email: newUser[0].email,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}