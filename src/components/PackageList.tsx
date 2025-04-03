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
      <div className="flex flex-row justify-between gap-4 w-full">
        <h1>Results for: </h1>

        <div className="flex gap-4">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 w-full">
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
