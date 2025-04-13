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
import { PhilippinePeso, ScrollText } from "lucide-react";

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

  useEffect(() => {
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

    fetchOngoingOrders();
    fetchRecentSales();
    fetchStockLevels();
  }, []);

  return (
    <>
      <div className=" flex flex-row gap-4 w-full">
        <div className="flex flex-col w-full gap-4 ">
          <div className="flex flex-row justify-between align-middle max-w-6xl gap-4">
            <Card className="flex flex-col items-center w-full  ">
              <CardHeader className=" w-full justify-center">
                <CardTitle>Total Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <PhilippinePeso size="80px" className="text-primary" />
              </CardContent>
              <CardFooter>
                <p>Php 99999999</p>
              </CardFooter>
            </Card>
            <Card className="flex flex-col items-center w-full">
              <CardHeader className=" w-full justify-center">
                <CardTitle>Ongoing Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollText size="80px" className="text-primary" />
              </CardContent>
              <CardFooter>
                <p>{ongoingOrders} Orders Today</p>
              </CardFooter>
            </Card>
            <Card className="flex flex-col items-center w-full">
              <CardHeader className=" w-full justify-center">
                <CardTitle>Sales Today</CardTitle>
              </CardHeader>
              <CardContent>
                <PhilippinePeso size="80px" className="text-primary" />
              </CardContent>
              <CardFooter>
                <p>Php 99999999</p>
              </CardFooter>
            </Card>
            <Card className="flex flex-col items-center w-full">
              <CardHeader className=" w-full justify-center">
                <CardTitle>Top Searched Products</CardTitle>
              </CardHeader>
              <CardContent>
                {topsales.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.product}</TableCell>
                  </TableRow>
                ))}
              </CardContent>
              {/* <CardFooter>
                <p>Php 99999999</p>
              </CardFooter> */}
            </Card>
          </div>
          <div className="w-full max-w-6xl">
            <LineChartInteractive />
          </div>
        </div>

        <div className="flex flex-col w-lg align-middle text-center justify-between">
          <Card className="w-full ">
            <CardHeader>
              <CardTitle>Recent Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer Name</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentSales.map((sale) => (
                    <TableRow key={sale.id}>
                      <TableCell className="text-left">Customer</TableCell>
                      <TableCell className="text-right">
                        ₱{sale.amount.toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Stocks Monitoring</CardTitle>
              <CardDescription>Showing products with lowest stock levels</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Stocks</TableHead>
                    <TableHead className="text-left">Product Name</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stockLevels.map((item) => (
                    <TableRow key={item.product_id}>
                      <TableCell className="font-medium">{item.quantity}</TableCell>
                      <TableCell>{item.product_name}</TableCell>
                      <TableCell className="text-right">{item.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
