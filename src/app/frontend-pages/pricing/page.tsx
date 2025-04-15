"use client";
import PageContainer from "@/app/components/container/PageContainer";
import HeaderAlert from "../../components/frontend-pages/shared/header/HeaderAlert";
import HpHeader from "../../components/frontend-pages/shared/header/HpHeader";
import Pricing from "../../components/frontend-pages/shared/pricing";
import C2a from "../../components/frontend-pages/shared/c2a";
import Footer from "../../components/frontend-pages/shared/footer";
import Banner from "../../components/frontend-pages/pricing/Banner";
import ScrollToTop from "../../components/frontend-pages/shared/scroll-to-top";
import ProductShop from "@/app/components/apps/ecommerce/productGrid";
import ProductList from "@/app/components/apps/ecommerce/productGrid/ProductList";
import { Box } from "@mui/material";
import { Grid2 as Grid } from "@mui/material";

const PricingPage = () => {
  return (
    <PageContainer title="Pricing" description="this is Pricing">
      <HpHeader />
      <Banner />

      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid size={{ lg: 7 }}>
          <ProductList />
        </Grid>
      </Grid>

      <Pricing />
      <C2a />
      <Footer />
      <ScrollToTop />
    </PageContainer>
  );
};

export default PricingPage;
