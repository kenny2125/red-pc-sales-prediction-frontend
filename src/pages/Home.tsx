import gif from "../assets/home-gif.gif";
import PackageSet from "../assets/package-pic.png";
import { Button } from "@/components/ui/button";
import { CircleArrowRight } from "lucide-react";
import brand1 from "../assets/brand-logos/amd.svg";
import brand2 from "../assets/brand-logos/amdradeon.svg";
import brand3 from "../assets/brand-logos/amdryzen.svg";
import brand4 from "../assets/brand-logos/darkflash.svg";
import brand5 from "../assets/brand-logos/gamdias.svg";
import brand6 from "../assets/brand-logos/idcooling.svg";
import brand7 from "../assets/brand-logos/intel.svg";
import brand8 from "../assets/brand-logos/nvidia.svg";
import brand9 from "../assets/brand-logos/nvision.svg";
import brand10 from "../assets/brand-logos/ovation.svg";
import brand11 from "../assets/brand-logos/pny.svg";
import brand12 from "../assets/brand-logos/ramsta.svg";
import brand13 from "../assets/brand-logos/teamgroup.svg";
import PackageCard from "@/components/cards/package-card";
import ProductCard from "@/components/cards/product-card";
import logo from "../assets/redpcph.png";

function Home() {
  const brandImages = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand8,
    brand9,
    brand10,
    brand11,
    brand12,
    brand13,
  ];

  return (
    <main>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url(${gif})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "90vh",
          position: "relative",
          width: "99vw", // Changed from 'full' to '100%'
          marginLeft: "calc(-175px)",
          marginRight: "calc(-175px)",
        }}
      >
        {/* Dark overlay to make background less bright */}
        <div 
          className="absolute inset-0 bg-black opacity-40"
          style={{ zIndex: 1 }}
        ></div>
      
{/* CTO */}
        <div className="relative z-10 flex justify-between px-[5%] md:px-[10%] lg:px-[150px] text-white items-center h-[90vh] w-full">
          <div className="max-w-[600px]">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-7">
              Empowering Your <br /> Digital Experience
            </h1>
            <p className="text-[17px] -2xl">
              Providing Quality Computers and Accessories Across the
              Philippines.
            </p>
            <p className="text-[17px] -2xl">
              Starting at{" "}
              <span className="text-2xl font-bold text-amber-400">₱17,399</span>{" "}
              per computer Set
            </p>
            <Button className="mt-7 font-bold text-2xl p-6 cursor-pointer">
              Shop Now <CircleArrowRight />
            </Button>
          </div>

          <div className="hidden md:block">
            <img
              className="w-[420px] lg:w-[520px] h-auto lg:h-[680px] aspect-[581/822]"
              src={PackageSet}
              alt="Package Set"
            />
          </div>
        </div>
        
      </section>

      {/* Brand Logos Section */}
      <section className="py-[30px]">
        <div className="overflow-hidden self-stretch">
          <div className="flex items-center gap-12 animate-move-left-right">
            {/* First set of logos */}
            {brandImages.map((brand, index) => (
              <img
                key={`first-${index}`}
                className="h-9 self-stretch"
                src={brand}
                alt={`Brand logo ${index + 1}`}
              />
            ))}
            {/* Duplicate set of logos to create seamless loop */}
            {brandImages.map((brand, index) => (
              <img
                key={`second-${index}`}
                className="h-9 self-stretch"
                src={brand}
                alt={`Brand logo ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-evenly ">
        <div className="flex gap-[20px]">
          <div className="flex flex-col items-center ">
            <div className="p-[30px]">
              <h1 className="text-4xl font-bold">INTEL PC BUILDS</h1>
            </div>
            <div className="flex gap-[10px]">
              <PackageCard inCart={false} />
              <PackageCard inCart={false} />
              <PackageCard inCart={false} />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="p-[30px]">
              <h1 className="text-4xl font-bold">AMD PC BUILDS</h1>
            </div>
            <div className="flex gap-[10px]">
              <PackageCard inCart={false} />
              <PackageCard inCart={false} />
              <PackageCard inCart={false} />
            </div>
          </div>
        </div>
        <Button className="text-xl p-5 m-6">See More</Button>
      </section>

      <section className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-10">
          Check our latest product in the store!
        </h1>

        <div className="flex px-15 gap-2.5 mt-8">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>

      <section className="flex flex-col items-center px-[170px] py-7">
        <h1 className="text-4xl font-bold">WHO ARE WE?</h1>
        <div className="flex p-10 items-center gap-10">
          <img className="w-[300px]" src={logo} alt="logo" />
          <p className="text-xl font-bold">
            Founded in 2019, RED PC PH started during the pandemic by selling
            second-hand computer products. Over time, we expanded to offer
            custom-built gaming PCs, budget-friendly computer systems, and
            refurbished devices, along with essential repair and maintenance
            services.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
