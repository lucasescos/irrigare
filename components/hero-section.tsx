'use client';

import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    scrollToSection('contato');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/livingroomwithplants.png)',
          filter: 'brightness(0.5)'
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-6">
          Suas plantas sempre perfeitas.<br />
          Você sempre livre.
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-irrigare-beige">
          Irrigação automatizada e integrada para residências em Porto Alegre.
        </p>

        <p className="text-lg md:text-xl mb-12 text-gray-200 max-w-2xl mx-auto">
          Sistema sob medida. Instalação discreta. Plantas que prosperam sozinhas.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="bg-irrigare-accent text-white px-8 py-4 text-lg font-medium hover:bg-irrigare-green hover:text-white transition-all hover:shadow-xl hover:scale-105 h-14 flex items-center justify-center"
          >
            Agendar Consultoria Gratuita
          </button>

          <button
            onClick={() => scrollToSection('como-funciona')}
            className="bg-white text-irrigare-green px-8 py-4 text-lg font-medium hover:bg-irrigare-green hover:text-white transition-all hover:shadow-xl hover:scale-105 h-14 flex items-center justify-center gap-2"
          >
            Como Funciona
            <ArrowDown size={20} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}