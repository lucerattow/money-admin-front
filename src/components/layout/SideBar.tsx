import React, { useState } from "react";
import { routes } from "@/utils/constants";
import { INavbarItem, Navbar } from "@/components/ui";
import { Dashboard, CurrencyExchange, CreditCard } from "@nine-thirty-five/material-symbols-react/outlined";
import { cn } from "@/utils/utils";

const sideBarItems: INavbarItem[] = [
  { label: "Dashboard", icon: <Dashboard />, to: routes.home, },
  { label: "Transacciones", icon: <CurrencyExchange />, to: routes.transactions, },
  { label: "Tarjetas de credito", icon: <CreditCard />, to: routes.creditCards, },
];

interface SideBarProps {
  className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
  return (
    <Navbar
      className={cn(
        "bg-muted/20 border-r min-w-[250px] w-[250px]",
        className
      )}
      items={sideBarItems}
    />
  );
};