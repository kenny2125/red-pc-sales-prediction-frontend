import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RegistrationData } from "@/contexts/UserContext";
import { Eye, EyeOff, CheckCircle } from "lucide-react";

interface RegistrationFormProps {
  onToggleMode: () => void;
  isLoading: boolean;
  error: string | null;
  onSuccess: () => void;
}

export function RegistrationForm({
  onToggleMode,
  isLoading,
  error,
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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registrationStatus, setRegistrationStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false);

  useEffect(() => {
    const registerUrl = `${import.meta.env.VITE_API_URL}/api/auth/register`;
    fetch(registerUrl)
      .then(response => response.json())
      .then(data => console.log("Registration endpoint response:", data))
      .catch(err => console.error("Error fetching registration endpoint:", err));
  }, []);

  const validateField = (field: string, value: string): string => {
    switch (field) {
      case "first_name":
        if (!value.trim()) return "First name is required";
        if (!/^[A-Za-z\s]+$/.test(value)) return "Should contain only letters";
        return "";
      case "last_name":
        if (!value.trim()) return "Last name is required";
        if (!/^[A-Za-z\s]+$/.test(value)) return "Should contain only letters";
        return "";
      case "gender":
        if (!value) return "Please select a gender";
        return "";
      case "address":
        if (!value.trim()) return "Address is required";
        return "";
      case "email":
        if (!value.trim()) return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email";
        return "";
      case "phone":
        if (!value.trim()) return "Phone number is required";
        if (!/^[0-9+\-\s()]{7,15}$/.test(value)) return "Please enter a valid phone number";
        return "";
      case "username":
        if (!value.trim()) return "Username is required";
        if (value.length < 4) return "Username must be at least 4 characters";
        if (!/^[A-Za-z0-9_]+$/.test(value)) return "Username should be alphanumeric";
        return "";
      case "password":
        if (!value) return "Password is required";
        if (value.length < 8) return "Password must be at least 8 characters";
        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) 
          return "Password must include uppercase, lowercase, and numbers";
        return "";
      case "confirmPassword":
        if (!value) return "Please confirm your password";
        if (value !== regData.password) return "Passwords do not match";
        return "";
      default:
        return "";
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields before submission
    const validationErrors: Record<string, string> = {};
    Object.entries(regData).forEach(([key, value]) => {
      const error = validateField(key, value as string);
      if (error) validationErrors[key] = error;
    });
    
    const confirmError = validateField("confirmPassword", confirmPassword);
    if (confirmError) validationErrors.confirmPassword = confirmError;
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setRegistrationStatus('loading');
    const registerUrl = `${import.meta.env.VITE_API_URL}/api/auth/register`;
    try {
      const res = await fetch(registerUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(regData)
      });
      
      if (!res.ok) {
        const result = await res.json();
        console.error(result);
        setRegistrationStatus('error');
        return;
      }
      
      // On success, show success overlay and then switch back to the login form
      setRegistrationStatus('success');
      setShowSuccessOverlay(true);
      setTimeout(() => {
        onToggleMode(); // switch back to login form
        setTimeout(() => {
          setShowSuccessOverlay(false);
        }, 500);
      }, 2000);
      
    } catch (err) {
      console.error(err);
      setRegistrationStatus('error');
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
    
    // Validate on change
    const error = validateField(field, value);
    setErrors(prev => ({
      ...prev,
      [field]: error
    }));
    
    // Mark as touched
    setTouched(prev => ({
      ...prev,
      [field]: true
    }));
  };
  
  const handleBlur = (field: string) => {
    setTouched(prev => ({
      ...prev,
      [field]: true
    }));
    
    // Validate on blur
    const value = field === "confirmPassword" ? confirmPassword : regData[field as keyof RegistrationData] as string;
    const error = validateField(field, value);
    setErrors(prev => ({
      ...prev,
      [field]: error
    }));
  };
  
  const handleSelectChange = (value: string, field: string) => {
    setRegData(prev => ({ ...prev, [field]: value }));
    
    const error = validateField(field, value);
    setErrors(prev => ({
      ...prev,
      [field]: error
    }));
    
    setTouched(prev => ({
      ...prev,
      [field]: true
    }));
  };
  
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);
    
    const error = validateField("confirmPassword", value);
    setErrors(prev => ({
      ...prev,
      confirmPassword: error
    }));
  };

  if (showSuccessOverlay) {
    return (
      <div className="h-fit flex flex-col items-center justify-center z-50 animate-fadeIn mb-16">
        <CheckCircle className="w-20 h-20 text-green-500 " />
        <h2 className="text-2xl font-bold text-green-600">Registration Successful!</h2>
      </div>
    );
  }

  return (
    <form onSubmit={handleRegister} className="flex flex-col">
      <div className="flex flex-col align-top py-4 w-full gap-6">
        {/* Personal information section */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div className="flex-1">
            <Input
              id="firstName"
              placeholder="First name"
              value={regData.first_name}
              onChange={handleRegDataChange}
              onBlur={() => handleBlur("first_name")}
              required
              className={errors.first_name && touched.first_name ? "border-red-500" : ""}
            />
            {errors.first_name && touched.first_name && (
              <p className="text-xs text-red-500">{errors.first_name}</p>
            )}
          </div>
          
          <div className="flex-1">
            <Input
              id="lastName"
              placeholder="Last name"
              value={regData.last_name}
              onChange={handleRegDataChange}
              onBlur={() => handleBlur("last_name")}
              required
              className={errors.last_name && touched.last_name ? "border-red-500" : ""}
            />
            {errors.last_name && touched.last_name && (
              <p className="text-xs text-red-500">{errors.last_name}</p>
            )}
          </div>
          
          <div className="flex-1">
            <Select 
              value={regData.gender} 
              onValueChange={(value) => handleSelectChange(value, "gender")}
              onOpenChange={(open) => !open && handleBlur("gender")}
            >
              <SelectTrigger className={`w-full ${errors.gender && touched.gender ? "border-red-500" : ""}`}>
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
              </SelectContent>
            </Select>
            {errors.gender && touched.gender && (
              <p className="text-xs text-red-500 mt-1">{errors.gender}</p>
            )}
          </div>
        </div>

        {/* Address section */}
        <div className="w-full">
          <Input
            id="address"
            placeholder="Full address"
            value={regData.address}
            onChange={handleRegDataChange}
            onBlur={() => handleBlur("address")}
            required
            className={errors.address && touched.address ? "border-red-500" : ""}
          />
          {errors.address && touched.address && (
            <p className="text-xs text-red-500 mt-1">{errors.address}</p>
          )}
        </div>

        {/* Contact information section */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <div className="flex-1">
            <Input
              id="email"
              type="email"
              placeholder="Email address"
              value={regData.email}
              onChange={handleRegDataChange}
              onBlur={() => handleBlur("email")}
              required
              className={errors.email && touched.email ? "border-red-500" : ""}
            />
            {errors.email && touched.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email}</p>
            )}
          </div>
          
          <div className="flex-1">
            <Input
              id="phone"
              type="tel"
              placeholder="Contact number"
              value={regData.phone}
              onChange={handleRegDataChange}
              onBlur={() => handleBlur("phone")}
              required
              className={errors.phone && touched.phone ? "border-red-500" : ""}
            />
            {errors.phone && touched.phone && (
              <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col justify-center align-middle w-full mt-2">
          <h3 className="text-sm font-medium">Login Information</h3>
          <div className="h-px bg-border my-2"></div>
        </div>

        {/* Login information section */}
        <div className="flex flex-col sm:flex-row items-start gap-4 w-full">
          <Label htmlFor="reg-username" className="min-w-20 text-right pt-2 sm:w-auto">
            Username
          </Label>
          <div className="flex-1 w-full">
            <Input
              id="reg-username"
              placeholder="Choose a username"
              className={`${errors.username && touched.username ? "border-red-500" : ""}`}
              value={regData.username}
              onChange={handleRegDataChange}
              onBlur={() => handleBlur("username")}
              required
            />
            {errors.username && touched.username && (
              <p className="text-xs text-red-500 mt-1">{errors.username}</p>
            )}
          </div>
        </div>

        {/* Password section */}
        <div className="flex flex-col sm:flex-row items-start gap-4 w-full">
          <Label htmlFor="reg-password" className="min-w-20 text-right pt-2 sm:w-auto">
            Password
          </Label>
          <div className="flex-1">
            <div className="relative">
              <Input
                id="reg-password"
                type={showPassword ? "text" : "password"}
                placeholder="Create password"
                className={`${errors.password && touched.password ? "border-red-500" : ""} pr-10`}
                value={regData.password}
                onChange={handleRegDataChange}
                onBlur={() => handleBlur("password")}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 flex justify-center items-center w-6 h-6"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
            {errors.password && touched.password && (
              <p className="text-xs text-red-500 mt-1">{errors.password}</p>
            )}
          </div>
        </div>

        {/* Confirm password section */}
        <div className="flex flex-col sm:flex-row items-start gap-4 w-full">
          <Label htmlFor="confirm-password" className="min-w-20 text-right pt-2 sm:w-auto">
            Confirm
          </Label>
          <div className="flex-1">
            <div className="relative">
              <Input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                className={`${errors.confirmPassword && touched.confirmPassword ? "border-red-500" : ""} pr-10`}
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                onBlur={() => handleBlur("confirmPassword")}
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 flex justify-center items-center w-6 h-6"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                aria-label={showConfirmPassword ? "Hide password" : "Show password"}
              >
                {showConfirmPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="text-xs text-red-500 mt-1">{errors.confirmPassword}</p>
            )}
          </div>
        </div>
      </div>
      
      {registrationStatus === 'error' && (
        <div className="w-full text-center py-2 px-4 text-destructive text-sm">
          Registration failed. Please try again.
        </div>
      )}
      
      {error && <p className="text-sm text-red-500 text-center">{error}</p>}
      
      <DialogDescription asChild>
        <div className="flex flex-row justify-center items-center">
          <div>Already have an account?</div>
          <Button type="button" variant="link" onClick={onToggleMode}>Log In</Button>
        </div>
      </DialogDescription>
      
      <DialogFooter className="flex flex-col items-center">
        <Button className="w-full" type="submit" disabled={registrationStatus === 'loading'}>
          {registrationStatus === 'loading' ? "Registering..." : "Register"}
        </Button>
      </DialogFooter>
    </form>
  );
}
