import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import {
  Search,
  LayoutDashboard,
  PackageSearch,
  TrendingUp,
  ScrollText,
  Menu,
  Users,
} from "lucide-react";
import { ProfileDialog } from "./dialogs/ProfileDialog";
import { OrderDialog } from "./dialogs/OrderDialog";
import { CartDialog } from "./dialogs/CartDialog";
import { ModeToggle } from "./ui/mode-toggle";
import { LogInDialog } from "./dialogs/LogInDialog";
import Logo from "./Logo";
import { useUser } from "@/contexts/UserContext";
import { Outlet, Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import * as React from "react";

export default function Header() {
  const { currentUser, isLoggedIn } = useUser();
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/product/categories`);
        if (!response.ok) throw new Error('Failed to fetch categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  // Helper function to get navigation links based on user role
  const getNavigationLinks = () => {
    if (!currentUser) return [];

    const links = [];

    // Admin has access to everything
    if (currentUser.role === "admin") {
      links.push(
        {
          to: "/dashboard",
          icon: <LayoutDashboard className="w-5 h-5" />,
          text: "Dashboard",
        },
        {
          to: "/inventory",
          icon: <PackageSearch className="w-5 h-5" />,
          text: "Inventory",
        },
        {
          to: "/sales",
          icon: <TrendingUp className="w-5 h-5" />,
          text: "Sales",
        },
        {
          to: "/orders",
          icon: <ScrollText className="w-5 h-5" />,
          text: "Orders",
        },
        { to: "/users", icon: <Users className="w-5 h-5" />, text: "Users" }
      );
    }
    // Editor has access to inventory, orders, and sales
    else if (currentUser.role === "editor") {
      links.push(
        {
          to: "/inventory",
          icon: <PackageSearch className="w-5 h-5" />,
          text: "Inventory",
        },
        {
          to: "/sales",
          icon: <TrendingUp className="w-5 h-5" />,
          text: "Sales",
        },
        {
          to: "/orders",
          icon: <ScrollText className="w-5 h-5" />,
          text: "Orders",
        }
      );
    }
    // Viewer has access to sales only
    else if (currentUser.role === "viewer") {
      links.push({
        to: "/sales",
        icon: <TrendingUp className="w-5 h-5" />,
        text: "Sales",
      });
    }

    return links;
  };

  function productSearch() {
    try {
      const mobileInput = document.getElementById(
        "mobile-search-input"
      ) as HTMLInputElement;
      const desktopInput = document.querySelector(
        'input[type="email"]'
      ) as HTMLInputElement;
      const searchValue =
        (mobileInput && mobileInput.value.trim()) ||
        (desktopInput && desktopInput.value.trim());
      if (searchValue) {
        window.location.href = `/search?query=${encodeURIComponent(
          searchValue
        )}`;
      } else {
        alert("Please enter a product name to search.");
      }
    } catch (error) {
      console.error("Error during product search:", error);
    }
  }

  const navigationLinks = getNavigationLinks();

  // ListItem component for navigation menu
  const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
  >(({ className, title, children, ...props }, ref) => {
    return (
      <li className="w-full sm:w-auto">
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full sm:w-auto text-center sm:text-left",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  });
  ListItem.displayName = "ListItem";

  return (
    <div className="w-full flex flex-col">
      {/* Header row (existing) */}
      {currentUser?.role === "admin" ||
      currentUser?.role === "editor" ||
      currentUser?.role === "viewer" ? (
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
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden lg:flex items-center justify-center gap-12 flex-1">
            {navigationLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                {link.icon}
                <span>{link.text}</span>
              </Link>
            ))}
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
          <div
            className={`lg:hidden w-full ${
              mobileMenuOpen ? "flex" : "hidden"
            } flex-col gap-2 px-4 py-2 bg-background border-t`}
          >
            {navigationLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="flex items-center gap-2 hover:text-primary transition-colors py-2"
              >
                {link.icon}
                <span>{link.text}</span>
              </Link>
            ))}
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
                <div className="inline-flex items-center gap-2">
                  <LogInDialog />
                  <ModeToggle />
                </div>
              )}
            </div>
          </div>
          {/* Mobile view (sm & md devices) */}
          <div className="lg:hidden">
            {/* First row */}
            <div className="flex justify-between items-center px-4 py-2">
              <Logo />
              <div className="flex items-center gap-2">
                <Button onClick={() => setMobileSearchOpen((prev) => !prev)}>
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
          </div>
          {/* Desktop categories row (visible on md and up) */}
          <div className="hidden md:flex w-full border-b flex-nowrap gap-2 sm:gap-4 items-center justify-start  px-2 sm:px-0 scrollbar-thin scrollbar-thumb-muted-foreground/30 scrollbar-track-transparent">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-row flex-nowrap">
                {categories.map((cat) => (
                  <NavigationMenuItem key={cat}>
                    <NavigationMenuLink asChild>
                      <a href={`/search?category=${encodeURIComponent(cat)}`}>{cat}</a>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          {/* Mobile filter/hamburger beside search bar (visible on small screens) */}
          {mobileSearchOpen && (
            <div className="flex md:hidden items-center px-4 pb-2 gap-2">
              <Input id="mobile-search-input" type="email" placeholder="Search" className="flex-1" />
              <Button type="submit" onClick={productSearch}>
                <Search />
              </Button>
              <Sheet open={categoriesOpen} onOpenChange={setCategoriesOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" aria-label="Open categories menu">
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64 p-0">
                  <div className="p-4 border-b font-semibold text-lg">Categories</div>
                  <NavigationMenu orientation="vertical">
                    <NavigationMenuList className="flex flex-col">
                      {categories.map((cat) => (
                        <NavigationMenuItem key={cat}>
                          <NavigationMenuLink asChild>
                            <a href={`/search?category=${encodeURIComponent(cat)}`}>{cat}</a>
                          </NavigationMenuLink>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                </SheetContent>
              </Sheet>
            </div>
          )}
        </>
      )}
    </div>
  );
}
