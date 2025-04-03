import ProductList from "@/components/ProductList";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { useSearchParams } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export default function Search() {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([33]);
  const [activeTab, setActiveTab] = useState<"filters" | "results">("results");

  useEffect(() => {
    const query = searchParams.get("query");
    if (query) {
      setSearchQuery(query);
    }
  }, [searchParams]);

  // Extracted FilterCard component for reuse
  const FilterCard = () => (
    <Card className="flex flex-col mt-13 w-fit h-fit p-4 rounded-lg justify-center align-top gap-4">
      <h2 className="text-xl font-bold">Filters</h2>
      {/* Computer Parts */}
      <div>
        <h1>Computer Parts</h1>
        <div className="flex flex-col">
          <div className="flex p-2">
            <Checkbox id="cpu1" /> 
            <Label htmlFor="cpu1" className="ml-2">CPU</Label>
          </div>
          <div className="flex p-2">
            <Checkbox id="cpu2" /> 
            <Label htmlFor="cpu2" className="ml-2">GPU</Label>
          </div>
          <div className="flex p-2">
            <Checkbox id="cpu3" /> 
            <Label htmlFor="cpu3" className="ml-2">Motherboard</Label>
          </div>
          <div className="flex p-2">
            <Checkbox id="cpu4" /> 
            <Label htmlFor="cpu4" className="ml-2">RAM</Label>
          </div>
        </div>
      </div>
      <Separator />
      {/* Peripherals & Extras */}
      <div>
        <h1>Peripherals & Extras</h1>
        <div className="flex flex-col">
          <div className="flex p-2">
            <Checkbox id="peripheral1" /> 
            <Label htmlFor="peripheral1" className="ml-2">Keyboard</Label>
          </div>
          <div className="flex p-2">
            <Checkbox id="peripheral2" /> 
            <Label htmlFor="peripheral2" className="ml-2">Mouse</Label>
          </div>
          <div className="flex p-2">
            <Checkbox id="peripheral3" /> 
            <Label htmlFor="peripheral3" className="ml-2">Monitor</Label>
          </div>
          <div className="flex p-2">
            <Checkbox id="peripheral4" /> 
            <Label htmlFor="peripheral4" className="ml-2">Headset</Label>
          </div>
        </div>
      </div>
      <Separator />
      {/* Sort By */}
      <div>
        <h1>Sort By</h1>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select sorting" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="az">A-Z</SelectItem>
            <SelectItem value="price">Price</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Separator />
      {/* Adjust Price Range */}
      <div>
        <h1>Adjust Price Range</h1>
        <Slider 
          value={priceRange} 
          onValueChange={(value) => setPriceRange(value)} 
          max={100} 
          step={1} 
        />
        <p className="text-sm mt-2">Selected Price: {priceRange.join("-")}</p>
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
      <div className="hidden md:flex gap-4">
        <FilterCard />
        <div className="flex flex-col w-full justify-between gap-4">
          <div className="mb-4">
            <h1>
              Results for: <span className="font-bold">{searchQuery}</span>
            </h1>
          </div>
          <ProductList />
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
              <ProductList />
            </>
          )}
        </div>
      </div>
    </>
  );
}
