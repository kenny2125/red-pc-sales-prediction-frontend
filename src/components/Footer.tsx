import RedPcLogo from "../assets/redpcph.png";
import { Facebook, FacebookIcon } from "lucide-react";
import { MailIcon } from "lucide-react";
import { MapPinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Outlet, Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className=" w-full h-[8rem] flex flex-col py-12">
        <div className=" flex flex-row justify-between items-top ">
          <Link to="/">
            <div className="inline-blockitems-start justify-center gap-2">
              <img className="w-[76.13px] h-[76px]" src={RedPcLogo} />
              <div className="text-2xl  font-['Anton']">RED PC</div>
            </div>
          </Link>

          <div className="flex flex-col items-start">
            <div className="inline-block">
              <h1>Contact Us</h1>
              <div className="inline-flex items-center gap-2">
                <FacebookIcon size={35} className="text-primary" />
                <p>Red PC PH</p>
              </div>
            </div>
            <div className="inline-block">
              <h1>Contact Us</h1>
              <div className="inline-flex items-center gap-2">
                <MailIcon size={35} className="text-primary" />
                <p>redpcnova2020@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <h1>Location</h1>
            <div className="inline-flex align-middle gap-2 ">
              <MapPinIcon size={35} className="text-primary" />
              <p className="max-w-3xs">
                Blk 3 Lot 21, Jamaica Street, Foresthills Subdivision, Brgy.
                Santa Monica, Novaliches, Quezon City
              </p>
            </div>
          </div>
          <div className="flex flex-row align-top gap-20">
            <div className="flex flex-col items-start gap-4">
              <h1>Who are we?</h1>
              <div className="flex flex-col items-start gap-4 w-full">
                <Link to="/about-us">About Us</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/contact-us">Contact Us</Link>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <h1>Legal Terms</h1>
              <div className="flex flex-col items-start gap-4 w-full">
                <Link to="/terms&conditions">Terms & Conditions</Link>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4">
              <h1>Others</h1>
              <div className="flex flex-col items-start gap-4 w-full">
                <Link to="/purchasing-guide">Purchasing Guide</Link>
              </div>
            </div>
          </div>
        </div>
        <p className="flex flex-row justify-center align-middle py-12">
          © 2025 RED PC Computer Company All Rights Reserved.
        </p>
      </div>
      <Outlet />
    </>
  );
}
