import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ShieldAlert, Home } from "lucide-react";

const Unauthorized: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <ShieldAlert className="w-20 h-20 mb-4 text-red-500" />
      <h1 className="text-4xl font-bold mb-4">Access Denied</h1>
      <p className="text-xl mb-8">You don't have permission to access this page.</p>
      <Button onClick={() => navigate('/')} className="flex items-center gap-2">
        <Home className="w-4 h-4" />
        Return to Home
      </Button>
    </div>
  );
};

export default Unauthorized;
