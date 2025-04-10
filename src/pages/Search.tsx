import ProductList from "@/components/ProductList";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { useSearchParams } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

interface Product {
  product_id: string;
  category: string;
  brand: string;
  product_name: string;
  store_price: number;
  image_url: string;
}

export default function Search() {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [priceRange, setPriceRange] = useState<[number]>([maxPrice]);
  const [sortBy, setSortBy] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"filters" | "results">("results");
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);

  const handlePriceChange = useCallback((value: number) => {
    setPriceRange([value]);
  }, []);

  useEffect(() => {
    const query = searchParams.get("query");
    if (query) {
      setSearchQuery(query);
    }

    // Fetch available categories from products
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/product`);
        if (!response.ok) throw new Error('Failed to fetch products');
        const products = await response.json() as Product[];
        
        // Create array of unique categories
        const categorySet = new Set(products.map(p => p.category));
        const categories = Array.from(categorySet);
        setAvailableCategories(categories);
        
        // Find max price for slider
        const maxProductPrice = Math.max(...products.map(p => p.store_price));
        setMaxPrice(maxProductPrice);
        setPriceRange([maxProductPrice]);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, [searchParams]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  // Extracted FilterCard component for reuse
  const FilterCard = () => (
    <Card className="flex flex-col mt-13 w-fit h-fit p-4 rounded-lg justify-center align-top gap-4">
      <h2 className="text-xl font-bold">Filters</h2>
      {/* Computer Parts */}
      <div>
        <h1>Categories</h1>
        <div className="flex flex-col">
          {availableCategories.map(category => (
            <div key={category} className="flex p-2">
              <Checkbox 
                id={category} 
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => handleCategoryChange(category)}
              />
              <Label htmlFor={category} className="ml-2">{category}</Label>
            </div>
          ))}
        </div>
      </div>
      <Separator />
      {/* Sort By */}
      <div>
        <h1>Sort By</h1>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger>
            <SelectValue placeholder="Select sorting" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name-asc">Name (A-Z)</SelectItem>
            <SelectItem value="name-desc">Name (Z-A)</SelectItem>
            <SelectItem value="price-asc">Price (Low to High)</SelectItem>
            <SelectItem value="price-desc">Price (High to Low)</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Separator />
      {/* Adjust Price Range */}
      <div>
        <h1>Maximum Price</h1>
        <Slider 
          min={0}
          max={maxPrice}
          step={1000}
          value={priceRange[0]}
          onChange={handlePriceChange}
        />
        <p className="text-sm mt-2">₱{priceRange[0].toLocaleString()}</p>
      </div>
      <Separator />
      <Button
        onClick={() => {
          window.location.href = "/pc-builds";
        }}
      >
        Check out our PC Builds
      </Button>
    </Card>
  );

  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:flex gap-4 p-4">
        <FilterCard />
        <div className="flex-1">
          <div>
            <h1>
              Results for: <span className="font-bold">{searchQuery}</span>
            </h1>
          </div>
          <div className="mt-4">
            <ProductList 
              searchQuery={searchQuery}
              selectedCategories={selectedCategories.length > 0 ? selectedCategories : undefined}
              priceRange={priceRange ? [0, priceRange[0]] : undefined}
              sortBy={sortBy}
            />
          </div>
        </div>
      </div>
      {/* Mobile View with Tabs */}
      <div className="md:hidden">
        <div className="flex justify-around border-b">
          <button 
            onClick={() => setActiveTab("filters")} 
            className={`px-4 py-2 ${activeTab==="filters" ? "text-indigo-500 border-b-2 border-indigo-500" : ""}`}
          >
            Filters
          </button>
          <button 
            onClick={() => setActiveTab("results")} 
            className={`px-4 py-2 ${activeTab==="results" ? "text-indigo-500 border-b-2 border-indigo-500" : ""}`}
          >
            Results
          </button>
        </div>
        <div className="p-4">
          {activeTab === "filters" ? (
            <div className="flex justify-center">
              <FilterCard />
            </div>
          ) : (
            <>
              <div className="mb-4">
                <h1>
                  Results for: <span className="font-bold">{searchQuery}</span>
                </h1>
              </div>
              <ProductList 
                searchQuery={searchQuery}
                selectedCategories={selectedCategories.length > 0 ? selectedCategories : undefined}
                priceRange={priceRange ? [0, priceRange[0]] : undefined}
                sortBy={sortBy}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
