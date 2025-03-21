import product from '../../assets/product.png'

function ProductCard() {
  return (
    <div className=' flex flex-col rounded-20 h-[332px] w-[220px] p-2.5 bg-prodcard items-center rounded-[20px] gap-2 shadow-[inset_0px_4px_4px_0px_rgba(0,0,0,0.25)]'>
      <img src={product} alt="product image" />
      <div className='flex flex-col items-center'>
        <p className='text-[14px] font-bold'>GEFORCE RTX 4090 MSI</p>
        <p className='text-[14px] font-bold'>GAMING TRIO 24GB GDDR6X</p>
        <p className='text-[14px] font-bold'>TRIPLE FAN RGB</p>
      </div>
      
      <h1 className='text-2xl-anton text-accent'>₱17,399</h1>
    </div>
  )
}

export default ProductCard