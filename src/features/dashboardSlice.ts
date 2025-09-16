import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../app/store';

export interface KPI {
  id: string;
  title: string;
  value: number;
  trend: number;
  format: 'currency' | 'number' | 'percentage' | 'ratio';
}

const initialState = {
  kpis: [
    {
      id: 'roas',
      title: 'ROAS',
      value: 4.27,
      trend: 27.42,
      format: 'ratio' as const,
    },
    {
      id: 'spend',
      title: 'Spend',
      value: 15000,
      trend: -5.2,
      format: 'currency' as const,
    },
    {
      id: 'conversion',
      title: 'Conversion Rate',
      value: 3.8,
      trend: 12.1,
      format: 'percentage' as const,
    },
    {
      id: 'impressions',
      title: 'Impressions',
      value: 1250000,
      trend: 15.3,
      format: 'number' as const,
    },
    {
      id: 'clicks',
      title: 'Clicks',
      value: 45600,
      trend: -8.7,
      format: 'number' as const,
    },
    {
      id: 'orders',
      title: 'Orders',
      value: 1234,
      trend: 20.5,
      format: 'number' as const,
    },
    {
      id: 'revenue',
      title: 'Revenue',
      value: 64380,
      trend: 35.0,
      format: 'currency' as const,
    },
    {
      id: 'profit',
      title: 'Profit',
      value: 28760,
      trend: 42.8,
      format: 'currency' as const,
    },
  ] as KPI[],
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    // Add reducers if needed for updating KPIs
  },
});

export const selectKPIs = (state: RootState) => state.dashboard.kpis;

export default dashboardSlice.reducer;
