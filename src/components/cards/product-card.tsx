import product from '../../assets/product.png'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

function ProductCard() {
  return (
    <Card className="h-[332px] w-[220px] flex flex-col items-center p-2.5 bg-prodcard rounded-[20px] gap-2 shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)]">
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