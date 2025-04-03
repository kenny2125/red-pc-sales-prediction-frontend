import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import brand1 from "@/assets/brand-logos/nvidia.svg";
import sample from "../assets/sample5090.jpg";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import ProductList from "@/components/ProductList";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

function ProductDetail() {
  return (
    <>
      {/* Desktop Layout: visible on md and above */}
      <div className="hidden md:flex flex-col gap-4">
        {/* Brand and name */}
        <div className="flex flex-row gap-4 items-center">
          <img className="dark:invert h-9 hid" src={brand1} alt="" />
          <p className="text-base md:text-4xl truncate">
            NVIDIA GeForce RTX 5090 Founder's Edition 32GB GDDR7 2.9ghz
          </p>
        </div>
        {/* Details Row */}
        <div className="flex flex-row gap-4 ">
          {/* Specs */}
          <div className="flex flex-col justify-around w-full h-full">
            <Card className="p-4">
              <CardTitle>Specification: </CardTitle>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <strong>GPU:</strong> NVIDIA Blackwell GB202
                  </li>
                  <li>
                    <strong>CUDA Cores:</strong> 24,576
                  </li>
                  <li>
                    <strong>Memory:</strong> 32GB GDDR7
                  </li>
                  <li>
                    <strong>Memory Interface:</strong> 512-bit
                  </li>
                  <li>
                    <strong>Memory Bandwidth:</strong> 1.7 TB/s
                  </li>
                  <li>
                    <strong>Base Clock:</strong> 2.3 GHz
                  </li>
                  <li>
                    <strong>Boost Clock:</strong> 2.9 GHz
                  </li>
                  <li>
                    <strong>RT Cores:</strong> 3rd Generation
                  </li>
                  <li>
                    <strong>Tensor Cores:</strong> 5th Generation
                  </li>
                  <li>
                    <strong>TDP:</strong> 600W
                  </li>
                  <li>
                    <strong>Power Connectors:</strong> 2x 16-pin PCIe 5.0
                  </li>
                  <li>
                    <strong>Size:</strong> 274x120x27mm
                  </li>
                  <li>
                    <strong>Cooling:</strong> Triple-fan vapor chamber design
                  </li>
                  <li>
                    <strong>Display Outputs:</strong> 3x DisplayPort 2.1, 1x
                    HDMI 2.1a
                  </li>
                  <li>
                    <strong>PCIe Interface:</strong> Gen 5.0 x16
                  </li>
                </ul>
              </CardContent>
              <CardDescription>
                This is the specificatoins of the product
              </CardDescription>
            </Card>
          </div>
          {/* Info */}
          <div className="flex flex-col w-full h-full justify-center items-center">
            <div className="w-full text-center">
              <img
                src={sample}
                className="h-[480px] w-full rounded-2xl object-cover mb-4"
                alt=""
              />
              <h1 className="text-4xl font-bold mb-4">Php 145,800</h1>
              <div className="flex flex-row gap-4 justify-center">
                <Button className="w-32">Add to Cart</Button>
              </div>
            </div>
          </div>
          {/* Description & Payment */}
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
            <div className="pt-4">
              <Card>
                <CardContent>
                  <CardHeader>Available Payment Methods</CardHeader>
                  <CardDescription>
                    <h1>G-Cash</h1>
                    <h1>Cash on Delivery</h1>
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <ProductList />
      </div>

      {/* Mobile Layout: visible on small devices */}
      <div className="md:hidden flex flex-col gap-4">
        {/* Info part comes first */}
        <div className="w-full text-center  p-4">
          <img
            src={sample}
            className="h-[300px] w-full rounded-2xl object-cover mb-4"
            alt=""
          />
          <div className="flex flex-row gap-4 items-center  p-4">
            <p className="text-base md:text-4xl ">
              NVIDIA GeForce RTX 5090 Founder's Edition 32GB GDDR7 2.9ghz
            </p>
          </div>
          <h1 className="text-4xl font-bold mb-4">Php 145,800</h1>
          <div className="flex flex-row gap-4 justify-center">
            <Button className="w-32">Add to Cart</Button>
          </div>
        </div>

        {/* Specs and Description Tabs */}
        <div className="">
          <Tabs defaultValue="specs">
            <TabsList>
              <TabsTrigger value="specs">Specs</TabsTrigger>
              <TabsTrigger value="description">Description</TabsTrigger>
            </TabsList>
            <TabsContent value="specs">
              <div className="p-4">
                <Card className="p-4">
                  <CardTitle>Specification: </CardTitle>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>
                        <strong>GPU:</strong> NVIDIA Blackwell GB202
                      </li>
                      <li>
                        <strong>CUDA Cores:</strong> 24,576
                      </li>
                      <li>
                        <strong>Memory:</strong> 32GB GDDR7
                      </li>
                      <li>
                        <strong>Memory Interface:</strong> 512-bit
                      </li>
                      <li>
                        <strong>Memory Bandwidth:</strong> 1.7 TB/s
                      </li>
                      <li>
                        <strong>Base Clock:</strong> 2.3 GHz
                      </li>
                      <li>
                        <strong>Boost Clock:</strong> 2.9 GHz
                      </li>
                      <li>
                        <strong>RT Cores:</strong> 3rd Generation
                      </li>
                      <li>
                        <strong>Tensor Cores:</strong> 5th Generation
                      </li>
                      <li>
                        <strong>TDP:</strong> 600W
                      </li>
                      <li>
                        <strong>Power Connectors:</strong> 2x 16-pin PCIe 5.0
                      </li>
                      <li>
                        <strong>Size:</strong> 274x120x27mm
                      </li>
                      <li>
                        <strong>Cooling:</strong> Triple-fan vapor chamber
                        design
                      </li>
                      <li>
                        <strong>Display Outputs:</strong> 3x DisplayPort 2.1, 1x
                        HDMI 2.1a
                      </li>
                      <li>
                        <strong>PCIe Interface:</strong> Gen 5.0 x16
                      </li>
                    </ul>
                  </CardContent>
                  <CardDescription>
                    This is the specificatoins of the product
                  </CardDescription>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="description">
              <div className="p-4">
                <Card className="p-4">
                  <CardTitle>Description:</CardTitle>
                  <CardContent>
                    The NVIDIA® GeForce RTX™ 5090 is the most powerful GeForce
                    GPU ever made, bringing game-changing capabilities to gamers
                    and creators. Tackle the most advanced models and most
                    challenging creative workloads with unprecedented AI
                    horsepower. Game with full ray tracing and the lowest
                    latency. The GeForce RTX 5090 is powered by the NVIDIA
                    Blackwell architecture and equipped with 32 GB of super-fast
                    GDDR7 memory, so you can do it all. The NVIDIA® GeForce RTX™
                    5090 is the most powerful GeForce GPU ever made, bringing
                    game-changing capabilities to gamers and creators. Tackle
                    the most advanced models and most challenging creative
                    workloads with unprecedented AI horsepower. Game with full
                    ray tracing and the lowest latency. The GeForce RTX 5090 is
                    powered by the NVIDIA Blackwell architecture and equipped
                    with 32 GB of super-fast GDDR7 memory, so you can do it all.
                  </CardContent>
                  <CardDescription>
                    This is the actual description from the product page
                  </CardDescription>
                </Card>
                <div className="pt-4">
                  <Card>
                    <CardContent>
                      <CardHeader>Available Payment Methods</CardHeader>
                      <CardDescription>
                        <h1>G-Cash</h1>
                        <h1>Cash on Delivery</h1>
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="mt-8">
        <ProductList />
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
