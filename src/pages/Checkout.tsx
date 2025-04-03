import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ShoppingCart } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductCard from "../components/cards/ProductCard";
import { QuantityInput } from "@/components/ui/quantity-input";
import CheckoutDialog from "../components/dialogs/CheckoutDialog";

// Sample invoices data (in a real app this would come from a cart context/store)
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

const Checkout = () => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [isOrderSuccessful, setIsOrderSuccessful] = useState<boolean>(false);
  const [quantities, setQuantities] = useState(
    invoices.reduce((acc, invoice) => {
      acc[invoice.id] = invoice.quantity;
      return acc;
    }, {} as Record<number, number>)
  );

  function payment() {
    setIsOrderSuccessful(true);
    setDialogOpen(true);
  }

  const getTotal = () => {
    return invoices.reduce(
      (sum, invoice) => sum + invoice.price * quantities[invoice.id],
      0
    );
  };

  return (<>
    <div className=" py-8 px-4">
      <div className="flex flex-row align-middle items-center gap-2 mb-4">
        <ShoppingCart size={30} className="text-primary" />
        <h1 className="text-2xl font-bold">Checkout</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-between">
        <div className="flex-1 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] hidden md:table-cell"></TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id} className="align-middle">
                  <TableCell className="hidden md:table-cell">
                    <img
                      src="https://placehold.co/100"
                      alt=""
                      className="w-full"
                    />
                  </TableCell>
                  <TableCell className="font-medium">
                    <span className="md:inline line-clamp-2">
                      {invoice.productName}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    {invoice.quantity}
                  </TableCell>
                  <TableCell className="text-right">
                    ₱
                    {(
                      invoice.price * quantities[invoice.id]
                    ).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex flex-col gap-2 justify-start align-bottom md:w-auto w-full">
          <h1 className="text-lg font-semibold">Customer Information</h1>
          <div>
            <h1>Order# </h1>
            <p></p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 justify-between">
            <div className="flex flex-row gap-2 items-center">
              <Label>Payment Method</Label>
              <Select>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Select a Payment Method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cod">Cash on Delivery</SelectItem>
                  <SelectItem value="gcash">GCASH</SelectItem>
                  <SelectItem value="paymaya">PAYMAYA</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Label>Pickup Method</Label>
              <Select>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Select a Pickup Method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="store">Store Pickup</SelectItem>
                  <SelectItem value="delivery">Delivery</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-between">
            <div className="flex flex-row gap-4">
              <h1 className="font-medium">Customer Name</h1>
              <p>John Kenny Reyes</p>
            </div>

            <div className="flex flex-row gap-4">
              <h1 className="font-medium">Contact Number</h1>
              <p>09123456789</p>
            </div>
          </div>
          <div>
            <h1 className="font-medium">Address</h1>
            <p>Blk 1, Lot 2, San Bandangilid, Novaliches, Quezon City</p>
          </div>
          <div className="flex flex-row justify-between align-bottom mt-4">
            <div>
              <h1 className="font-semibold">Order Information</h1>
              <p>Total Payment</p>
            </div>
            <div className="font-bold text-lg">
              ₱{getTotal().toLocaleString()}
            </div>
          </div>
          <Button onClick={payment} className="mt-6 w-full">
            Place Order
          </Button>
        </div>
      </div>
      
      <CheckoutDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        isSuccessful={isOrderSuccessful}
      />
    </div>
    </>
  );
};

export default Checkout;
