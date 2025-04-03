import ProductList from "@/components/ProductList";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { useSearchParams } from "react-router-dom";

export default function Search() {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const query = searchParams.get("query");
    if (query) {
      setSearchQuery(query);
    }
  }, [searchParams]);

  return (
    <>
      <div className="flex gap-4">
        <Card className="flex flex-col mt-13 w-fit h-fit p-4 rounded-lg justify-center align-top gap-4">
          <h2>By Category</h2>
          <div>
            <h1>Computer Parts</h1>
            <div className="flex flex-col">
              <div className="flex p-2">
                <Checkbox id="cpu1" />{" "}
                <Label htmlFor="cpu1" className="ml-2">
                  CPU
                </Label>
              </div>
              <div className="flex p-2">
                <Checkbox id="cpu2" />{" "}
                <Label htmlFor="cpu2" className="ml-2">
                  GPU
                </Label>
              </div>
              <div className="flex p-2">
                <Checkbox id="cpu3" />{" "}
                <Label htmlFor="cpu3" className="ml-2">
                  Motherboard
                </Label>
              </div>
              <div className="flex p-2">
                <Checkbox id="cpu4" />{" "}
                <Label htmlFor="cpu4" className="ml-2">
                  RAM
                </Label>
              </div>
            </div>
          </div>
          <div>
            <h1>Peripherals & Extras</h1>
            <div className="flex flex-col">
              <div className="flex p-2">
                <Checkbox id="peripheral1" />{" "}
                <Label htmlFor="peripheral1" className="ml-2">
                  Keyboard
                </Label>
              </div>
              <div className="flex p-2">
                <Checkbox id="peripheral2" />{" "}
                <Label htmlFor="peripheral2" className="ml-2">
                  Mouse
                </Label>
              </div>
              <div className="flex p-2">
                <Checkbox id="peripheral3" />{" "}
                <Label htmlFor="peripheral3" className="ml-2">
                  Monitor
                </Label>
              </div>
              <div className="flex p-2">
                <Checkbox id="peripheral4" />{" "}
                <Label htmlFor="peripheral4" className="ml-2">
                  Headset
                </Label>
              </div>
            </div>
          </div>
          <Button
            onClick={() => {
              window.location.href = "/pc-builds";
            }}
          >
            Check out our PC Builds
          </Button>
          <h1>Adjust Price Range</h1>
          <Slider defaultValue={[33]} max={100} step={1} />
        </Card>

        <div className="flex flex-col w-full justify-between gap-4">
          <div className="mb-4">
            <h1>
              Results for: <span className="font-bold">{searchQuery}</span>
            </h1>
          </div>
          <ProductList />
        </div>
      </div>
    </>
  );
}
