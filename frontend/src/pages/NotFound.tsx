import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-6xl md:text-8xl font-heading font-bold text-gradient">404</h1>
        <p className="text-xl text-muted-foreground">Página não encontrada</p>
        <Button asChild size="lg">
          <Link to="/">Voltar à página inicial</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
