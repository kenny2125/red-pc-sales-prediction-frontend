import packageSet from '../../assets/package-set.png';
import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Cpu, MemoryStick, CircuitBoard, MonitorSmartphone, CheckSquare, Square } from "lucide-react";

function PackageCard({inCart}) {
  const [check, setCheck] = useState(false)

  const toggleCheck = () => {
    setCheck(!check)
  }

  return (
    <Card className="w-[240px] bg-prodcard rounded-[20px] shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)]">
      <CardHeader className="p-2 pb-0 space-y-0">
        <div className="relative">
          {inCart && 
            <div className="absolute top-1 left-1 cursor-pointer" onClick={toggleCheck}>
              {check ? <CheckSquare className="w-[42px] h-[42px]" /> : <Square className="w-[42px] h-[42px]" />}
            </div>
          }
          <img src={packageSet} alt="package img" className="w-full" />
          <h3 className="text-[14px] text-center font-bold mt-1">RYZEN 7 5700g Full PC Set</h3>
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
        <h1 className='text-xl font-bold text-anton'>₱17,399</h1>
      </CardFooter>
    </Card>
  )
}

export default PackageCard