import PaymentSummaryCard from "./PaymentSummaryCard"
import RecentOrdersTable from "./RecentOrdersTable"
import RefundsTable from "./RefundsTable"
import SalesSummaryCard from "./SalesSummaryCard"
import ShiftInformation from "./ShiftInformation"
import ShiftReportHeader from "./ShiftReportHeader"
import TopSellingItems from "./TopSellingItems"

const ShiftSummaryPage = () => {
  return (
    <div className="h-fullflex flex-col">
        <ShiftReportHeader />
        
        <div className="flex-1 overflow-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <ShiftInformation />
                <SalesSummaryCard />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <PaymentSummaryCard />
                <TopSellingItems />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <RecentOrdersTable />
                <RefundsTable />
            </div>
        </div>
    </div>
  )
}

export default ShiftSummaryPage