import RedPcLogo from "../assets/redpcph.png";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <div className="inline-flex justify-center items-center gap-1 lg:gap-2">
        <img className="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] md:w-[40px] md:h-[40px] lg:w-[60px] lg:h-[60px]" src={RedPcLogo} />
        <div className="hidden md:block text-xl md:text-2xl lg:text-4xl font-['Anton']">RED PC</div>
      </div>
    </Link>
  );
}
