import RedPcLogo from "../assets/redpcph.png";

export default function Logo() {
  return (
    <div className="inline-flex justify-center items-center gap-2">
    <img className="w-[76.13px] h-[76px]" src={RedPcLogo} />
    <div className="text-4xl  font-['Anton']">RED PC</div>
  </div>
  )
}
