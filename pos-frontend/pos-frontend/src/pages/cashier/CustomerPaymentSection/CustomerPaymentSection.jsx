import CustomerSection from "./CustomerSection"
import DiscountSection from "./DiscountSection"
import NoteSection from "./NoteSection"
import PaymentSection from "./PaymentSection"

const CustomerPaymentSection = () => {
  return (
    <div className="w-1/5 flex flex-col bg-card overflow-y-auto min-h-0">
      <CustomerSection />
      <DiscountSection />
      <NoteSection />
      <PaymentSection />
    </div>
  )
}

export default CustomerPaymentSection