import PackageCard from "@/components/cards/package-card";
import React from "react";

export default function BuildsView() {
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
        <div className="flex flex-wrap gap-4 w-full">
          <PackageCard inCart={false} />
          <PackageCard inCart={false} />
          <PackageCard inCart={false} />
          <PackageCard inCart={false} />
          <PackageCard inCart={false} />
          <PackageCard inCart={false} />
          <PackageCard inCart={false} />
          <PackageCard inCart={false} />
          <PackageCard inCart={false} />
          <PackageCard inCart={false} />
          <PackageCard inCart={false} />
          <PackageCard inCart={false} />
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
        <div className="flex flex-wrap gap-4 w-full">
          <PackageCard inCart={false} />
          <PackageCard inCart={false} />
          <PackageCard inCart={false} />
          <PackageCard inCart={false} />
          <PackageCard inCart={false} />
          <PackageCard inCart={false} />
          <PackageCard inCart={false} />
          <PackageCard inCart={false} />
          <PackageCard inCart={false} />
          <PackageCard inCart={false} />
          <PackageCard inCart={false} />
          <PackageCard inCart={false} />
        </div>
      </div>
    </>
  );
}
