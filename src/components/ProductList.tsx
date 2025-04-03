import React from 'react'
import ProductCard from './cards/ProductCard'

export default function ProductList() {
  // Logic for sorting products would go here
  // For a real implementation, we would sort the products array based on nameSort and priceSort values

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 w-full">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>  
        <ProductCard/>  
        <ProductCard/>  
        <ProductCard/>  
        <ProductCard/>  
      </div>
    </>
  )
}
