"use client";
import React from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import PricingCard from "./PricingCard";
import PaymentMethods from "./PaymentMethods";

const Pricing = () => {
  return (
    <>
      <Box
        sx={{
          py: {
            xs: 5,
            lg: 11,
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} lg={7}>
              <Typography
                textAlign="center"
                variant="h4"
                lineHeight={1.4}
                mb={6}
                fontWeight={600}
                sx={{
                  fontSize: {
                    lg: "35px",
                    xs: "35px",
                  },
                }}
              >
                Book Advance & Get 100% Credit Free
              </Typography>
            </Grid>
          </Grid>

          <PricingCard />

          <PaymentMethods />
        </Container>
      </Box>
    </>
  );
};

export default Pricing;
