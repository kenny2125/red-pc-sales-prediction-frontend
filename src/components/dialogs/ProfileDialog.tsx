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
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  gender?: string;
  address?: string;
  phone?: string;
  role: UserRole;
}

export function ProfileDialog() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [editing, setEditing] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    address: "",
    phone: "",
  });

  // Fetch user profile from backend
  const fetchUserProfile = async () => {
    try {
      setLoading(true);
      setError(null);
      // Get token from localStorage
      const token = localStorage.getItem('token');
      
      if (!token) {
        setError("You are not logged in");
        return;
      }
      
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/api/auth/profile`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch profile');
      }
      
      const data = await response.json();
      setCurrentUser(data);
      setFormData({
        username: data.username || "",
        email: data.email || "",
        first_name: data.first_name || "",
        last_name: data.last_name || "",
        address: data.address || "",
        phone: data.phone || "",
      });
    } catch (error) {
      console.error('Error fetching profile:', error);
      setError("Failed to load profile data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleLogout = () => {
    window.location.href = '/';
    localStorage.removeItem('token');
    setCurrentUser(null);
    
    
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      setError(null);
      setSuccessMessage(null);
      const token = localStorage.getItem('token');
      
      if (!token) {
        setError("You are not logged in");
        return;
      }
      
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:3000'}/api/auth/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to update profile');
      }
      
      const data = await response.json();
      setCurrentUser(data.user);
      setEditing(false);
      setSuccessMessage("Profile updated successfully");
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    } catch (error) {
      console.error('Error updating profile:', error);
      setError("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  if (loading && !currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <UserPen size={40} className="text-primary cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[867px] w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex flex-row align-middle items-center gap-2">
            <UserPen size={40} className="text-primary" />
            <DialogTitle>User Profile</DialogTitle>
          </div>
          <DialogDescription>
            {editing ? "Make changes to your profile here. Click save when you're done." : "Your profile information."}
          </DialogDescription>
        </DialogHeader>

        {/* Error and success messages */}
        {error && (
          <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{error}</span>
          </div>
        )}
        
        {successMessage && (
          <div className="bg-green-50 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            <span className="block sm:inline">{successMessage}</span>
          </div>
        )}

        {currentUser ? (
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="flex flex-col align-top py-4 w-full gap-4">
              <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                <Label htmlFor="first_name" className="text-right">
                  First Name
                </Label>
                <Input 
                  id="first_name" 
                  value={formData.first_name} 
                  onChange={handleInputChange}
                  className="col-span-3" 
                  disabled={!editing} 
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                <Label htmlFor="last_name" className="text-right">
                  Last Name
                </Label>
                <Input 
                  id="last_name" 
                  value={formData.last_name} 
                  onChange={handleInputChange}
                  className="col-span-3" 
                  disabled={!editing} 
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input 
                  id="email" 
                  value={formData.email} 
                  onChange={handleInputChange}
                  className="col-span-3" 
                  disabled={!editing} 
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input 
                  id="username" 
                  value={formData.username} 
                  onChange={handleInputChange}
                  className="col-span-3" 
                  disabled={!editing} 
                />
              </div>
            </div>

            <div className="flex flex-col align-top py-4 w-full gap-4">
              <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                <Label htmlFor="address" className="text-right">
                  Address
                </Label>
                <Input 
                  id="address" 
                  value={formData.address} 
                  onChange={handleInputChange}
                  className="col-span-3" 
                  disabled={!editing} 
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                <Label htmlFor="phone" className="text-right">
                  Phone
                </Label>
                <Input 
                  id="phone" 
                  value={formData.phone} 
                  onChange={handleInputChange}
                  className="col-span-3" 
                  disabled={!editing} 
                />
              </div>
            </div>
          </div>
        ) : (
          <div>No user data available.</div>
        )}
        
        <DialogFooter>
          <div className="flex gap-2">
            {editing ? (
              <>
                <Button type="button" onClick={handleSave} disabled={loading}>
                  {loading ? "Saving..." : "Save"}
                </Button>
                <Button type="button" variant="outline" onClick={() => setEditing(false)}>
                  Cancel
                </Button>
              </>
            ) : (
              <>
                <Button type="button" onClick={() => setEditing(true)}>
                  Edit Profile
                </Button>
                <Button type="button" variant="outline" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
