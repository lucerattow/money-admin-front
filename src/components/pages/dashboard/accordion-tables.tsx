import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";
import { DashboardItem, DashboardTable } from "./dashboard-table";

export interface AccordionTablesProps {
  data?: DashboardItem[];
}

export const AccordionTables = ({ data }: AccordionTablesProps) => {
  const slice1 = data;
  const slice2 = data;
  return (
    <Accordion type="single" defaultValue="item-1" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>2024</AccordionTrigger>
        <AccordionContent>
          <DashboardTable data={slice1} />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>2023</AccordionTrigger>
        <AccordionContent>
          <DashboardTable data={slice2} />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};