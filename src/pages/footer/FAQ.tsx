import React from "react";

const FAQ: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center rounded">
        <h1 className="text-4xl font-['Anton'] text-black dark:text-white">
          Frequently Asked Questions (FAQ)
        </h1>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <h2 className="text-2xl font-['Anton'] text-black dark:text-white">
          General Questions
        </h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          <strong>Q: What is RED PC?</strong><br />
          A: RED PC is a computer and accessories retailer based in Barangay Sta. Monica, Novaliches, Quezon City. It offers custom-built gaming PCs, budget-friendly computer systems, refurbished devices, and repair services.
        </p>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          <strong>Q: How can I contact customer support?</strong><br />
          A: You can reach customer support via email at <a href="mailto:redpcnow@gmail.com" className="hover:underline">redpcnow@gmail.com</a>.
        </p>

        <h2 className="text-2xl font-['Anton'] text-black dark:text-white">Product Specifications</h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          <strong>Q: How much RAM is recommended for general use?</strong><br />
          A: For most general users, 8GB of RAM is sufficient. For gaming or professional tasks, we recommend 16GB or more.
        </p>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          <strong>Q: SSD vs. HDD - What's the difference?</strong><br />
          A: SSDs provide faster data access and boot times, while HDDs offer larger storage at a lower cost.
        </p>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          <strong>Q: Which processor is best for gaming or professional tasks?</strong><br />
          A: For gaming, an Intel Core i7 or AMD Ryzen 7 is ideal. For professional tasks, an Intel Core i9 or AMD Ryzen 9 is recommended.
        </p>

        <h2 className="text-2xl font-['Anton'] text-black dark:text-white">Ordering & Payments</h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          <strong>Q: What payment methods do you accept?</strong><br />
          A: We accept Paymaya, Cash on Delivery, and in-store payment.
        </p>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          <strong>Q: Can I cancel or modify my order?</strong><br />
          A: Yes, you can cancel or modify your order within 24 hours. Contact <a href="mailto:homebslx@gmail.com" className="hover:underline">homebslx@gmail.com</a> for assistance.
        </p>

        <h2 className="text-2xl font-['Anton'] text-black dark:text-white">Shipping & Delivery</h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          <strong>Q: How long does standard shipping take?</strong><br />
          A: Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days.
        </p>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          <strong>Q: Will I be able to track my order?</strong><br />
          A: Yes, you will receive a tracking number once your order ships.
        </p>

        <h2 className="text-2xl font-['Anton'] text-black dark:text-white">Returns & Refunds</h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          <strong>Q: What is your return policy?</strong><br />
          A: We offer a 30-day return policy for items in their original condition and packaging.
        </p>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          <strong>Q: How long does it take to process a refund?</strong><br />
          A: Refunds are typically processed within 7-10 business days.
        </p>

        <h2 className="text-2xl font-['Anton'] text-black dark:text-white">Technical Support</h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          <strong>Q: How can I contact technical support?</strong><br />
          A: Email us at <a href="mailto:redpcsupport@gmail.com" className="hover:underline">redpcsupport@gmail.com</a>. Support is available daily from 9 AM to 6 PM.
        </p>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          <strong>Q: Is it possible to upgrade a laptop?</strong><br />
          A: Yes, but laptop upgrades are usually limited to RAM and storage.
        </p>

        <h2 className="text-2xl font-['Anton'] text-black dark:text-white">Warranty & Support</h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          <strong>Q: Do your products come with a warranty?</strong><br />
          A: Yes, all new products are covered by their manufacturer's warranty. Extended warranty options are available at checkout.
        </p>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          <strong>Q: How can I reach out for warranty claims?</strong><br />
          A: Contact support via email at <a href="mailto:redpcnow@gmail.com" className="hover:underline">redpcnow@gmail.com</a>.
        </p>
      </div>
    </div>
  );
};

export default FAQ;
