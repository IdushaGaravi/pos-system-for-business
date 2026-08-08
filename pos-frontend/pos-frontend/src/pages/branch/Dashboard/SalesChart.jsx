import { ChartContainer } from "@/components/ui/chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
    {
        name: "2025-08-06",
        sales: 400
    },
    {
        name: "2025-08-07",
        sales: 560
    },
    {
        name: "2025-08-08",
        sales: 260
    },
    {
        name: "2025-08-09",
        sales: 890
    },
]

const SalesChart = () => {

    const config={
        sales: {
            label: "Sales",
            color: "#3b82f6"
        }
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-xl font-semibold'>
                    Payment Breakdown
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={config}>
                    <ResponsiveContainer height={320} width={"100%"}>
                        <BarChart data={data}>
                            <XAxis 
                                dataKey={"name"} 
                                stroke="#8888" 
                                fontSize={12} 
                                tickLine={false} 
                                axisLine={false} 
                            />

                            <YAxis 
                                // dataKey={"name"} 
                                stroke="#8888" 
                                fontSize={12} 
                                tickLine={false} 
                                axisLine={false} 
                                tickFormatter={(value) => `$${value}`}
                            />
                            <ChartTooltip
                                content={({ active, payload }) => 
                                    <ChartTooltipContent 
                                        active={active} 
                                        payload={payload} 
                                        formatter={(value) => [`$${value}`, "Sales"]} 
                                    />
                                } 
                            />
                            <Bar dataKey="sales" fill="currentColor" radius={4} className="fill-primary" />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

export default SalesChart