import RedPcLogo from "../assets/redpcph.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Arrow } from "@radix-ui/react-dropdown-menu";
import { useState, useEffect } from "react";
import { ScrollText } from "lucide-react";
import { ShoppingCart } from "lucide-react";
import { Search } from "lucide-react";
import { ProfileDialog } from "./ProfileDialog";

type UserRole = "guest" | "customer" | "admin";

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const userType: UserRole = "admin";

    switch (userType) {
      case "customer":
        setCurrentUser({
          id: "2",
          name: "Kenny",
          email: "asdsadasd",
          role: "customer",
        });
        setIsLoggedIn(true);
        
        break;
      case "admin":
        setCurrentUser({
          id: "1",
          name: "Kenny Admin",
          email: "asdsadasd",
          role: "admin",
        });
        setIsLoggedIn(true);
        
        break;
      default:
        setIsLoggedIn(false);
        
        setCurrentUser(null);

        break;
    }
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  return (
    <div className="w-full h-[8rem] inline-flex justify-between items-center">
      <div className="inline-flex justify-center items-center gap-2">
        <img className="w-[76.13px] h-[76px]" src={RedPcLogo} />
        <div className="text-4xl  font-['Anton']">RED PC</div>
      </div>

      {currentUser?.role == "admin" ? (
        <div className="inline-flex align-middle justify-center gap-12">
          <Button className="text-foreground text-1xl" variant="link">
            Dashboard
          </Button>
          <Button className="text-foreground text-1xl" variant="link">
            Inventory
          </Button>
          <Button className="text-foreground text-1xl" variant="link">
            Sales
          </Button>
          <Button className="text-foreground text-1xl" variant="link">
            Orders
          </Button>
        </div>
      ) : (
        <div className="flex justify-start items-center gap-[18px]">
          <div className="flex w-[520px] h-[53px] items-center gap-2">
            <Input type="email" placeholder="Search" />
            <Button type="submit">
              <Search />
              Search
            </Button>
          </div>
        </div>
      )}

      <div>
        {/* <Button variant="link" type="submit">About Us</Button> */}

        {isLoggedIn ? (
          <>
            <div className="inline-flex items-center gap-2">
              <div className="inline-block align-middle">
                <h1>Welcome Back</h1>
                <p>{currentUser?.name}</p>
              </div>
              <div className="inline-flex items-center gap-2">
                <ScrollText size={40} className="text-primary" />
                <ProfileDialog/>
                <ShoppingCart size={40} className="text-primary" />
              </div>
            </div>
          </>
        ) : (
          <Button variant="outline" type="submit">
            Log In/Sign Up
          </Button>
        )}
      </div>
    </div>
  );
}
