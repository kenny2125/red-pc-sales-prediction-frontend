import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LineChartInteractive } from "@/components/charts/LineChartInterative";
import { PhilippinePeso } from "lucide-react";
import { ScrollText } from "lucide-react";

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

const recentSales = [
  {
    id: "1",
    customerName: "Kenny Reyes",
    sales: "2000",
  },
  {
    id: "2",
    customerName: "Kenny Reyes",
    sales: "2000",
  },
  {
    id: "3",
    customerName: "Kenny Reyes",
    sales: "2000",
  },
  {
    id: "4",
    customerName: "Kenny Reyes",
    sales: "2000",
  },
  {
    id: "5",
    customerName: "Kenny Reyes",
    sales: "2000",
  },
  {
    id: "6",
    customerName: "Kenny Reyes",
    sales: "2000",
  },
  {
    id: "7",
    customerName: "Kenny Reyes",
    sales: "2000",
  },
];

const stockslevel = [
  {
    id: "1",
    stock: "1",
    productName: "Monitor",
  },
  {
    id: "2",
    stock: "2",
    productName: "Monitor",
  },
  {
    id: "3",
    stock: "3",
    productName: "Monitor",
  },
  {
    id: "3",
    stock: "3",
    productName: "Monitor",
  },
  {
    id: "3",
    stock: "3",
    productName: "Monitor",
  },
];

export default function Dashboard() {
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
                <p>10 Orders Today</p>
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
                  {recentSales.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="text-left">{item.customerName}</TableCell>
                      <TableCell className="text-right">
                        ₱{item.sales}
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
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Stocks</TableHead>
                    <TableHead className="text-left">Product Name</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stockslevel.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="text-left">{item.stock}</TableCell>
                      <TableCell className="text-left">{item.productName}</TableCell>                      
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
