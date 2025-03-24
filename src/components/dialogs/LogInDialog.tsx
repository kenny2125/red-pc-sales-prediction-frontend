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

export function LogInDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" type="submit">
          Log In/Sign Up
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[592px] h-fit    ">
        <DialogHeader className="flex flex-col items-center">
          <Logo />
        </DialogHeader>

        <div className="flex flex-row justify-between gap-8">
          <div className="flex flex-col align-top py-4 w-full gap-8">
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
              <Input
                id="password"
                value="***************"
                className="col-span-3"
              />
            </div>
          </div>
        </div>
        <DialogDescription className="flex flex-row justify-center items-center">
          <div>
          Don’t have an account? 
          </div>
          <Button variant="link">Create New Account</Button>
        </DialogDescription>
        <DialogFooter className="flex flex-col items-center">
          <Button className="w-full" type="submit">Log In</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
