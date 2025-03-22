import RedPcLogo from "../assets/redpcph.png";
import { Facebook } from "lucide-react";
import { MailIcon } from "lucide-react";
import { MapPinIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <>
    <div className=" w-full h-[8rem] flex flex-col py-12">
      <div className=" flex flex-row justify-between items-top ">
        <div className="inline-blockitems-start justify-center gap-2">
          <img className="w-[76.13px] h-[76px]" src={RedPcLogo} />
          <div className="text-2xl  font-['Anton']">RED PC</div>
        </div>
        <div className="flex flex-col items-start">
          <div>
            <div className="flex flex-col items-start">
              <h1>Follow Us</h1>
              <Facebook size={35} className="text-primary" />
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
              Novaliches Store Blk 3 lot 21 jamaica street, foresthills subd.,
              brgy. Sta. Monica, novaliches, quezon city, 1117
            </p>
          </div>
        </div>
        <div className="flex flex-row align-top gap-20">
          <div className="flex flex-col items-start">
            <h1>Who are we?</h1>
            <div className="flex flex-col items-start gap-1 w-full">
              <Button variant="link" className="text-foreground" type="submit">
                About Us
              </Button>
              <Button variant="link" className="text-foreground" type="submit">
                FAQ
              </Button>
              <Button variant="link" className="text-foreground" type="submit">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <h1>Legal Terms</h1>
            <div className="flex flex-col items-start gap-1 w-full">
              <Button variant="link" className="text-foreground" type="submit">
                Terms & Conditions
              </Button>
              <Button variant="link" className="text-foreground" type="submit">
                Privacy Policy
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <h1>Others</h1>
            <div className="flex flex-col items-start gap-1 w-full">
              <Button variant="link" className="text-foreground" type="submit">
                Purchasing Guide
              </Button>
            </div>
          </div>
        </div>
      
      </div>
      <p className="flex flex-row justify-center align-middle py-12">© 2025 RED PC Computer Company All Rights Reserved.</p>
    </div>
    
    </>
  );
}
