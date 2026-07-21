"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface OrdersChartProps {
  dailyOrders: Array<{ date: string; paid: number; pending: number; cancelled: number; total: number }>;
  loading?: boolean;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-3 shadow-lg">
        <p className="text-gray-300 text-sm font-medium mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function OrdersChart({ dailyOrders, loading }: OrdersChartProps) {
  if (loading) {
    return (
      <div className="card-dark p-5">
        <div className="h-5 w-48 bg-gray-700 rounded animate-pulse mb-4" />
        <div className="h-[300px] bg-gray-800 rounded animate-pulse" />
      </div>
    );
  }

  const formattedData = dailyOrders.map((item) => {
    const [year, month, day] = item.date.split('-');
    return {
      ...item,
      formattedDate: `${day}/${month}`,
    };
  });

  return (
    <div className="card-dark p-5">
      <h3 className="text-lg font-semibold text-white mb-4">Đơn hàng theo ngày</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={formattedData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis
            dataKey="formattedDate"
            tick={{ fill: 'var(--fg-subtle)', fontSize: 12 }}
            axisLine={{ stroke: 'var(--border)' }}
            tickLine={{ stroke: 'var(--border)' }}
          />
          <YAxis
            tick={{ fill: 'var(--fg-subtle)', fontSize: 12 }}
            axisLine={{ stroke: 'var(--border)' }}
            tickLine={{ stroke: 'var(--border)' }}
            allowDecimals={false}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgb(var(--overlay-rgb) / 0.05)' }} />
          <Legend
            wrapperStyle={{ paddingTop: '10px' }}
            formatter={(value: string) => <span className="text-gray-300 text-sm">{value}</span>}
          />
          <Bar dataKey="paid" name="Đã thanh toán" stackId="orders" fill="var(--cat-emerald)" radius={[0, 0, 0, 0]} />
          <Bar dataKey="pending" name="Chờ xử lý" stackId="orders" fill="var(--warn)" radius={[0, 0, 0, 0]} />
          <Bar dataKey="cancelled" name="Đã huỷ" stackId="orders" fill="var(--danger)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
