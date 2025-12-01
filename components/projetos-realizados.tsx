'use client';

import { useState } from 'react';

export function ProjetosRealizados() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projetos = [
    {
      imagem: '/images/livingroomwithplants.png',
      legenda: 'Espaço de leitura integrado - Porto Alegre'
    },
    {
      imagem: '/images/balconywithplants.png',
      legenda: 'Varanda gourmet automatizada - Porto Alegre'
    },
    {
      imagem: '/images/irrigatedplant.png',
      legenda: 'Sistema personalizado para plantas tropicais'
    },
    {
      imagem: '/images/dripper.png',
      legenda: 'Detalhe: precisão e qualidade dos componentes'
    }
  ];

  return (
    <section id="projetos" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-foreground mb-16">
            Projetos Realizados
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projetos.map((projeto, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={projeto.imagem}
                    alt={projeto.legenda}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      hoveredIndex === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                </div>

                {/* Overlay with caption */}
                <div
                  className={`absolute inset-0 bg-primary/70 flex items-end transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="p-4 text-white">
                    <p className="text-sm font-medium leading-relaxed">
                      {projeto.legenda}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}