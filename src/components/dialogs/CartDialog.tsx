import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ShoppingCart } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { QuantityInput } from "@/components/ui/quantity-input";

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
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [quantities, setQuantities] = useState(
    invoices.reduce((acc, invoice) => {
      acc[invoice.id] = invoice.quantity;
      return acc;
    }, {} as Record<number, number>)
  );

  const handleCheckout = () => {
    setOpen(false); // Close the dialog
    navigate('/checkout'); // Navigate to checkout page
  };

  const toggleItemSelection = (invoiceId: number) => {
    setSelectedItems(prev => {
      if (prev.includes(invoiceId)) {
        return prev.filter(id => id !== invoiceId);
      } else {
        return [...prev, invoiceId];
      }
    });
  };

  const handleQuantityChange = (invoiceId: number, newQuantity: number) => {
    setQuantities(prev => ({
      ...prev,
      [invoiceId]: newQuantity
    }));
  };

  const getTotal = () => {
    return invoices.reduce(
      (sum, invoice) => sum + invoice.price * quantities[invoice.id], 
      0
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <ShoppingCart size={40} className="text-primary" />
      </DialogTrigger>

      <DialogContent className="flex flex-col sm:max-w-[1570px] min-h-[577px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex flex-row align-middle items-center gap-">
            <ShoppingCart size={40} className="text-primary" />
            <DialogTitle>My Cart</DialogTitle>
          </div>
          <DialogDescription>
            Review your cart items before proceeding to checkout.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex-1 overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]"></TableHead>
                <TableHead className="w-[100px] hidden md:table-cell"></TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id} className="align-middle">
                  <TableCell 
                    className="vertical-align-middle cursor-pointer" 
                    onClick={() => toggleItemSelection(invoice.id)}
                  >
                    <Checkbox 
                      checked={selectedItems.includes(invoice.id)}
                      onCheckedChange={() => toggleItemSelection(invoice.id)}
                    />
                  </TableCell>
                  <TableCell 
                    className="hidden md:table-cell cursor-pointer" 
                    onClick={() => toggleItemSelection(invoice.id)}
                  >
                    <img
                      src="https://placehold.co/100"
                      alt=""
                      className="w-full"
                    />
                  </TableCell>
                  <TableCell 
                    className="font-medium cursor-pointer" 
                    onClick={() => toggleItemSelection(invoice.id)}
                  >
                    <span className="md:inline line-clamp-2">
                      {invoice.productName}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <QuantityInput 
                      value={quantities[invoice.id]} 
                      onChange={(newValue) => handleQuantityChange(invoice.id, newValue)}
                      min={1}
                      max={99}
                    />
                  </TableCell>
                  <TableCell className="text-right">
                    ₱{(invoice.price * quantities[invoice.id]).toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={4} className="text-right font-bold">Total</TableCell>
                <TableCell className="text-right font-bold">
                  ₱{getTotal().toLocaleString()}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>

        <DialogFooter className="mt-4">
          <Button type="button" onClick={handleCheckout} className="w-full md:w-auto">
            Proceed to Checkout
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
