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
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const userType: UserRole = "customer";

    switch (userType) {
      case "customer":
        setCurrentUser({
          id: "2",
          name: "Kenny",
          email: "asdsadasd",
          role: "customer",
        });

        break;
      case "admin":
        setCurrentUser({
          id: "1",
          name: "Kenny Admin",
          email: "asdsadasd",
          role: "admin",
        });

        break;
      default:
        setCurrentUser(null);

        break;
    }
  }, []);

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <ShoppingCart size={40} className="text-primary" />
      </DialogTrigger>

      <DialogContent className="flex flex-col sm:max-w-[1570px] min-h-[577px]">
        <DialogHeader>
          <div className="flex flex-row align-middle items-center gap-">
            <ShoppingCart size={40} className="text-primary" />
            <DialogTitle>My Cart</DialogTitle>
          </div>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-row gap-12 justify-between">
          <div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead></TableHead>
                  <TableHead className="w-[100px]">Picture</TableHead>
                  <TableHead>Product Name</TableHead>
                  <TableHead>Quantity </TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice) => (
                  <TableRow key={invoice.id}>
                    <Checkbox />
                    <TableCell className="font-medium">
                      {invoice.productUrl}
                    </TableCell>
                    <TableCell>{invoice.productName}</TableCell>
                    <TableCell>{invoice.quantity}</TableCell>
                    <TableCell className="text-right">
                      {invoice.price}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={4}>Total</TableCell>
                  <TableCell className="text-right">$2,500.00</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
          <div>
            <h1>Customer Information</h1>
            <div>
              <h1>Order# </h1>
            </div>
            <div className="flex flex-row gap-12">
              <div className="flex flex-row ">
                <ComboboxPopover label={"Payment Method"} />
              </div>
              <div className="flex flex-row">
                <ComboboxPopover label={"Pickup Method"} />
              </div>
            </div>
            <div></div>
          </div>
        </div>

        <DialogFooter>
          <Button type="submit">Place Order</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
