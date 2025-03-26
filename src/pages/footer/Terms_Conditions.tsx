import React from "react";
import "./Terms_Conditions.css";

const Terms: React.FC = () => {
  return (
    <div className="terms-container">
      <div className="header-banner">
        <h1>Terms & Conditions</h1>
      </div>
      <div className="terms-content">
        <h2>📜 Terms & Conditions</h2>
        <p>These Terms and Conditions govern your access to and use of our website, services, and products. By using our website, you agree to comply with and be bound by these terms. If you do not agree to these Terms and Conditions, you should not use our services. We reserve the right to modify these terms at any time, and any changes will be posted on this page. Your continued use of the site after any modifications indicates your acceptance of the updated Terms and Conditions.</p>

        <h3>Information We Collect</h3>
        <p>We collect information that you provide directly to us, such as when you create an account, make a purchase, or communicate with us. This information may include your name, email address, phone number, payment information, and any other details you choose to provide.</p>

        <h3>How We Use Your Information</h3>
        <p>We use the information we collect to process transactions, personalize your experience, improve our website, provide customer support, and communicate with you about products, services, and promotions. We may also use your information for analytics to enhance the functionality and performance of our services.</p>

        <h3>How We Disclose Your Information</h3>
        <p>We may share your information with trusted third-party service providers who assist us in operating our business, such as payment processors and shipping companies. We ensure these partners handle your data securely and only for purposes aligned with our privacy practices. We may also share information as required by law or to protect our legal rights.</p>
      
        <h3>Security</h3>
        <p>We are committed to protecting your information and have implemented industry-standard security measures to prevent unauthorized access, disclosure, alteration, or destruction of your data. While we strive to safeguard your information, please note that no method of electronic storage is 100% secure.</p>
      
        <h3>Third-Party Websites</h3>
        <p>Our website may link to external sites with their own policies. We are not responsible for their privacy practices or content of third-party sites.</p>
      
        <h3>Childrens Privacy</h3>
        <p>Our services are not directed at children under 13,and we do not knowingly collect personal information from children. If we become aware of data collected from children without parental consent, we will take steps to delete it promtly.</p>
      
      </div>
    </div>
  );
};

export default Terms;