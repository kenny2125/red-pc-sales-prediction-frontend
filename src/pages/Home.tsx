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
import ProductCard from "@/components/cards/ProductCard";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

interface Product {
  product_id: string;
  category: string;
  brand: string;
  product_name: string;
  status: string;
  quantity: number;
  store_price: number;
  image_url: string;
}

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/product`);
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        // Take only the first 12 products for the homepage display
        setProducts(data.slice(0, 12));
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
      <Helmet>
        <title>Home - 1618 Office Solutions</title>
      </Helmet>    


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



      <section className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-10 text-center">
          Check our latest product in the store!
        </h1>
        {/* Responsive grid container for Product Cards */}
        <div className="w-full max-w-[90vw] mt-8">
          {loading ? (
            <div className="flex items-center justify-center w-full py-8">
              Loading products...
            </div>
          ) : products.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-4">
              {products.map((product) => (
                <ProductCard key={product.product_id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center w-full py-8">
              No products available
            </div>
          )}
        </div>
        <Button
          className="text-xl p-5 m-6"
          onClick={() => {
            window.location.href = "/search";
          }}
        >
          See More Products <CircleArrowRight className="ml-2" />
        </Button>
      </section>
      
    </main>
  );
}

export default Home;
