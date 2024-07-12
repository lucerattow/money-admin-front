import React from "react";
import { Dayjs } from "dayjs";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui";
import { formatDate, formatDecimal } from "@/utils/functions";
import { RecentPayment } from "@/interfaces";

const cols: ColumnDef<RecentPayment>[] = [
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
    accessorKey: "currency",
    header: () => <div className="text-center">Moneda</div>,
    cell: ({ row }) => <div className="flex flex-col justify-center items-center">{row.getValue("currency")}</div>,
    size: 80,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-center">Monto</div>,
    cell: ({ row }) =>
      <div className="text-right">
        $ {formatDecimal(row.getValue("amount"))}
      </div>,
    size: 150,
  },
];

export interface RecentPaymentsTableProps {
  data?: RecentPayment[];
}

export const RecentPaymentsTable = ({ data = [] }: RecentPaymentsTableProps) => {
  return (
    <DataTable
      columns={cols}
      data={data}
      noDataText="No hay transacciones."
    />
  );
};