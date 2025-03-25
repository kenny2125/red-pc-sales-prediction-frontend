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
import { AreaChartView } from "@/components/charts/AreaChart";


function Home() {
  return (<>
      
        <div className='flex flex-row w-full min-w-lg'>
        <div className="min-w-3xl">
        <AreaChartView/>
        </div>
        <div className="min-w-3xl">
        <LineChartView />
        </div>
        </div>        

        {/* <PieChartDonut/> */}
        <TableDemo/>
        <div className='w-full'>
        <LineChartInteractive/>
        </div>
        <PackageCard />
        <ProductCard />
        <UserCard />
        
        </>

  )
}

export default Home
