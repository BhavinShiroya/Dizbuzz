"use client";

import React, { useState } from "react";
import Container from "@mui/material/Container";
import {
  Box,
  Button,
  Grid2 as Grid,
  Stack,
  Typography,
  Chip,
  TextField,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { useSelector } from "@/store/hooks";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { AppState } from "@/store/store";
import Navigation from "../../layout/horizontal/navbar/Navigation";
import Sidebar from "../../layout/vertical/sidebar/Sidebar";
import Header from "../../layout/vertical/header/Header";
import Customizer from "../../layout/shared/customizer/Customizer";
import BlankCard from "@/app/components/shared/BlankCard";
import PageContainer from "@/app/components/container/PageContainer";
import Breadcrumb from "../../layout/shared/breadcrumb/Breadcrumb";
import CustomFormLabel from "@/app/components/forms/theme-elements/CustomFormLabel";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InferType } from "yup";

// Layout styles
const MainWrapper = styled("div")(() => ({
  display: "flex",
  minHeight: "100vh",
  width: "100%",
}));

const PageWrapper = styled("div")(() => ({
  display: "flex",
  flexGrow: 1,
  paddingBottom: "60px",
  flexDirection: "column",
  zIndex: 1,
  width: "100%",
  backgroundColor: "transparent",
}));

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Add Product",
  },
];

// Schema & form type
const schema = yup.object({
  productName: yup.string().required("Product Name is required"),
  description: yup.string().required("Description is required"),
  media: yup
    .array()
    .of(yup.mixed<File>().required())
    .min(1, "At least one file is required")
    .required("Media is required"),
});

// type FormValues = InferType<typeof schema>; // 👈 Infer the type from schema

type FormValues = {
  productName: string;
  description: string;
  media: File[]; // Ensure this matches the expected structure for media
};

export default function Layout() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const customizer = useSelector((state: AppState) => state.customizer);
  const theme = useTheme();
  const { data: session } = useSession();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      productName: "",
      description: "",
      media: [],
    },
  });

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: (files: File[]) => {
      setValue("media", files as any, { shouldValidate: true }); // type cast to `any`
    },
  });

  const watchedMedia = watch("media");
  const files = (watchedMedia as unknown as File[]) ?? [];

  const onSubmit = (data: FormValues) => {
    console.log("Submitted Data:", data);
  };

  if (session) {
    return (
      <MainWrapper>
        {!customizer.isHorizontal && <Sidebar />}

        <PageWrapper
          className="page-wrapper"
          sx={{
            ...(customizer.isCollapse && {
              [theme.breakpoints.up("lg")]: {
                ml: `${customizer.MiniSidebarWidth}px`,
              },
            }),
          }}
        >
          {!customizer.isHorizontal && <Header />}
          {customizer.isHorizontal && <Navigation />}
          <Container
            sx={{
              maxWidth:
                customizer.isLayout === "boxed" ? "lg" : "100%!important",
            }}
          >
            <Box sx={{ minHeight: "calc(100vh - 170px)" }}>
              <PageContainer
                title="Add Product"
                description="this is Add Product"
              >
                <Breadcrumb title="Add Product" items={BCrumb} />
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={3}>
                    <Grid size={{ lg: 12 }}>
                      <Stack spacing={3}>
                        <BlankCard>
                          <Box p={3}>
                            <Typography variant="h5">General</Typography>
                            <Grid container mt={3}>
                              {/* Product Name */}
                              <Grid
                                display="flex"
                                alignItems="center"
                                size={12}
                              >
                                <CustomFormLabel
                                  htmlFor="productName"
                                  sx={{ mt: 0 }}
                                >
                                  Product Name{" "}
                                  <Typography
                                    color="error.main"
                                    component="span"
                                  >
                                    *
                                  </Typography>
                                </CustomFormLabel>
                              </Grid>
                              <Grid size={12}>
                                <TextField
                                  id="productName"
                                  fullWidth
                                  placeholder="Product Name"
                                  {...register("productName")}
                                />
                                {errors.productName && (
                                  <Typography color="error">
                                    {errors.productName.message}
                                  </Typography>
                                )}
                              </Grid>

                              {/* Description */}
                              <Grid
                                display="flex"
                                alignItems="center"
                                size={12}
                              >
                                <CustomFormLabel htmlFor="description">
                                  Description{" "}
                                  <Typography
                                    color="error.main"
                                    component="span"
                                  >
                                    *
                                  </Typography>
                                </CustomFormLabel>
                              </Grid>
                              <Grid size={12}>
                                <TextField
                                  id="description"
                                  fullWidth
                                  multiline
                                  minRows={4}
                                  placeholder="Enter Description"
                                  {...register("description")}
                                />
                                {errors.description && (
                                  <Typography color="error">
                                    {errors.description.message}
                                  </Typography>
                                )}
                              </Grid>
                            </Grid>
                          </Box>
                        </BlankCard>

                        {/* Media Section */}
                        <BlankCard>
                          <Box p={3}>
                            <Typography variant="h5">Media</Typography>
                            <Box
                              mt={3}
                              fontSize="12px"
                              sx={{
                                backgroundColor: "primary.light",
                                color: "primary.main",
                                padding: "40px 30px",
                                textAlign: "center",
                                border: `1px dashed`,
                                borderColor: "primary.main",
                              }}
                              {...getRootProps({ className: "dropzone" })}
                            >
                              <input {...getInputProps()} />
                              <p>
                                Drag &apos;n&apos; drop some files here, or
                                click to select files
                              </p>
                            </Box>

                            {errors.media && (
                              <Typography mt={2} color="error">
                                {errors.media.message as string}
                              </Typography>
                            )}

                            <Box mt={2}>
                              <Typography variant="h6" fontSize="15px">
                                Files :
                              </Typography>
                              {files.length > 0 ? (
                                files.map((file: any) => (
                                  <Box
                                    key={file.path}
                                    display="flex"
                                    alignItems="center"
                                    py={1}
                                    mt={2}
                                    sx={{
                                      borderTop: `1px solid ${theme.palette.divider}`,
                                    }}
                                    justifyContent="space-between"
                                  >
                                    <Typography
                                      variant="body1"
                                      fontWeight="500"
                                    >
                                      {file.path}
                                    </Typography>
                                    <Chip
                                      color="primary"
                                      label={`${file.size} Bytes`}
                                    />
                                  </Box>
                                ))
                              ) : (
                                <Typography>No files selected.</Typography>
                              )}
                            </Box>
                          </Box>
                        </BlankCard>
                      </Stack>
                    </Grid>
                  </Grid>

                  <Stack direction="row" spacing={2} mt={3}>
                    <Button variant="contained" color="primary" type="submit">
                      Save Changes
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      style={{ marginLeft: "15px" }}
                    >
                      Cancel
                    </Button>
                  </Stack>
                </form>
              </PageContainer>
            </Box>
          </Container>
          <Customizer />
        </PageWrapper>
      </MainWrapper>
    );
  }

  return <>{redirect("/admin")}</>;
}
