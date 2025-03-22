import RedPcLogo from "../assets/redpcph.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Arrow } from "@radix-ui/react-dropdown-menu";
import { useState, useEffect } from "react";
import { UserPen } from "lucide-react";
import { ScrollText } from "lucide-react";
import { ShoppingCart } from "lucide-react";

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
    const userType: UserRole = "customer";

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
    <div className="w-full h-[122px] inline-flex justify-between items-center">
      <div className="inline-flex justify-center items-center">
        <img className="w-[76.13px] h-[76px]" src={RedPcLogo} />
        <div className="text-4xl  font-['Anton']">RED PC</div>
      </div>

      <div className="flex justify-start items-center gap-[18px]">
        <div className="flex w-[520px] h-[53px] items-center gap-2">
          <Input type="email" placeholder="Search" />
          <Button type="submit">Search</Button>
        </div>
      </div>
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
                <UserPen size={40} className="text-primary" />
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
