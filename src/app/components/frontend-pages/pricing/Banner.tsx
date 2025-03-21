"use client";
import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <Box
        bgcolor="primary.light"
        sx={{
          paddingTop: {
            xs: "40px",
            lg: "75px",
          },
          paddingBottom: {
            xs: "40px",
            lg: "100px",
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} lg={10.7} alignItems="center" textAlign="center">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography
                  textTransform="uppercase"
                  fontSize="20px"
                  mb="30px"
                  fontWeight="800"
                  sx={{ backgroundColor: "#fff" }}
                  width="28%"
                  py="15px"
                  borderRadius="50px"
                  className="active"
                  border="2px solid #ddd"
                >
                  Start from 01.04.2025
                </Typography>
              </Box>
              <Typography
                // variant="h1"
                mb={3}
                color="black"
                lineHeight={1.4}
                fontWeight={700}
                sx={{
                  fontSize: {
                    xs: "34px",
                    sm: "48px",
                    lg: "35px",
                  },
                }}
              >
                Be Our 1st of 9 Premium Subscriber and get 27 products,9 Basic
                product, 9 Standard product, 9 premium product and 1 year
                service, free
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Banner;
