"use client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";

import PageContainer from "@/app/components/container/PageContainer";
// components
import YearlyBreakup from "@/app/components/dashboards/modern/YearlyBreakup";
import MonthlyEarnings from "@/app/components/dashboards/modern/MonthlyEarnings";
import TopCards from "@/app/components/dashboards/modern/TopCards";
import RevenueUpdates from "@/app/components/dashboards/modern/RevenueUpdates";
import EmployeeSalary from "@/app/components/dashboards/modern/EmployeeSalary";
import Customers from "@/app/components/dashboards/modern/Customers";
import Projects from "@/app/components/dashboards/modern/Projects";
import Social from "@/app/components/dashboards/modern/Social";
import SellingProducts from "@/app/components/dashboards/modern/SellingProducts";
import WeeklyStats from "@/app/components/dashboards/modern/WeeklyStats";
import TopPerformers from "@/app/components/dashboards/modern/TopPerformers";
import PricingPage from "../frontend-pages/pricing/page";

export default function Dashboard() {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <PageContainer title="Dashboard" description="this is Dashboard">
      <PricingPage />
    </PageContainer>
  );
}
