import RedPcLogo from "../assets/redpcph.png";
import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";

export default function Logo() {
  return (
    <Link to="/" aria-label="Home">
      <span className="inline-flex justify-center items-center gap-2">
        <Building2 className="w-8 h-8 text-primary" />
        <span className=" md:block text-xl md:text-2xl lg:text-2xl font-bold">
          1618 Office Solutions Inc.
        </span>
      </span>
    </Link>
  );
}
