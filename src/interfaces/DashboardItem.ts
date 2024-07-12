import { Dayjs } from "dayjs";

export type DashboardItem = {
  id: string;
  period: Dayjs;
  ars: number;
  usd: number;
  assets: number;
  passives: number;
  balance: number;
};