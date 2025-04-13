import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";
import brand1 from "@/assets/brand-logos/nvidia.svg";
import sample from "@/assets/sample5090.jpg";
import { Button } from "@/components/ui/button";
import ProductList from "@/components/ProductList";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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

function ProductDetail() {
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { currentUser } = useUser();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productId = searchParams.get("id");
        if (!productId) {
          setError("Product ID not provided");
          return;
        }

        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/product/${productId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load product');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [searchParams]);

  if (loading) {
    return <div className="w-full text-center py-8">Loading product details...</div>;
  }

  if (error || !product) {
    return <div className="w-full text-center py-8 text-red-500">{error || 'Product not found'}</div>;
  }

  // Format price using Intl.NumberFormat for consistent formatting
  const formattedPrice = new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(product.store_price);

  const renderActionButton = () => {
    if (!currentUser) return null;
    
    if (currentUser.role === "admin") {
      return <Button className="w-32">View</Button>;
    } else {
      return <Button className="w-32">Add to Cart</Button>;
    }
  };

  return (
    <>
      {/* Desktop Layout: visible on md and above */}
      <div className="hidden md:flex flex-col gap-4">
        {/* Brand and name */}
        <div className="flex flex-row gap-4 items-center">
          <img className="dark:invert h-9 hid" src={brand1} alt="" />
          <p className="text-base md:text-4xl truncate">
            {product.product_name}
          </p>
        </div>
        {/* Details Row */}
        <div className="flex flex-row gap-4 ">
          {/* Info */}
          <div className="flex flex-col w-full h-full justify-center items-center">
            <div className="w-full text-center">
              <img
                src={product.image_url || sample}
                className="h-[480px] w-full rounded-2xl object-cover mb-4"
                alt={product.product_name}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = sample;
                }}
              />
              <h1 className="text-4xl font-bold mb-4">{formattedPrice}</h1>
              <div className="flex flex-row gap-4 justify-center">
                {renderActionButton()}
              </div>
            </div>
          </div>
        </div>
        <ProductList />
      </div>

      {/* Mobile Layout: visible on small devices */}
      <div className="md:hidden flex flex-col gap-4">
        {/* Info part comes first */}
        <div className="w-full text-center p-4">
          <img
            src={product.image_url || sample}
            className="h-[300px] w-full rounded-2xl object-cover mb-4"
            alt={product.product_name}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = sample;
            }}
          />
          <div className="flex flex-row gap-4 items-center p-4">
            <p className="text-base md:text-4xl">
              {product.product_name}
            </p>
          </div>
          <h1 className="text-4xl font-bold mb-4">{formattedPrice}</h1>
          <div className="flex flex-row gap-4 justify-center">
            {renderActionButton()}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
