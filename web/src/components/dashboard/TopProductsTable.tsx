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
import { ProductData } from "@/types/dashboard";

export function TopProductsTable({ data }: { data: ProductData[] }) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <Card className="p-6 bg-slate-800/50 backdrop-blur border-slate-700">
      <h3 className="mb-4 text-lg font-semibold text-[#14B8A6]">Top Products by Revenue</h3>
      <div className="rounded-md border border-slate-700">
        <Table>
          <TableHeader>
            <TableRow className="border-slate-700 hover:bg-slate-700/50">
              <TableHead className="text-gray-400">Product</TableHead>
              <TableHead className="text-right text-gray-400">Revenue</TableHead>
              <TableHead className="text-right text-gray-400">Units Sold</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((product, index) => (
              <TableRow key={index} className="border-slate-700 hover:bg-slate-700/50">
                <TableCell className="font-medium text-white max-w-xs truncate">{product.product}</TableCell>
                <TableCell className="text-right text-gray-300">{formatCurrency(product.revenue)}</TableCell>
                <TableCell className="text-right text-gray-300">{product.quantity.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
