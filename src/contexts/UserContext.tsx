import React, { createContext, useState, useContext, ReactNode } from 'react';

export type UserRole = "guest" | "customer" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

interface UserContextType {
  currentUser: User | null;
  isLoggedIn: boolean;
  setUserType: (type: UserRole | null) => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}

interface UserProviderProps {
  children: ReactNode;
  initialUserType?: UserRole | null;
}

export function UserProvider({ children, initialUserType = null }: UserProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  // Function to change user type (for development purposes)
  const setUserType = (type: UserRole | null) => {
    if (!type) {
      setCurrentUser(null);
      setIsLoggedIn(false);
      return;
    }

    switch (type) {
      case "customer":
        setCurrentUser({
          id: "2",
          name: "Kenny",
          email: "customer@example.com",
          role: "customer",
        });
        setIsLoggedIn(true);
        break;
      case "admin":
        setCurrentUser({
          id: "1",
          name: "Kenny Admin",
          email: "admin@example.com",
          role: "admin",
        });
        setIsLoggedIn(true);
        break;
      default:
        setCurrentUser(null);
        setIsLoggedIn(false);
        break;
    }
  };

  const logout = () => {
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  // Set initial user type
  React.useEffect(() => {
    setUserType(initialUserType);
  }, [initialUserType]);

  return (
    <UserContext.Provider value={{ currentUser, isLoggedIn, setUserType, logout }}>
      {children}
    </UserContext.Provider>
  );
}
