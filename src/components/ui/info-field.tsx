import React from "react";
import Typography from "./typography";
import { cn } from "@/utils/utils";

export interface InfoFieldProps {
  className?: string;
  label: string,
  value?: string,
}

export const InfoField = ({ className, label, value }: InfoFieldProps) => {
  return (
    <div className={cn("flex flex-col justify-start", className)}>
      <Typography variant="span" className="text-primary font-semibold">{label}</Typography>
      <Typography variant="span" className="">{value}</Typography>
    </div>
  );
};