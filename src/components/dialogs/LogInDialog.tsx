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
import { useState, useEffect } from "react";
import { useUser, RegistrationData } from "@/contexts/UserContext";

export function LogInDialog() {
  const [isLogin, setIsLogin] = useState(true);
  const [open, setOpen] = useState(false);
  
  // Login form state
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  
  // Registration form state
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
  
  const { login, register, isLoggedIn, isLoading, error, clearError, currentUser, logout } = useUser();

  const toggleMode = () => {
    setIsLogin(!isLogin);
    clearError();
  };

  // Reset form when dialog closes
  useEffect(() => {
    if (!open) {
      setCredential("");
      setPassword("");
      setRegData({
        username: "",
        email: "",
        password: "",
        first_name: "",
        last_name: "",
        gender: "",
        address: "",
        phone: "",
      });
      setConfirmPassword("");
      clearError();
    }
  }, [open, clearError]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(credential, password);
    if (!error) {
      setOpen(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (regData.password !== confirmPassword) {
      // Handle password mismatch
      return;
    }
    
    await register(regData);
    if (!error) {
      setOpen(false);
    }
  };

  const handleRegDataChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    let field = id;
    
    // Map form field IDs to backend field names
    if (id === 'firstName') field = 'first_name';
    if (id === 'lastName') field = 'last_name';
    if (id === 'reg-username') field = 'username';
    if (id === 'reg-password') field = 'password';
    
    setRegData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLogout = () => {
    logout();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" type="submit">
          {isLoggedIn ? "My Account" : "Log In/Sign Up"}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[592px] h-fit">
        {isLoggedIn ? (
          // User profile view when logged in
          <>
            <DialogHeader className="flex flex-col items-center">
              <Logo />
              <DialogTitle>My Account</DialogTitle>
            </DialogHeader>
            
            <div className="flex flex-col gap-4 py-4">
              <div className="flex flex-row justify-between">
                <span className="font-medium">Username:</span>
                <span>{currentUser?.username}</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="font-medium">Email:</span>
                <span>{currentUser?.email}</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="font-medium">Name:</span>
                <span>{currentUser?.first_name} {currentUser?.last_name}</span>
              </div>
              <div className="flex flex-row justify-between">
                <span className="font-medium">Role:</span>
                <span className="capitalize">{currentUser?.role}</span>
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="destructive" onClick={handleLogout}>
                Log Out
              </Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader className="flex flex-col items-center">
              <Logo />
              <DialogTitle>{isLogin ? "Login" : "Create Account"}</DialogTitle>
            </DialogHeader>

            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/80 z-50">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            )}

            {error && (
              <div className="bg-destructive/15 text-destructive p-3 rounded-md mb-4">
                {error}
              </div>
            )}

            {isLogin ? (
              // Login Form
              <form onSubmit={handleLogin} className="flex flex-col gap-8">
                <div className="flex flex-row justify-between gap-8">
                  <div className="flex flex-col align-top py-4 w-full gap-8">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="credential" className="text-right">
                        Username/Email
                      </Label>
                      <Input
                        id="credential"
                        placeholder="Enter username or email"
                        className="col-span-3"
                        value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        required
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <DialogDescription className="flex flex-row justify-center items-center">
                  <div>Don't have an account?</div>
                  <Button type="button" variant="link" onClick={toggleMode}>Create New Account</Button>
                </DialogDescription>
                
                <DialogFooter className="flex flex-col items-center">
                  <Button className="w-full" type="submit" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Log In"}
                  </Button>
                </DialogFooter>
              </form>
            ) : (
              // Registration form
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
                  <Button type="button" variant="link" onClick={toggleMode}>Log In</Button>
                </DialogDescription>
                
                <DialogFooter className="flex flex-col items-center">
                  <Button className="w-full" type="submit" disabled={isLoading}>
                    {isLoading ? "Registering..." : "Register"}
                  </Button>
                </DialogFooter>
              </form>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
