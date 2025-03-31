import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import React from "react";

function Product() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row gap-4">
          <div className="w-full">
            <Card>
              <CardContent>Brand Name</CardContent>
            </Card>
          </div>
          <div className="w-full">
            <Card >
              <CardContent>Product Name</CardContent>
            </Card>
          </div>
        </div>
        <div className="flex flex-row gap-4">
          <div className="w-full">
            <Card>
              <CardContent>Specifications</CardContent>
            </Card>
          </div>
          <div className="w-full h-full">
            <Card>
              <CardContent>Pcture</CardContent>
            </Card>
          </div>
          <div className="w-full h-full">
            <Card>
              <CardContent>Descripton</CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;