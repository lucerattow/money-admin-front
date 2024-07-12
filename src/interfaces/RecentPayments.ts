import { Dayjs } from "dayjs";

export type RecentPayment = {
  id: string;
  date: Dayjs;
  description: string;
  currency: string;
  amount: number;
};
