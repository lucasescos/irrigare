'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      pergunta: 'Como funciona a instalação?',
      resposta: 'Planejamos cuidadosamente o trajeto de tubulação e posicionamento de componentes para máxima discrição. O sistema fica integrado ao ambiente, sem comprometer a estética do espaço.'
    },
    {
      pergunta: 'Funciona para qualquer tipo de planta?',
      resposta: 'Sim. Projetamos sistemas para suculentas, samambaias, palmeiras, hortaliças — qualquer espécie. Cada uma recebe o regime de rega adequado.'
    },
    {
      pergunta: 'E se eu viajar por semanas?',
      resposta: 'Exatamente para isso existe a Irrigare. O sistema funciona indefinidamente de forma autônoma.'
    },
    {
      pergunta: 'Preciso de tomada perto das plantas?',
      resposta: 'Não necessariamente. Avaliamos cada caso e encontramos a melhor solução técnica para seu espaço.'
    },
    {
      pergunta: 'Quanto custa?',
      resposta: 'Cada projeto é único. Agende uma consultoria gratuita para receber um orçamento personalizado.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-foreground mb-16">
            Perguntas Frequentes
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-border overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                >
                  <span className="text-lg font-semibold text-foreground">
                    {faq.pergunta}
                  </span>
                  <span className="ml-4 flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-primary" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-primary" />
                    )}
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-6 py-4 bg-white border-t border-border">
                    <p className="text-foreground leading-relaxed">
                      {faq.resposta}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}