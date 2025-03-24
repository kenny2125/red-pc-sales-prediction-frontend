import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { UserPen } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type UserRole = "guest" | "customer" | "admin";

interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export function ProfileDialog() {

  
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
        
        
        break;
      case "admin":
        setCurrentUser({
          id: "1",
          name: "Kenny Admin",
          email: "asdsadasd",
          role: "admin",
        });
        
        
        break;
      default:
        
        
        setCurrentUser(null);

        break;
    }
  }, []);

  const handleLogout = () => {
    
    setCurrentUser(null);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        
        <UserPen size={40} className="text-primary" />
      </DialogTrigger>

      <DialogContent className="sm:max-w-[867px]">
        <DialogHeader>
          <div className="flex flex-row align-middle items-center gap-2">
            <UserPen size={40} className="text-primary" />
            <DialogTitle>View Profile</DialogTitle>
          </div>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-row justify-between gap-8">
          <div className="flex flex-col align-top py-4 w-full gap-4">
            <div className="grid grid-cols-4 items-center  gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="John Kenny Q. Reyes" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="Email" className="text-right">
                Email
              </Label>
              <Input id="Email" value="johnkennypogitalaga@gmail.com" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input id="password" value="***************" className="col-span-3"  />
            </div>
          </div>
          
          {currentUser?.role === "customer" ? (
          <div className="flex flex-col align-top py-4  w-full gap-4">
 
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="address" className="text-right">
              Address
            </Label>
            <Input id="address" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="contact" className="text-right">
              Contact
            </Label>
            <Input id="contact" value="@peduarte" className="col-span-3" />
          </div>
 
        </div>
          ):(
            <div className="flex flex-col align-top py-4  w-full gap-4">
 
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="role" className="text-right">
                Role
              </Label>
              <Input id="address" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="contact" className="text-right">
                Contact
              </Label>
              <Input id="contact" value="@peduarte" className="col-span-3" />
            </div>
   
          </div>
          )}


        </div>
        <DialogFooter>
          <Button type="submit">Close</Button>
          
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
