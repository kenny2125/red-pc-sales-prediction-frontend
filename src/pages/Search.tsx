import ProductList from "@/components/ProductList";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import React from "react";
import { Card } from "@/components/ui/card";
import ProductCard from "@/components/cards/product-card";

export default function Search() {
  return (
    <>
      <div className="flex flex-row w-full justify-between gap-4">
        <div className=" bg-accent flex flex-col w-fit  p-4 rounded-lg justify-center align-top gap-4">
          <h2>By Category</h2>
          <div>
            <h1>Computer Parts</h1>
            <div className="flex flex-col">
              <div className="flex p-2">
                <Checkbox /> <p>CPU</p>
              </div>
              <div className="flex p-2">
                <Checkbox /> <p>CPU</p>
              </div>
              <div className="flex p-2">
                <Checkbox /> <p>CPU</p>
              </div>
              <div className="flex p-2">
                <Checkbox /> <p>CPU</p>
              </div>
            </div>
          </div>
          <div>
            <h1>Peripherals & Extras</h1>
            <div className="flex flex-col">
              <div className="flex p-2">
                <Checkbox /> <p>Keyboard</p>
              </div>
              <div className="flex p-2">
                <Checkbox /> <p>Keyboard</p>
              </div>
              <div className="flex p-2">
                <Checkbox /> <p>Keyboard</p>
              </div>
              <div className="flex p-2">
                <Checkbox /> <p>Keyboard</p>
              </div>
            </div>
          </div>
          <Button>Check out our PC Builds</Button>
          <h1>Adjust Price Range </h1>
          <Slider defaultValue={[33]} max={100} step={1} />
        </div>
        <div className="flex flex-col w-full justify-start gap-4">
          <div className="flex">
            <h1>Results for: </h1>
          </div>
          <div className="flex flex-row gap-4 justify-end">
            <div className="gap-2">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="A-Z" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asc">A-Z</SelectItem>
                  <SelectItem value="dsc">Z-A</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="gap-2">
              <Select>
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
            <div className="flex flex-wrap gap-4 w-full">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            
            </div>
        </div>
      </div>
    </>
  );
}
