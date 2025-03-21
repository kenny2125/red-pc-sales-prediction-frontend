import './App.css'
import './components/Header'
import Header from './components/Header'
import PackageCard from './components/Cards/package-card'
import ProductCard from './components/Cards/product-card'

function App() {
  

  return (
    <div className='flex gap-2 p-11'>
      <PackageCard />
      <ProductCard />
    </div>
  )
}

export default App
