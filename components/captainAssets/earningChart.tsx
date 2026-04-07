"use client"

import { Bar, BarChart, XAxis, YAxis } from "recharts";
import { type ChartConfig } from "@/components/ui/chart";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  mobile: {
    label: "Earning",
    color: "#60a5fa",
  },
} satisfies ChartConfig;
const chartData = [
  { day: "Sun", value: 3500 },
  { day: "Mon", value: 8500 },
  { day: "Tue", value: 300 },
  { day: "Web", value: 3700 },
  { day: "Thur", value: 2500 },
  { day: "Fri", value: 1500 },
  { day: "Sat", value: 6500 },
];

const EarningChart = () => {
    return (
        <div className="bg-gray-100 p-4 rounded-xl shadow-md">
               <ChartContainer config={chartConfig}>
                 <BarChart data={chartData}>
                   <XAxis dataKey="day" />
                   <YAxis />
                   <ChartTooltip content={<ChartTooltipContent />} />
                   <Bar dataKey="value" fill="#60a5fa" radius={[4, 4, 0, 0]} />
                 </BarChart>
               </ChartContainer>
             </div> 
    )
}
export default EarningChart;