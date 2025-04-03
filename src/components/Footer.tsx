import RedPcLogo from "../assets/redpcph.png";
import { FacebookIcon } from "lucide-react";
import { MailIcon } from "lucide-react";
import { MapPinIcon } from "lucide-react";
import { Outlet, Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="w-full py-8 mt-16">
        {/* Main footer content */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Logo section */}
            <div className="flex flex-col items-center md:items-start">
              <Link to="/" className="flex flex-col items-center md:items-start">
                <img className="w-[76px] h-[76px]" src={RedPcLogo} alt="RED PC Logo" />
                <div className="text-2xl font-['Anton']">RED PC</div>
              </Link>
            </div>

            {/* Contact section */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <h1 className="text-lg font-bold">Contact Us</h1>
              <div className="flex items-center gap-2">
                <FacebookIcon size={24} className="text-primary" />
                <p>Red PC PH</p>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon size={24} className="text-primary" />
                <p>redpcnova2020@gmail.com</p>
              </div>
            </div>

            {/* Location section */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <h1 className="text-lg font-bold">Location</h1>
              <div className="flex gap-2 max-w-xs">
                <MapPinIcon size={24} className="text-primary flex-shrink-0" />
                <p className="text-sm text-center md:text-left">
                  Blk 3 Lot 21, Jamaica Street, Foresthills Subdivision, Brgy.
                  Santa Monica, Novaliches, Quezon City
                </p>
              </div>
            </div>

            {/* Links section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex flex-col items-center md:items-start gap-2">
                <h1 className="text-lg font-bold">Who are we?</h1>
                <div className="flex flex-col items-center md:items-start gap-2">
                  <Link to="/about-us">About Us</Link>
                  <Link to="/faq">FAQ</Link>
                  <Link to="/contact-us">Contact Us</Link>
                </div>
              </div>
              
              <div className="flex flex-col items-center md:items-start gap-2">
                <h1 className="text-lg font-bold">Legal Terms</h1>
                <div className="flex flex-col items-center md:items-start gap-2">
                  <Link to="/terms&conditions">Terms & Conditions</Link>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </div>
              </div>
              
              <div className="flex flex-col items-center md:items-start gap-2">
                <h1 className="text-lg font-bold">Others</h1>
                <div className="flex flex-col items-center md:items-start gap-2">
                  <Link to="/purchasing-guide">Purchasing Guide</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright section */}
        <p className="text-center py-8 mt-4">
          © 2025 RED PC Computer Company All Rights Reserved.
        </p>
      </footer>
      <Outlet />
    </>
  );
}
