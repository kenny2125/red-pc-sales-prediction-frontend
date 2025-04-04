import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { FileQuestion, Home } from "lucide-react";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <FileQuestion className="w-20 h-20 mb-4 text-gray-400" />
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">The page you are looking for doesn't exist or has been moved.</p>
      <Button onClick={() => navigate('/')} className="flex items-center gap-2">
        <Home className="w-4 h-4" />
        Return to Home
      </Button>
    </div>
  );
};

export default NotFound;
