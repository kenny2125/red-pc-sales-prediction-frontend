import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import brand1 from "../assets/brand-logos/nvidia.svg";
import sample from "../assets/sample5090.jpg";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

function Product() {
  const brandImages = [brand1];
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4">
          <div className="w-fit self-stretch">
            <Card>
              <CardContent>
                <img className="dark:invert" src={brand1} alt="" />
              </CardContent>
            </Card>
          </div>
          <div className="w-full">
            <Card>
              <CardHeader className="text-4xl truncate">
                NVIDIA GeForce RTX 5090 Founder's Edition 32GB GDDR7 2.9ghz
              </CardHeader>
            </Card>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex flex-col justify-around w-full h-full ">
            <div>
              <Card className="p-4">
                <CardTitle>Specification: </CardTitle>
                <CardContent>
                  Size: 274x120x27mm Fan Specs Fan Size: 120x120x25mm Fan Speed:
                  600~2000 ±10%RPM Headers: 4pin (pmw) + 3pin ARGB Hydraulic
                  bearings Size: 274x120x27mm Fan Specs Fan Size: 120x120x25mm
                  Fan Speed: 600~2000 ±10%RPM Headers: 4pin (pmw) + 3pin ARGB
                  Hydraulic bearings Size: 274x120x27mm Fan Specs Fan Size:
                  120x120x25mm Fan Speed: 600~2000 ±10%RPM Headers: 4pin (pmw) +
                  3pin ARGB Hydraulic bearings Size: 274x120x27mm Fan Specs Fan
                  Size: 120x120x25mm Fan Speed: 600~2000 ±10%RPM Headers: 4pin
                  (pmw) + 3pin ARGB Hydraulic bearings Size: 274x120x27mm Fan
                  Specs Fan Size: 120x120x25mm Fan Speed: 600~2000 ±10%RPM
                  Headers: 4pin (pmw) + 3pin ARGB Hydraulic bearings
                </CardContent>
                <CardDescription>
                  This is the specificatoins of the product
                </CardDescription>
              </Card>
            </div>
            <div className="flex justify-between pt-4">
              <img
                src={sample}
                className="h-[160px] w-[160px] rounded-2xl"
                alt=""
              />
              <img
                src={sample}
                className="h-[160px] w-[160px] rounded-2xl"
                alt=""
              />
              <img
                src={sample}
                className="h-[160px] w-[160px] rounded-2xl"
                alt=""
              />
            </div>
          </div>

          <div className="flex flex-col w-full h-full justify-center items-center">
            <div>
              <img src={sample} className="h-[480px] w-full rounded-2xl" alt="" />
              <h1>Php 145,800</h1>
              <div className="flex flex-row ">
                <Button variant={"destructive"} >
                  {" "}
                  Add to Cart
                </Button>
                <Button > Buy Now</Button>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div>
              <Card className="p-4">
                <CardTitle>Description:</CardTitle>
                <CardContent>
                  The NVIDIA® GeForce RTX™ 5090 is the most powerful GeForce GPU
                  ever made, bringing game-changing capabilities to gamers and
                  creators. Tackle the most advanced models and most challenging
                  creative workloads with unprecedented AI horsepower. Game with
                  full ray tracing and the lowest latency. The GeForce RTX 5090
                  is powered by the NVIDIA Blackwell architecture and equipped
                  with 32 GB of super-fast GDDR7 memory, so you can do it all.
                  The NVIDIA® GeForce RTX™ 5090 is the most powerful GeForce GPU
                  ever made, bringing game-changing capabilities to gamers and
                  creators. Tackle the most advanced models and most challenging
                  creative workloads with unprecedented AI horsepower. Game with
                  full ray tracing and the lowest latency. The GeForce RTX 5090
                  is powered by the NVIDIA Blackwell architecture and equipped
                  with 32 GB of super-fast GDDR7 memory, so you can do it all.
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

export default Product;
