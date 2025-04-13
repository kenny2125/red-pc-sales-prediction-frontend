import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LineChartInteractive } from "@/components/charts/LineChartInterative";
import { PhilippinePeso, Package, TrendingUp, ShoppingCart, BarChart3 } from "lucide-react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const topsales = [
  {
    id: "1",
    product: "Most Searched Products",
  },
  {
    id: "2",
    product: "Most Searched Products",
  },
  {
    id: "3",
    product: "Most Searched Products",
  },
];

interface RecentSale {
  id: string;
  amount: number;
  date: string;
}

interface StockLevel {
  product_id: string;
  product_name: string;
  quantity: number;
  status: string;
}

export default function Dashboard() {
  const [ongoingOrders, setOngoingOrders] = useState(0);
  const [recentSales, setRecentSales] = useState<RecentSale[]>([]);
  const [stockLevels, setStockLevels] = useState<StockLevel[]>([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [frequentItems, setFrequentItems] = useState<Array<{
    product_id: string;
    product_name: string;
    image_url: string;
    sold_count: number;
    total_quantity: number;
  }>>([]);

  useEffect(() => {
    const fetchTotalRevenue = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/sales/total-revenue`);
        const data = await response.json();
        setTotalRevenue(data.total_revenue);
      } catch (error) {
        console.error('Error fetching total revenue:', error);
      }
    };

    const fetchOngoingOrders = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/orders/ongoing-count`);
        const data = await response.json();
        setOngoingOrders(data.count);
      } catch (error) {
        console.error('Error fetching ongoing orders:', error);
      }
    };

    const fetchRecentSales = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/sales/recent`);
        const data = await response.json();
        setRecentSales(data);
      } catch (error) {
        console.error('Error fetching recent sales:', error);
      }
    };

    const fetchStockLevels = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/product/stock-levels`);
        const data = await response.json();
        setStockLevels(data);
      } catch (error) {
        console.error('Error fetching stock levels:', error);
      }
    };

    const fetchFrequentItems = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/sales/most-frequent`);
        const data = await response.json();
        setFrequentItems(data);
      } catch (error) {
        console.error('Error fetching frequent items:', error);
      }
    };

    fetchTotalRevenue();
    fetchOngoingOrders();
    fetchRecentSales();
    fetchStockLevels();
    fetchFrequentItems();
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP'
    }).format(amount);
  };

  return (
    <div className="container ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card className="flex flex-col items-center">
          <CardHeader className="w-full text-center">
            <CardTitle className="text-lg">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <div className="rounded-full bg-primary/10 p-4">
              <PhilippinePeso className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-2xl font-bold">{formatCurrency(totalRevenue)}</p>
          </CardFooter>
        </Card>

        <Card className="flex flex-col items-center">
          <CardHeader className="w-full text-center">
            <CardTitle className="text-lg">Ongoing Orders</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <div className="rounded-full bg-primary/10 p-4">
              <ShoppingCart className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-2xl font-bold">{ongoingOrders} Orders Today</p>
          </CardFooter>
        </Card>

        <Card className="flex flex-col items-center">
          <CardHeader className="w-full text-center">
            <CardTitle className="text-lg">Sales Today</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <div className="rounded-full bg-primary/10 p-4">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
          <CardFooter>
            <p className="text-2xl font-bold">
              {recentSales.length > 0 ? formatCurrency(recentSales[0].amount) : 'No sales today'}
            </p>
          </CardFooter>
        </Card>

        <Card className="flex flex-col">
          <CardHeader className="text-center">
            <CardTitle className="text-lg">Top Products</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {frequentItems.slice(0, 3).map((item) => (
                <div key={item.product_id} className="flex items-center justify-between">
                  <span className="text-sm truncate flex-1">{item.product_name}</span>
                  <span className="text-sm font-medium">{item.total_quantity}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
        <LineChartInteractive />
          
        </div>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {recentSales.slice(0, 5).map((sale) => (
                  <div key={sale.id} className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Customer</p>
                      <p className="text-sm text-muted-foreground">{sale.date}</p>
                    </div>
                    <p className="text-sm font-medium">₱{sale.amount.toLocaleString()}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Stock Alerts</CardTitle>
              <CardDescription>Low stock items</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {stockLevels.slice(0, 5).map((item) => (
                  <div key={item.product_id} className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-sm font-medium truncate">{item.product_name}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      item.status === 'Low' ? 'bg-red-100 text-red-800' : 
                      item.status === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-green-100 text-green-800'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
