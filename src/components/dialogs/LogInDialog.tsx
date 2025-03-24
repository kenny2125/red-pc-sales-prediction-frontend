import { Button } from "@/components/ui/button";
import Logo from "../Logo";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export function LogInDialog() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => setIsLogin(!isLogin);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" type="submit">
          Log In/Sign Up
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[592px] h-fit">
        <DialogHeader className="flex flex-col items-center">
          <Logo />
          <DialogTitle>{isLogin ? "Login" : "Create Account"}</DialogTitle>
        </DialogHeader>

        {isLogin ? (
          // Login Form
          <div className="flex flex-row justify-between gap-8">
            <div className="flex flex-col align-top py-4 w-full gap-8">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  placeholder="Enter username"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  className="col-span-3"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col align-top py-4 w-full gap-6">
            <div className="flex flex-cols items-center gap-2">
              <Input
                id="firstName"
                placeholder="First name"
                className="col-span-3"
              />
              <Input
                id="middleInitial"
                placeholder="M.I."
                className="col-span-1 w-"
              />
              <Input
                id="lastName"
                placeholder="Last name"
                className="col-span-3"
              />
              <Select>
                <SelectTrigger className="col-span-3">
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-cols items-center gap-2">
              <Input
                id="address"
                placeholder="Full address"
                className="col-span-10"
              />
            </div>

            <div className="flex flex-cols items-center gap-2">
              <Input
                id="email"
                type="email"
                placeholder="Email address"
                className="col-span-5"
              />
              <Input
                id="phone"
                type="tel"
                placeholder="Contact number"
                className="col-span-5"
              />
            </div>

            <div className="flex flex-col justify-center align-middle w-full mt-2">
              <h3 className="text-sm font-medium">Login Information</h3>
              <div className="h-px bg-border my-2"></div>
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="reg-username" className="text-right">
                Username
              </Label>
              <Input
                id="reg-username"
                placeholder="Choose a username"
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="reg-password" className="text-right">
                Password
              </Label>
              <Input
                id="reg-password"
                type="password"
                placeholder="Create password"
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="confirm-password" className="text-right">
                Confirm
              </Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="Confirm password"
                className="col-span-3"
              />
            </div>
          </div>
        )}

        <DialogDescription className="flex flex-row justify-center items-center">
          <div>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </div>
          <Button variant="link" onClick={toggleMode}>
            {isLogin ? "Create New Account" : "Log In"}
          </Button>
        </DialogDescription>
        <DialogFooter className="flex flex-col items-center">
          <Button className="w-full" type="submit">
            {isLogin ? "Log In" : "Register"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
