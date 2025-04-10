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
import { Outlet, Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const { currentUser, isLoggedIn } = useUser();
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  }

  return (
    <div className="w-full flex flex-col">
      {currentUser?.role == "admin" ? (
        <div className="min-h-[4rem] lg:h-[8rem] flex flex-col lg:flex-row justify-between items-center w-full">
          {/* Logo - Left */}
          <div className="flex w-full lg:w-1/4 justify-between lg:justify-start items-center px-4 lg:px-0 py-2 lg:py-0">
            <Logo />
            <div className="flex items-center gap-1 lg:hidden">
              <div className="text-primary text-sm flex flex-col items-end">
                <span>{getGreeting()}</span>
                <span className="font-medium">{currentUser.first_name}</span>
              </div>
              <div className="flex items-center gap-1">
                <ProfileDialog />
                <ModeToggle />
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setMobileMenuOpen(prev => !prev)}>
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
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
          <div className="hidden lg:flex items-center gap-3 w-1/4 justify-end">
            <div className="text-primary flex flex-col items-end">
              <span>{getGreeting()}</span>
              <span className="font-medium">{currentUser.first_name}</span>
            </div>
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
              <form onSubmit={handleSearch} className="flex w-[520px] h-[53px] items-center gap-2">
                <Input 
                  type="text" 
                  placeholder="Search" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit">
                  <Search /> <span>Search</span>
                </Button>
              </form>
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
                <form onSubmit={handleSearch} className="flex gap-2">
                  <Input 
                    type="text" 
                    placeholder="Search" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button type="submit">
                    <Search /> <span>Search</span>
                  </Button>
                </form>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
