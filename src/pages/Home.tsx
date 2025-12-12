import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import { ArrowRight, Heart, Users, Sparkles } from "lucide-react";
import flaviaProfile from "@/assets/flavia-profile.jpg";

const features = [
  {
    icon: Heart,
    title: "Bem-Estar Integral",
    description: "Promovendo equilíbrio emocional e saúde mental no ambiente corporativo e pessoal.",
  },
  {
    icon: Users,
    title: "23 Anos de Experiência",
    description: "Trajetória sólida em desenvolvimento de pessoas e liderança de equipes.",
  },
  {
    icon: Sparkles,
    title: "Transformação Real",
    description: "Pessoas felizes e saudáveis construindo organizações melhores e mais eficientes.",
  },
];

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-[85vh] sm:min-h-[90vh] flex items-center relative overflow-hidden py-8 sm:py-12 md:py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 via-background to-accent/20" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <div className="animate-fade-up">
                <p className="text-primary font-medium tracking-wide uppercase text-xs sm:text-sm mb-3 sm:mb-4">
                  Bem-vindo
                </p>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-tight mb-4 sm:mb-6">
                  Flávia Juliana
                  <span className="block text-primary">Rausis Bertholdi</span>
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8 max-w-lg">
                  Com minha experiência de 23 anos em desenvolvimento de pessoas, levo até você 
                  e até sua empresa palestras, treinamentos, workshops e rodas de conversas, 
                  focados no <strong className="text-foreground">bem-estar corporativo</strong>.
                </p>
              </div>

              <div className="animate-fade-up delay-200 space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Uma empresa saudável é constituída por pessoas saudáveis. Por isso, meu 
                  <strong className="text-foreground"> Programa Bem-Estar Corporativo</strong> tem 
                  como propósito promover o bem-estar integral dos gestores e colaboradores.
                </p>
              </div>

              <div className="animate-fade-up delay-300 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Button variant="gold" size="lg" className="w-full sm:w-auto" asChild>
                  <Link to="/para-empresa">
                    Para Empresas
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
                <Button variant="goldOutline" size="lg" className="w-full sm:w-auto" asChild>
                  <Link to="/para-voce">
                    Para Você
                  </Link>
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 animate-fade-up delay-100">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-br from-primary/20 to-accent/30 rounded-xl sm:rounded-2xl blur-xl sm:blur-2xl" />
                <div className="relative bg-gradient-to-br from-secondary to-card p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-soft">
                  <img
                    src={flaviaProfile}
                    alt="Flávia Juliana Rausis Bertholdi - Terapeuta e Educadora Corporativa"
                    className="w-full h-auto rounded-lg sm:rounded-xl object-cover aspect-[4/5]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-up">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-3 sm:mb-4 px-4">
              Acredito que pessoas felizes constroem <br className="hidden md:block" />
              <span className="text-primary">organizações extraordinárias</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="animate-fade-up p-6 sm:p-8 rounded-xl bg-background border border-border/50 hover:shadow-soft transition-all duration-300"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-6">
                  <feature.icon className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-2xl mx-auto animate-fade-up">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 sm:mb-6 px-4">
              Te convido a conhecer o meu trabalho
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 px-4">
              Juntos, vamos levar o bem-estar à sua empresa e transformar a vida das pessoas.
            </p>
            <Button variant="gold" size="xl" className="w-full sm:w-auto" asChild>
              <Link to="/contato">
                Vamos Conversar
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
