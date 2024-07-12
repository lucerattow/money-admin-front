import { Dayjs } from "dayjs";

export const formatDateFullMonth = (value: Dayjs): string =>
  value.format("MMMM");

export const formatDate = (value: Dayjs): string =>
  value.format("YYYY-MM-DD");