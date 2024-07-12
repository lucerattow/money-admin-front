import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui";
import { formatDate, formatDecimal } from "@/utils/functions";
import { CreditCardSummaryItem } from "@/interfaces";

const cols: ColumnDef<CreditCardSummaryItem>[] = [
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

interface CreditCardSummaryTableProps {
  data?: CreditCardSummaryItem[];
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