'use client';

import { useState, useEffect, useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Consulta & Análise',
    text: 'Visitamos sua residência, conhecemos suas plantas e entendemos sua rotina. Avaliamos luz, umidade, espécies e espaço disponível.',
    image: '/images/consultingwithclient.png'
  },
  {
    number: '02',
    title: 'Projeto Personalizado',
    text: 'Criamos um sistema sob medida: irrigação, frequência e volume calculados para cada planta. Tudo planejado para integração natural ao ambiente.',
    image: '/images/sketchofirrigationsystem.png'
  },
  {
    number: '03',
    title: 'Instalação Impecável',
    text: 'Instalamos com máximo cuidado estético. Tubulação discreta, válvulas bem posicionadas, automação silenciosa. Seu espaço continua seu.',
    image: '/images/installing.png'
  },
  {
    number: '04',
    title: 'Você Esquece. Suas Plantas Lembram.',
    text: 'O sistema funciona sozinho. Suas plantas recebem exatamente o que precisam, quando precisam. Você só admira.',
    image: '/images/irrigatedplant.png'
  }
];

export function ComoFunciona() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      stepRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const isVisible = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;

          if (isVisible) {
            setActiveStep(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="como-funciona" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-foreground mb-16">
            Simples para você. Sofisticado por dentro.
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Images Column */}
            <div className="relative h-96 md:h-full">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ${
                    activeStep === index
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95'
                  }`}
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </div>

            {/* Steps Column */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  ref={el => { stepRefs.current[index] = el; }}
                  className={`transition-all duration-700 cursor-pointer ${
                    activeStep === index
                      ? 'opacity-100 transform translate-x-0'
                      : 'opacity-60 transform translate-x-4'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-start space-x-4">
                    <span className={`text-5xl font-serif font-bold transition-all duration-700 ${
                      activeStep === index ? 'text-primary' : 'text-muted-foreground'
                    }`}>
                      {step.number}
                    </span>

                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-foreground/80 leading-relaxed">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}