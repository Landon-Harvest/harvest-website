"use client";
import { Card } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { TimeSeriesData } from "@/types/dashboard";

export function OrdersChart({ data }: { data: TimeSeriesData[] }) {
  return (
    <Card className="p-6 bg-slate-800/50 backdrop-blur border-slate-700">
      <h3 className="mb-4 text-lg font-semibold text-[#14B8A6]">Order Volume</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.1}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis 
            dataKey="date" 
            tick={{ fill: '#94a3b8', fontSize: 12 }}
          />
          <YAxis 
            tick={{ fill: '#94a3b8', fontSize: 12 }}
            tickFormatter={(value) => value.toLocaleString()}
          />
          <Tooltip 
            formatter={(value: number) => [value.toLocaleString(), 'Orders']}
            contentStyle={{
              backgroundColor: '#1e293b',
              border: '1px solid #334155',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.5)',
              color: '#fff'
            }}
          />
          <Legend />
          <Area 
            type="monotone" 
            dataKey="orders" 
            stroke="#06B6D4" 
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorOrders)"
            name="Orders"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
}
