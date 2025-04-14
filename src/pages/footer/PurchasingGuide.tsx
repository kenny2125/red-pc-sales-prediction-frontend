import React from "react";
import { ShoppingCart, ListOrdered, Settings, Truck, RefreshCcw, HelpCircle } from "lucide-react";

const PurchasingGuide: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center gap-2">
          <ShoppingCart className="w-8 h-8 text-primary" /> Purchasing Guide
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-base">A step-by-step guide to a smooth shopping experience.</p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex items-start gap-4">
          <ListOrdered className="w-6 h-6 text-blue-500 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Step 1: Assess Your Needs</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Determine your requirements (home, gaming, office, etc.) to narrow down your options and avoid overspending.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Settings className="w-6 h-6 text-green-500 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Step 2: Set a Budget</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Decide on a budget, considering long-term costs like upgrades and warranties.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Settings className="w-6 h-6 text-yellow-500 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Step 3: Choose Specifications</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Select CPU, RAM, storage, and other specs based on your needs. SSDs are faster, HDDs are cheaper for bulk storage.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <HelpCircle className="w-6 h-6 text-purple-500 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Step 4: Compare Products</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Compare performance, display, battery, and reviews to find the best fit.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <ShoppingCart className="w-6 h-6 text-orange-500 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Step 5: Checkout</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Add items to your cart, choose shipping and payment options, and confirm your order.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Truck className="w-6 h-6 text-cyan-500 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Step 6: Track Your Order</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Use tracking details to monitor delivery. Contact support for issues or arrange pickup if needed.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <RefreshCcw className="w-6 h-6 text-pink-500 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Step 7: Review Return Policy</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Understand return/exchange conditions and timeframes before purchasing.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasingGuide;
