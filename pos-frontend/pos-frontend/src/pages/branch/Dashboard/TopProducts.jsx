import { ChartContainer } from "@/components/ui/chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts"
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const COLORS = ["#130f40", "#30336b", "#95afc0", "#833471", "#84817a"];

const TopProducts = () => {
    const data = [
        {
            name: "men shirt",
            value: 34,
            percentage: 20
        },
        {
            name: "t-shirt",
            value: 10,
            percentage: 10
        },
        {
            name: "shoes",
            value: 50,
            percentage: 40
        },
        {
            name: "watches",
            value: 34,
            percentage: 30
        },
    ]

    const config = data.reduce((acc, item, idx) => {
        acc[item.name] = {
            label: item.name,
            color: COLORS[idx % COLORS.length]
        }
        return acc
    }, {})

    const renderCustomizedLable = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent, 
        index
    }) => {
        const radius = innerRadius+(outerRadius - innerRadius) * 0.5
        const x = cx + radius*Math.cos(-midAngle * (Math.PI/180))
        const y = cy + radius*Math.sin(-midAngle * (Math.PI/180))

        const percentValue = data[index]?.percentage??percent*100;

        return (
            <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
                {`${percentValue.toFixed(0)}%`}
            </text>
        ) 
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-xl font-semibold'>
                    Product Performance
                </CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={config}>
                    <ResponsiveContainer height={320} width={"100%"}>
                        <PieChart data={data}>
                            <Pie 
                                data={data} 
                                cx={"50%"} 
                                cy={"50%"} 
                                outerRadius={80}
                                fill="#130f40"
                                labelLine={false} 
                                dataKey={"value"}
                                label={renderCustomizedLable}
                            >
                                {data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]} key={`cell - ${index}`} />)}
                            </Pie>
                            <ChartTooltip
                                content={({ active, payload }) => 
                                    <ChartTooltipContent 
                                        active={active} 
                                        payload={payload} 
                                        formatter={(value, name, entry, idx) => [`$${data[idx]?.value?? "-"}%`, "Sales Percentage"]} 
                                    />
                                } 
                            />
                            
                        </PieChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}

export default TopProducts