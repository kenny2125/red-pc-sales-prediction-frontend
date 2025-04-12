import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  CheckCircle, 
  XCircle, 
  ShoppingBag, 
  Clock, 
  Store, 
  Truck,
  Wallet
} from "lucide-react";

interface CheckoutDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isSuccessful: boolean;
  paymentMethod?: string;
  pickupMethod?: string;
  orderNumber?: string;
  total?: number;
}

const CheckoutDialog: React.FC<CheckoutDialogProps> = ({
  open,
  onOpenChange,
  isSuccessful,
  paymentMethod = "",
  pickupMethod = "",
  orderNumber = "",
  total = 0,
}) => {
  const navigate = useNavigate();

  const getPaymentStatus = () => {
    if (!isSuccessful) return "failed";
    if (paymentMethod === "cod") return "pending_delivery";
    if (paymentMethod === "gcash" || paymentMethod === "paymaya") return "pending_payment";
    return "success";
  };

  const renderContent = () => {
    const status = getPaymentStatus();

    switch (status) {
      case "success":
        return (
          <div className="flex flex-col justify-center items-center gap-4 py-6">
            <CheckCircle className="h-16 w-16 text-green-500" />
            <h1 className="text-xl font-bold text-center">Order Successfully Placed!</h1>
            <div className="flex flex-col items-center gap-2 bg-accent p-4 rounded-md w-full max-w-md">
              <p className="text-sm font-semibold">Order #{orderNumber}</p>
              <p className="text-sm">Total Amount: ₱{total?.toLocaleString()}</p>
              {pickupMethod === "store" ? (
                <div className="flex items-center gap-2 mt-2">
                  <Store className="h-5 w-5 text-primary" />
                  <p className="text-sm">Ready for pickup at store</p>
                </div>
              ) : (
                <div className="flex items-center gap-2 mt-2">
                  <Truck className="h-5 w-5 text-primary" />
                  <p className="text-sm">Delivery in process</p>
                </div>
              )}
            </div>
          </div>
        );

      case "pending_payment":
        return (
          <div className="flex flex-col justify-center items-center gap-4 py-6">
            <Clock className="h-16 w-16 text-yellow-500" />
            <h1 className="text-xl font-bold text-center">Waiting for Payment</h1>
            <div className="flex flex-col items-center gap-2 bg-accent p-4 rounded-md w-full max-w-md">
              <p className="text-sm font-semibold">Order #{orderNumber}</p>
              <p className="text-sm">Total Amount: ₱{total?.toLocaleString()}</p>
              <div className="flex items-center gap-2 mt-2">
                <Wallet className="h-5 w-5 text-primary" />
                <p className="text-sm">Please complete your {paymentMethod?.toUpperCase()} payment</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 text-center mt-2">
              Your order will be processed once payment is confirmed
            </p>
          </div>
        );

      case "pending_delivery":
        return (
          <div className="flex flex-col justify-center items-center gap-4 py-6">
            <ShoppingBag className="h-16 w-16 text-blue-500" />
            <h1 className="text-xl font-bold text-center">Order Confirmed!</h1>
            <div className="flex flex-col items-center gap-2 bg-accent p-4 rounded-md w-full max-w-md">
              <p className="text-sm font-semibold">Order #{orderNumber}</p>
              <p className="text-sm">Total Amount: ₱{total?.toLocaleString()}</p>
              <div className="flex items-center gap-2 mt-2">
                <Truck className="h-5 w-5 text-primary" />
                <p className="text-sm">Preparing for delivery</p>
              </div>
              <p className="text-sm text-center mt-2">
                Payment will be collected upon delivery
              </p>
            </div>
          </div>
        );

      case "failed":
        return (
          <div className="flex flex-col justify-center items-center gap-4 py-6">
            <XCircle className="h-16 w-16 text-red-500" />
            <h1 className="text-xl font-bold text-center">
              Order Processing Failed
            </h1>
            <p className="text-gray-600 text-center">
              There was an issue processing your order. Please try again.
            </p>
          </div>
        );
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">
            Order Status
          </DialogTitle>
        </DialogHeader>
        {renderContent()}
        <div className="flex justify-center mt-4">
          <Button 
            onClick={() => {
              onOpenChange(false);
              navigate('/');
            }}
          >
            Back to Home
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutDialog;
