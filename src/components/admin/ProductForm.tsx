"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // Import Select components
import type { Inventory } from "@/components/admin/InventoryColumns"; // Use alias path and type-only import
import ImagePlaceholder from "@/assets/image-placeholder.webp"; // Import the placeholder image

type FormData = {
  product_id: string;
  category: string;
  brand: string;
  product_name: string;
  status: "In Stock" | "Out of Stock";
  quantity: number;
  store_price: string; // Store as string in form, transform to number on submit
  image?: FileList;
};

const formSchema = z.object({
  product_id: z.string().min(2).max(20),
  category: z.string().min(2).max(100),
  brand: z.string().min(2).max(100),
  product_name: z.string().min(2).max(255),
  status: z.enum(["In Stock", "Out of Stock"]),
  quantity: z.coerce.number().min(0),
  store_price: z.string().regex(/^[\d,]*\.?\d*$/, "Invalid price format"),
  image: z.instanceof(FileList).optional(),
});

type FormSchema = z.infer<typeof formSchema>;

interface ProductFormProps {
  initialData?: Inventory;
  onSuccess?: () => void;
  mode: "add" | "edit";
}

export function ProductForm({ initialData, onSuccess, mode }: ProductFormProps) {
  const navigate = useNavigate();
  const [formMessage, setFormMessage] = React.useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const formatPrice = (price: number | string): string => {
    if (typeof price === "string") {
      // Assuming the string is already formatted or needs formatting
      const number = parseFloat(String(price).replace(/,/g, ''));
      if (isNaN(number)) return typeof price === 'string' ? price : '0.00'; // Return original string or default if conversion fails
      return number.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
    // If it's already a number
    return price.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData
      ? {
          ...initialData,
          store_price: formatPrice(initialData.store_price), // Ensure price is formatted correctly
        }
      : {
          product_id: "",
          category: "",
          brand: "",
          product_name: "",
          status: "In Stock",
          quantity: 0,
          store_price: "",
        },
  });

  async function onSubmit(values: FormSchema) {
    try {
      setIsSubmitting(true);
      setFormMessage(null); // Clear previous messages
      const token = localStorage.getItem("token");
      const formData = new FormData();

      // Append all text fields
      Object.entries(values).forEach(([key, value]) => {
        if (key !== "image") {
          if (key === "store_price" && typeof value === "string") {
            // Convert formatted price string back to number before sending
            formData.append(key, String(Number(value.replace(/,/g, ""))));
          } else {
            formData.append(key, String(value));
          }
        }
      });

      // Only append image if a new one is selected
      if (values.image?.[0]) {
        formData.append("image", values.image[0]);
      } else if (mode === "edit" && initialData?.image_url) {
        // If editing and no new image, keep the existing one (send URL or handle on backend)
        // Depending on backend logic, you might not need to send anything,
        // or send the existing URL to indicate no change.
        // Let's assume backend preserves image if 'image' field is not sent.
        // If backend requires image_url, uncomment below:
        // formData.append("image_url", initialData.image_url);
      }

      const endpoint =
        mode === "add"
          ? `${import.meta.env.VITE_API_URL}/api/product`
          : `${import.meta.env.VITE_API_URL}/api/product/${values.product_id}`;

      const response = await fetch(endpoint, {
        method: mode === "add" ? "POST" : "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          // 'Content-Type' is not set for FormData; browser sets it with boundary
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
        throw new Error(`HTTP error! status: ${response.status}, Message: ${errorData.message || 'Failed to process request'}`);
      }

      setFormMessage({
        type: "success",
        message:
          mode === "add"
            ? "Product added successfully!"
            : "Product updated successfully!",
      });

      setTimeout(() => {
        onSuccess?.(); // Close dialog
        // navigate(0); // Refresh page - consider a better state update instead
      }, 1500);
    } catch (error: any) {
        console.error(`Failed to ${mode} product:`, error);
        setFormMessage({
            type: "error",
            message: `Failed to ${mode} product: ${error.message || 'Please try again.'}`,
        });
    } finally {
      setIsSubmitting(false);
    }
  }

  // Updated onChange handler: Only validates input, does not format
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only digits, commas, and a single decimal point with up to 2 digits
    if (/^[\d,]*\.?\d{0,2}$/.test(value) || value === "") {
      // Directly set the potentially unformatted value if it's valid
      form.setValue("store_price", value);
    }
    // If the input is invalid, do nothing (prevents invalid characters)
  };

  // New onBlur handler: Formats the price when the input loses focus
  const handlePriceBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      // Remove existing commas for correct parsing
      const plainNumber = value.replace(/,/g, "");
      const number = parseFloat(plainNumber);
      if (!isNaN(number)) {
        // Format using toLocaleString and update the form state
        form.setValue(
          "store_price",
          number.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })
        );
      } else {
        // Handle cases where the input might be invalid after blur (e.g., just ".")
        // Optionally clear or reset, here we just format 0.00
         form.setValue("store_price", (0).toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }));
      }
    } else {
        // If the field is empty on blur, set it to formatted zero or keep empty
         form.setValue("store_price", ""); // Or format 0.00 if preferred
    }
  };

  return (
    <Form {...form}>
      {/* Use grid for two-column layout */}
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 md:grid-cols-3 gap-6" /* Changed to grid layout */
      >
        {/* Left Column: Image */}
        <div className="md:col-span-1 space-y-4">
          <FormField
            control={form.control}
            name="image"
            render={({ field: { onChange, value, ...fieldProps } }) => (
              <FormItem>
                <FormLabel>Product Image</FormLabel>
                <FormControl>
                  <div className="space-y-4">
                    {/* Image Preview Area */}
                    <div className="w-full h-auto max-h-48 flex items-center justify-center border rounded-md overflow-hidden bg-muted/30">
                      {mode === "edit" && initialData?.image_url ? (
                        <img
                          src={initialData.image_url}
                          alt="Current product"
                          className="w-full h-full object-contain" /* Use contain to fit */
                        />
                      ) : (
                        <img
                          src={ImagePlaceholder} // Use imported placeholder
                          alt="Product image placeholder"
                          className="w-full h-full object-contain opacity-50" /* Style placeholder */
                        />
                      )}
                    </div>
                    {/* File Input */}
                    <Input
                      type="file"
                      accept="image/*"
                      onChange={(e) => onChange(e.target.files)}
                      {...fieldProps}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Right Column: Other Fields */}
        <div className="md:col-span-2 space-y-4"> {/* Takes 2 columns on medium+ screens */}
          {formMessage && (
            <div
              className={`p-4 rounded-md ${
                formMessage.type === "success"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
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
                  <Input {...field} disabled={mode === "edit"} />
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
          {/* Grid for Status and Quantity */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="In Stock">In Stock</SelectItem>
                      <SelectItem value="Out of Stock">Out of Stock</SelectItem>
                    </SelectContent>
                  </Select>
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
                      onChange={(e) =>
                        field.onChange(parseInt(e.target.value, 10) || 0)
                      }
                      min="0"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="store_price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Store Price (PHP)</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="text" // Keep as text to allow commas/decimals during typing
                    placeholder="0.00"
                    onChange={handlePriceChange} // Use updated change handler
                    onBlur={handlePriceBlur} // Add the blur handler for formatting
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Footer spanning both columns */}
        <DialogFooter className="md:col-span-3"> {/* Span all 3 columns */}
          <Button
            type="submit"
            disabled={isSubmitting || formMessage?.type === "success"}
            className="relative"
          >
            {isSubmitting && (
              <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <span className={isSubmitting ? "opacity-0" : "opacity-100"}>
              {mode === "add" ? "Add Product" : "Update Product"}
            </span>
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
}

export default ProductForm;
