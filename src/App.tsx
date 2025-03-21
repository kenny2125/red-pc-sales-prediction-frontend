import { useState } from 'react'
import './App.css'
import Cards from './components/cards/package-card'
import PackageCard from './components/cards/package-card'
import ProductCard from './components/cards/product-card'
import UserCard from './components/cards/user-card'

import {Component} from './components/Chart'

function App() {
  
  return (
    <>
    
      <div className="flex gap-2 p-11">
        
        <div className='w-lg'>
        <Component />
        </div>
        
        <Cards />
        
        <PackageCard />
      <ProductCard />
      <UserCard />
        
        
      </div>
    </>
  )
}

export default App
