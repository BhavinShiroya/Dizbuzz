"use client";
import React from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  Divider,
  Stack,
  Tooltip,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    id: 1,
    children: [
      {
        title: true,
        titleText: "Main Office Address",
      },
      {
        title: false,
        titleText:
          "Behind Shelubazar Urban Bank,Akola Road, Shelubazar,Tal. Mangrulpir, Dist. Washim,Maharashtra, India – 444402.",
        link: "/",
      },
    ],
  },
  {
    id: 2,
    children: [
      {
        title: true,
        titleText: "Office Landline",
      },
      {
        title: false,
        titleText: "  +91 7253 299 318",
        link: "/",
      },
    ],
  },
  {
    id: 3,
    children: [
      {
        title: true,
        titleText: "Helpline Mobile",
      },
      {
        title: false,
        titleText: "+91 8625013620",
        link: "/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          pt: {
            xs: "30px",
            lg: "60px",
          },
        }}
      >
        <Grid container spacing={3} justifyContent="space-between" mb={7}>
          {footerLinks.map((footerlink, i) => (
            <Grid item xs={6} sm={4} lg={2} key={i}>
              {footerlink.children.map((child, i) => (
                <React.Fragment key={i}>
                  {child.title ? (
                    <Typography fontSize="17px" fontWeight="600" mb="22px">
                      {child.titleText}
                    </Typography>
                  ) : (
                    <Link href={`${child.link}`}>
                      <Typography
                        sx={{
                          display: "block",
                          padding: "10px 0",
                          fontSize: "15px",
                          color: (theme) => theme.palette.text.primary,
                          "&:hover": {
                            color: (theme) => theme.palette.primary.main,
                          },
                        }}
                        component="span"
                      >
                        {child.titleText}
                      </Typography>
                    </Link>
                  )}
                </React.Fragment>
              ))}
            </Grid>
          ))}
          <Grid item xs={6} sm={6} lg={2}>
            <Typography fontSize="17px" fontWeight="600" mb="22px">
              Follow us
            </Typography>

            <Stack direction="row" gap="20px">
              <Tooltip title="Facebook">
                <Link href="#">
                  <Image
                    src="/images/frontend-pages/icons/icon-facebook.svg"
                    alt="facebook"
                    width={22}
                    height={22}
                  />
                </Link>
              </Tooltip>
              <Tooltip title="Twitter">
                <Link href="#">
                  <Image
                    src="/images/frontend-pages/icons/icon-twitter.svg"
                    alt="twitter"
                    width={22}
                    height={22}
                  />
                </Link>
              </Tooltip>
              <Tooltip title="Instagram">
                <Link href="#">
                  <Image
                    src="/images/frontend-pages/icons/icon-instagram.svg"
                    alt="instagram"
                    width={22}
                    height={22}
                  />
                </Link>
              </Tooltip>
            </Stack>
          </Grid>
        </Grid>

        <Divider />

        <Box
          py="40px"
          flexWrap="wrap"
          display="flex"
          justifyContent="space-between"
        >
          <Stack direction="row" gap={1} alignItems="center">
            <Image
              src="/images/logos/logoIcon.svg"
              width={20}
              height={20}
              alt="logo"
            />
            <Typography variant="body1" fontSize="15px">
              All rights reserved by Dizbuzz.
            </Typography>
          </Stack>
          <Typography variant="body1" fontSize="15px">
            Produced by{" "}
            <Typography component={Link} color="primary.main" href="/">
              DIZBUZZ
            </Typography>
            .
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Footer;
