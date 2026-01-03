import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Users, MoreHorizontal } from "lucide-react";
import BentoCard from "./BentoCard";

const data = [
  { name: "Dev", value: 45, color: "#6366f1" }, // Indigo
  { name: "Design", value: 25, color: "#ec4899" }, // Pink
  { name: "QA", value: 20, color: "#10b981" }, // Emerald
  { name: "Docs", value: 10, color: "#f59e0b" }, // Amber
];

// Calculate total for the center label
const totalTasks = data.reduce((acc, curr) => acc + curr.value, 0);

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0];
    return (
      <div className="bg-white p-3 border border-gray-100 shadow-xl rounded-xl min-w-[120px]">
        <div className="flex items-center gap-2 mb-1">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: data.payload.color }}
          />
          <span className="text-xs font-medium text-gray-500">{data.name}</span>
        </div>
        <p className="text-lg font-bold text-gray-800">{data.value}%</p>
      </div>
    );
  }
  return null;
};

const WorkloadWidget = () => {
  return (
    <BentoCard
      title="Workload Distribution"
      icon={Users}
      className="h-full"
      padding="p-5"
      headerSpacing="mb-3"
      action={
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      }
    >
      <div className="flex flex-col h-full">
        {/* Chart Area */}
        <div className="h-48 w-full relative mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                cornerRadius={5}
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    className="stroke-transparent hover:opacity-80 transition-opacity duration-300 cursor-pointer"
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>

          {/* Center Label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-3xl font-bold text-gray-800">
              {totalTasks}
            </span>
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
              Active
            </span>
          </div>
        </div>

        {/* Custom Legend */}
        <div className="grid grid-cols-2 gap-3 mt-4 px-2">
          {data.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm font-medium text-gray-600">
                  {item.name}
                </span>
              </div>
              <span className="text-sm font-bold text-gray-800">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </BentoCard>
  );
};

export default WorkloadWidget;
