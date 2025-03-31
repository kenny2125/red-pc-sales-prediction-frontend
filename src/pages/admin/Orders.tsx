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
import { ScrollText } from "lucide-react";
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


const data: Orders[] = [
  {
    orderID: "10001",
    paymentStatus: "Paid" ,
    pickupStatus: "Claimed",
    customerName: "John Kenny",
    orderDate: "March 25, 2025",
    purchasedProduct: "RTX 4090",
    totalAmount: 100000
  },
  {
    orderID: "10001",
    paymentStatus: "Paid" ,
    pickupStatus: "Claimed",
    customerName: "John Kenny",
    orderDate: "March 25, 2025",
    purchasedProduct: "RTX 4090",
    totalAmount: 100000
  },
  {
    orderID: "10001",
    paymentStatus: "Paid" ,
    pickupStatus: "Claimed",
    customerName: "John Kenny",
    orderDate: "March 25, 2025",
    purchasedProduct: "RTX 4090",
    totalAmount: 100000
  },
  {
    orderID: "10001",
    paymentStatus: "Paid" ,
    pickupStatus: "Claimed",
    customerName: "John Kenny",
    orderDate: "March 25, 2025",
    purchasedProduct: "RTX 4090",
    totalAmount: 100000
  },
  {
    orderID: "10001",
    paymentStatus: "Paid" ,
    pickupStatus: "Claimed",
    customerName: "John Kenny",
    orderDate: "March 25, 2025",
    purchasedProduct: "RTX 4090",
    totalAmount: 100000
  },
  {
    orderID: "10001",
    paymentStatus: "Paid" ,
    pickupStatus: "Claimed",
    customerName: "John Kenny",
    orderDate: "March 25, 2025",
    purchasedProduct: "RTX 4090",
    totalAmount: 100000
  },
  {
    orderID: "10001",
    paymentStatus: "Paid" ,
    pickupStatus: "Claimed",
    customerName: "John Kenny",
    orderDate: "March 25, 2025",
    purchasedProduct: "RTX 4090",
    totalAmount: 100000
  },
  {
    orderID: "10001",
    paymentStatus: "Paid" ,
    pickupStatus: "Claimed",
    customerName: "John Kenny",
    orderDate: "March 25, 2025",
    purchasedProduct: "RTX 4090",
    totalAmount: 100000
  },
  {
    orderID: "10001",
    paymentStatus: "Paid" ,
    pickupStatus: "Claimed",
    customerName: "John Kenny",
    orderDate: "March 25, 2025",
    purchasedProduct: "RTX 4090",
    totalAmount: 100000
  },

 
  
]

export type Orders = {
  orderID: string
  paymentStatus: "Paid" | "Processing" | "Cancelled" | "Refunded",
  pickupStatus: "Claimed" | "Ready to Claim" | "Cancelled"
  customerName: string
  orderDate: string
  purchasedProduct: string
  totalAmount: number
  
}

export const columns: ColumnDef<Orders>[] = [
  {
    accessorKey: "orderID",
    header: "Order ID",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("orderID")}</div>
    ),
  },
  {
    accessorKey: "paymentStatus",
    header: "Payment Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("paymentStatus")}</div>
    ),
  },
  {
    accessorKey: "pickupStatus",
    header: "Pickup Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("pickupStatus")}</div>
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
    accessorKey: "orderDate",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("orderDate")}</div>
    ),
  },
  {
    accessorKey: "purchasedProduct",
    header: "Purchased Products",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("purchasedProduct")}</div>
    ),
  },


  {
    accessorKey: "totalAmount",
    header: () => <div className="text-right"> Total Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("totalAmount"))

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
              onClick={() => navigator.clipboard.writeText(payment.orderID)}
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

export function Orders() {
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
    <div className="w-full">
      <div className="flex items-center justify-end py-4 gap-4">
      <ScrollText size="40px" />
      <TableHeader>Orders</TableHeader>
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
          placeholder="Search Customer Name..."
          value={(table.getColumn("customerName")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("customerName")?.setFilterValue(event.target.value)
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
  )
}

export default Orders;