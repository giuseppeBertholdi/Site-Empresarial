import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

const socialLinks = [
  { 
    href: "https://wa.me/5547999685581", 
    icon: MessageCircle, 
    label: "WhatsApp" 
  },
  { 
    href: "https://www.instagram.com/flaviabertholdi/", 
    icon: Instagram, 
    label: "Instagram" 
  },
  { 
    href: "https://www.linkedin.com/in/fl%C3%A1via-juliana-rausis-bertholdi-6a0ab256/", 
    icon: Linkedin, 
    label: "LinkedIn" 
  },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 sm:py-14 md:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <img 
                src={logo} 
                alt="Flavia Bertholdi" 
                className="h-8 w-auto sm:h-10 md:h-12" 
              />
              <span className="font-serif text-lg sm:text-xl md:text-2xl font-semibold">
                Flávia Bertholdi
              </span>
            </div>
            <p className="text-background/70 text-xs sm:text-sm leading-relaxed max-w-md">
              Promovendo o bem-estar integral de pessoas e organizações através de palestras, 
              treinamentos e terapias.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Navegação
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link 
                  to="/sobre" 
                  className="text-background/70 text-xs sm:text-sm hover:text-background transition-colors inline-block"
                >
                  Sobre Mim
                </Link>
              </li>
              <li>
                <Link 
                  to="/para-voce" 
                  className="text-background/70 text-xs sm:text-sm hover:text-background transition-colors inline-block"
                >
                  Para Você
                </Link>
              </li>
              <li>
                <Link 
                  to="/para-empresa" 
                  className="text-background/70 text-xs sm:text-sm hover:text-background transition-colors inline-block"
                >
                  Para Empresa
                </Link>
              </li>
              <li>
                <Link 
                  to="/contato" 
                  className="text-background/70 text-xs sm:text-sm hover:text-background transition-colors inline-block"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              Conecte-se
            </h4>
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                </a>
              ))}
            </div>
            <p className="mt-3 sm:mt-4 text-background/70 text-xs sm:text-sm break-words">
              flaviarausis.bertholdi@gmail.com
            </p>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-background/50 text-xs sm:text-sm px-4">
            © {new Date().getFullYear()} Flávia Juliana Rausis Bertholdi. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
