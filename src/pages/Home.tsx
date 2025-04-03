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
import PackageCard from "@/components/cards/PackageCard";
import ProductCard from "@/components/cards/ProductCard";
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
          position: "relative",
        }}
        className="mx-0 md:mx-[-175px] h-auto md:h-[75vh]"
      >
        {/* Dark overlay to make background less bright */}
        <div
          className="absolute inset-0 bg-black dark:bg-black opacity-100 dark:opacity-100 bg-white/70 dark:bg-black/70"
          style={{ zIndex: 1 }}
        ></div>

        {/* CTO */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-[5%] md:px-[10%] lg:px-[150px] h-full w-full">
          {/* Image container: responsive size and lower z-index on small screens */}
          <div className="order-1 md:order-2 z-0">
            <img
              className="w-full max-w-[250px] md:max-w-md h-auto" // smaller on sm, larger on md+
              src={PackageSet}
              alt="Package Set"
            />
          </div>

          {/* Text container: ensure it remains above the image */}
          <div className="order-2 md:order-1 max-w-[600px] text-center md:text-left z -10 h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-7">
              Empowering Your <br /> Digital Experience
            </h1>
            <p className="text-[17px] -2xl">
              Providing Quality Computers and Accessories Across the Philippines.
            </p>
            <p className="text-[17px] -2xl">
              Starting at <span className="text-2xl font-bold">₱17,399</span> per computer Set
            </p>
            <Button
              className="mt-7 font-bold text-2xl p-6 cursor-pointer"
              onClick={() => {
                window.location.href = "/search";
              }}
            >
              Shop Now <CircleArrowRight  />
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Logos Section */}
      <section className="py-[30px] mt-5">
        <div className="overflow-hidden self-stretch">
          <div className="flex items-center gap-12 animate-move-left-right">
            {/* First set of logos */}
            {brandImages.map((brand, index) => (
              <img
                key={`first-${index}`}
                className="h-9 self-stretch dark:invert"
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

      <section className="flex flex-col items-center my-12">
        <div className="p-[30px]">
          <h1 className="text-4xl font-bold">Check out Computer Builds</h1>
        </div>

        {/* Scrollable container with custom scrollbar */}
        <div className="w-full max-w-[90vw] relative">
          <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-primary scrollbar-track-secondary">
            <div className="flex gap-4 min-w-max px-4">
              <PackageCard />
              <PackageCard />
              <PackageCard />
              <PackageCard />
              <PackageCard />
              <PackageCard />
              <PackageCard />
              <PackageCard />
              <PackageCard />
              <PackageCard />
              <PackageCard />
              <PackageCard />
            </div>
          </div>
        </div>

        <Button
          className="text-xl p-5 m-6"
          onClick={() => {
            window.location.href = "/pc-builds";
          }}
        >
          See More <CircleArrowRight className="ml-2" />
        </Button>
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

      {/* Facebook Page Embed Section */}
      <section className="flex flex-col items-center my-16 px-4">
        <h1 className="text-4xl font-bold mb-8">Connect With Us</h1>
        <div className="flex flex-col items-center gap-8 w-full">
          {/* Timeline embed */}
          <div className="w-full max-w-[500px] rounded-lg overflow-hidden shadow-lg flex justify-center">
            <iframe 
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FREDPCPH&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true" 
              width="500" 
              height="600" 
              style={{ border: 'none', overflow: 'hidden' }} 
              scrolling="no" 
              frameBorder="0" 
              allowFullScreen={true} 
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              title="RED PC Facebook Timeline"            
            ></iframe>
          </div>
          
        </div>
      </section>
      
    </main>
  );
}

export default Home;
