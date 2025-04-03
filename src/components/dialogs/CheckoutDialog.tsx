import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ProductCard from "../cards/ProductCard";
import { CheckCircle, XCircle, ShoppingBag } from "lucide-react";

interface CheckoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isSuccessful: boolean;
}

const CheckoutDialog: React.FC<CheckoutDialogProps> = ({
  open,
  onOpenChange,
  isSuccessful,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">
            {isSuccessful ? "Order Confirmed" : "Order Failed"}
          </DialogTitle>
        </DialogHeader>
        {isSuccessful ? (
          <div className="flex flex-col w-full gap-8 justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
              <h1 className="text-xl font-bold">Thank you for your order!</h1>
              <div className="flex items-center gap-2 bg-accent p-3 rounded-md">
                <ShoppingBag className="text-primary h-5 w-5" />
                <p className="text-sm">Your order is being processed</p>
              </div>
            </div>

          </div>
        ) : (
          <div className="flex flex-col justify-center items-center gap-4 py-6">
            <XCircle className="h-16 w-16 text-red-500" />
            <h1 className="text-xl font-bold text-center">
              There was an issue processing your order
            </h1>
            <p className="text-gray-600 text-center">
              Please check your payment details and try again.
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutDialog;
