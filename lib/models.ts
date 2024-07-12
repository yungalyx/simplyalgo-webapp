import { ColumnDef } from "@tanstack/react-table";

export interface IStrategies {
  name: string;
  return: string;
  cagr: string;
  sharpe: string;
  created_date: string;

}

export const strategyColumns: ColumnDef<IStrategies>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "return",
    header: "Return",
  },
  {
    accessorKey: "cagr",
    header: "CAGR",
  },
  {
    accessorKey: "sharpe",
    header: "Sharpe",
  },
  {
    accessorKey: "created_date",
    header: "Created Date",
  },
]