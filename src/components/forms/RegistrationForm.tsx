import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RegistrationData } from "@/contexts/UserContext";

interface RegistrationFormProps {
  onToggleMode: () => void;
  isLoading: boolean;
  error: string | null;
  register: (data: RegistrationData) => Promise<void>;
  onSuccess: () => void;
}

export function RegistrationForm({
  onToggleMode,
  isLoading,
  error,
  register,
  onSuccess,
}: RegistrationFormProps) {
  const [regData, setRegData] = useState<RegistrationData>({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    gender: "",
    address: "",
    phone: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (regData.password !== confirmPassword) {
      // Handle password mismatch
      return;
    }
    
    await register(regData);
    if (!error) {
      onSuccess();
    }
  };

  const handleRegDataChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    let field = id;
    
    // Map form field IDs to backend field names
    if (id === "firstName") field = "first_name";
    if (id === "lastName") field = "last_name";
    if (id === "reg-username") field = "username";
    if (id === "reg-password") field = "password";
    
    setRegData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <form onSubmit={handleRegister} className="flex flex-col gap-6">
      <div className="flex flex-col align-top py-4 w-full gap-6">
        <div className="flex flex-cols items-center gap-2">
          <Input
            id="firstName"
            placeholder="First name"
            value={regData.first_name}
            onChange={handleRegDataChange}
            required
          />
          <Input
            id="middleInitial"
            placeholder="M.I."
            className="w-16"
          />
          <Input
            id="lastName"
            placeholder="Last name"
            value={regData.last_name}
            onChange={handleRegDataChange}
            required
          />
          <Select 
            value={regData.gender} 
            onValueChange={(value) => setRegData(prev => ({ ...prev, gender: value }))}
          >
            <SelectTrigger>
              <SelectValue placeholder="Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-cols items-center gap-2">
          <Input
            id="address"
            placeholder="Full address"
            value={regData.address}
            onChange={handleRegDataChange}
          />
        </div>

        <div className="flex flex-cols items-center gap-2">
          <Input
            id="email"
            type="email"
            placeholder="Email address"
            value={regData.email}
            onChange={handleRegDataChange}
            required
          />
          <Input
            id="phone"
            type="tel"
            placeholder="Contact number"
            value={regData.phone}
            onChange={handleRegDataChange}
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
            value={regData.username}
            onChange={handleRegDataChange}
            required
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
            value={regData.password}
            onChange={handleRegDataChange}
            required
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
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
      </div>
      
      <DialogDescription className="flex flex-row justify-center items-center">
        <div>Already have an account?</div>
        <Button type="button" variant="link" onClick={onToggleMode}>Log In</Button>
      </DialogDescription>
      
      <DialogFooter className="flex flex-col items-center">
        <Button className="w-full" type="submit" disabled={isLoading}>
          {isLoading ? "Registering..." : "Register"}
        </Button>
      </DialogFooter>
    </form>
  );
}
