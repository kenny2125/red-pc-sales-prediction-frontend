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
import { useState, useEffect } from "react";
import { useUser } from "@/contexts/UserContext";
import { LoginForm } from "../forms/LoginForm";
import { RegistrationForm } from "../forms/RegistrationForm";

export function LogInDialog({ open, onOpenChange }: { open?: boolean; onOpenChange?: (open: boolean) => void }) {
  const [isLogin, setIsLogin] = useState(true);
  // Internal state for uncontrolled usage
  const [internalOpen, setInternalOpen] = useState(false);
  const dialogOpen = open ?? internalOpen;
  const handleDialogOpenChange = onOpenChange ?? setInternalOpen;

  const {
    isLoggedIn,
    isLoading,
    error,
    clearError,
    currentUser,
    logout,
    login,
    register,
  } = useUser();

  const toggleMode = () => {
    setIsLogin(!isLogin);
    clearError();
  };

  // Reset form when dialog closes
  useEffect(() => {
    if (!dialogOpen) {
      clearError();
    }
  }, [dialogOpen, clearError]);

  const handleLogout = () => {
    logout();
    handleDialogOpenChange(false);
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={handleDialogOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" type="submit">
          {isLoggedIn ? "My Account" : "Log In/Sign Up"}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[592px] h-fit">
        <>
          <DialogHeader className="flex flex-col items-center">
            <Logo />
            {!isLoggedIn && (
              <DialogTitle>
                {isLogin ? "Login" : "Create Account"}
              </DialogTitle>
            )}
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
            <LoginForm
              onToggleMode={toggleMode}
              isLoading={isLoading}
              error={error}
              login={login}
            />
          ) : (
            <RegistrationForm
              onToggleMode={toggleMode}
              isLoading={isLoading}
              error={error}
              onSuccess={() => handleDialogOpenChange(false)}
            />
          )}
        </>
      </DialogContent>
    </Dialog>
  );
}
