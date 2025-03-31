import React from "react";
import { LucideScrollText } from "lucide-react";

const Terms: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center rounded">
        <h1 className="text-4xl font-['Anton'] text-black dark:text-white">
          Terms & Conditions
        </h1>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <h2 className="text-2xl font-['Anton'] flex items-center gap-2 text-black dark:text-white">
          <LucideScrollText /> Terms & Conditions
        </h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          These Terms and Conditions govern your access to and use of our website, services, and products. By using our website, you agree to comply with and be bound by these terms. If you do not agree to these Terms and Conditions, you should not use our services. We reserve the right to modify these terms at any time, and any changes will be posted on this page. Your continued use of the site after any modifications indicates your acceptance of the updated Terms and Conditions.
        </p>

        <h2 className="text-2xl font-['Anton'] text-black dark:text-white">Information We Collect</h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          We collect information that you provide directly to us, such as when you create an account, make a purchase, or communicate with us. This information may include your name, email address, phone number, payment information, and any other details you choose to provide.
        </p>

        <h2 className="text-2xl font-['Anton'] text-black dark:text-white">How We Use Your Information</h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          We use the information we collect to process transactions, personalize your experience, improve our website, provide customer support, and communicate with you about products, services, and promotions. We may also use your information for analytics to enhance the functionality and performance of our services.
        </p>

        <h2 className="text-2xl font-['Anton'] text-black dark:text-white">How We Disclose Your Information</h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          We may share your information with trusted third-party service providers who assist us in operating our business, such as payment processors and shipping companies. We ensure these partners handle your data securely and only for purposes aligned with our privacy practices. We may also share information as required by law or to protect our legal rights.
        </p>

        <h2 className="text-2xl font-['Anton'] text-black dark:text-white">Security</h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          We are committed to protecting your information and have implemented industry-standard security measures to prevent unauthorized access, disclosure, alteration, or destruction of your data. While we strive to safeguard your information, please note that no method of electronic storage is 100% secure.
        </p>

        <h2 className="text-2xl font-['Anton'] text-black dark:text-white">Third-Party Websites</h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          Our website may link to external sites with their own policies. We are not responsible for their privacy practices or content of third-party sites.
        </p>

        <h2 className="text-2xl font-['Anton'] text-black dark:text-white">Children's Privacy</h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          Our services are not directed at children under 13, and we do not knowingly collect personal information from children. If we become aware of data collected from children without parental consent, we will take steps to delete it promptly.
        </p>
      </div>
    </div>
  );
};

export default Terms;
