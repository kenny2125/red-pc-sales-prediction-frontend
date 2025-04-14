import RedPcLogo from "../assets/redpcph.png";
import { FacebookIcon, PhoneIcon, PrinterIcon } from "lucide-react";
import { MailIcon } from "lucide-react";
import { MapPinIcon } from "lucide-react";
import { Outlet, Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <>
      <footer className="w-full py-8 mt-16">
        {/* Main footer content */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Logo section */}
            <div className="flex flex-col items-center md:items-start">
              <Logo />
            </div>

            {/* Contact section */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <h1 className="text-lg font-bold">Contact Us</h1>
              <div className="flex items-center gap-2">
                <PhoneIcon size={16} className="text-primary" />
                <p>Tel: 495-3333, 253-9310, 495-7878, 254-8940, 253-9250, 253-9359, 252-3049</p>
              </div>
              <div className="flex items-center gap-2">
                <PrinterIcon size={16} className="text-primary" />
                <p>Fax: 254-0132</p>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon size={16} className="text-primary" />
                <p>Email: skycos@yahoo.com, acctg.sky@gmail.com</p>
              </div>
            </div>

            {/* Location section */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <h1 className="text-lg font-bold">Location</h1>
              <div className="flex gap-2 max-w-xs">
                <MapPinIcon size={16} className="text-primary flex-shrink-0" />
                <p className="text-sm text-center md:text-left">
                  1618 Felix Deleon Street, Tondo, Manila
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
          © 1618 Office Solutions Inc. All Rights Reserved
        </p>
      </footer>
      <Outlet />
    </>
  );
}
