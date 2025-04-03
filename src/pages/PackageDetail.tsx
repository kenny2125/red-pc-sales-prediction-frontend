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
    <div className="container mx-auto px-4 py-6 max-w-6xl">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Product Image and Price Section */}
          <div className="flex flex-col w-full md:w-1/2 h-full justify-center items-center">
            <div className="w-full text-center">
              <div className="flex justify-center mb-6">
                <img
                  src={packageSet}
                  className="w-full max-w-md rounded-2xl object-cover aspect-square shadow-md"
                  alt="Package set"
                />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Php 145,800</h1>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="destructive" className="w-full sm:w-auto px-6">
                  Add to Cart
                </Button>
                <Button className="w-full sm:w-auto px-6">Buy Now</Button>
              </div>
            </div>
          </div>

          {/* Product Details Section */}
          <div className="w-full md:w-1/2 space-y-4">
            <Card className="shadow-sm">
              <CardHeader className="pb-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold truncate">
                  Ryzen 5 Full Setup
                </h2>
              </CardHeader>
            </Card>
            
            <Card className="shadow-sm">
              <div className="p-4 sm:p-6">
                <CardTitle className="mb-4">Description:</CardTitle>
                <CardContent className="p-0">
                  <div className="flex gap-3">
                    <div className="flex flex-col gap-2">
                      <Cpu className="h-6 w-auto text-primary" />
                      <CircuitBoard className="h-6 w-auto text-primary" />
                      <MemoryStick className="h-6 w-auto text-primary" />
                      <MonitorSmartphone className="h-6 w-auto text-primary" />
                    </div>

                    <div className="flex flex-col gap-2">
                      <p className="text-sm sm:text-base">Ryzen 7 5700g</p>
                      <p className="text-sm sm:text-base font-bold">Gigabyte B450m</p>
                      <p className="text-sm sm:text-base">Corsair DDR4 2666mhz</p>
                      <p className="text-sm sm:text-base">Radeon Vega 8</p>
                    </div>
                  </div>
                </CardContent>
                <CardDescription className="mt-4 text-sm">
                  This is the actual description from the product page
                </CardDescription>
              </div>
            </Card>
            

          </div>
        </div>
      </div>
    </div>
  );
}
