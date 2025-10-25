export interface KPIData {
  id: string;
  label: string;
  value: number;
  change: number;
  trend: 'up' | 'down';
  format: 'currency' | 'number' | 'percentage';
}

export interface TimeSeriesData {
  date: string;
  revenue: number;
  orders: number;
}

export interface CategoryData {
  category: string;
  value: number;
  percentage: number;
  [key: string]: string | number;
}

export interface RegionalData {
  region: string;
  revenue: number;
  orders: number;
  growth: number;
}

export interface ProductData {
  product: string;
  revenue: number;
  quantity: number;
}

export interface ProfitData {
  date: string;
  margin: number;
}

