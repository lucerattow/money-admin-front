import { RecentPayment } from "@/components/pages";
import dayjs from "dayjs";

export const recentPayments: RecentPayment[] = [
  { id: "1", date: dayjs(new Date(2022, 11, 1)), description: "Pago minimo", currency: "ARS", amount: 100000 },
  { id: "2", date: dayjs(new Date(2022, 11, 3)), description: "Pago minimo", currency: "ARS", amount: 70000 },
  { id: "3", date: dayjs(new Date(2022, 11, 5)), description: "Pago minimo", currency: "ARS", amount: 10000 },
];