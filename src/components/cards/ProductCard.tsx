import product from '../../assets/product.png'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useNavigate } from 'react-router-dom'

function ProductCard() {
  const navigate = useNavigate();
  
  // Hardcoded product ID for now
  const productId = "123";
  
  function handleCardClick() {
    navigate(`/product?id=${productId}`);
  }

  return (
    <Card 
      className="h-[332px] w-[220px] flex flex-col items-center p-2 gap-2 cursor-pointer transition-all hover:shadow-lg hover:scale-105 active:scale-100"
      onClick={handleCardClick}
    >
      <CardContent className="p-2 flex flex-col items-center">
        <img src={product} alt="product image" />
        <div className='flex flex-col items-center'>
          <p className='text-sm font-bold'>GEFORCE RTX 4090 MSI GAMING TRIO 24GB GDDR6X TRIPLE FAN RGB</p> 
        </div>
      </CardContent>
      <CardFooter className="p-2">
        <h1 className='text-xl font-bo text-anton'>₱17,399</h1>
      </CardFooter>
    </Card>
  )
}

export default ProductCard