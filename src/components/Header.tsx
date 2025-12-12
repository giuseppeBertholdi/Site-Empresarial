import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "../assets/logo.png"


const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/para-voce", label: "Para Você" },
  { href: "/para-empresa", label: "Para Empresa" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <nav className="container mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-2 sm:gap-3 group">
            <img 
              src={logo} 
              alt="Flavia Bertholdi" 
              className="h-8 w-auto sm:h-10 md:h-12" 
            />
            <div className="flex flex-col">
              <span className="font-serif text-sm sm:text-base md:text-lg font-semibold text-foreground tracking-wide leading-tight">
                Flávia Bertholdi
              </span>
              <span className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted-foreground leading-tight">
                Terapeuta | Educação Corporativa
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className={cn(
                    "text-sm xl:text-base font-medium transition-colors duration-300 hover:text-primary relative py-2",
                    location.pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                  {location.pathname === link.href && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-soft animate-fade-in">
            <ul className="flex flex-col py-2 sm:py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "block px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium transition-colors",
                      location.pathname === link.href
                        ? "text-primary bg-primary/5"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
