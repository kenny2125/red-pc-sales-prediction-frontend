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

export default function Header() {
  const { currentUser, isLoggedIn, logout } = useUser();

  return (
    <div className="w-full h-[8rem] inline-flex justify-between items-center">
      <Logo/>

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


        {isLoggedIn ? (
          <>
            <div className="inline-flex items-center gap-2">
              <div className="inline-block align-middle">
                <h1>Welcome Back</h1>
                <p>{currentUser?.name}</p>
              </div>
              <div className="inline-flex items-center gap-2">                
                <OrderDialog/>
                <ProfileDialog/>
                <CartDialog/>
                <ModeToggle/>
                <Button variant="outline" onClick={logout}>Logout</Button>
              </div>
            </div>
          </>
        ) : (
            <LogInDialog/>
        )}
      </div>
    </div>
  );
}
