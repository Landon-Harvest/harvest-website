"use client";
import { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js';
import InsightsHeader from "@/components/InsightsHeader";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { KPICard } from "@/components/dashboard/KPICard";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { OrdersChart } from "@/components/dashboard/OrdersChart";
import { CategoryChart } from "@/components/dashboard/CategoryChart";
import { RegionalTable } from "@/components/dashboard/RegionalTable";
import { ProfitMarginChart } from "@/components/dashboard/ProfitMarginChart";
import { TopProductsTable } from "@/components/dashboard/TopProductsTable";
import { KPIData, TimeSeriesData, CategoryData, RegionalData, ProductData, ProfitData } from "@/types/dashboard";

// Initialize Supabase client with environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function InsightsPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [rawData, setRawData] = useState<Record<string, unknown>[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);
  
  const [kpis, setKpis] = useState<KPIData[]>([]);
  const [timeSeries, setTimeSeries] = useState<TimeSeriesData[]>([]);
  const [categories, setCategories] = useState<CategoryData[]>([]);
  const [regions, setRegions] = useState<RegionalData[]>([]);
  const [products, setProducts] = useState<ProductData[]>([]);
  const [profitMargins, setProfitMargins] = useState<ProfitData[]>([]);
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);
  const [availableRegions, setAvailableRegions] = useState<string[]>([]);
  const [availableYears, setAvailableYears] = useState<string[]>([]);

  // Fetch raw data on mount
  useEffect(() => {
    async function fetchData() {
      try {
        console.log('🔍 Fetching data from Supabase...');
        
        const { data, error, count } = await supabase
          .from('Order_Table')
          .select('*', { count: 'exact' })
          .limit(10000);

        console.log('Raw Supabase response:', { data: data?.length, error, count });

        if (error) {
          console.error('❌ Supabase error:', error);
          throw new Error(`Supabase error: ${error.message}`);
        }

        if (!data) {
          console.error('❌ Data is null or undefined');
          throw new Error('No data returned from Supabase');
        }

        if (data.length === 0) {
          console.error('❌ Data array is empty');
          throw new Error('Order_Table is empty - no rows found');
        }

        console.log('✅ Data received:', data.length, 'rows', 'Total:', count);
        console.log('Sample row:', data[0]);

        // Store raw data
        setRawData(data);
        
        // Extract unique categories, regions, and years for filters
        const cats = new Set<string>();
        const regs = new Set<string>();
        const years = new Set<string>();
        
        data.forEach((row: Record<string, unknown>) => {
          const cat = (row.Category as string) || 'Unknown';
          const reg = (row.Region as string) || 'Unknown';
          cats.add(cat);
          regs.add(reg);
          
          // Extract year from order date
          const orderDate = row['Order Date'] as string;
          if (orderDate) {
            try {
              const [, , year] = orderDate.split('/');
              const fullYear = year.length === 2 ? `20${year}` : year;
              years.add(fullYear);
            } catch {
              // Skip invalid dates
            }
          }
        });
        
        setAvailableCategories(['all', ...Array.from(cats).sort()]);
        setAvailableRegions(['all', ...Array.from(regs).sort()]);
        setAvailableYears(['all', ...Array.from(years).sort()]);
        
        setLoading(false);
      } catch (error) {
        console.error('💥 Error:', error);
        setError(error instanceof Error ? error.message : 'Unknown error');
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // Process data whenever filters change
  useEffect(() => {
    if (rawData.length === 0) return;

    console.log('🔄 Processing data with filters:', { selectedYear, selectedCategory, selectedRegion });

    // Set fixed "today" date for demo (latest date in dataset + buffer)
    const FIXED_TODAY = new Date('2024-12-31');
    const DAYS_LOOKBACK = 30;
    const cutoffDate = new Date(FIXED_TODAY);
    cutoffDate.setDate(cutoffDate.getDate() - DAYS_LOOKBACK);

    // Helper function to parse date
    const parseOrderDate = (dateStr: string): Date | null => {
      try {
        const [month, day, year] = dateStr.split('/');
        const fullYear = year.length === 2 ? `20${year}` : year;
        return new Date(`${fullYear}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`);
      } catch {
        return null;
      }
    };

    // Filter data for KPIs (NO year filter, only category/region)
    const kpiFilteredData = rawData.filter((row: Record<string, unknown>) => {
      // Apply category filter
      if (selectedCategory !== 'all' && row.Category !== selectedCategory) {
        return false;
      }

      // Apply region filter
      if (selectedRegion !== 'all' && row.Region !== selectedRegion) {
        return false;
      }

      return true;
    });

    // Filter data for charts/tables (includes year filter)
    const filteredData = rawData.filter((row: Record<string, unknown>) => {
      const orderDate = row['Order Date'] as string;
      if (!orderDate) return false;

      // Apply year filter
      if (selectedYear !== 'all') {
        try {
          const [, , year] = orderDate.split('/');
          const fullYear = year.length === 2 ? `20${year}` : year;
          
          if (fullYear !== selectedYear) return false;
        } catch {
          return false;
        }
      }

      // Apply category filter
      if (selectedCategory !== 'all' && row.Category !== selectedCategory) {
        return false;
      }

      // Apply region filter
      if (selectedRegion !== 'all' && row.Region !== selectedRegion) {
        return false;
      }

      return true;
    });

    console.log('✅ Filtered data:', filteredData.length, 'rows');

    if (filteredData.length === 0) {
      // Reset to show empty state
      setKpis([
        { id: '1', label: 'Total Revenue', value: 0, change: 0, trend: 'up', format: 'currency' },
        { id: '2', label: 'Total Orders', value: 0, change: 0, trend: 'up', format: 'number' },
        { id: '3', label: 'Total Profit', value: 0, change: 0, trend: 'up', format: 'currency' },
        { id: '4', label: 'Avg Order Value', value: 0, change: 0, trend: 'up', format: 'currency' },
      ]);
      setTimeSeries([]);
      setCategories([]);
      setRegions([]);
      setProducts([]);
      setProfitMargins([]);
      return;
    }

    // Split KPI data into current period (last 30 days) and previous period (30 days before that)
    const currentPeriodData = kpiFilteredData.filter((row: Record<string, unknown>) => {
      const date = parseOrderDate(row['Order Date'] as string);
      return date && date >= cutoffDate && date <= FIXED_TODAY;
    });

    const previousPeriodStart = new Date(cutoffDate);
    previousPeriodStart.setDate(previousPeriodStart.getDate() - DAYS_LOOKBACK);
    const previousPeriodData = kpiFilteredData.filter((row: Record<string, unknown>) => {
      const date = parseOrderDate(row['Order Date'] as string);
      return date && date >= previousPeriodStart && date < cutoffDate;
    });

    // Calculate current period metrics
    const currentRevenue = currentPeriodData.reduce((sum: number, row: Record<string, unknown>) => sum + (Number(row.Sales) || 0), 0);
    const currentProfit = currentPeriodData.reduce((sum: number, row: Record<string, unknown>) => sum + (Number(row.Profit) || 0), 0);
    const currentOrders = currentPeriodData.length;
    const currentAvgOrderValue = currentOrders > 0 ? currentRevenue / currentOrders : 0;

    // Calculate previous period metrics
    const previousRevenue = previousPeriodData.reduce((sum: number, row: Record<string, unknown>) => sum + (Number(row.Sales) || 0), 0);
    const previousProfit = previousPeriodData.reduce((sum: number, row: Record<string, unknown>) => sum + (Number(row.Profit) || 0), 0);
    const previousOrders = previousPeriodData.length;
    const previousAvgOrderValue = previousOrders > 0 ? previousRevenue / previousOrders : 0;

    // Calculate percentage changes
    const revenueChange = previousRevenue > 0 ? ((currentRevenue - previousRevenue) / previousRevenue) * 100 : 0;
    const ordersChange = previousOrders > 0 ? ((currentOrders - previousOrders) / previousOrders) * 100 : 0;
    const profitChange = previousProfit > 0 ? ((currentProfit - previousProfit) / previousProfit) * 100 : 0;
    const aovChange = previousAvgOrderValue > 0 ? ((currentAvgOrderValue - previousAvgOrderValue) / previousAvgOrderValue) * 100 : 0;

    setKpis([
      { 
        id: '1', 
        label: 'Total Revenue (Last 30 Days)', 
        value: currentRevenue, 
        change: Math.abs(revenueChange), 
        trend: revenueChange >= 0 ? 'up' : 'down', 
        format: 'currency' 
      },
      { 
        id: '2', 
        label: 'Total Orders (Last 30 Days)', 
        value: currentOrders, 
        change: Math.abs(ordersChange), 
        trend: ordersChange >= 0 ? 'up' : 'down', 
        format: 'number' 
      },
      { 
        id: '3', 
        label: 'Total Profit (Last 30 Days)', 
        value: currentProfit, 
        change: Math.abs(profitChange), 
        trend: profitChange >= 0 ? 'up' : 'down', 
        format: 'currency' 
      },
      { 
        id: '4', 
        label: 'Avg Order Value (Last 30 Days)', 
        value: currentAvgOrderValue, 
        change: Math.abs(aovChange), 
        trend: aovChange >= 0 ? 'up' : 'down', 
        format: 'currency' 
      },
    ]);

        // Process time series (monthly aggregation)
        const monthlyData: { [key: string]: { revenue: number; profit: number; orders: number } } = {};
        
    filteredData.forEach((row: Record<string, unknown>) => {
      const orderDate = row['Order Date'] as string;
          if (!orderDate) return;
          
          try {
            const [month, , year] = orderDate.split('/');
            const fullYear = year.length === 2 ? `20${year}` : year;
            const date = `${fullYear}-${month.padStart(2, '0')}`;
            
            if (!monthlyData[date]) {
              monthlyData[date] = { revenue: 0, profit: 0, orders: 0 };
            }
            monthlyData[date].revenue += Number(row.Sales) || 0;
            monthlyData[date].profit += Number(row.Profit) || 0;
            monthlyData[date].orders += 1;
          } catch {
            console.warn('Date parse error:', orderDate);
          }
        });

        const tsData = Object.entries(monthlyData)
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([date, values]) => ({
            date,
            revenue: values.revenue,
            orders: values.orders,
          }));

        setTimeSeries(tsData);

        // Profit margins
        const profitData = Object.entries(monthlyData)
          .sort(([a], [b]) => a.localeCompare(b))
          .map(([date, values]) => ({
            date,
            margin: values.revenue > 0 ? (values.profit / values.revenue) * 100 : 0,
          }));

        setProfitMargins(profitData);

        // Category breakdown
    const categoryMap: { [key: string]: number } = {};
    filteredData.forEach((row: Record<string, unknown>) => {
      const category = (row.Category as string) || 'Unknown';
          const sales = Number(row.Sales) || 0;
          categoryMap[category] = (categoryMap[category] || 0) + sales;
        });

        const totalCategoryRevenue = Object.values(categoryMap).reduce((sum, val) => sum + val, 0);
        const catData = Object.entries(categoryMap)
          .map(([category, value]) => ({
            category,
            value,
            percentage: totalCategoryRevenue > 0 ? (value / totalCategoryRevenue) * 100 : 0,
          }))
          .sort((a, b) => b.value - a.value)
          .slice(0, 5);

        setCategories(catData);

        // Regional performance
    const regionMap: { [key: string]: { revenue: number; orders: number } } = {};
    filteredData.forEach((row: Record<string, unknown>) => {
      const region = (row.Region as string) || 'Unknown';
          const sales = Number(row.Sales) || 0;
          if (!regionMap[region]) {
            regionMap[region] = { revenue: 0, orders: 0 };
          }
          regionMap[region].revenue += sales;
          regionMap[region].orders += 1;
        });

        const regData = Object.entries(regionMap)
          .map(([region, values]) => ({
            region,
            revenue: values.revenue,
            orders: values.orders,
            growth: Math.random() * 20 + 5, // Mock growth for demo (5-25%)
          }))
          .sort((a, b) => b.revenue - a.revenue);

        setRegions(regData);

        // Top products
    const productMap: { [key: string]: { revenue: number; quantity: number } } = {};
    filteredData.forEach((row: Record<string, unknown>) => {
      const product = (row['Product Name'] as string) || 'Unknown';
          const sales = Number(row.Sales) || 0;
          const qty = Number(row.Quantity) || 0;
          if (!productMap[product]) {
            productMap[product] = { revenue: 0, quantity: 0 };
          }
          productMap[product].revenue += sales;
          productMap[product].quantity += qty;
        });

        const prodData = Object.entries(productMap)
          .map(([product, values]) => ({
            product,
            revenue: values.revenue,
            quantity: values.quantity,
          }))
          .sort((a, b) => b.revenue - a.revenue)
          .slice(0, 10);

        setProducts(prodData);

    console.log('✅ Data processing complete');
  }, [rawData, selectedYear, selectedCategory, selectedRegion]);

  const handleExport = () => {
    console.log('Exporting data...');
    const csv = generateCSV();
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dashboard-export-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  const generateCSV = () => {
    const headers = ['Date', 'Revenue', 'Orders', 'Profit Margin'];
    const rows = timeSeries.map(row => {
      const margin = profitMargins.find(p => p.date === row.date)?.margin || 0;
      return [row.date, row.revenue, row.orders, margin.toFixed(2)];
    });
    return [headers, ...rows].map(row => row.join(',')).join('\n');
  };

  const handleToggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleResetFilters = () => {
    setSelectedYear('all');
    setSelectedCategory('all');
    setSelectedRegion('all');
  };

  const getYearLabel = () => {
    return selectedYear === 'all' ? 'All Years' : selectedYear;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-400 mb-8">Loading analytics...</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-slate-800/50 backdrop-blur rounded-lg border border-slate-700 p-6 h-32 animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-4">
            <p className="text-red-400 font-semibold mb-2">❌ Error Loading Data</p>
            <p className="text-red-300 text-sm">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Figma-designed header with animations */}
      <InsightsHeader />
      
      {/* Dashboard Container */}
      <div className="px-4 sm:px-6 lg:px-8 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Dashboard Card Container - The big rounded blue/slate box */}
          <div className="bg-gradient-to-br from-slate-800/60 via-slate-700/50 to-slate-800/60 backdrop-blur-xl border-2 border-slate-600/50 rounded-[2rem] p-8 shadow-2xl">
          <DashboardHeader 
            onExport={handleExport} 
            onFilter={handleToggleFilters}
            dateRangeLabel={getYearLabel()}
          />

          {/* Filter Panel */}
          {showFilters && (
            <div className="mb-6 p-6 bg-slate-900/30 backdrop-blur border border-slate-700/50 rounded-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">Filters</h3>
              <button
                onClick={handleResetFilters}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Reset All
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Year Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Year</label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
                >
                  {availableYears.map((year) => (
                    <option key={year} value={year}>
                      {year === 'all' ? 'All Years' : year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
                >
                  {availableCategories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat === 'all' ? 'All Categories' : cat}
                    </option>
                  ))}
                </select>
              </div>

              {/* Region Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Region</label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
                >
                  {availableRegions.map((reg) => (
                    <option key={reg} value={reg}>
                      {reg === 'all' ? 'All Regions' : reg}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Active Filters Summary */}
            <div className="mt-4 flex flex-wrap gap-2">
              {selectedYear !== 'all' && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#14B8A6]/20 text-[#14B8A6] rounded-full text-sm">
                  {selectedYear}
                  <button onClick={() => setSelectedYear('all')} className="hover:text-white">×</button>
                </span>
              )}
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#14B8A6]/20 text-[#14B8A6] rounded-full text-sm">
                  {selectedCategory}
                  <button onClick={() => setSelectedCategory('all')} className="hover:text-white">×</button>
                </span>
              )}
              {selectedRegion !== 'all' && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#14B8A6]/20 text-[#14B8A6] rounded-full text-sm">
                  {selectedRegion}
                  <button onClick={() => setSelectedRegion('all')} className="hover:text-white">×</button>
                </span>
              )}
            </div>
          </div>
        )}
        
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {kpis.map((kpi) => (
            <KPICard key={kpi.id} data={kpi} />
          ))}
        </div>

        {/* Charts Row 1: Revenue & Orders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <RevenueChart data={timeSeries} />
          <OrdersChart data={timeSeries} />
        </div>

        {/* Charts Row 2: Category & Profit Margin */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <CategoryChart data={categories} />
          <ProfitMarginChart data={profitMargins} />
        </div>

        {/* Tables Row 3: Regional & Top Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <RegionalTable data={regions} />
          <TopProductsTable data={products} />
        </div>

        {/* Demo Note */}
        <div className="rounded-2xl border border-slate-700/50 p-6 bg-slate-900/30 backdrop-blur">
          <div className="text-sm text-gray-400">
            <strong className="text-[#14B8A6]">Interactive Demo Dashboard</strong> — This dashboard visualizes real data from our demo database. 
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}
