import React, { useEffect } from "react";
import { PageContainer } from "@/components/containers";
import { CardSummary } from "@/components/shared";
import { CreditCardSmall } from "./components";
import { Separator } from "@/components/ui";
import { cn } from "@/utils/utils";
import { useNavigate } from "react-router-dom";
import { routes } from "@/utils/constants";
import { useAppStore } from "@/zustand";

export const CreditCards = () => {
  const setBreadcrumbs = useAppStore((state) => state.setBreadcrumbs);
  const navigate = useNavigate();
  const repeat = ["1", "2", "3", "4"];

  useEffect(() => {
    setBreadcrumbs([
      { to: routes.home, label: "Dashboard" },
      { label: "Tarjetas de credito" },
    ]);
  }, [setBreadcrumbs]);

  const handleCreditCardClick = (id: string) => {
    navigate(routes.creditCardsDetails);
  };

  return (
    <PageContainer className="py-1.5" title="Tarjetas de credito">
      {repeat.map((card, index) => (
        <>
          <div className={cn(
            "flex flex-row my-1.5",
          )}>
            <CreditCardSmall onClick={() => handleCreditCardClick(card)} />
            <CardSummary className="ml-3" />
          </div>
          {index !== repeat.length - 1 && <Separator />}
        </>
      ))}
    </PageContainer>
  );
};