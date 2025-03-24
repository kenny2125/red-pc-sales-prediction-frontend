import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { UserPen } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShoppingCart } from "lucide-react";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ComboboxPopover } from "../ui/combobox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductCard from "../cards/product-card";

const invoices = [
  {
    id: 1,
    productUrl: "",
    productName: "GEFORCE RTX 4090 MSI GAMING TRIO 24GB GDDR6X TRIPLE FAN RGB",
    quantity: 1,
    price: 125000,
  },
  {
    id: 2,
    productUrl: "",
    productName: "GEFORCE RTX 4090 MSI GAMING TRIO 24GB GDDR6X TRIPLE FAN RGB",
    quantity: 1,
    price: 125000,
  },
  {
    id: 3,
    productUrl: "",
    productName: "GEFORCE RTX 4090 MSI GAMING TRIO 24GB GDDR6X TRIPLE FAN RGB",
    quantity: 1,
    price: 125000,
  },
];

export function CartDialog() {
  const [paid, isPaid] = useState<boolean>(false);

  function payment(params:type) {
    isPaid(true);
  }
  

  return (
    <Dialog>      
      <DialogTrigger asChild>
        <ShoppingCart size={40} className="text-primary" />
      </DialogTrigger>

      <DialogContent className="flex flex-col  sm:max-w-[1570px] min-h-[577px]">
        <DialogHeader>
          <div className="flex flex-row align-middle items-center gap-">
            <ShoppingCart size={40} className="text-primary" />
            <DialogTitle>My Cart</DialogTitle>
          </div>
          <DialogDescription>
          (Papalitan neto hehe) Make changes to your profile here. Click save when you're done. 
          </DialogDescription>
        </DialogHeader>
        {paid == false ? (
          <div className="flex flex-row gap-8 justify-between">
            <div className="flex-1 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]"></TableHead>
                    <TableHead className="w-[100px]"></TableHead>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.id} className="align-middle">
                      <TableCell className="vertical-align-middle">
                        <Checkbox />
                      </TableCell>
                      <TableCell>
                        <img
                          src="https://placehold.co/100"
                          alt=""
                          className="w-full"
                        />
                      </TableCell>
                      <TableCell className="font-medium">
                        {invoice.productName}
                      </TableCell>
                      <TableCell className="text-center">
                        {invoice.quantity}
                      </TableCell>
                      <TableCell className="text-right">
                        ₱{invoice.price.toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div className="flex flex-col gap-2 justify-start align-bottom h-full">
              <h1>Customer Information</h1>
              <div>
                <h1>Order# </h1>
                <p></p>
              </div>
              <div className="flex flex-row gap-12 justify-between">
                <div className="flex flex-row gap-2">
                  <Label>Payment Method</Label>
                  <Select>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Select a Payment Method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cod">Cash on Delivery</SelectItem>
                      <SelectItem value="gcash">GCASH</SelectItem>
                      <SelectItem value="paymaya">PAYMAYA</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-row gap-2">
                  <Label>Pickup Method</Label>
                  <Select>
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Select a Pickup Method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="store">Store Pickup</SelectItem>
                      <SelectItem value="delivery">Delivery</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex flex-row gap-8 justify-between ">
                <div className="flex flex-row gap-4">
                  <h1>Customer Name</h1>
                  <p>John Kenny Reyes</p>
                </div>

                <div className="flex flex-row gap-4">
                  <h1>Contact Number</h1>
                  <p>09123456789</p>
                </div>
              </div>
              <div>
                <h1>Address</h1>
                <p>Blk 1, Lot 2, San Bandangilid, Novaliches, Quezon City</p>
              </div>
              <div className="flex flex-row justify-between align-bottom">
                <div>
                  <h1>Order Information</h1>
                  <p>Total Payment</p>
                </div>
                ₱
                {invoices
                  .reduce((sum, invoice) => sum + invoice.price, 0)
                  .toLocaleString()}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-full gap-8 justify-center">
            <div className="flex justify-center">
              <h1>Thank you for paying!</h1>
            </div>
            <div className="flex flex-row justify-center">
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
              <ProductCard/>
            </div>
            </div>
        )}

        <DialogFooter>
          <Button type="submit" onClick={payment}>Place Order</Button>  
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
