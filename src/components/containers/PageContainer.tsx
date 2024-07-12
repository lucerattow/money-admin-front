import React, { ReactNode } from "react";
import { PageBreadcrumb, PageHeader } from "./components";
import { useAppStore } from "@/zustand";
import { ScrollArea } from "@/components/ui";
import { cn } from "@/utils/utils";
import { Skeleton } from "../ui/skeleton";

export interface PageContainerProps {
  className?: string;
  title: string;
  backRoute?: string;
  children?: ReactNode;
  isLoading?: boolean;
}

export const PageContainer = ({ className, title, backRoute, children, isLoading = false }: PageContainerProps) => {
  const breadcrumbs = useAppStore((state) => state.breadcrumbs);

  return (
    <ScrollArea className="w-full h-full">
      <div className="flex flex-row justify-center w-full h-full p-5">
        <div className="flex flex-col w-full max-w-pageContent gap-5">
          {!isLoading
            ? <PageBreadcrumb items={breadcrumbs} />
            : <Skeleton className="h-5 w-[300px]" />
          }
          <div className="flex flex-col bg-card rounded">
            <PageHeader title={title} backRoute={backRoute} isLoading={isLoading} />
            <div className={cn("w-full h-full p-3", className)}>
              {!isLoading
                ? children
                : <Skeleton className="w-full h-[300px] rounded-xl" />
              }
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};