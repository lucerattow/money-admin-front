import { DashboardItem } from "@/components/pages";
import dayjs from "dayjs";

export const dashboardData: DashboardItem[] = [
  {
    id: "1",
    period: dayjs(new Date(2022, 11, 1)),
    ars: 100000,
    usd: 200,
    assets: 1500000,
    passives: -1300000,
    balance: 200000,
  },
  {
    id: "2",
    period: dayjs(new Date(2022, 10, 1)),
    ars: 100000,
    usd: 200,
    assets: 1500000,
    passives: -1300000,
    balance: 200000,
  },
  {
    id: "3",
    period: dayjs(new Date(2022, 9, 1)),
    ars: 100000,
    usd: 200,
    assets: 1500000,
    passives: -1300000,
    balance: 200000,
  },
];