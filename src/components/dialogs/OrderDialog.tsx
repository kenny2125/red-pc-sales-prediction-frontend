import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ScrollText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type UserRole = "guest" | "customer" | "admin";

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

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
];

export function OrderDialog() {


  return (
    <Dialog>
      <DialogTrigger asChild>
        <ScrollText size={40} className="text-primary" />
      </DialogTrigger>

      <DialogContent className="sm:max-w-[867px]">
        <DialogHeader>
          <div className="flex flex-row align-middle items-center gap-2">
            <ScrollText size={40} className="text-primary" />
            <DialogTitle>Order History</DialogTitle>
          </div>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <Table>
          <TableHeader>
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
                <TableCell className="text-right">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={5}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>

        <DialogFooter>
          <Button type="submit">Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
