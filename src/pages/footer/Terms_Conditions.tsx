import React from "react";
import { LucideScrollText, Info, User, Lock, Share2, Shield, Users } from "lucide-react";

const Terms: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-lg shadow-md">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center gap-2">
          <LucideScrollText className="w-8 h-8 text-primary" /> Terms & Conditions
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-base">Please read our terms and conditions carefully.</p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex items-start gap-4">
          <Info className="w-6 h-6 text-blue-500 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">General Terms</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">By using our website, you agree to comply with and be bound by these terms. We may update these terms at any time. Continued use of the site means you accept any changes.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <User className="w-6 h-6 text-green-500 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Information We Collect</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">We collect information you provide directly, such as when you create an account, make a purchase, or contact us. This may include your name, email, phone, and payment details.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Lock className="w-6 h-6 text-yellow-500 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">How We Use Your Information</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">We use your information to process transactions, personalize your experience, improve our website, provide support, and communicate with you about products and services.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Share2 className="w-6 h-6 text-orange-500 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">How We Share Your Information</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">We may share your information with trusted third-party providers for business operations, or as required by law. We ensure partners handle your data securely.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Shield className="w-6 h-6 text-cyan-500 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Security</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">We use industry-standard security measures to protect your data. No method is 100% secure, but we strive to safeguard your information.</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <Users className="w-6 h-6 text-pink-500 mt-1" />
          <div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Children's Privacy</h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Our services are not directed at children under 13. We do not knowingly collect data from children. If we learn of such data, we will delete it promptly.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
