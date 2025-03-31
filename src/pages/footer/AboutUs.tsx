import { Check } from "lucide-react";

const AboutUs: React.FC = () => {
  return (
    <div>
      <div className="text-center rounded justify-self-stretch">
        <h1 className="text-4xl  font-['Anton']">About Us</h1>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl  font-['Anton']">Who We Are</h2>
        <p>
          RED PC is a leading provider of custom-built gaming PCs,
          budget-friendly computer systems, refurbished devices, and repair
          services. Located in Barangay Sta. Monica, Novaliches, Quezon City, we
          strive to deliver high-quality technology solutions for gamers and
          professionals alike.
        </p>

        <h2 className="text-2xl  font-['Anton']">
          EME LANG TO WALA PANG ABOUT US
        </h2>
        <p>BLA BLA BLA BLE BLE BLE HAP BLU BLU BLU BLU</p>

        <h2 className="text-2xl  font-['Anton']">What We Offer</h2>
        <div>
          <div className="flex flex-row">
            <Check />
            <p>Custom-built gaming PCs tailored to your needs</p>
          </div>
          <div className="flex flex-row">
            <Check />
            <p>Reliable PC repair and upgrade services</p>
          </div>
          <div className="flex flex-row">
            <Check />
            <p>High-quality accessories for gaming and work</p>
          </div>
        </div>

        <h2 className="text-2xl  font-['Anton']">Why Choose Us?</h2>
        <p>
          At RED PC, we prioritize customer satisfaction, ensuring that every
          product meets our strict quality standards. Whether you're a gamer, a
          student, or a professional, we have the perfect solution for your
          computing needs.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
