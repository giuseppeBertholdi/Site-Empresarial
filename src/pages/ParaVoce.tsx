import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, ArrowRight } from "lucide-react";

const ParaVoce = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-secondary/50 via-background to-accent/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Heart className="text-primary w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </div>
            <p className="text-primary font-medium tracking-wide uppercase text-xs sm:text-sm mb-3 sm:mb-4">
              Atendimento Individual
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-4 sm:mb-6 px-4">
              Para Você
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="animate-fade-up bg-background rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-soft border border-border/50">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                Para quem busca um atendimento terapêutico para o <strong className="text-foreground">autoconhecimento</strong> e 
                <strong className="text-foreground"> autodesenvolvimento</strong>, esse é um programa que transforma diversos 
                aspectos da vida.
              </p>
              
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                Através deste atendimento, a pessoa começa a compreender melhor quem é, quais são suas 
                motivações, limitações, valores, e como suas experiências passadas influenciam o presente.
              </p>

              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 rounded-xl bg-secondary/50 mb-6 sm:mb-8">
                <Sparkles className="text-primary shrink-0 mt-1 w-5 h-5 sm:w-6 sm:h-6" />
                <p className="text-sm sm:text-base text-foreground leading-relaxed">
                  A partir desta conexão, damos início ao processo de autodesenvolvimento, aplicando 
                  ferramentas que vão <strong>impulsionar sua vida pessoal e profissional</strong>.
                </p>
              </div>

              <div className="text-center">
                <Button variant="gold" size="xl" className="w-full sm:w-auto" asChild>
                  <a 
                    href="https://wa.me/5547999685581" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Agende uma Sessão
                    <ArrowRight className="ml-2" size={18} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground text-center mb-8 sm:mb-10 md:mb-12 animate-fade-up px-4">
              O que você pode esperar
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                "Autoconhecimento profundo",
                "Clareza sobre suas motivações",
                "Compreensão de padrões limitantes",
                "Ferramentas práticas de desenvolvimento",
                "Equilíbrio emocional",
                "Crescimento pessoal e profissional",
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="animate-fade-up flex items-center gap-3 sm:gap-4 p-4 sm:p-5 rounded-xl bg-card border border-border/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary shrink-0" />
                  <span className="text-sm sm:text-base text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ParaVoce;
