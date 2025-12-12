import { Layout } from "@/components/Layout";
// import logo from "./assets/logo.png"
import { Button } from "@/components/ui/button";
import { Building2, Building, Users, Mic, BookOpen, ArrowRight, CheckCircle } from "lucide-react";

const temasPalestras = [
  "Certificação de Primeiros Socorros em Saúde Mental*",
  "Motivação através do bem-estar físico e emocional",
  "Liderança: Como atrair as pessoas certas para o seu time",
  "Liderança: Gestão de pessoas, liderança para resultados",
  "Construindo juntos o poder do trabalho em equipe",
  "Comunicação não violenta",
  "Gestão das emoções",
  "A importância da Saúde Mental nas organizações",
  "Oficinas terapêuticas para grupo de mulheres",
  "Ações alusivas: Janeiro Branco, Março (Dia da Mulher), Setembro Amarelo, Outubro Rosa, Novembro Azul",
];

const servicos = [
  {
    icon: Building2,
    title: "Programa Bem-Estar Corporativo",
    description: "Oferecer um programa de bem-estar na sua empresa é uma maneira eficaz de promover o equilíbrio emocional no ambiente de trabalho.",
    details: "Dentro deste programa, levo ações de bem-estar para atender as novas mudanças da NR 01 (Norma Regulamentadora) e para cumprimento da Lei 14.831 que institui o certificado para Empresas Promotoras da Saúde Mental.",
  },
  {
    icon: Building,
    title: "Consultoria de RH com foco em Bem-Estar Corporativo",
    description: "Meu trabalho é apoiar empresas a construírem ambientes mais humanos, saudáveis e produtivos. Atuo com consultoria em Recursos Humanos com foco no bem-estar dos colaboradores, desenvolvendo programas, treinamentos e experiências que fortalecem a cultura organizacional, promovem engajamento e impulsionam resultados.",    
    details: "Acredito que quando as pessoas se sentem cuidadas, ouvidas e valorizadas, elas desempenham melhor — e o negócio cresce de forma sustentável. Por isso, ofereço soluções personalizadas que conectam práticas de gestão, saúde emocional e desenvolvimento humano, sempre alinhadas às necessidades reais de cada organização."
  },
  {
    icon: Users,
    title: "SIPAT",
    description: "SIPAT é uma exigência legal, mas também uma excelente estratégia para promover maior eficácia na execução das tarefas.",
    details: "Atuo com palestras e dinâmicas para fazer deste momento uma grande oportunidade de conexão com seu time, diminuindo riscos e casos de afastamento.",
  },
  {
    icon: Mic,
    title: "Palestras, Workshops e Treinamentos",
    description: "Ações sob medida para atender as necessidades específicas da sua empresa.",
    details: "Desenvolvo conteúdos personalizados que atendem às demandas do seu time e da sua cultura organizacional.",
  },
];

const ParaEmpresa = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-secondary/50 via-background to-accent/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Building2 className="text-primary w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </div>
            <p className="text-primary font-medium tracking-wide uppercase text-xs sm:text-sm mb-3 sm:mb-4">
              Soluções Corporativas
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-4 sm:mb-6 px-4">
              Para Sua Empresa
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground px-4">
              Transforme o ambiente de trabalho através do bem-estar integral
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 sm:py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              {servicos.map((servico, index) => (
                <div 
                  key={index}
                  className="animate-fade-up bg-background rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-card border border-border/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <servico.icon className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-2 sm:mb-3">
                        {servico.title}
                      </h3>
                      <p className="text-base sm:text-lg text-muted-foreground mb-3 sm:mb-4">
                        "{servico.description}"
                      </p>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                        {servico.details}
                      </p>
                      <Button variant="goldOutline" size="default" className="w-full sm:w-auto" asChild>
                        <a 
                          href="https://wa.me/5547999685581?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20voc%C3%AA."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Solicite Uma Proposta
                          <ArrowRight className="ml-2" size={16} />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-2xl mx-auto animate-fade-up">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-4 sm:mb-6 px-4">
              Vamos transformar sua empresa?
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 px-4">
              Entre em contato para uma proposta personalizada para as necessidades da sua organização.
            </p>
            <Button variant="gold" size="xl" className="w-full sm:w-auto" asChild>
              <a 
                href="https://wa.me/5547999685581?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20voc%C3%AA."
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
                <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ParaEmpresa;
