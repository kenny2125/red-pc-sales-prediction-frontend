import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search } from "lucide-react";
import { ProfileDialog } from "./dialogs/ProfileDialog";
import { OrderDialog } from "./dialogs/OrderDialog";
import { CartDialog } from "./dialogs/CartDialog";
import { ModeToggle } from "./ui/mode-toggle";
import { LogInDialog } from "./dialogs/LogInDialog";
import Logo from "./Logo";
import { useUser } from "@/contexts/UserContext";
import { Outlet, Link } from "react-router-dom";

export default function Header() {
  const { currentUser, isLoggedIn, logout } = useUser();
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  function productSearch() {
    try {
      // Try mobile input first; fallback to desktop input
      const mobileInput = document.getElementById("mobile-search-input") as HTMLInputElement;
      const desktopInput = document.querySelector('input[type="email"]') as HTMLInputElement;
      const searchValue =
        (mobileInput && mobileInput.value.trim()) ||
        (desktopInput && desktopInput.value.trim());
      if (searchValue) {
        window.location.href = `/search?query=${encodeURIComponent(searchValue)}`;
      } else {
        alert("Please enter a product name to search.");
      }
    } catch (error) {
      console.error("Error during product search:", error);
    }
  }

  return (
    <div className="w-full flex flex-col">
      {currentUser?.role == "admin" ? (
        <div className="h-[8rem] inline-flex justify-between items-center">
          <Logo />
          <div className="inline-flex align-middle justify-center gap-12">
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/sales">Sales</Link>
            <Link to="/orders">Orders</Link>
          </div>
          <div>
            {isLoggedIn ? (
              <>
                <div className="inline-flex items-center gap-2">
                  <OrderDialog />
                  <ProfileDialog />
                  <CartDialog />
                  <ModeToggle />
                  <Button variant="outline" onClick={logout}>Logout</Button>
                </div>
              </>
            ) : (
              <LogInDialog />
            )}
          </div>
        </div>
      ) : (
        <>
          {/* Desktop view (lg and up) */}
          <div className="hidden lg:flex h-[8rem] items-center">
            <div>
              <Logo />
            </div>
            <div className="flex flex-1 justify-center">
              <div className="flex w-[520px] h-[53px] items-center gap-2">
                <Input type="email" placeholder="Search" />
                <Button type="submit" onClick={productSearch}>
                  <Search /> <span>Search</span>
                </Button>
              </div>
            </div>
            <div>
              {isLoggedIn ? (
                <div className="inline-flex items-center gap-2">
                  <OrderDialog />
                  <ProfileDialog />
                  <CartDialog />
                  <ModeToggle />
                  <Button variant="outline" onClick={logout}>Logout</Button>
                </div>
              ) : (
                <LogInDialog />
              )}
            </div>
          </div>
          {/* Mobile view (sm & md devices) */}
          <div className="lg:hidden">
            {/* First row */}
            <div className="flex justify-between items-center px-4 py-2">
              <Logo />
              <div className="flex items-center gap-2">
                <Button onClick={() => setMobileSearchOpen(prev => !prev)}>
                  <Search />
                </Button>
                {isLoggedIn ? (
                  <div className="flex items-center gap-2">
                    <OrderDialog />
                    <CartDialog />
                    <ProfileDialog />
                  </div>
                ) : (
                  <LogInDialog />
                )}
              </div>
            </div>
            {/* Second row: search input, shown when toggled */}
            {mobileSearchOpen && (
              <div className="px-4 pb-2">
                <div className="flex gap-2">
                  <Input id="mobile-search-input" type="email" placeholder="Search" />
                  <Button type="submit" onClick={productSearch}>
                    <Search /> <span>Search</span>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
