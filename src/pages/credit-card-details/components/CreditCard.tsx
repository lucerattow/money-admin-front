import { cn } from "@/utils/utils";
import React from "react";
import { cc_chip, cc_contactless, logo_mastercard, bank_hsbc } from "@/assets";
import { Typography } from "@/components/ui";

export interface CreditCardProps {
  className?: string;
}

export const CreditCard = ({ className }: CreditCardProps) => {
  const getBrand = () => {
    return logo_mastercard;
  };

  const getBank = () => {
    return bank_hsbc;
  };

  return (
    <div
      className={cn(
        "h-[200px] w-full", //size
        "rounded-xl p-4 bg-[#080808] shadow-[0_0_20px_rgba(0,0,0,0.8)]", //colors and layout
        "flex flex-col", //container
        className
      )}
    >
      <div className="flex flex-row justify-end items-center mb-5 h-[30px]">
        <img className="h-[30px]" src={getBank()} alt="cc-logo" />
      </div>
      <div className="flex flex-row justify-between items-center mb-5 h-[50px]">
        <img className="h-[50px]" src={cc_chip} alt="cc-chip" />
        <img className="h-[30px]" src={cc_contactless} alt="cc-chip" />
      </div>
      <div className="flex flex-row justify-between items-center h-[42px]">
        <div className="flex flex-col justify-center">
          <Typography variant="span" className="tracking-widest font-semibold">**** **** **** 1234</Typography>
          <Typography variant="span" className="tracking-wider font-semibold uppercase">Lucas Ceratto</Typography>
        </div>
        <img className="h-[38px]" src={getBrand()} alt="cc-chip" />
      </div>
    </div>
  );
};