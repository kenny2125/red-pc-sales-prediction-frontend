import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Search, LayoutDashboard, PackageSearch, TrendingUp, ScrollText, Menu } from "lucide-react";
import { ProfileDialog } from "./dialogs/ProfileDialog";
import { OrderDialog } from "./dialogs/OrderDialog";
import { CartDialog } from "./dialogs/CartDialog";
import { ModeToggle } from "./ui/mode-toggle";
import { LogInDialog } from "./dialogs/LogInDialog";
import Logo from "./Logo";
import { useUser } from "@/contexts/UserContext";
import { Outlet, Link } from "react-router-dom";

export default function Header() {
  const { currentUser, isLoggedIn } = useUser();
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <div className="min-h-[4rem] lg:h-[8rem] flex flex-col lg:flex-row justify-between items-center w-full">
          {/* Logo - Left */}
          <div className="flex w-full lg:w-1/4 justify-between lg:justify-start items-center px-4 lg:px-0 py-2 lg:py-0">
            <Logo />
            <div className="flex items-center gap-2 lg:hidden">
              <ProfileDialog />
              <ModeToggle />
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(prev => !prev)}>
                <Menu />
              </Button>
            </div>
          </div>
          
          {/* Navigation Links - Center */}
          <div className="hidden lg:flex items-center justify-center gap-12 flex-1">
            <Link to="/dashboard" className="flex items-center gap-2 hover:text-primary transition-colors">
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link to="/inventory" className="flex items-center gap-2 hover:text-primary transition-colors">
              <PackageSearch className="w-5 h-5" />
              <span>Inventory</span>
            </Link>
            <Link to="/sales" className="flex items-center gap-2 hover:text-primary transition-colors">
              <TrendingUp className="w-5 h-5" />
              <span>Sales</span>
            </Link>
            <Link to="/orders" className="flex items-center gap-2 hover:text-primary transition-colors">
              <ScrollText className="w-5 h-5" />
              <span>Orders</span>
            </Link>
          </div>

          {/* User Controls - Right */}
          <div className="hidden lg:flex items-center gap-2 w-1/4 justify-end">
            <ProfileDialog />
            <ModeToggle />
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden w-full ${mobileMenuOpen ? 'flex' : 'hidden'} flex-col gap-2 px-4 py-2 bg-background border-t`}>
            <Link to="/dashboard" className="flex items-center gap-2 hover:text-primary transition-colors py-2">
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link to="/inventory" className="flex items-center gap-2 hover:text-primary transition-colors py-2">
              <PackageSearch className="w-5 h-5" />
              <span>Inventory</span>
            </Link>
            <Link to="/sales" className="flex items-center gap-2 hover:text-primary transition-colors py-2">
              <TrendingUp className="w-5 h-5" />
              <span>Sales</span>
            </Link>
            <Link to="/orders" className="flex items-center gap-2 hover:text-primary transition-colors py-2">
              <ScrollText className="w-5 h-5" />
              <span>Orders</span>
            </Link>
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
