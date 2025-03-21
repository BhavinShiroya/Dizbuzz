"use client";
import React from "react";
import {
  Box,
  Grid,
  Typography,
  Chip,
  CardContent,
  Divider,
  Stack,
  Button,
} from "@mui/material";
import Image from "next/image";
import BlankCard from "../../../shared/BlankCard";

const Licenses = [
  {
    id: 1,
    type: "Standard",
    isPopular: false,
    typeText: "Open at 30 to 31 March 99 left of 99",
    price: "9900",
    fullSourceCode: true,
    isDoc: true,
    isSass: false,
    isSingleProject: true,
    isSupport: true,
    isUpdate: true,
    priority: "1st Priority",
    free: "Free service for 1 year for listed and custom product",
    products: "Get 27 products free in this financial year",
    callSupport: "",
    credit: "",
  },
  {
    id: 2,
    type: "Premium",
    isPopular: true,
    typeText: "Opened only 9 left of 9 till 28 march",
    price: "99,000",
    fullSourceCode: true,
    isDoc: true,
    isSass: false,
    isSingleProject: false,
    isSupport: true,
    isUpdate: true,
    priority: "2nd Priority",
    free: "Free service for 3 month",
    products: "Get 9 basic products free in upcomming 3 month",
    callSupport: "",
    credit: "",
  },
  {
    id: 3,
    type: "Basic",
    isPopular: false,
    typeText: "Open at 31 March 99 left of 99",
    price: "990",
    fullSourceCode: true,
    isDoc: true,
    isSass: false,
    isSingleProject: true,
    isSupport: true,
    isUpdate: true,
    priority: "3rd Priority",
    free: "Free service for 1 month on listed product",
    products: "Get 3  products free in this month",
    callSupport: "",
    credit: "",
  },
];

const PricingCard = () => {
  return (
    <>
      <Grid container spacing={3}>
        {Licenses.map((license, i) => (
          <Grid item xs={12} lg={4} sm={6} key={i}>
            <BlankCard>
              <CardContent sx={{ p: "32px" }}>
                <Box display="flex" alignItems="center" mb={2}>
                  <Typography
                    variant="h4"
                    fontSize={license.type === "Premium" ? "20px" : "1rem"}
                    fontWeight={license.type === "Premium" ? "800" : "600"}
                    // fontWeight={600}
                  >
                    {license.type}
                  </Typography>

                  {license.isPopular ? (
                    <Chip
                      label="Most Popular"
                      size="medium"
                      sx={{
                        fontSize: "14px",
                        ml: "6px",
                        borderRadius: "10px",
                        color: "primary.main",
                        backgroundColor: "rgba(93, 135, 255, 0.15)",
                      }}
                    />
                  ) : null}
                </Box>

                <Typography fontSize="15px" mb={4}>
                  {license.typeText}
                </Typography>
                <Divider />
                <Stack mt={4} direction="row" gap="8px" alignItems="end">
                  <Typography variant="h4" fontSize="35px" fontWeight={700}>
                    ₹{license.price}
                  </Typography>
                  <Typography variant="body2" fontSize="14px">
                    / Including GST
                  </Typography>
                </Stack>
                <Stack my={4} gap="12px">
                  <Box display="flex" alignItems="center" gap="8px">
                    {license.fullSourceCode ? (
                      <Image
                        src="/images/frontend-pages/icons/icon-check.svg"
                        alt="circle"
                        width={20}
                        height={20}
                      />
                    ) : (
                      <Image
                        src="/images/frontend-pages/icons/icon-close.svg"
                        alt="circle"
                        width={20}
                        height={20}
                      />
                    )}
                    <Typography fontSize="14px" fontWeight={500}>
                      {license.priority}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap="8px">
                    {license.isDoc ? (
                      <Image
                        src="/images/frontend-pages/icons/icon-check.svg"
                        alt="circle"
                        width={20}
                        height={20}
                      />
                    ) : (
                      <Image
                        src="/images/frontend-pages/icons/icon-close.svg"
                        alt="circle"
                        width={20}
                        height={20}
                      />
                    )}
                    <Typography fontSize="14px" fontWeight={500}>
                      {license.free}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap="8px">
                    {!license.isSass ? (
                      <Image
                        src="/images/frontend-pages/icons/icon-check.svg"
                        alt="circle"
                        width={20}
                        height={20}
                      />
                    ) : (
                      <Image
                        src="/images/frontend-pages/icons/icon-close.svg"
                        alt="circle"
                        width={20}
                        height={20}
                      />
                    )}
                    <Typography
                      fontSize="14px"
                      sx={{
                        color: `${
                          !license.isSass ? "text.primary" : "#99AABA"
                        }`,
                        fontWeight: `${!license.isSass ? "500" : "400"}`,
                      }}
                    >
                      {license.products}
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center" gap="8px">
                    {license.callSupport &&
                      license.callSupport !== "" &&
                      license.callSupport && (
                        <Image
                          src="/images/frontend-pages/icons/icon-check.svg"
                          alt="circle"
                          width={20}
                          height={20}
                        />
                      )}

                    {license.callSupport && (
                      <Typography
                        fontSize="14px"
                        whiteSpace="nowrap"
                        gap="2px"
                        fontWeight={500}
                        display="flex"
                      >
                        <Box
                          fontWeight={700}
                          component="span"
                          whiteSpace="nowrap"
                        >
                          {/* {license.isSingleProject ? "One" : "Unlimited"}{" "} */}
                          {license.callSupport}
                        </Box>
                      </Typography>
                    )}
                  </Box>
                  {license.credit && (
                    <Box display="flex" alignItems="center" gap="8px">
                      {license.credit &&
                        license.credit !== "" &&
                        license.credit && (
                          <Image
                            src="/images/frontend-pages/icons/icon-check.svg"
                            alt="circle"
                            width={20}
                            height={20}
                          />
                        )}
                      <Typography
                        fontSize="14px"
                        whiteSpace="nowrap"
                        gap="2px"
                        fontWeight={500}
                        display="flex"
                      >
                        <Box
                          fontWeight={700}
                          component="span"
                          whiteSpace="nowrap"
                        >
                          {license.credit}
                        </Box>{" "}
                      </Typography>
                    </Box>
                  )}
                  <Box display="flex" alignItems="center" gap="8px">
                    {license.isUpdate ? (
                      <Image
                        src="/images/frontend-pages/icons/icon-check.svg"
                        alt="circle"
                        width={20}
                        height={20}
                      />
                    ) : (
                      <Image
                        src="/images/frontend-pages/icons/icon-close.svg"
                        alt="circle"
                        width={20}
                        height={20}
                      />
                    )}
                    <Typography
                      fontSize="14px"
                      whiteSpace="nowrap"
                      gap="2px"
                      fontWeight={500}
                      display="flex"
                    >
                      <Box
                        fontWeight={700}
                        component="span"
                        whiteSpace="nowrap"
                      >
                        One Year
                      </Box>{" "}
                      Free Updates
                    </Typography>
                  </Box>
                </Stack>
                <Button fullWidth variant="contained" size="large">
                  <Typography sx={{ fontSize: "16px", fontWeight: "500" }}>
                    Purchase Now
                  </Typography>
                </Button>
              </CardContent>
            </BlankCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PricingCard;
