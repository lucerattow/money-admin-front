import { Dayjs } from "dayjs";

export type CreditCardSummaryItem = {
  id: string;
  date: Dayjs;
  description: string;
  installmet: string;
  amountArs: number;
  amountUsd: number;
};