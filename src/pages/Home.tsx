import { UserProvider } from "../contexts/UserContext";
import Header from '../components/Header'
import Footer from "../components/Footer"
import PackageCard from '@/components/cards/package-card'
import ProductCard from '@/components/cards/product-card'
import UserCard from '@/components/cards/user-card'
import  {LineChartView}  from "@/components/charts/LineChartMultiple"
import { PieChartDonut } from "@/components/charts/PieChartDonut"
import { TableDemo } from '@/components/Table'
import { LineChartInteractive } from '@/components/charts/LineChartInterative'


function Home() {
  return (<>
      
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
        
        </>

  )
}

export default Home
