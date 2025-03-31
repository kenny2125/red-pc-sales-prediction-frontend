import React from "react";

const FAQ: React.FC = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-blue-900 to-red-900 p-6 rounded-md mb-6">
        <h1 className="text-2xl font-bold text-center text-yellow-400">Frequently Asked Questions (FAQ)</h1>
      </div>

      <div>
        <h2 className="text-xl font-bold text-yellow-400 mb-4">📄 Frequently Asked Questions (FAQ)</h2>
        <p className="mb-6 text-gray-200">
          Our Frequently Asked Questions (FAQ) section provides quick answers to common inquiries about our services, policies, and support. From understanding our offerings to details on shipping, payment options, and return policies, this section is designed to help you find the information you need easily and efficiently.
        </p>

        <h3 className="text-lg font-semibold text-yellow-400 mt-6 mb-3">General Questions</h3>
        <p className="mb-4"><strong className="text-yellow-400">Q: What is RED PC?</strong><br />
        A: RED PC is a computer and accessories retailer based in Barangay Sta. Monica, Novaliches, Quezon City. It offers custom-built gaming PCs, budget-friendly computer systems, refurbished devices, and repair services.</p>

        <p className="mb-4"><strong className="text-yellow-400">Q: How can I contact customer support?</strong><br />
        A: You can reach customer support via email at redpcnow@gmail.com.</p>

        <h3 className="text-lg font-semibold text-yellow-400 mt-6 mb-3">Product Specifications</h3>
        <p className="mb-4"><strong className="text-yellow-400">Q: How much RAM is recommended for general use?</strong><br />
        A: For most general users, 8GB of RAM is sufficient for browsing, document editing, and media consumption. For gaming or professional tasks, we recommend 16GB or more for optimal performance.</p>

        <p className="mb-4"><strong className="text-yellow-400">Q: SSD vs. HDD - What's the difference?</strong><br />
        A: SSDs (Solid State Drives) offer faster data access, quicker boot times, and better performance, making them ideal for most users. HDDs (Hard Disk Drives) are more affordable and provide larger storage capacity, making them suitable for extensive data storage on a budget.</p>

        <p className="mb-4"><strong className="text-yellow-400">Q: Which processor is best for gaming or professional tasks?</strong><br />
        A: For gaming, an Intel Core i7 or AMD Ryzen 7 processor is typically ideal. For professional tasks like video editing or 3D rendering, a more powerful processor, such as Intel Core i9 or AMD Ryzen 9, is recommended.</p>

        <h3 className="text-lg font-semibold text-yellow-400 mt-6 mb-3">Ordering & Payments</h3>
        <p className="mb-4"><strong className="text-yellow-400">Q: What payment methods do you accept?</strong><br />
        A: We accept Paymaya, Cash on Delivery, and in-store payment.</p>

        <p className="mb-4"><strong className="text-yellow-400">Q: Can I cancel or modify my order after it is placed?</strong><br />
        A: Yes, you can cancel or modify your order within 24 hours of placing it. Please contact our customer service team at homebslx@gmail.com for assistance.</p>

        <h3 className="text-lg font-semibold text-yellow-400 mt-6 mb-3">Shipping & Delivery</h3>
        <p className="mb-4"><strong className="text-yellow-400">Q: How long does standard shipping take?</strong><br />
        A: Standard shipping usually takes 3-5 business days, while express shipping options are available and typically take 1-2 business days.</p>

        <p className="mb-4"><strong className="text-yellow-400">Q: Will I be able to track my order?</strong><br />
        A: Yes, once the order ships, you'll receive an email with a tracking number. You can use this number to check the status of your shipment.</p>

        <h3 className="text-lg font-semibold text-yellow-400 mt-6 mb-3">Returns & Refunds</h3>
        <p className="mb-4"><strong className="text-yellow-400">Q: What is your return policy?</strong><br />
        A: We offer a 30-day return policy on all products. Items must be in their original condition and packaging. For more details, please contact support.</p>

        <p className="mb-4"><strong className="text-yellow-400">Q: How long does it take to process a refund?</strong><br />
        A: Refunds are typically processed within 7-10 business days after we receive the returned item.</p>

        <h3 className="text-lg font-semibold text-yellow-400 mt-6 mb-3">Technical Support</h3>
        <p className="mb-4"><strong className="text-yellow-400">Q: How can I contact technical support for help with my device?</strong><br />
        A: For technical support, email us at redpcsupport@gmail.com. Our support team is available daily, from 9 AM to 6 PM (EST).</p>

        <p className="mb-4"><strong className="text-yellow-400">Q: Is it possible to upgrade the laptop?</strong><br />
        A: Yes, desktops generally offer more flexibility for upgrades, allowing you to easily replace components like the processor, graphics card, and memory. Laptop upgrades are usually limited to RAM and storage.</p>

        <h3 className="text-lg font-semibold text-yellow-400 mt-6 mb-3">Warranty & Support</h3>
        <p className="mb-4"><strong className="text-yellow-400">Q: Do your products come with a warranty?</strong><br />
        A: Yes, all new products are covered by their manufacturer's warranty. Extended warranty options are also available at checkout for added coverage.</p>

        <p className="mb-4"><strong className="text-yellow-400">Q: How can I reach out for warranty claims?</strong><br />
        A: You can contact our support team via email at redpcnow@gmail.com. We are available daily, from 9 AM to 6 PM (EST).</p>
      </div>
    </div>
  );
};

export default FAQ;