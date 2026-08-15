import { DollarSign, Store, ShoppingCart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const loading = false;

const stats = [
    { 
      title: "Total Sales", 
      value: 45, 
      icon: <DollarSign className="w-8 h-8 text-emerald-500" />, 
      change: 50,
      loading: loading
    },
    { 
      title: "Total Branches", 
      value: 15, 
      icon: <Store className="w-8 h-8 text-emerald-500" />, 
      change: -4,
      loading: loading
    },
    { 
      title: "Total Products", 
      value: 7899, 
      icon: <ShoppingCart className="w-8 h-8 text-emerald-500" />, 
      change: 40,
      loading: loading
    },
    { 
      title: "Total Employees", 
      value: 300, 
      icon: <Users className="w-8 h-8 text-emerald-500" />, 
      change: 30,
      loading: loading
    },
  ];

const DashboardState = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {stats.map((state, index) => 
                <Card key={index}>
                    <CardContent>
                        <div className="flex items-center justify-between">
                            <div className="space-y-2">
                                <p className="text-sm font-medium text-gray-500">{state.title}</p>

                                <h3 className="font-bold text-lg">{state.value}</h3>

                                <p className={`text-xs font-medium mt-1 ${state.change > 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                                    {state.change}
                                </p>
                            </div>
                            

                            <div className="p-3 bg-emerald-50 rounded-full">
                                {state.icon}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}

export default DashboardState