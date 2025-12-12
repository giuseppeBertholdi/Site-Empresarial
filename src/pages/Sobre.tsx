import { Layout } from "@/components/Layout";
import { GraduationCap, Briefcase } from "lucide-react";
import flaviaProfile from "@/assets/flavia-profile.jpg";

const formacoes = [
  "Cursando especialização em Psicologia Positiva, Gestão de Pessoas e Saúde no Trabalho na PÓS PUC-PR.",
  "Embaixadora do Bem-estar Corporativo, WHALES DESENVOLVIMENTO HUMANO – São Paulo (2025)",
  "BUSINESS GAME TRAINING: Formação de Treinadores em aprendizagem vivencial. ETO Institute – Guilherme Eto (2024)",
  "Multiplicadora/Instrutora de Primeiros Socorros em Saúde Mental, INIA HEALTH BRASIL (2024)",
  "Socorrista em Primeiros Socorros em Saúde Mental, INIA HEALTH BRASIL (2024)",
  "Terapia Cognitiva baseada em Mindfulness (MBCT), CENTRO DE MINDFULNESS Rio de Janeiro (2023)",
  "Parapsicóloga, INSTITUTO DA MENTE Joinville (2022)",
  "Especialista em Gestão de Pessoas, FAE Curitiba (2009)",
  "Graduação em Ciências Contábeis, FURB Blumenau (2005)",
];

const experiencias = [
  {
    cargo: "Terapeuta Integrativa, Palestrante e Treinadora Corporativa",
    empresa: "Empresária",
    periodo: "fevereiro 2021 - presente",
  },
  {
    cargo: "Coordenadora de Gestão de Pessoas",
    empresa: "JJSUL TRANSPORTES LTDA",
    periodo: "abril 2002 - presente",
  },
  {
    cargo: "Professora",
    empresa: "TECPUC Curso Técnico, Grupo Marista",
    periodo: "2012 - 2016",
  },
  {
    cargo: "Professora",
    empresa: "Anhanguera Educacional Ltda",
    periodo: "2016",
  },
];

const Sobre = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-secondary/50 via-background to-accent/20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div className="animate-fade-up">
              <p className="text-primary font-medium tracking-wide uppercase text-xs sm:text-sm mb-3 sm:mb-4">
                Sobre Mim
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-4 sm:mb-6">
                Conheça minha trajetória
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                Sou terapeuta, palestrante e treinadora corporativa, com um longo percurso de 
                formação e experiências profissionais focadas em ajudar pessoas a atingirem o 
                seu melhor potencial.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Estou em constante evolução para poder oferecer as melhores soluções, aplicando 
                as práticas mais atuais e eficientes.
              </p>
            </div>

            <div className="animate-fade-up delay-200">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-br from-primary/20 to-accent/30 rounded-xl sm:rounded-2xl blur-xl sm:blur-2xl" />
                <img
                  src={flaviaProfile}
                  alt="Flávia Juliana Rausis Bertholdi"
                  className="relative w-full rounded-xl sm:rounded-2xl shadow-soft object-cover aspect-[4/5]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formações */}
      <section className="py-12 sm:py-16 md:py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 animate-fade-up">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <GraduationCap className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground">
                Principais Formações
              </h2>
            </div>

            <ul className="space-y-3 sm:space-y-4">
              {formacoes.map((formacao, index) => (
                <li 
                  key={index}
                  className="animate-fade-up flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-background border border-border/50 hover:shadow-card transition-all duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-sm sm:text-base text-muted-foreground leading-relaxed">{formacao}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Experiências */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 animate-fade-up">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Briefcase className="text-primary w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-foreground">
                Experiências Profissionais
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {experiencias.map((exp, index) => (
                <div 
                  key={index}
                  className="animate-fade-up p-4 sm:p-6 rounded-xl bg-card border border-border/50 hover:shadow-soft transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-2">
                    {exp.cargo}
                  </h3>
                  <p className="text-primary font-medium mb-1 text-sm sm:text-base">{exp.empresa}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{exp.periodo}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
