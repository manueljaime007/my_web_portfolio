import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function CV() {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically download CV
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Manuel_Jaime_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Redirect to home after 2 seconds
    const timeout = setTimeout(() => {
      navigate('/');
    }, 2000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <h1 className="text-3xl font-heading font-bold">A fazer download do CV...</h1>
        <p className="text-muted-foreground">
          O download do CV deverá iniciar automaticamente. Será redirecionado para a página inicial em breve.
        </p>
        <div className="space-y-2">
          <Button asChild>
            <a href="/cv.pdf" download>
              Fazer download novamente
            </a>
          </Button>
          <br />
          <Button asChild variant="outline">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              Ver GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
