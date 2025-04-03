import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { UserPen, Eye, EyeOff } from "lucide-react";
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
  const [editing, setEditing] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

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

  const handleSave = () => {
    setEditing(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <UserPen size={40} className="text-primary" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[867px] w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex flex-row align-middle items-center gap-2">
            <UserPen size={40} className="text-primary" />
            <DialogTitle>View Profile</DialogTitle>
          </div>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col align-top py-4 w-full gap-4">
            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="John Kenny Q. Reyes" className="col-span-3" disabled={!editing} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
              <Label htmlFor="Email" className="text-right">
                Email
              </Label>
              <Input id="Email" value="johnkennypogitalaga@gmail.com" className="col-span-3" disabled={!editing} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" disabled={!editing} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <div className="col-span-3 relative">
                <Input
                  id="password"
                  value="***************"
                  type={showPassword ? "text" : "password"}
                  disabled={!editing}
                  className="w-full pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </div>

          {currentUser?.role === "customer" ? (
            <div className="flex flex-col align-top py-4 w-full gap-4">
              <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                <Label htmlFor="address" className="text-right">
                  Address
                </Label>
                <Input id="address" value="Pedro Duarte" className="col-span-3" disabled={!editing} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                <Label htmlFor="contact" className="text-right">
                  Contact
                </Label>
                <Input id="contact" value="@peduarte" className="col-span-3" disabled={!editing} />
              </div>
            </div>
          ) : (
            <div className="flex flex-col align-top py-4 w-full gap-4">
              <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                <Label htmlFor="role" className="text-right">
                  Role
                </Label>
                <Input id="address" value="Pedro Duarte" className="col-span-3" disabled={!editing} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                <Label htmlFor="contact" className="text-right">
                  Contact
                </Label>
                <Input id="contact" value="@peduarte" className="col-span-3" disabled={!editing} />
              </div>
            </div>
          )}
        </div>
        <DialogFooter>
          <div className="flex gap-2">
            {editing ? (
              <Button type="button" onClick={handleSave}>Save</Button>
            ) : (
              <Button type="button" onClick={() => setEditing(true)}>Edit</Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
