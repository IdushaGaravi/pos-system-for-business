import { Info, Edit, Check, X } from "lucide-react"
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const stores = [1]

const PendingRequest = () => {
  const handleAccept = () => {
    console.log("Handle accept")
  }
  
  const handleReject = () => {
    console.log("Handle reject")
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">Pending Requests</h1>

        <div className="flex gap-2">
          <Badge className='gap-2'><Info />Pending</Badge>
        </div>
      </div>
      
      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="">Store Name</TableHead>
                <TableHead className="">Owner</TableHead>
                <TableHead className="">Contact</TableHead>
                <TableHead className="">Business Type</TableHead>
                <TableHead className="">Submitted On</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stores.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.sku}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell className="">{item.category}</TableCell>
                  <TableCell className="">{item.category}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end items-center gap-2">
                      <Button onClick={handleAccept} variant="outline" className="bg-green-100">
                          <Check />
                          Accept
                      </Button>

                      <Button onClick={handleReject} variant="outline" className="bg-red-100">
                          <X />
                          Reject
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div> 
  )
}

export default PendingRequest