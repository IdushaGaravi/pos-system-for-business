import { ChartContainer } from "@/components/ui/chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
    {
        name: "Jame",
        sales: 400
    },
    {
        name: "Rose",
        sales: 560
    },
    {
        name: "Pinky",
        sales: 260
    },
    {
        name: "Shane",
        sales: 890
    },
]

const CashierPerformance = () => {

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
                        <BarChart layout="vertical" data={data}>
                            <XAxis 
                                type="number"
                                // dataKey={"name"} 
                                stroke="#8888" 
                                fontSize={12} 
                                tickLine={false} 
                                axisLine={false}
                                tickFormatter={(value) => `$${value}`} 
                            />

                            <YAxis 
                                dataKey={"name"} 
                                type="category"
                                stroke="#8888" 
                                fontSize={12} 
                                tickLine={false} 
                                axisLine={false} 
                            />
                            <ChartTooltip
                                content={({ active, payload }) => 
                                    <ChartTooltipContent 
                                        active={active} 
                                        payload={payload} 
                                        formatter={(value) => [`$${value}`, "Revenue"]} 
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

export default CashierPerformance