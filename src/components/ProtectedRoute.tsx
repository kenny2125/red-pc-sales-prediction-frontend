import { Navigate, Outlet } from "react-router-dom";
import { useUser, UserRole } from "../contexts/UserContext";

interface ProtectedRouteProps {
  allowedRoles: UserRole[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles }) => {
  const { currentUser, isLoggedIn } = useUser();
  
  if (!isLoggedIn || !currentUser) {
    return <Navigate to="/unauthorized" replace />;
  }
  
  if (allowedRoles.includes(currentUser.role)) {
    return <Outlet />;
  }
  
  return <Navigate to="/unauthorized" replace />;
};

export default ProtectedRoute;
