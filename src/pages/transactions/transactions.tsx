import React, { useEffect } from "react";
import { PageContainer } from "@/components/containers";
import { TransactionsTable } from "./components";
import { transactions } from "@/services/mocks";
import { Typography, Button } from "@/components/ui";
import { useAppStore } from "@/zustand";
import { routes } from "@/utils/constants";
import { ChevronLeft, ChevronRight } from "@nine-thirty-five/material-symbols-react/outlined";
import { NewTransactionDialog } from "./components/dialogs/NewTransactionDialog";
import { TransactionForm } from "./components/forms/NewTransactionForm";

export const Transactions = () => {
  const setBreadcrumbs = useAppStore((state) => state.setBreadcrumbs);

  useEffect(() => {
    setBreadcrumbs([
      { to: routes.home, label: "Dashboard" },
      { label: "Transacciones" },
    ]);
  }, [setBreadcrumbs]);

  return (
    <PageContainer title="Transacciones">
      <div className="flex flex-row mb-3 items-center justify-between">
        <div className="flex flex-row items-center">
          <Button className="mr-2 rounded-full w-7 h-7" variant="ghost" size="icon">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Typography className="m-0">Marzo 2024</Typography>
          <Button className="ml-2 rounded-full w-7 h-7" variant="ghost" size="icon">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex flex-row items-center">
          <NewTransactionDialog trigger={<Button>Nuevo</Button>}>
            <TransactionForm />
          </NewTransactionDialog>
        </div>
      </div>
      <TransactionsTable data={transactions} />
      <Typography>
        Notas dev:
        <br />
        Para manejar las transacciones que se repiten, en lugar de usar servicios, podria crear una tabla con la
        info de los gastos recurrentes configurados y al cargar la lista mensual comprobar si es necesario incluir estos gastos en la vista
      </Typography>
    </PageContainer>
  );
};