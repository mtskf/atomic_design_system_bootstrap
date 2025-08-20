export type SeriesType = "net" | "benchmark" | "cpi";

export interface SeriesPoint {
  date: string; // ISO date
  value: number; // percent (e.g., 0.045 for 4.5%) or price depending on context
}

export interface PerformanceSeries {
  label: string;
  type: SeriesType;
  points: SeriesPoint[];
}

export interface PeriodReturns {
  asOfDate: string; // ISO date
  returns: Partial<{
    "1m": number;
    "3m": number;
    "6m": number;
    "1y": number;
    "3y": number;
    "5y": number;
    "10y": number;
    since: number;
  }>;
  basis?: "net" | "gross";
}

export interface UnitPrice {
  price: number; // AUD
  change: number; // absolute change
  changePct: number; // e.g., 0.003 for 0.3%
  asOfDate: string; // ISO date
  note?: string;
}

export interface AllocationSlice {
  label: string;
  weight: number; // 0..1
}

export interface AllocationRangeRow {
  label: string;
  min: number; // 0..1
  strategic: number; // 0..1
  max: number; // 0..1
  current?: number; // 0..1
}

export interface AllocationData {
  current: AllocationSlice[];
  ranges: AllocationRangeRow[];
}

export interface FeesData {
  adminPct: number; // 0..1
  iCRPct: number; // 0..1
  transactionPct?: number; // 0..1
  buySpreadPct?: number; // 0..1
  sellSpreadPct?: number; // 0..1
  exampleOn50k?: number; // AUD
  notes?: string[];
}

export type InvestmentDocumentType = "PDS" | "TMD" | "Form" | "Other";

export interface DocumentLink {
  label: string;
  href: string;
  type: InvestmentDocumentType;
  size?: string; // e.g., "2.3 MB"
  updatedAt?: string; // ISO date
  lang?: string; // e.g., "en"
}

export interface InvestmentOptionMeta {
  id: string;
  name: string;
  category: string; // e.g., Balanced
  srmLevel: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  horizonYears?: number; // e.g., 10
  objectiveText?: string; // free text
  targetCpiPlusPct?: number; // e.g., 0.03 for CPI+3%
  updatedAt?: string; // ISO date
}
