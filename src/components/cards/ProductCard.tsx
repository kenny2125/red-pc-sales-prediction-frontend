import React, { useState } from 'react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { ShoppingCart, Eye, Trash2 } from 'lucide-react'
import defaultImage from '@/assets/redpcph.png'
import { useUser } from "@/contexts/UserContext"

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
  const { currentUser } = useUser();
  
  function handleCardClick() {
    navigate(`/product?id=${product.product_id}`);
  }

  function handleActionClick(e: React.MouseEvent) {
    e.stopPropagation();
    if (currentUser?.role === 'admin') {
      // Handle view action for admin
      navigate(`/product?id=${product.product_id}`);
    } else {
      // Handle cart action for other users
      setIsInCart(!isInCart);
    }
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
      className="w-full max-w-[280px] flex flex-col justify-between h-full cursor-pointer transition-all hover:shadow-lg hover:scale-[1.02] active:scale-100"
      onClick={handleCardClick}
    >
      <CardContent className="p-4 flex flex-col gap-4">
        <div className="aspect-square w-full relative bg-background/50 flex items-center justify-center">
          <img 
            src={imageError ? defaultImage : product.image_url} 
            alt={product.product_name} 
            className="max-w-full max-h-full w-auto h-auto object-contain"
            onError={() => setImageError(true)}
          />
        </div>
        <div className='space-y-2'>
          <h3 className='font-medium text-sm sm:text-base min-h-[2.5rem] line-clamp-2 text-center'>
            {product.product_name}
          </h3>
          <p className='text-lg sm:text-xl md:text-2xl font-bold text-center text-primary'>
            {formattedPrice}
          </p>
        </div>
      </CardContent>
      <CardFooter className="px-4 pb-4 pt-0">
        <Button 
          variant={isInCart ? "destructive" : "default"} 
          size="sm" 
          onClick={handleActionClick}
          className="w-full flex items-center justify-center gap-2"
        >
          {currentUser?.role === 'admin' ? (
            <>
              <Eye size={16} />
              <span>View Details</span>
            </>
          ) : (
            <>
              {isInCart ? (
                <>
                  <Trash2 size={16} />
                  <span>Remove from Cart</span>
                </>
              ) : (
                <>
                  <ShoppingCart size={16} />
                  <span>Add to Cart</span>
                </>
              )}
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProductCard