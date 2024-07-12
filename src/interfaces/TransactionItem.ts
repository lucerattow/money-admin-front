import { Dayjs } from "dayjs";

export type Transaction = {
  id: string;
  date: Dayjs;
  entity: string;
  description: string;
  type: string;
  currency: string;
  amount: number;
  active: boolean;
  payed: boolean;
};
