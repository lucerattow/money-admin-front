import React from "react";
import { Typography, buttonVariants } from "@/components/ui";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "@nine-thirty-five/material-symbols-react/outlined";

export interface PageHeaderProps {
  title: string;
  backRoute?: string;
}

export const PageHeader = ({ title, backRoute }: PageHeaderProps) => {
  return (
    <div className="flex flex-row items-center p-3 border-b">
      {backRoute && (
        <Link className={cn(
          buttonVariants({ variant: "ghost", size: "icon" }),
          "mr-2 rounded-full p-1 w-7 h-7"
        )} to={backRoute} >
          <ChevronLeft />
        </Link>
      )}
      <Typography variant="h4">{title}</Typography>
    </div>
  );
};

//size 24