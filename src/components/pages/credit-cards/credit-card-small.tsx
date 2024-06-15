import React from "react";
import { Button, Typography } from "@/components/ui";
import { cn } from "@/lib/utils";
import { logo_visa, logo_mastercard, bank_hsbc } from "@/assets";

export interface CreditCardSmallProps {
  className?: string;
  onClick?: () => void;
}

export const CreditCardSmall = ({ className, onClick }: CreditCardSmallProps) => {
  const getBrand = () => {
    return logo_mastercard;
  };

  const getBank = () => {
    return bank_hsbc;
  };

  return (
    <button
      className={cn(
        "h-[94px] w-full max-w-[300px]", //size
        "rounded-xl p-4 bg-[#080808] shadow-[0_0_20px_rgba(0,0,0,0.8)]", //colors and layout
        "transition-colors ease-linear duration-150", //animation
        "hover:bg-[#0c0c0c] hover:shadow-[0_0_20px_rgba(0,0,0,0.8)]", //event colors
        "flex flex-col", //container
        className
      )}
      onClick={onClick}
    >
      <div className="flex flex-row justify-between w-full h-[31px]">
        <img className="h-[24px]" src={getBrand()} alt="cc-logo" />
        <img className="h-[24px]" src={getBank()} alt="cc-logo" />
      </div>
      <div className="flex flex-row justify-end items-end w-full h-[31px]">
        <Typography className="text-sm font-semibold tracking-widest" variant="span">**** **** **** 1234</Typography>
      </div>
    </button>
  );
};