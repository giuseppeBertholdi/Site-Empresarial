import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+55 47 99968-5581",
    href: "https://wa.me/5547999685581",
    color: "bg-green-500/10 text-green-600",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@flaviabertholdi",
    href: "https://www.instagram.com/flaviabertholdi/",
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Flávia Bertholdi",
    href: "https://www.linkedin.com/in/fl%C3%A1via-juliana-rausis-bertholdi-6a0ab256/",
    color: "bg-blue-500/10 text-blue-600",
  },
];

const Contato = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-secondary/50 via-background to-accent/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Mail className="text-primary w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </div>
            <p className="text-primary font-medium tracking-wide uppercase text-xs sm:text-sm mb-3 sm:mb-4">
              Entre em Contato
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-4 sm:mb-6 px-4">
              Vamos nos conectar?
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground px-4">
              Estou aqui para levar o bem-estar a você e à sua empresa
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 sm:py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-center text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10 md:mb-12 animate-fade-up px-4">
              Entre em contato comigo através das plataformas abaixo
            </p>

            <div className="space-y-3 sm:space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="animate-fade-up block bg-background rounded-xl p-4 sm:p-6 border border-border/50 hover:shadow-soft hover:border-primary/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${method.color} flex items-center justify-center shrink-0`}>
                      <method.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm text-muted-foreground mb-1">{method.label}</p>
                      <p className="text-base sm:text-lg font-medium text-foreground break-words">{method.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 sm:mt-10 md:mt-12 text-center animate-fade-up delay-300">
              <Button variant="gold" size="xl" className="w-full sm:w-auto" asChild>
                <a
                  href="https://wa.me/5547999685581"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Iniciar Conversa no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto text-center animate-fade-up">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <MapPin className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4 px-4">
              Atendimento
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-4">
              Atendimentos presenciais e online para você e sua empresa em qualquer lugar do Brasil.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contato;
