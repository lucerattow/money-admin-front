import React, { ReactNode } from "react";
import { SideBar } from "@/components/layout";
import { cn } from "@/utils/utils";

export interface AppContainerProps {
  className?: string;
  loggedIn: boolean;
  children: ReactNode;
}

export const AppContainer = ({ className, loggedIn, children }: AppContainerProps) => {
  return (
    <div className={cn(
      "flex flex-row",
      className
    )}>
      {loggedIn && <SideBar className="h-full" />}
      {children}
    </div>
  );
};