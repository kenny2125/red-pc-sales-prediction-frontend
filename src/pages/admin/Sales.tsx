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
import { CpuIcon } from "lucide-react";
import { PieChartDonut } from "@/components/charts/PieChartDonut";
import { PcCaseIcon } from "lucide-react";



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

"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Boxes } from "lucide-react"
import { BarChartView } from "@/components/charts/BarChart";

const data: Inventory[] = [
  {
    salesID: "12345",
    paymongoID: "pay_gE9DiNP7DFiC7uBeM76HUXrh",
    status: "Paid",
    method: "GCASH",
    customerName: "Kenny Reyes",
    paidDate: "March 25, 2025",
    amount: 3000
  },
  {
    salesID: "12345",
    paymongoID: "pay_gE9DiNP7DFiC7uBeM76HUXrh",
    status: "Paid",
    method: "GCASH",
    customerName: "Kenny Reyes",
    paidDate: "March 25, 2025",
    amount: 3000
  },
  {
    salesID: "12345",
    paymongoID: "pay_gE9DiNP7DFiC7uBeM76HUXrh",
    status: "Paid",
    method: "GCASH",
    customerName: "Kenny Reyes",
    paidDate: "March 25, 2025",
    amount: 3000
  },
  {
    salesID: "12345",
    paymongoID: "pay_gE9DiNP7DFiC7uBeM76HUXrh",
    status: "Paid",
    method: "GCASH",
    customerName: "Kenny Reyes",
    paidDate: "March 25, 2025",
    amount: 3000
  },
  {
    salesID: "12345",
    paymongoID: "pay_gE9DiNP7DFiC7uBeM76HUXrh",
    status: "Paid",
    method: "GCASH",
    customerName: "Kenny Reyes",
    paidDate: "March 25, 2025",
    amount: 3000
  },
  {
    salesID: "12345",
    paymongoID: "pay_gE9DiNP7DFiC7uBeM76HUXrh",
    status: "Paid",
    method: "GCASH",
    customerName: "Kenny Reyes",
    paidDate: "March 25, 2025",
    amount: 3000
  },
  {
    salesID: "12345",
    paymongoID: "pay_gE9DiNP7DFiC7uBeM76HUXrh",
    status: "Paid",
    method: "GCASH",
    customerName: "Kenny Reyes",
    paidDate: "March 25, 2025",
    amount: 3000
  },
  {
    salesID: "12345",
    paymongoID: "pay_gE9DiNP7DFiC7uBeM76HUXrh",
    status: "Paid",
    method: "GCASH",
    customerName: "Kenny Reyes",
    paidDate: "March 25, 2025",
    amount: 3000
  },
  {
    salesID: "12345",
    paymongoID: "pay_gE9DiNP7DFiC7uBeM76HUXrh",
    status: "Paid",
    method: "GCASH",
    customerName: "Kenny Reyes",
    paidDate: "March 25, 2025",
    amount: 3000
  },
  {
    salesID: "12345",
    paymongoID: "pay_gE9DiNP7DFiC7uBeM76HUXrh",
    status: "Paid",
    method: "GCASH",
    customerName: "Kenny Reyes",
    paidDate: "March 25, 2025",
    amount: 3000
  },
  {
    salesID: "12345",
    paymongoID: "pay_gE9DiNP7DFiC7uBeM76HUXrh",
    status: "Paid",
    method: "GCASH",
    customerName: "Kenny Reyes",
    paidDate: "March 25, 2025",
    amount: 3000
  },

  
 
  
]



export type Inventory = {
  salesID: string
  paymongoID: string
  status: "Paid" | "Refunded"
  method: "COD" | "GCASH" | "PAYMAYA"
  customerName: string
  paidDate: string
  amount: number
  
}

export const columns: ColumnDef<Inventory>[] = [
  {
    accessorKey: "salesID",
    header: "Sales ID",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("salesID")}</div>
    ),
  },
  {
    accessorKey: "paymongoID",
    header: "Paymongo ID",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("paymongoID")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "method",
    header: "Payment Method",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("method")}</div>
    ),
  },
  {
    accessorKey: "customerName",
    header: "Customer Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("customerName")}</div>
    ),
  },
  {
    accessorKey: "paidDate",
    header: "Paid At",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("paidDate")}</div>
    ),
  },
  



  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-PH", {
        style: "currency",
        currency: "PHP",
      }).format(amount)

      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Modify Product</DropdownMenuItem>
            <DropdownMenuItem>Delete Product</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export default function Sales() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
      []
    )
    const [columnVisibility, setColumnVisibility] =
      React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})
  
    const table = useReactTable({
      data,
      columns,
      onSortingChange: setSorting,
      onColumnFiltersChange: setColumnFilters,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      onColumnVisibilityChange: setColumnVisibility,
      onRowSelectionChange: setRowSelection,
      state: {
        sorting,
        columnFilters,
        columnVisibility,
        rowSelection,
      },
    })
  
  return (
    <>
      <div className=" flex flex-row gap-4 w-full">
        <div className="flex flex-col w-full gap-4 ">
        <div className="w-full max-w-6xl  ">
            <LineChartInteractive />
          </div>
          <div className="flex flex-row justify-between align-middle max-w-6xl gap-4">
      
            <Card className="flex flex-col items-center w-full">
              <CardHeader className=" w-full justify-center">
                <CardTitle>Total Computer Units Sold</CardTitle>
              </CardHeader>
              <CardContent>
                <PcCaseIcon size="80px" className="text-primary" />
              </CardContent>
              <CardFooter>
                <p>100 Units Sold</p>
              </CardFooter>
            </Card>
            <Card className="flex flex-col items-center w-full">
              <CardHeader className=" w-full justify-center">
                <CardTitle>Total Sold Products </CardTitle>
              </CardHeader>
              <CardContent>
                <CpuIcon size="80px" className="text-primary" />
              </CardContent>
              <CardFooter>
                <p>2323 sold</p>
              </CardFooter>
            </Card>
            <Card className="flex flex-col items-center w-full">
              <CardHeader className=" w-full justify-center">
                <CardTitle>Best Sellers</CardTitle>
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
      
        </div>

        <div className="flex flex-col w-lg align-middle text-center gap-4 justify-between">
        <PieChartDonut/>
        <BarChartView/>
        </div>
      </div>
      <div className="w-full">
      <div className="flex items-center justify-end py-4 gap-4">
      <PhilippinePeso size="40px" />
      <TableHeader>Sales Table</TableHeader>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        
        <Input
          placeholder="Search Paymongo ID..."
          value={(table.getColumn("paymongoID")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("paymongoID")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
    </>
  );
}
