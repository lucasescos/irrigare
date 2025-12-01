import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { PropostaValor } from "@/components/proposta-valor";
import { ComoFunciona } from "@/components/como-funciona";
import { ParaQuemE } from "@/components/para-quem-e";
import { ServicosPlanos } from "@/components/servicos-planos";
import { Diferenciais } from "@/components/diferenciais";
import { ProjetosRealizados } from "@/components/projetos-realizados";
import { FAQ } from "@/components/faq";
import { CTAFinal } from "@/components/cta-final";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IRRIGARE - Sistemas de Irrigação Automatizada em Porto Alegre",
  description: "Suas plantas sempre perfeitas. Você sempre livre. Sistemas de irrigação automatizada e integrada para residências em Porto Alegre. Instalações discretas, projetos sob medida.",
  openGraph: {
    title: "IRRIGARE - Sistemas de Irrigação Automatizada",
    description: "Suas plantas sempre perfeitas. Você sempre livre. Sistemas de irrigação automatizada e integrada para residências em Porto Alegre.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen pt-16 md:pt-20">
      <Header />
      <HeroSection />
      <PropostaValor />
      <ComoFunciona />
      <ParaQuemE />
      <ServicosPlanos />
      <Diferenciais />
      <ProjetosRealizados />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
