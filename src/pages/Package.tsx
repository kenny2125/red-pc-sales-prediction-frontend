import PackageCard from "@/components/cards/PackageCard";
import PackageList from "@/components/PackageList";
import React from "react";

export default function PackageView() {
  return ( 
    <>
      <div>
        <div className="flex flex-col justify-between items-center gap-4 py-2">
          <h1 className="text-6xl font-['Anton']">Computer Builds</h1>
          <p>
            Looking for a budget-friendly yet powerful gaming setup? Check out
            our PC BUIDS with FREE SET of peripherals
          </p>
        </div>
        <div className="flex flex-wrap justify-self-auto gap-2 w-full">
          <PackageList />
          
        </div>
      </div>

    </>
  );
}
