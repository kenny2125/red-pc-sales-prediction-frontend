import '@/App.css'
import { ThemeProvider } from "@/components/theme-provider"
import PackageCard from '@/components/cards/package-card'
import ProductCard from '@/components/cards/product-card'
import UserCard from '@/components/cards/user-card'
import  {LineChartView}  from "@/components/LineChartMultiple"
import { PieChartDonut } from "@/components/PieChartDonut"
import { TableDemo } from '@/components/Table'
import { LineChartInteractive } from '@/components/LineChartInterative'
import Navbar05Page from './components/navbar-05/navbar-05'
import Navbar01Page from './components/navbar-01/navbar-01'

function App() {
  
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

      <div className="flex flex-wrap gap-2 p-11">
        < Navbar05Page/>
        {/* < Navbar01Page /> */}
        <div className='w-lg'>
        <LineChartView />
        </div>        
        
        <PackageCard />
        <ProductCard />
        <UserCard />
        <PieChartDonut/>
        <TableDemo/>
        <div className='w-full'>
        <LineChartInteractive/>
        </div>
        
      </div>
      </ThemeProvider>
    </>
  )
}

export default App
