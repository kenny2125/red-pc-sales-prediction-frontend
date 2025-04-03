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

const orders = [
  {
    orderNumber: "ORD001",
    productName: "Gaming Mouse",
    paidAt: "March 22, 2025",
    amount: "Php250.00",
  },
  {
    orderNumber: "ORD002",
    productName: "Mechanical Keyboard",
    paidAt: "March 23, 2025",
    amount: "Php1,200.00",
  },
  {
    orderNumber: "ORD003",
    productName: "Gaming Headset",
    paidAt: "March 24, 2025",
    amount: "Php800.00",
  },
  {
    orderNumber: "ORD004",
    productName: "Monitor Stand",
    paidAt: "March 25, 2025",
    amount: "Php350.00",
  },
  {
    orderNumber: "ORD005",
    productName: "USB Hub",
    paidAt: "March 26, 2025",
    amount: "Php150.00",
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
              <TableHead className="w-[100px]">Order#</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Paid At</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.orderNumber}>
                <TableCell className="font-medium">{order.orderNumber}</TableCell>
                <TableCell>{order.productName}</TableCell>
                <TableCell>{order.paidAt}</TableCell>
                <TableCell className="text-right">
                  {order.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">Php2,750.00</TableCell>
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
