import React, { useEffect } from "react";
import { PageContainer } from "@/components/containers";
import { CreditCardSmall, CardSummary } from "@/components/pages";
import { Separator } from "@/components/ui";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { routes } from "@/lib/constants";
import { useAppStore } from "@/lib/context";

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
    navigate(routes.creditCardsSummary);
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