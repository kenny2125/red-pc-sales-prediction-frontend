import React, { useState } from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { ShoppingCart, Trash2 } from 'lucide-react'
import defaultImage from '@/assets/redpcph.png'

interface ProductCardProps {
  product: {
    product_id: string;
    image_url: string;
    product_name: string;
    store_price: number;
  }
}

function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();
  const [isInCart, setIsInCart] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  function handleCardClick() {
    navigate(`/product?id=${product.product_id}`);
  }

  function handleAddToCart(e: React.MouseEvent) {
    e.stopPropagation();
    setIsInCart(!isInCart);
  }

  // Format price using Intl.NumberFormat for consistent formatting
  const formattedPrice = new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(product.store_price);

  return (
    <Card 
      className="w-full max-w-[250px] flex flex-col items-center p-2 gap-2 cursor-pointer transition-all hover:shadow-lg hover:scale-105 active:scale-100"
      onClick={handleCardClick}
    >
      <CardContent className="p-2 flex flex-col items-center flex-grow overflow-hidden">
        <img 
          src={imageError ? defaultImage : product.image_url} 
          alt={product.product_name} 
          className="object-contain w-full h-48"
          onError={() => setImageError(true)}
        />
        <div className='flex flex-col items-center'>
          <p className='text-sm font-bold line-clamp-2'>{product.product_name}</p> 
        </div>
      </CardContent>
      <CardFooter className="p-2 w-full flex justify-between items-center">
        <h1 className='text-xl font-bold text-anton'>{formattedPrice}</h1>
        <Button 
          variant={isInCart ? "destructive" : "default"} 
          size="sm" 
          onClick={handleAddToCart}
        >
          {isInCart ? <Trash2 size={16} /> : <ShoppingCart size={16} />}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProductCard