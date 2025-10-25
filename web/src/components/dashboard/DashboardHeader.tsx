"use client";
import { Button } from "@/components/ui/button";
import { Calendar, Download, Filter } from "lucide-react";

interface DashboardHeaderProps {
  onExport?: () => void;
  onFilter?: () => void;
  dateRangeLabel?: string;
}

export function DashboardHeader({ onExport, onFilter, dateRangeLabel = 'All time' }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-sora)" }}>
          Analytics Dashboard
        </h2>
        <p className="text-gray-400 text-sm">
          Monitor your key performance indicators and business metrics
        </p>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <Button 
          variant="outline" 
          size="default" 
          className="gap-2 bg-slate-700/50 border-slate-600 text-gray-300 hover:bg-slate-600 hover:text-white"
          onClick={onFilter}
        >
          <Calendar className="w-4 h-4" />
          <span>{dateRangeLabel}</span>
        </Button>
        
        <Button 
          variant="outline" 
          size="default" 
          className="gap-2 bg-slate-700/50 border-slate-600 text-gray-300 hover:bg-slate-600 hover:text-white"
          onClick={onFilter}
        >
          <Filter className="w-4 h-4" />
          <span>Filter</span>
        </Button>
        
        <Button 
          size="default" 
          className="gap-2 bg-[#14B8A6] hover:bg-[#14B8A6]/90"
          onClick={onExport}
        >
          <Download className="w-4 h-4" />
          <span>Export</span>
        </Button>
      </div>
    </div>
  );
}
