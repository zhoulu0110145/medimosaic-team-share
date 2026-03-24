import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface TrendChartCardProps {
  title: string;
  description: string;
  data: Array<Record<string, string | number>>;
  xKey: string;
  mode: "area" | "line";
  series: Array<{
    key: string;
    label: string;
    color: string;
  }>;
  footer?: string;
}

export const TrendChartCard = ({
  title,
  description,
  data,
  xKey,
  mode,
  series,
  footer,
}: TrendChartCardProps) => (
  <div className="surface-card p-4">
    <div className="mb-4">
      <h3 className="text-base font-semibold text-ink">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-slate-600">{description}</p>
    </div>
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        {mode === "area" ? (
          <AreaChart data={data}>
            <defs>
              {series.map((item) => (
                <linearGradient
                  id={`gradient-${item.key}`}
                  key={item.key}
                  x1="0"
                  x2="0"
                  y1="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor={item.color} stopOpacity={0.4} />
                  <stop offset="95%" stopColor={item.color} stopOpacity={0.02} />
                </linearGradient>
              ))}
            </defs>
            <CartesianGrid stroke="#d9e6e2" strokeDasharray="4 4" vertical={false} />
            <XAxis dataKey={xKey} tickLine={false} axisLine={false} tickMargin={10} />
            <YAxis tickLine={false} axisLine={false} width={32} />
            <Tooltip
              contentStyle={{
                borderRadius: 18,
                border: "1px solid #d6ebe6",
                boxShadow: "0 12px 32px rgba(32, 52, 73, 0.12)",
              }}
            />
            {series.map((item) => (
              <Area
                key={item.key}
                type="monotone"
                dataKey={item.key}
                name={item.label}
                stroke={item.color}
                fill={`url(#gradient-${item.key})`}
                strokeWidth={3}
              />
            ))}
          </AreaChart>
        ) : (
          <LineChart data={data}>
            <CartesianGrid stroke="#d9e6e2" strokeDasharray="4 4" vertical={false} />
            <XAxis dataKey={xKey} tickLine={false} axisLine={false} tickMargin={10} />
            <YAxis tickLine={false} axisLine={false} width={34} />
            <Tooltip
              contentStyle={{
                borderRadius: 18,
                border: "1px solid #d6ebe6",
                boxShadow: "0 12px 32px rgba(32, 52, 73, 0.12)",
              }}
            />
            <Legend wrapperStyle={{ paddingTop: 16 }} />
            {series.map((item) => (
              <Line
                key={item.key}
                type="monotone"
                dataKey={item.key}
                name={item.label}
                stroke={item.color}
                strokeWidth={3}
                dot={{ r: 4, strokeWidth: 2 }}
                activeDot={{ r: 6 }}
              />
            ))}
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
    {footer ? <p className="mt-4 text-sm font-medium text-slate-600">{footer}</p> : null}
  </div>
);
