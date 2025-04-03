import RedPcLogo from "../assets/redpcph.png";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <div className="inline-flex justify-center items-center gap-2">
        <img className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:w-[76px] lg:h-[76px]" src={RedPcLogo} />
        <div className="text-xl md:text-2xl lg:text-4xl font-['Anton']">RED PC</div>
      </div>
    </Link>
  );
}
