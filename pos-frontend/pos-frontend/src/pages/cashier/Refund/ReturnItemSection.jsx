import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const returnReasons=[
  "Wrong Product",
  "Damage Product",
  "Not interested anymore",
  "Other reason"
]

const refundMethods = ["UPI", "CARD", "CASH"]

const ReturnItemSection = ({selectedOrder, setShowReturnReceiptDialog}) => {
  const [returnReason, setReturnReason] = useState("");
  const [otherReason, setOtherReason] = useState("");
  const [refundMethod, setRefundMethod] = useState("UPI");

  const processRefund = () => {
    setShowReturnReceiptDialog(true)
  }

  return (
    <div className="p-5 w-1/2">
      <Card className="mt-4">
        <CardContent className="p-4">
          <div className="space-y-4">
            <div>
              <Label className="mb-2 block">Return Reason</Label>

              <Select 
                value={returnReason}
                onValueChange={(value) => setReturnReason(value)}
              >
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder="Select a reason..." />
                </SelectTrigger>

                <SelectContent>
                  {returnReasons.map((reason) => 
                    <SelectItem value={reason} key={reason}>
                      {reason}
                    </SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            {
              returnReason == "Other reason" && <div>
                <Label className="mb-2 block">
                  Specify Reason
                </Label>

                <Textarea id="other-reason" 
                  placeholder="Please specify the return reason"
                  value={otherReason}
                  onChange={(e) => setOtherReason(e.target.value)}  
                />
              </div>
            }
            <div>
              <Label>
                Refund Method
              </Label>

              <Select 
                value={refundMethod}
                onValueChange={(value) => setRefundMethod(value)}
              >
                <SelectTrigger className='w-full'>
                  <SelectValue placeholder="Select a refund method" />
                </SelectTrigger>

                <SelectContent>
                  {refundMethods.map((method) => 
                    <SelectItem value={method} key={method}>
                      {method}
                    </SelectItem>)}
                </SelectContent>
              </Select>
            </div>

            <div className="pt-5 border-t">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total Refund Amount: </span>
                <span>${selectedOrder.totalAmount}</span>
              </div>

              <Button onClick={processRefund} className='w-full py-6 mt-5'>
                Process Refund
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ReturnItemSection