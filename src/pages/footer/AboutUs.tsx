import { Check } from "lucide-react";

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center rounded">
        <h1 className="text-4xl font-['Anton'] text-black dark:text-white">About Us</h1>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <h2 className="text-2xl font-['Anton'] text-black dark:text-white">Who We Are</h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          RED PC is a leading provider of custom-built gaming PCs, budget-friendly computer systems, 
          refurbished devices, and repair services. Located in Barangay Sta. Monica, Novaliches, 
          Quezon City, we strive to deliver high-quality technology solutions for gamers and professionals alike.
        </p>

        <h2 className="text-2xl font-['Anton'] text-black dark:text-white">What We Offer</h2>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Check className="text-green-500" />
            <p className="text-gray-700 dark:text-gray-300">Custom-built gaming PCs tailored to your needs</p>
          </div>
          <div className="flex items-center gap-2">
            <Check className="text-green-500" />
            <p className="text-gray-700 dark:text-gray-300">Reliable PC repair and upgrade services</p>
          </div>
          <div className="flex items-center gap-2">
            <Check className="text-green-500" />
            <p className="text-gray-700 dark:text-gray-300">High-quality accessories for gaming and work</p>
          </div>
        </div>

        <h2 className="text-2xl font-['Anton'] text-black dark:text-white">Why Choose Us?</h2>
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          At RED PC, we prioritize customer satisfaction, ensuring that every product meets our strict quality standards. 
          Whether you're a gamer, a student, or a professional, we have the perfect solution for your computing needs.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
