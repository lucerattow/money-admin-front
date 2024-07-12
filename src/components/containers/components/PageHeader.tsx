import React from "react";
import { Typography, buttonVariants } from "@/components/ui";
import { Link } from "react-router-dom";
import { cn } from "@/utils/utils";
import { ChevronLeft } from "@nine-thirty-five/material-symbols-react/outlined";
import { Skeleton } from "@/components/ui/skeleton";

export interface PageHeaderProps {
  title: string;
  backRoute?: string;
  isLoading?: boolean;
}

export const PageHeader = ({ title, backRoute, isLoading = false }: PageHeaderProps) => {
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

      {!isLoading
        ? <Typography variant="h4">{title}</Typography>
        : <Skeleton className="h-[28px] w-[300px]" />
      }
    </div>
  );
};

//size 24