import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Inventory } from "@/pages/admin/Inventory";

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

export default function ProductForm({ initialData, onSuccess, mode }: ProductFormProps) {
  const navigate = useNavigate();
  const [formMessage, setFormMessage] = React.useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const formatPrice = (price: number | string): string => {
    if (typeof price === "string") {
      return price;
    }
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
          store_price: formatPrice(initialData.store_price),
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
      const token = localStorage.getItem("token");
      const formData = new FormData();

      Object.entries(values).forEach(([key, value]) => {
        if (key !== "image") {
          if (key === "store_price" && typeof value === "string") {
            formData.append(key, String(Number(value.replace(/,/g, ""))));
          } else {
            formData.append(key, String(value));
          }
        }
      });

      if (values.image?.[0]) {
        formData.append("image", values.image[0]);
      } else if (mode === "edit") {
        formData.append("image_url", initialData?.image_url || "");
      }

      const endpoint =
        mode === "add"
          ? `${import.meta.env.VITE_API_URL}/api/product`
          : `${import.meta.env.VITE_API_URL}/api/product/${values.product_id}`;

      const response = await fetch(endpoint, {
        method: mode === "add" ? "POST" : "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setFormMessage({
        type: "success",
        message:
          mode === "add"
            ? "Product added successfully!"
            : "Product updated successfully!",
      });

      setTimeout(() => {
        onSuccess?.();
        navigate("/inventory");
      }, 1500);
    } catch (error) {
      setFormMessage({
        type: "error",
        message: `Failed to ${mode} product. Please try again.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {formMessage && (
          <div
            className={`p-4 mb-4 rounded-md ${
              formMessage.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {formMessage.message}
          </div>
        )}
        {/* ...remaining form fields and footer... */}
        <DialogFooter>
          <Button 
            type="submit" 
            disabled={isSubmitting || formMessage?.type === "success"}
            className="relative"
          >
            {isSubmitting && (
              <div className="absolute inset-0 flex items-center justify-center">
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
