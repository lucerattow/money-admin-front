import React from "react";
import { Dayjs } from "dayjs";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui";
import { formatDate, formatDecimal } from "@/lib/functions";

const cols: ColumnDef<CreditCardSummary>[] = [
  {
    accessorKey: "date",
    header: "Fecha",
    cell: ({ row }) =>
      <div className="text-left">
        {formatDate(row.getValue("date"))}
      </div>,
    size: 100,
  },
  {
    accessorKey: "description",
    header: "Descripcion",
  },
  {
    accessorKey: "installmet",
    header: () => <div className="text-center">Cuotas</div>,
    cell: ({ row }) => <div className="flex flex-col justify-center items-center">{row.getValue("installmet")}</div>,
    size: 80,
  },
  {
    accessorKey: "amountArs",
    header: () => <div className="text-center">ARS</div>,
    cell: ({ row }) =>
      <div className="text-right">
        $ {formatDecimal(row.getValue("amountArs"))}
      </div>,
    size: 150,
  },
  {
    accessorKey: "amountUsd",
    header: () => <div className="text-center">USD</div>,
    cell: ({ row }) =>
      <div className="text-right">
        $ {formatDecimal(row.getValue("amountUsd"))}
      </div>,
    size: 150,
  },
];

export type CreditCardSummary = {
  id: string;
  date: Dayjs;
  description: string;
  installmet: string;
  amountArs: number;
  amountUsd: number;
};

interface CreditCardSummaryTableProps {
  data?: CreditCardSummary[];
}

export const CreditCardSummaryTable = ({ data = [] }: CreditCardSummaryTableProps) => {
  return (
    <DataTable
      columns={cols}
      data={data}
      noDataText="No hay transacciones."
    />
  );
};