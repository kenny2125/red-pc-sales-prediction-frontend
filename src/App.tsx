import { ThemeProvider } from "@/components/theme-provider"
import PackageCard from '@/components/cards/package-card'
import ProductCard from '@/components/cards/product-card'
import UserCard from '@/components/cards/user-card'
import  {LineChartView}  from "@/components/LineChartMultiple"
import { PieChartDonut } from "@/components/PieChartDonut"
import { TableDemo } from '@/components/Table'
import { LineChartInteractive } from '@/components/LineChartInterative'
import Header from './components/Header'
import Footer from "./components/Footer"

function App() {
  
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      

      <div className="flex flex-wrap justify-between align-top items-center gap-2 px-[175px]">
      <Header/>  
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
        <Footer/>
      </div>
      </ThemeProvider>
    </>
  )
}

export default App
