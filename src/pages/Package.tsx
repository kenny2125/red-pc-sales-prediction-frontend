import PackageCard from "@/components/cards/PackageCard";
import React from "react";

export default function PackageView() {
  return ( 
    <>
      <div>
        <div className="flex flex-col justify-between items-center gap-4 py-2">
          <h1 className="text-6xl font-['Anton']">AMD Builds</h1>
          <p>
            Looking for a budget-friendly yet powerful gaming setup? Check out
            our AMD PC BUIDS with FREE SET of peripherals
          </p>
        </div>
        <div className="flex flex-wrap justify-self-auto gap-2 w-full">
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
          
        </div>
      </div>
      <div>
        <div className="flex flex-col justify-between items-center gap-4 py-2">
          <h1 className="text-6xl font-['Anton']">Intel Builds</h1>
          <p>
            Looking for a budget-friendly yet powerful gaming setup? Check out
            our Intel PC BUIDS with FREE SET of peripherals
          </p>
        </div>
        <div className="flex flex-wrap justify-self-auto gap-2 w-full">
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
          <PackageCard />
          
          <PackageCard />
        </div>
      </div>
    </>
  );
}
