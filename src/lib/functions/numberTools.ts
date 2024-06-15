export const formatDecimal = (value: number): string => {
  const formatter = new Intl.NumberFormat(navigator.language, {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return formatter.format(value);
};