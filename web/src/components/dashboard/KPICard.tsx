"use client";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { KPIData } from "@/types/dashboard";

export function KPICard({ data }: { data: KPIData }) {
  const formatValue = (value: number, format: KPIData['format']) => {
    switch (format) {
      case 'currency':
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).format(Math.round(value));
      case 'percentage':
        return `${Math.round(value)}%`;
      default:
        return new Intl.NumberFormat('en-US', {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }).format(Math.round(value));
    }
  };

  return (
    <Card className="p-6 bg-slate-800/50 backdrop-blur border-slate-700 hover:shadow-lg hover:shadow-[#14B8A6]/20 transition-all">
      <div className="flex flex-col gap-2">
        <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">{data.label}</p>
        <p className="text-3xl font-bold text-white tabular-nums">{formatValue(data.value, data.format)}</p>
        <div className="flex items-center gap-1.5 text-sm">
          {data.trend === 'up' ? (
            <TrendingUp className="w-4 h-4 text-[#14B8A6] flex-shrink-0" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-500 flex-shrink-0" />
          )}
          <span className={data.trend === 'up' ? 'text-[#14B8A6] font-semibold' : 'text-red-500 font-semibold'}>
            {Math.round(Math.abs(data.change))}%
          </span>
          <span className="text-gray-500">vs last period</span>
        </div>
      </div>
    </Card>
  );
}

