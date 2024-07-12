import { useEffect, useState } from "react";
import {
  ColumnDef,
  GroupColumnDef,
  GroupingState,
  flexRender,
  getCoreRowModel,
  getGroupedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/utils/utils";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  noDataText?: string;
}

const isGroupColumnDef = <TData, TValue>(column: ColumnDef<TData, TValue>): column is GroupColumnDef<TData, TValue> => {
  return (column as GroupColumnDef<TData, TValue>).columns !== undefined && 'header' in column;
};

const columnsCount = <TData, TValue>(column: ColumnDef<TData, TValue>): number => {
  if (isGroupColumnDef(column) && column.columns) {
    let count = 0;
    column.columns.map((col) => {
      count += columnsCount(col);
    });
    return count;
  } else {
    return 1;
  }
};

const totalColumns = <TData, TValue>(columns: ColumnDef<TData, TValue>[]): number => {
  let count = 0;
  columns.map((col) => {
    count += columnsCount(col);
  });
  return count;
};

export function DataTable<TData, TValue>({
  columns,
  data,
  noDataText = "No results."
}: DataTableProps<TData, TValue>) {
  const [grouping, setGrouping] = useState<GroupingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      grouping,
    },
    defaultColumn: {
      size: 5000,
    },
    onGroupingChange: setGrouping,
    getGroupedRowModel: getGroupedRowModel(),
    getCoreRowModel: getCoreRowModel(),
  });

  const columnsCount = totalColumns(columns);

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const size = header.getSize();
                return (
                  <TableHead
                    key={header.id}
                    colSpan={header.colSpan}
                    style={{
                      width: size !== 5000 ? size : "auto"
                    }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => {
                  const size = cell.column.getSize();
                  return (
                    <TableCell
                      key={cell.id}
                      style={{
                        width: size !== 5000 ? size : "auto"
                      }}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columnsCount} className="h-24 text-center">
                {noDataText}
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
