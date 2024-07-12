import { useEffect } from "react";
import { PageContainer } from "@/components/containers";
import { AccordionTables } from "./components";
import { useAppStore } from "@/zustand";

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