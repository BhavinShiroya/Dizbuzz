"use client";
import React from "react";
import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";
import { Chip, Typography } from "@mui/material";
import NextLink from "next/link";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const NavLinks = [
  {
    title: "Story of DIZBUZZ",
    href: "/",
  },
  {
    title: "Meet Founder",
    href: "/pending",
  },
  {
    title: "About Us",
    // new: true,
    href: "/pending",
  },

  // {
  //   title: "Dashboard",
  //   href: "/s",
  // },
  // {
  //   title: "Pricing",
  //   href: "/frontend-pages/pricing",
  // },
  // {
  //   title: "Contact",
  //   href: "/frontend-pages/contact",
  // },
];

const Navigations = () => {
  const router = usePathname();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const StyledButton = styled(Button)(({ theme }) => ({
    a: {
      color: theme.palette.text.secondary,
      fontWeight: 500,
      fontSize: "15px",
    },

    "&.active": {
      backgroundColor: "rgba(93, 135, 255, 0.15)",
      a: {
        color: theme.palette.primary.main,
      },
    },
  }));

  return (
    <>
      {NavLinks.map((navlink, i) => (
        <StyledButton
          color="inherit"
          className={router === navlink.href ? "active" : "not-active"}
          variant="text"
          // color="#fff"
          key={i}
        >
          <NextLink href={navlink.href}>
            <Typography sx={{ fontSize: "1rem", fontWeight: "600" }}>
              {navlink.title}
            </Typography>
            {/* {navlink.new ? (
              <Chip
                label="New"
                size="small"
                sx={{
                  ml: "6px",
                  borderRadius: "8px",
                  color: "primary.main",
                  backgroundColor: "rgba(93, 135, 255, 0.15)",
                }}
              />
            ) : null} */}
          </NextLink>
        </StyledButton>
      ))}
    </>
  );
};

export default Navigations;
