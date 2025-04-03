import React, { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import PackageCard from "./cards/PackageCard";

export default function PackageList() {
  // Add state for sorting

  const [priceSort, setPriceSort] = useState<"asc" | "dsc">("asc");

  // Logic for sorting products would go here
  // For a real implementation, we would sort the products array based on nameSort and priceSort values

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-4 w-full">
        <div className="flex justify-center gap-4">
          <div className="gap-2">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="AMD" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="amd">AMD</SelectItem>
                <SelectItem value="intel">INTEL</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="gap-2">
            <Select
              value={priceSort}
              onValueChange={(value) => setPriceSort(value as "asc" | "dsc")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Lowest-Highest" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asc">Lowest-Highest</SelectItem> 
                <SelectItem value="dsc">Highest-Lowest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-3 grid-flow-col auto-cols-fr gap-4 w-full sm:grid-flow-row sm:grid-cols-2 sm:[grid-template-rows:auto] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
        <PackageCard />
      </div>
    </>
  );
}
