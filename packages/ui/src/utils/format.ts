export const formatCurrencyAUD = (value: number, options: Intl.NumberFormatOptions = {}): string => {
  return new Intl.NumberFormat("en-AU", { style: "currency", currency: "AUD", maximumFractionDigits: 2, ...options }).format(value);
};

export const formatPercent = (value: number, options: Intl.NumberFormatOptions = {}): string => {
  return new Intl.NumberFormat("en-AU", { style: "percent", maximumFractionDigits: 2, ...options }).format(value);
};

export const formatDate = (iso: string): string => {
  try {
    const d = new Date(iso);
    return new Intl.DateTimeFormat("en-AU", { year: "numeric", month: "short", day: "2-digit" }).format(d);
  } catch {
    return iso;
  }
};

export const clamp01 = (n: number): number => Math.max(0, Math.min(1, n));


