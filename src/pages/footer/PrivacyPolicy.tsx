import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center rounded">
        <h1 className="text-4xl font-['Anton'] text-black dark:text-white">Privacy Policy</h1>
      </div>

      <div className="mt-6 space-y-6">
        <h2 className="text-2xl font-['Anton'] text-black dark:text-white">Privacy Policy</h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          We are a team dedicated to providing exceptional products and services, with a commitment to transparency, 
          privacy, and security for our users. Our goal is to create a seamless experience while ensuring 
          your personal data is protected. This Privacy Policy outlines how we collect, use, and secure your information.
        </p>

        <h3 className="text-xl font-['Anton'] text-black dark:text-white">Personal Information We Collect</h3>

        <h4 className="text-lg font-['Anton'] text-black dark:text-white">Device Information</h4>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          We collect information about the device you use to access our website, including your IP address, 
          browser type, operating system, and device identifiers. This helps us optimize your experience, 
          troubleshoot issues, and secure our platform.
        </p>

        <h4 className="text-lg font-['Anton'] text-black dark:text-white">Cookies</h4>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          Our website uses cookies to enhance your experience. Cookies are small data files stored on your device 
          that remember your preferences and improve site functionality. You can manage cookie preferences in 
          your browser settings.
        </p>

        <h4 className="text-lg font-['Anton'] text-black dark:text-white">Log Files</h4>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          We use log files to record actions on our site, including your IP address, browser type, 
          and interaction with our pages. This data helps us improve site performance and troubleshoot issues.
        </p>

        <h4 className="text-lg font-['Anton'] text-black dark:text-white">Web Beacons, Tags, and Pixels</h4>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          We may use web beacons, tags, and pixels to track user behavior, understand website traffic, 
          and measure the effectiveness of our marketing efforts. This information is used solely for analytics 
          and improving user experience.
        </p>

        <h3 className="text-xl font-['Anton'] text-black dark:text-white">How Do We Use Your Personal Information?</h3>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          We use your personal information to process orders, provide customer support, and improve our services. 
          This may include personalizing your experience, sending updates and promotional materials, and analyzing 
          user behavior to enhance our offerings. We prioritize your privacy and ensure that all uses of your data 
          align with this Privacy Policy.
        </p>

        <h3 className="text-xl font-['Anton'] text-black dark:text-white">Data Retention</h3>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, 
          including providing services, maintaining your account, and complying with legal obligations. Once your information 
          is no longer needed, we securely delete or anonymize it.
        </p>

        <h3 className="text-xl font-['Anton'] text-black dark:text-white">Data Privacy Changes</h3>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          We may occasionally update this Privacy Policy to reflect changes in our practices or legal requirements. 
          Any updates will be posted on this page, and we encourage you to review it periodically. Your continued use 
          of our services after policy changes signifies your acceptance of the revised terms.
        </p>

        <h3 className="text-xl font-['Anton'] text-black dark:text-white">Security of Your Information</h3>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          We take your security seriously and implement multiple security measures to protect your personal information. 
          These measures include encryption, firewalls, and secure server environments. While we strive to safeguard your data, 
          please note that no method of transmission over the internet or electronic storage is 100% secure. However, we remain 
          committed to keeping your data as secure as possible.
        </p>

        <h3 className="text-xl font-['Anton'] text-black dark:text-white">Policy for Children</h3>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          At RED PC, we value the privacy and protection of children who use our services. This Children's Privacy Policy 
          outlines how we collect, use, and secure personal information from children under the age of 13 in accordance with 
          applicable privacy laws.
        </p>

        <p className="leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
          Depending on your location, you may have certain rights regarding your personal information, such as the right to 
          access, correct, or delete your data. If you have any concerns, please contact us at{" "}
          <span className="text-orange-500">redpccomputer@gmail.com</span>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
