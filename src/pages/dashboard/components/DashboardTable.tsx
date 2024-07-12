
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/ui";
import { formatDecimal, formatDateFullMonth } from "@/utils/functions";
import { DashboardItem } from "@/interfaces";

const cols: ColumnDef<DashboardItem>[] = [
  {
    header: "Resumen",
    columns: [
      {
        accessorKey: "period",
        header: "Mes",
        cell: ({ row }) =>
          <div className="text-left">
            {formatDateFullMonth(row.getValue("period"))}
          </div>,
        size: 150,
      },
    ]
  },
  {
    id: "gap-1",
    header: ""
  },
  {
    id: "gp-salary",
    header: () => <div className="text-center">Sueldo</div>,
    columns: [
      {
        accessorKey: "ars",
        header: () => <div className="text-center">Pesos</div>,
        cell: ({ row }) =>
          <div className="text-right">
            $ {formatDecimal(row.getValue("ars"))}
          </div>,
        size: 120,
      },
      {
        accessorKey: "usd",
        header: () => <div className="text-center">USD</div>,
        cell: ({ row }) =>
          <div className="text-right">
            $ {formatDecimal(row.getValue("usd"))}
          </div>,
        size: 120,
      },
    ]
  },
  {
    id: "gap-2",
    header: ""
  },
  {
    id: "gp-balance",
    header: () => <div className="text-center">Analisis Financiero</div>,
    columns: [
      {
        accessorKey: "assets",
        header: () => <div className="text-center">Activos</div>,
        cell: ({ row }) =>
          <div className="text-right">
            $ {formatDecimal(row.getValue("assets"))}
          </div>,
        size: 150,
      },
      {
        accessorKey: "passives",
        header: () => <div className="text-center">Pasivos</div>,
        cell: ({ row }) =>
          <div className="text-right">
            $ {formatDecimal(row.getValue("passives"))}
          </div>,
        size: 150,
      },
      {
        accessorKey: "balance",
        header: () => <div className="text-center">Balance</div>,
        cell: ({ row }) =>
          <div className="text-right">
            $ {formatDecimal(row.getValue("balance"))}
          </div>,
        size: 150,
      },
    ]
  },
];

interface DashboardTableProps {
  data?: DashboardItem[];
}

export const DashboardTable = ({ data = [] }: DashboardTableProps) => {
  return (
    <DataTable
      columns={cols}
      data={data}
      noDataText="No hay datos del dashboard."
    />
  );
};