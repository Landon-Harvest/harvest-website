"use client";
import { useState } from "react";
import { X, Download, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface DataPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Record<string, unknown>[];
  title: string;
  availableColumns: string[];
}

export function DataPreviewModal({ isOpen, onClose, data, title, availableColumns }: DataPreviewModalProps) {
  const [selectedColumns, setSelectedColumns] = useState<string[]>(availableColumns);

  if (!isOpen) return null;

  const toggleColumn = (column: string) => {
    setSelectedColumns(prev => 
      prev.includes(column) 
        ? prev.filter(c => c !== column)
        : [...prev, column]
    );
  };

  const selectAll = () => setSelectedColumns(availableColumns);
  const deselectAll = () => setSelectedColumns([]);

  const handleDownload = () => {
    if (selectedColumns.length === 0) {
      alert("Please select at least one column to export");
      return;
    }

    // Create CSV with selected columns
    const headers = selectedColumns.join(',');
    const rows = data.map(row => 
      selectedColumns.map(col => {
        const value = row[col];
        // Handle values with commas by wrapping in quotes
        if (typeof value === 'string' && value.includes(',')) {
          return `"${value}"`;
        }
        return value;
      }).join(',')
    );
    
    const csv = [headers, ...rows].join('\n');
    
    // Trigger download
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${title.toLowerCase().replace(/\s+/g, '-')}-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const formatValue = (value: unknown): string => {
    if (value === null || value === undefined) return '-';
    if (typeof value === 'number') {
      return value.toLocaleString();
    }
    return String(value);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-800 border-2 border-slate-600 rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700">
          <div>
            <h2 className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-sora)" }}>
              {title}
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              {data.length} records found
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-slate-700 rounded-lg"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Column Selection */}
        <div className="p-6 border-b border-slate-700 bg-slate-900/30">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-white">Select Columns to Export</h3>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" onClick={selectAll}>
                Select All
              </Button>
              <Button variant="ghost" size="sm" onClick={deselectAll}>
                Deselect All
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {availableColumns.map(column => (
              <button
                key={column}
                onClick={() => toggleColumn(column)}
                className={`
                  inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all
                  ${selectedColumns.includes(column)
                    ? 'bg-[#14B8A6] text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }
                `}
              >
                {selectedColumns.includes(column) && <Check className="w-3 h-3" />}
                {column}
              </button>
            ))}
          </div>
        </div>

        {/* Data Table */}
        <div className="flex-1 overflow-auto p-6">
          <div className="rounded-lg border border-slate-700 overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  {selectedColumns.map(column => (
                    <TableHead key={column} className="text-gray-300 bg-slate-900/50">
                      {column}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.slice(0, 100).map((row, idx) => (
                  <TableRow key={idx}>
                    {selectedColumns.map(column => (
                      <TableCell key={column} className="text-white">
                        {formatValue(row[column])}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {data.length > 100 && (
            <p className="text-xs text-gray-500 mt-3 text-center">
              Showing first 100 of {data.length} records. Download CSV to view all data.
            </p>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-700 flex justify-between items-center bg-slate-900/30">
          <p className="text-sm text-gray-400">
            {selectedColumns.length} of {availableColumns.length} columns selected
          </p>
          <div className="flex gap-3">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button 
              onClick={handleDownload}
              className="gap-2"
              disabled={selectedColumns.length === 0}
            >
              <Download className="w-4 h-4" />
              Download CSV ({selectedColumns.length} columns)
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

