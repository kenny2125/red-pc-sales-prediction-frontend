import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    paymentMethod: "Paymaya",
    custName: "John Kenny Q. Reyes",
    paidAt: "March 22, 2025",
    totalAmount: "Php250.00",
  },
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    paymentMethod: "Paymaya",
    custName: "John Kenny Q. Reyes",
    paidAt: "March 22, 2025",
    totalAmount: "Php250.00",
  },
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    paymentMethod: "Paymaya",
    custName: "John Kenny Q. Reyes",
    paidAt: "March 22, 2025",
    totalAmount: "Php250.00",
  },
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    paymentMethod: "Paymaya",
    custName: "John Kenny Q. Reyes",
    paidAt: "March 22, 2025",
    totalAmount: "Php250.00",
  },
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    paymentMethod: "Paymaya",
    custName: "John Kenny Q. Reyes",
    paidAt: "March 22, 2025",
    totalAmount: "Php250.00",
  },

]

export function TableDemo() {
  return (
    <>
    
    <Table>            
      <TableHeader>
      <h1>
        Sales Table
      </h1>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead>Customer Name</TableHead>
          <TableHead>Paid At</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>            
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell>{invoice.custName}</TableCell>
            <TableCell>{invoice.paidAt}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>

    </Table>
    </>
  )
}

