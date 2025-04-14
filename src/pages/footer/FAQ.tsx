import { HelpCircle, Info, CreditCard, Truck, RefreshCcw, Headphones, ShieldCheck } from "lucide-react";

const FAQ: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center gap-2">
          <HelpCircle className="w-8 h-8 text-primary" /> FAQ
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-base">Frequently Asked Questions</p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex items-start gap-4">
          <Info className="w-6 h-6 text-blue-500 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">General</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2"><strong>What is RED PC?</strong> RED PC is a computer and accessories retailer based in Barangay Sta. Monica, Novaliches, Quezon City. It offers custom-built gaming PCs, budget-friendly computer systems, refurbished devices, and repair services.</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm"><strong>How can I contact customer support?</strong> You can reach customer support via email at <a href="mailto:redpcnow@gmail.com" className="hover:underline">redpcnow@gmail.com</a>.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <CreditCard className="w-6 h-6 text-green-500 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Ordering & Payments</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2"><strong>What payment methods do you accept?</strong> We accept Paymaya, Cash on Delivery, and in-store payment.</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm"><strong>Can I cancel or modify my order?</strong> Yes, you can cancel or modify your order within 24 hours. Contact <a href="mailto:homebslx@gmail.com" className="hover:underline">homebslx@gmail.com</a> for assistance.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Truck className="w-6 h-6 text-orange-500 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Shipping & Delivery</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2"><strong>How long does standard shipping take?</strong> Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days.</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm"><strong>Will I be able to track my order?</strong> Yes, you will receive a tracking number once your order ships.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <RefreshCcw className="w-6 h-6 text-yellow-500 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Returns & Refunds</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2"><strong>What is your return policy?</strong> We offer a 30-day return policy for items in their original condition and packaging.</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm"><strong>How long does it take to process a refund?</strong> Refunds are typically processed within 7-10 business days.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Headphones className="w-6 h-6 text-purple-500 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Technical & Warranty Support</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2"><strong>How can I contact technical support?</strong> Email us at <a href="mailto:redpcsupport@gmail.com" className="hover:underline">redpcsupport@gmail.com</a>. Support is available daily from 9 AM to 6 PM.</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2"><strong>Is it possible to upgrade a laptop?</strong> Yes, but laptop upgrades are usually limited to RAM and storage.</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2"><strong>Do your products come with a warranty?</strong> Yes, all new products are covered by their manufacturer's warranty. Extended warranty options are available at checkout.</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm"><strong>How can I reach out for warranty claims?</strong> Contact support via email at <a href="mailto:redpcnow@gmail.com" className="hover:underline">redpcnow@gmail.com</a>.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <ShieldCheck className="w-6 h-6 text-cyan-500 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Product Specifications</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2"><strong>How much RAM is recommended for general use?</strong> For most general users, 8GB of RAM is sufficient. For gaming or professional tasks, we recommend 16GB or more.</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2"><strong>SSD vs. HDD - What's the difference?</strong> SSDs provide faster data access and boot times, while HDDs offer larger storage at a lower cost.</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm"><strong>Which processor is best for gaming or professional tasks?</strong> For gaming, an Intel Core i7 or AMD Ryzen 7 is ideal. For professional tasks, an Intel Core i9 or AMD Ryzen 9 is recommended.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
