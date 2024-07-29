import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button"

 

export interface IStrategies {
  strategyId: string;
  name: string;
  return: string;
  cagr: string;
  sharpe: string;
  created_date: string;
}

export interface IDetailedStrategy {
  
}
