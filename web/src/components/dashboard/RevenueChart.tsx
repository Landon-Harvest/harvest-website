"use client";
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { TimeSeriesData } from "@/types/dashboard";

export function RevenueChart({ data }: { data: TimeSeriesData[] }) {
  return (
    <Card className="p-6 bg-slate-800/50 backdrop-blur border-slate-700">
      <h3 className="mb-4 text-lg font-semibold text-[#14B8A6]">Revenue Trend</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis 
            dataKey="date" 
            tick={{ fill: '#94a3b8', fontSize: 12 }}
          />
          <YAxis 
            tick={{ fill: '#94a3b8', fontSize: 12 }}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip 
            formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
            contentStyle={{
              backgroundColor: '#1e293b',
              border: '1px solid #334155',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.5)',
              color: '#fff'
            }}
          />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="revenue" 
            stroke="#14B8A6" 
            strokeWidth={3}
            name="Revenue"
            dot={{ fill: '#14B8A6', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}

