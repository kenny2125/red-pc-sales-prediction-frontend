import { UserProvider } from "./contexts/UserContext";
import Header from './components/Header'
import Footer from "./components/Footer"
import { ThemeProvider } from "@/components/theme-provider"
import PackageCard from '@/components/cards/package-card'
import ProductCard from '@/components/cards/product-card'
import UserCard from '@/components/cards/user-card'
import  {LineChartView}  from "@/components/charts/LineChartMultiple"
import { PieChartDonut } from "@/components/charts/PieChartDonut"
import { TableDemo } from '@/components/Table'
import { LineChartInteractive } from '@/components/charts/LineChartInterative'



function App() {
  // For development for noiw "customer", "admin", or null
  const devUserType = "admin"; 

  return (
    <UserProvider initialUserType={devUserType}>
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
    </UserProvider>
    
  )
}

export default App
