import { PageContainer } from "@/components/containers";
import { CardSummary } from "@/components/shared";
import { CreditCard, CreditCardSummaryTable, RecentPaymentsTable } from "./components";
import { Button, Tree, TreeDataItem, Typography } from "@/components/ui";
import { creditCardSummary, recentPayments } from "@/services/mocks";
import { routes } from "@/utils/constants";
import { useAppStore } from "@/zustand";
import { AddCircle, Delete, Edit, FileOpen, Folder, UploadFile } from "@nine-thirty-five/material-symbols-react/outlined";
import { useEffect } from "react";

const ActionButtons = () => {
  return (
    <div className="flex flex-row opacity-0 gap-2 group-hover:opacity-20 hover:!opacity-100 transition-opacity duration-150">
      <Button size="iconSmall" variant="ghost" onClick={() => console.log("editar")}>
        <Edit />
      </Button>
      <Button size="iconSmall" variant="ghost" onClick={() => console.log("eliminar")}>
        <Delete className="text-primary" />
      </Button>
    </div>
  );
};

const summaries: TreeDataItem[] = [
  {
    id: "1", name: "Año 2024", actions: <ActionButtons />, children: [
      { id: "2", name: "Resumen Diciembre", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Noviembre", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Octubre", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Septiembre", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Agosto", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Julio", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Junio", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Mayo", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Abril", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Marzo", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Febrero", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Enero", actions: <ActionButtons /> },
    ]
  },
  {
    id: "1", name: "Año 2023", actions: <ActionButtons />, children: [
      { id: "2", name: "Resumen Diciembre", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Noviembre", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Octubre", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Septiembre", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Agosto", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Julio", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Junio", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Mayo", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Abril", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Marzo", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Febrero", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Enero", actions: <ActionButtons /> },
    ]
  },
  {
    id: "1", name: "Año 2022", actions: <ActionButtons />, children: [
      { id: "2", name: "Resumen Diciembre", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Noviembre", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Octubre", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Septiembre", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Agosto", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Julio", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Junio", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Mayo", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Abril", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Marzo", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Febrero", actions: <ActionButtons /> },
      { id: "2", name: "Resumen Enero", actions: <ActionButtons /> },
    ]
  },
];

export const CreditCardDetails = () => {
  const setBreadcrumbs = useAppStore((state) => state.setBreadcrumbs);

  useEffect(() => {
    setBreadcrumbs([
      { to: routes.home, label: "Dashboard" },
      { to: routes.creditCards, label: "Tarjetas de credito" },
      { label: "Detalles de tarjeta" },
    ]);
  }, [setBreadcrumbs]);

  return (
    <PageContainer title="Detalles de tarjeta" backRoute={routes.creditCards}>
      <div className="grid grid-cols-12 grid-flow-col gap-3">
        <div className="flex flex-col col-span-4">
          <CreditCard className="mb-4" />
          <div className="flex flex-row mb-4">
            <Button className="w-1/2 rounded-r-none">
              <UploadFile className="mr-2" />
              Importar
            </Button>
            <Button className="w-1/2 rounded-l-none">
              <AddCircle className="mr-2" />
              Crear
            </Button>
          </div>
          <Tree
            data={summaries}
            className="max-h-full"
            folderIcon={<Folder />}
            itemIcon={<FileOpen />}
          />
        </div>
        <div className="col-span-8">
          <CardSummary className="mb-3" />
          <Typography className="mb-1" >Pagos recientes</Typography>
          <RecentPaymentsTable data={recentPayments} />
          <Typography className="mb-1" >Detalles del resumen</Typography>
          <CreditCardSummaryTable data={creditCardSummary} />
        </div>
      </div>
    </PageContainer>
  );
};