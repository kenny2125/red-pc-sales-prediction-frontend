import React, { useState } from 'react'
import product from '../../assets/product.png'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useNavigate } from 'react-router-dom'
import { Button } from "@/components/ui/button"

function ProductCard() {
  const navigate = useNavigate();
  const [isInCart, setIsInCart] = useState(false);
  
  // Hardcoded product ID for now
  const productId = "123";
  
  function handleCardClick() {
    navigate(`/product?id=${productId}`);
  }

  function handleAddToCart(e: React.MouseEvent) {
    e.stopPropagation(); // Prevent card click event
    setIsInCart(!isInCart);
    // Here you would also add logic to update a global cart state or context
  }

  return (
    <Card 
      className="w-full aspect-[2/3] flex flex-col items-center p-2 gap-2 cursor-pointer transition-all hover:shadow-lg hover:scale-105 active:scale-100"
      onClick={handleCardClick}
    >
      <CardContent className="p-2 flex flex-col items-center flex-grow overflow-hidden">
        <img src={product} alt="product image" className="object-contain h-full w-auto" />
        <div className='flex flex-col items-center'>
          <p className='text-sm font-bold line-clamp-2'>GEFORCE RTX 4090 MSI GAMING TRIO 24GB GDDR6X TRIPLE FAN RGB</p> 
        </div>
      </CardContent>
      <CardFooter className="p-2 w-full flex justify-between items-center">
        <h1 className='text-xl font-bold text-anton'>₱17,399</h1>
        <Button 
          variant={isInCart ? "destructive" : "default"} 
          size="sm" 
          onClick={handleAddToCart}
        >
          {isInCart ? "Remove from Cart" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProductCard