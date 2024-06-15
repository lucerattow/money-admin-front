import React, { useEffect } from "react";
import { PageContainer } from "@/components/containers";
import { AccordionTables } from "@/components/pages";
import { useAppStore } from "@/lib/context";
import { routes } from "@/lib/constants";
import { dashboardData } from "@/api/mocks";

export const Dashboard = () => {
  const setBreadcrumbs = useAppStore((state) => state.setBreadcrumbs);

  useEffect(() => {
    setBreadcrumbs([
      { label: "Dashboard" },
    ]);
  }, [setBreadcrumbs]);

  return (
    <PageContainer title="Dashboard">
      <AccordionTables />
    </PageContainer >
  );
};