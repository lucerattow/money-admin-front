import React, { ReactNode } from "react";
import { Breadcrumb, PageHeader } from "@/components/pages";
import { useAppStore } from "@/lib/context";
import { ScrollArea } from "@/components/ui";
import { cn } from "@/lib/utils";

export interface PageContainerProps {
  className?: string;
  title: string;
  backRoute?: string;
  children?: ReactNode;
}

export const PageContainer = ({ className, title, backRoute, children }: PageContainerProps) => {
  const breadcrumbs = useAppStore((state) => state.breadcrumbs);

  return (
    <ScrollArea className="w-full h-full">
      <div className="flex flex-row justify-center w-full h-full p-5">
        <div className="flex flex-col w-full max-w-pageContent gap-5">
          <Breadcrumb items={breadcrumbs} />
          <div className="flex flex-col bg-card rounded">
            <PageHeader title={title} backRoute={backRoute} />
            <div className={cn("w-full h-full p-3", className)}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default PageContainer;