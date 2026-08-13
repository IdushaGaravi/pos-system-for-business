import { Calendar, FileText, BarChart2, TrendingUp, Users } from "lucide-react";
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import SalesChart from "../Dashboard/SalesChart";
import PaymentBreakdown from "../Dashboard/PaymentBreakdown";
import PaymentMethodCharts from "./PaymentMethodChart";
import TopProducts from "../Dashboard/TopProducts";
import CashierPerformance from "../Dashboard/CashierPerformance";

const Reports = () => {
  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold tracking-tight'>Reports & Analitics</h1>
        
        <div>
          <Button variant='outline'>
            <Calendar />
            Today
          </Button>
        </div> 
      </div>

      <Tabs>
        <TabsList>

          <TabsTrigger value="overview">
            <BarChart2 className="h-4 w-4"  />
            Overview
          </TabsTrigger>

          <TabsTrigger value="sales" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Sales
          </TabsTrigger>

          <TabsTrigger value="products" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Products
          </TabsTrigger>

          <TabsTrigger value="cashier" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Cashier Performance
          </TabsTrigger>

        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <SalesChart />
            </div>

            <div>
              <PaymentMethodCharts />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="sales">
            <SalesChart />
        </TabsContent>

        <TabsContent value="products">
            <TopProducts />
        </TabsContent>

        <TabsContent value="cashier">
            <CashierPerformance />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default Reports