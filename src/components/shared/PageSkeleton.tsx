import React from "react";
import { PageContainer } from "../containers";
import { Skeleton } from "../ui/skeleton";

interface PageSkeletonProps {
  className?: string;
}

export const PageSkeleton = ({ className }: PageSkeletonProps) => {
  return (
    <PageContainer title="" isLoading>
      <Skeleton className="w-full h-[300px] rounded-xl" />
    </PageContainer>
  );
};