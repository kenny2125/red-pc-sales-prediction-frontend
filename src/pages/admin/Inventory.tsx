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
import { ArrowUpDown, ChevronDown, MoreHorizontal, Plus } from "lucide-react"
import { Boxes } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

const API_URL = 'http://localhost:3000';

export type Inventory = {
  product_id: string
  category: string
  brand: string
  product_name: string
  status: "In Stock" | "Out of Stock" 
  quantity: number
  store_price: number
}

type FormData = {
  product_id: string
  category: string
  brand: string
  product_name: string
  status: "In Stock" | "Out of Stock"
  quantity: number
  store_price: string // Store as string in form, transform to number on submit
}

const formSchema = z.object({
  product_id: z.string().min(2).max(20),
  category: z.string().min(2).max(100),
  brand: z.string().min(2).max(100),
  product_name: z.string().min(2).max(255),
  status: z.enum(["In Stock", "Out of Stock"]),
  quantity: z.coerce.number().min(0),
  store_price: z.string()
    .regex(/^[\d,]*\.?\d*$/, 'Invalid price format')
});

type FormSchema = z.infer<typeof formSchema>;

export const columns: ColumnDef<Inventory>[] = [
  {
    accessorKey: "product_id",
    header: "Product ID",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("product_id")}</div>
    ),
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("category")}</div>
    ),
  },
  {
    accessorKey: "brand",
    header: "Brand",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("brand")}</div>
    ),
  },
  {
    accessorKey: "product_name",
    header: "Product Name",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("product_name")}</div>
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
    accessorKey: "quantity",
    header: "Quantity",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("quantity")}</div>
    ),
  },
  {
    accessorKey: "store_price",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("store_price"))
      const formatted = new Intl.NumberFormat("en-PH", {
        style: "currency",
        currency: "PHP",
      }).format(amount)
      return <div className="text-right font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original
      const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false)
      const [isEditDialogOpen, setIsEditDialogOpen] = React.useState(false)

      const handleDelete = async () => {
        try {
          const token = localStorage.getItem('token');
          const response = await fetch(`${API_URL}/api/product/${product.product_id}`, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          window.location.reload();
        } catch (error) {
          console.error('Failed to delete product:', error);
        }
      }

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => setIsEditDialogOpen(true)}>
                Edit Product
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                onClick={() => setIsDeleteDialogOpen(true)}
                className="text-red-600">
                Delete Product
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete Product</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete {product.product_name}? This action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
                  Cancel
                </Button>
                <Button variant="destructive" onClick={handleDelete}>
                  Delete
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit Product</DialogTitle>
              </DialogHeader>
              <ProductForm 
                initialData={product} 
                onSuccess={() => setIsEditDialogOpen(false)} 
                mode="edit" 
              />
            </DialogContent>
          </Dialog>
        </>
      )
    },
  },
]

interface ProductFormProps {
  initialData?: Inventory
  onSuccess?: () => void
  mode: 'add' | 'edit'
}

function ProductForm({ initialData, onSuccess, mode }: ProductFormProps) {
  const [formMessage, setFormMessage] = React.useState<{ type: 'success' | 'error', message: string } | null>(null);

  const formatPrice = (price: number | string): string => {
    if (typeof price === 'string') {
      return price;
    }
    return price.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData ? {
      ...initialData,
      store_price: formatPrice(initialData.store_price)
    } : {
      product_id: '',
      category: '',
      brand: '',
      product_name: '',
      status: 'In Stock',
      quantity: 0,
      store_price: ''
    },
  });

  async function onSubmit(values: FormSchema) {
    try {
      const token = localStorage.getItem('token');
      const endpoint = mode === 'add' 
        ? `${API_URL}/api/product`
        : `${API_URL}/api/product/${values.product_id}`;
      
      // Transform the form data to match API expectations
      const submitData = {
        ...values,
        store_price: Number(values.store_price.replace(/,/g, '')),
        quantity: Number(values.quantity)
      };

      const response = await fetch(endpoint, {
        method: mode === 'add' ? 'POST' : 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setFormMessage({
        type: 'success',
        message: mode === 'add' ? 'Product added successfully!' : 'Product updated successfully!'
      });
      
      setTimeout(() => {
        onSuccess?.();
        window.location.reload();
      }, 1500);
    } catch (error) {
      setFormMessage({
        type: 'error',
        message: `Failed to ${mode} product. Please try again.`
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {formMessage && (
          <div className={`p-4 mb-4 rounded-md ${
            formMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {formMessage.message}
          </div>
        )}
        <FormField
          control={form.control}
          name="product_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product ID</FormLabel>
              <FormControl>
                <Input {...field} disabled={mode === 'edit'} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="brand"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Brand</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="product_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Product Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <FormControl>
                <select 
                  {...field}
                  className="w-full p-2 border rounded"
                >
                  <option value="In Stock">In Stock</option>
                  <option value="Out of Stock">Out of Stock</option>
                </select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantity</FormLabel>
              <FormControl>
                <Input 
                  type="number" 
                  {...field} 
                  onChange={e => field.onChange(parseInt(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="store_price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Store Price</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  placeholder="0.00"
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^[\d,]*\.?\d*$/.test(value) || value === '') {
                      const plainNumber = value.replace(/,/g, '');
                      if (plainNumber === '') {
                        field.onChange('');
                        return;
                      }
                      
                      const number = parseFloat(plainNumber);
                      if (!isNaN(number)) {
                        const formattedValue = formatPrice(number);
                        field.onChange(formattedValue);
                      }
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogFooter>
          <Button type="submit" disabled={formMessage?.type === 'success'}>
            {mode === 'add' ? 'Add Product' : 'Update Product'}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  )
}

export function Inventory() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [data, setData] = React.useState<Inventory[]>([])
  const [error, setError] = React.useState<string | null>(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = React.useState(false)
  
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_URL}/api/product`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Failed to fetch products:', error);
        setError('Failed to fetch products. Please try again.');
      }
    }
    fetchData();
  }, []);

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
      {error && (
        <div className="p-4 mb-4 rounded-md bg-red-100 text-red-700">
          {error}
        </div>
      )}
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <Boxes size="40px" />
          <h1 className="text-2xl font-bold">Inventory</h1>
        </div>
        <div className="flex items-center gap-4">
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Product
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Product</DialogTitle>
              </DialogHeader>
              <ProductForm mode="add" onSuccess={() => setIsAddDialogOpen(false)} />
            </DialogContent>
          </Dialog>
          <Input
            placeholder="Search products..."
            value={(table.getColumn("product_name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("product_name")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Columns
                <ChevronDown className="ml-2 h-4 w-4" />
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
        </div>
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
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
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

export default Inventory;
