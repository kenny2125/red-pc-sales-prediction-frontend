import packageSet from "../../assets/package-set.png";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Cpu,
  MemoryStick,
  CircuitBoard,
  MonitorSmartphone,
  CheckSquare,
  Square,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function PackageCard() {

  const navigate = useNavigate()

   // Hardcoded product ID for now
   const buildsId = "123";
  
   function handleCardClick() {
     navigate(`/build?id=${buildsId}`);
   }
  return (
    <Card className="cursor-pointer transition-all hover:shadow-lg hover:scale-105 active:scale-100"
      onClick={handleCardClick}    >
      <CardHeader className="p-2 pb-0 space-y-0">
        <div className="relative">
          <img src={packageSet} alt="package img" className="w-full" />
          <h3 className="text-[14px] text-center font-bold mt-1">
            RYZEN 7 5700g Full PC Set
          </h3>
        </div>
      </CardHeader>

      <CardContent className="p-3">
        <div className="flex gap-1">
          <div className="flex flex-col gap-0.5">
            <Cpu className="h-[23.9px] w-auto" />
            <CircuitBoard className="h-[23.9px] w-auto" />
            <MemoryStick className="h-[23.9px] w-auto" />
            <MonitorSmartphone className="h-[23.9px] w-auto" />
          </div>

          <div className="flex flex-col gap-[3px]">
            <p className="text-[14px]">Ryzen 7 5700g</p>
            <p className="text-[14px] font-bold">Gigabyte B450m</p>
            <p className="text-[14px]">Corsair DDR4 2666mhz</p>
            <p className="text-[14px]">Radeon Vega 8</p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-2 pt-0 justify-center">
        <p className="text-sm sm:text-base md:text-lg font-semibold text-primary">₱17,399</p>
      </CardFooter>
    </Card>
  );
}

export default PackageCard;
