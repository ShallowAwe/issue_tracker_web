import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Activity, BarChart2 } from "lucide-react";
import BentoCard from "./BentoCard";

const data = [
  { name: "Sprint 1", short: "S-1", points: 24 },
  { name: "Sprint 2", short: "S-2", points: 30 },
  { name: "Sprint 3", short: "S-3", points: 20 },
  { name: "Sprint 4", short: "S-4", points: 35 },
  { name: "Sprint 5", short: "S-5", points: 28 },
];

// Custom Tooltip for a cleaner look
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-100 shadow-lg rounded-xl text-left min-w-[100px]">
        <p className="text-gray-400 text-xs font-medium mb-1">{label}</p>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-indigo-500" />
          <p className="text-indigo-900 font-bold text-lg">
            {payload[0].value}{" "}
            <span className="text-xs text-indigo-400 font-normal">pts</span>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

const VelocityChartWidget = () => {
  return (
    <BentoCard
      title="Team Velocity"
      icon={Activity}
      className="h-full"
      padding="p-5"
      headerSpacing="mb-4"
      action={
        <div className="flex items-center gap-2 text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
          <BarChart2 className="w-3 h-3" />
          <span>Last 5 Sprints</span>
        </div>
      }
    >
      <div className="h-64 w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            {/* Faint Horizontal Grid */}
            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              stroke="#f1f5f9"
            />

            <XAxis
              dataKey="short"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#9ca3af" }} // tailwind gray-400
              dy={10}
            />

            <YAxis
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#d1d5db" }} // tailwind gray-300
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "#f8fafc" }} // Very subtle gray hover background
            />

            <Bar
              dataKey="points"
              fill="#6366f1" // tailwind indigo-500
              radius={[6, 6, 0, 0]} // Softer rounded corners
              barSize={32}
              // Add a slight animation
              animationDuration={1500}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </BentoCard>
  );
};

export default VelocityChartWidget;
