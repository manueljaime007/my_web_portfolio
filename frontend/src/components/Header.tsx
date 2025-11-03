import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Menu, SlashIcon, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from './ui/button';


const navLinks = [
  { name: 'Home', path: '/' },
  // { name: 'Sobre mim', path: '/sobre' },
  // { name: 'Minha tech stack', path: '/tech-stack' },
  { name: 'Projetos', path: '/projetos' },
  { name: 'Experiências', path: '/experiencias' },
  { name: 'Galeria', path: '/galeria' },
  { name: 'Contacte-me', path: '/contact' },
];
const LOGO_TITLE: string = "Manuel Jaime"

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="text-[1.2rem] font-heading font-bold text-gradient flex items-center">
          <ChevronLeft size={25} className='text-primary' />
          {/* GuanaBee 007  */}
          {LOGO_TITLE}
          {/* <SlashIcon size={20} className='text-primary' /> */}
          <ChevronRight size={25} className='text-primary' />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive(link.path)
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-muted'
                }`}
            >
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive(link.path)
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
