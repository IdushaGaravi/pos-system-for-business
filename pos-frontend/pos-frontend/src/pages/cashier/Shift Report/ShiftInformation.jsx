import { Card, CardContent } from  "../../../components/ui/card"

const shiftData = {
  cashier: {
    fullName: "Pablo Panday"
  },
  duration: "8 hours",
  shiftStart: "Aug 8, 2025, 09:00 AM",
  shiftEnd: ""
}

const ShiftInformation = () => {
  return (
    <Card>
      <CardContent>
        <h2 className="text-xl font-semibold mb-4">Shift Information</h2>

        <div className='space-y-2'>
          <div className='flex justify-between'>
            <span className="text-muted-foreground">Cashier: </span>
            <span className="font-medium">{shiftData.cashier.fullName}</span>
          </div>

          <div className='flex justify-between'>
            <span className="text-muted-foreground">Shift Start: </span>
            <span className="font-medium">{shiftData.shiftStart}</span>
          </div>

          <div className='flex justify-between'>
            <span className="text-muted-foreground">Shift End: </span>
            <span className="font-medium">{shiftData.shiftEnd ? shiftData.shiftEnd : "ongoing"}</span>
          </div>

          <div className='flex justify-between'>
            <span className="text-muted-foreground">Duration: </span>
            <span className="font-medium">{shiftData.duration}</span>
          </div>
        </div>
      </CardContent>
    </Card>      
  )
}

export default ShiftInformation