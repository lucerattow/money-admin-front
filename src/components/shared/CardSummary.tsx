import React from "react";
import { InfoField } from "@/components/ui";
import { cn } from "@/utils/utils";

export interface CardSummaryProps {
  className?: string;
}

export const CardSummary = ({ className }: CardSummaryProps) => {
  return (
    <div className={cn("flex flex-row flex-nowrap justify-between w-full", className)}>
      <div className="flex flex-col mr-3">
        <InfoField label="Fecha de cierre" value="2020-08-01" />
        <InfoField label="Vencimiento" value="2020-08-01" />
      </div>
      <div className="flex flex-col mr-auto">
        <InfoField label="Proximo cierre" value="2020-08-01" />
        <InfoField label="Proximo Vto" value="2020-08-01" />
      </div>
      <div className="flex flex-col ml-auto">
        <InfoField label="Total ARS" value="2020-08-01" />
        <InfoField label="Saldo pendiente" value="2020-08-01" />
      </div>
      <div className="flex flex-col ml-3">
        <InfoField label="Total USD" value="2020-08-01" />
        <InfoField label="Pago minimo" value="2020-08-01" />
      </div>
    </div>
  );
};