"use client";
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { CategoryData } from "@/types/dashboard";

const COLORS = ['#14B8A6', '#06B6D4', '#8B5CF6', '#F59E0B', '#10B981'];

export function CategoryChart({ data }: { data: CategoryData[] }) {
  return (
    <Card className="p-6 bg-slate-800/50 backdrop-blur border-slate-700">
      <h3 className="mb-4 text-lg font-semibold text-[#14B8A6]">Sales by Category</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis 
            dataKey="category" 
            tick={{ fill: '#94a3b8', fontSize: 11 }}
            angle={-45}
            textAnchor="end"
            height={80}
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
          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
