import { Dayjs } from "dayjs";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable, Checkbox } from "@/components/ui";
import { formatDate, formatDecimal } from "@/utils/functions";
import { Transaction } from "@/interfaces";

const cols: ColumnDef<Transaction>[] = [
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
    accessorKey: "entity",
    header: "Entidad",
    size: 150,
  },
  {
    accessorKey: "description",
    header: "Descripcion",
  },
  {
    accessorKey: "type",
    header: "",
    cell: ({ row }) => <div className="flex flex-col justify-center items-center">{row.getValue("type")}</div>,
    size: 70,
  },
  {
    accessorKey: "currency",
    header: () => <div className="text-center">Moneda</div>,
    cell: ({ row }) => <div className="flex flex-col justify-center items-center">{row.getValue("currency")}</div>,
    size: 80,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Monto</div>,
    cell: ({ row }) =>
      <div className="text-right">
        $ {formatDecimal(row.getValue("amount"))}
      </div>,
    size: 150,
  },
  {
    accessorKey: "active",
    header: () => <div className="text-center">Activo</div>,
    cell: ({ row }) => (
      <div className="flex flex-col justify-center items-center">
        <Checkbox
          defaultChecked={row.getValue("active")}
        />
      </div>
    ),
    size: 80,
  },
  {
    accessorKey: "payed",
    header: () => <div className="text-center">Pagado</div>,
    cell: ({ row }) => (
      <div className="flex flex-col justify-center items-center">
        <Checkbox
          defaultChecked={row.getValue("payed")}
        />
      </div>
    ),
    size: 80,
  },
];

interface TransactionsTableProps {
  data?: Transaction[];
}

export const TransactionsTable = ({ data = [] }: TransactionsTableProps) => {
  return (
    <DataTable
      columns={cols}
      data={data}
      noDataText="No hay transacciones."
    />
  );
};