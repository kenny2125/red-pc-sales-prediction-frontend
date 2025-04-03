import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import packageSet from "@/assets/package-set.png";
import {
  Cpu,
  MemoryStick,
  CircuitBoard,
  MonitorSmartphone,
  CheckSquare,
  Square,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

export default function PackageDetail() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4">
          <div className="flex flex-col w-full h-full justify-center items-center">
            <div className="w-full text-center items-center justify-center">
              <div className="flex justify-center mb-4">
                <img
                  src={packageSet}
                  className="h-xl w-xl rounded-2xl object-cover aspect-square"
                  alt="Package set"
                />
              </div>
              <h1 className="text-4xl font-bold mb-4">Php 145,800</h1>
              <div className="flex flex-row gap-4 justify-center">
                <Button variant="destructive" className="w-32">
                  Add to Cart
                </Button>
                <Button className="w-32">Buy Now</Button>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="w-full">
              <Card>
                <CardHeader className="text-4xl truncate">
                  Ryzen 5 Full Setup
                </CardHeader>
              </Card>
            </div>
            <div>
              <Card className="p-4">
                <CardTitle>Description:</CardTitle>
                <CardContent>
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
                <CardDescription>
                  This is the actual description from the product page
                </CardDescription>
              </Card>
            </div>
            <div className="pt-4 ">
              <Card className="flex flex-row items-center align-top p-4">
                <RadioGroup defaultValue="option-one">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one">G-Cash (Paymongo)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
                    <Label htmlFor="option-two">Cash on Delivery</Label>
                  </div>
                </RadioGroup>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
