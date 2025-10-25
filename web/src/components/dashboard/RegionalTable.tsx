"use client";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { RegionalData } from "@/types/dashboard";

export function RegionalTable({ data }: { data: RegionalData[] }) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const getGrowthBadge = (growth: number) => {
    if (growth >= 15) return 'default';
    if (growth >= 10) return 'secondary';
    return 'outline';
  };

  return (
    <Card className="p-6 bg-slate-800/50 backdrop-blur border-slate-700">
      <h3 className="mb-4 text-lg font-semibold text-[#14B8A6]">Regional Performance</h3>
      <div className="rounded-md border border-slate-700">
        <Table>
          <TableHeader>
            <TableRow className="border-slate-700 hover:bg-slate-700/50">
              <TableHead className="text-gray-400">Region</TableHead>
              <TableHead className="text-right text-gray-400">Revenue</TableHead>
              <TableHead className="text-right text-gray-400">Orders</TableHead>
              <TableHead className="text-right text-gray-400">Growth</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((region) => (
              <TableRow key={region.region} className="border-slate-700 hover:bg-slate-700/50">
                <TableCell className="font-medium text-white">{region.region}</TableCell>
                <TableCell className="text-right text-gray-300">{formatCurrency(region.revenue)}</TableCell>
                <TableCell className="text-right text-gray-300">{region.orders.toLocaleString()}</TableCell>
                <TableCell className="text-right">
                  <Badge variant={getGrowthBadge(region.growth)}>
                    +{region.growth.toFixed(1)}%
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
