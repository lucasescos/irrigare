'use client';

export function ServicosPlanos() {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const planos = [
    {
      tag: 'Essencial',
      tagClass: 'bg-irrigare-accent text-white',
      titulo: 'IRRIGARE ESSENCIAL',
      subtitulo: 'Para quem valoriza autonomia',
      beneficios: [
        'Consultoria inicial e análise do espaço',
        'Projeto personalizado de irrigação',
        'Instalação integrada ao ambiente',
        'Sistema 100% automatizado',
        'Calibração específica para cada espécie',
        'Manual de operação completo',
        'Garantia de 12 meses na instalação',
        '1 visita de ajuste inclusa (30 dias pós-instalação)'
      ],
      rodape: 'Ideal para quem prefere autonomia e controle sobre seu sistema',
      ctaText: 'Solicitar Orçamento',
      isPremium: false
    },
    {
      tag: 'Premium',
      tagClass: 'bg-irrigare-green text-white',
      titulo: 'IRRIGARE PREMIUM',
      subtitulo: 'Tranquilidade absoluta',
      beneficios: [
        'Tudo do Essencial, mais:',
        'Manutenção preventiva a cada 4 meses',
        'Ajustes sazonais automáticos (verão/inverno)',
        'Reposição de componentes sem custo adicional',
        'Atendimento prioritário em até 24h',
        'Consultoria sobre novas plantas e rearranjos',
        'Acompanhamento contínuo',
        'Upgrades de sistema inclusos'
      ],
      rodape: 'Ideal para quem busca tranquilidade total e despreocupação permanente',
      ctaText: 'Solicitar Orçamento',
      isPremium: true
    }
  ];

  return (
    <section id="servicos" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {planos.map((plano, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-lg border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  plano.isPremium ? 'border-irrigare-green' : 'border-irrigare-accent'
                }`}
              >
                {/* Tag */}
                <div
                  className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-medium ${plano.tagClass}`}
                >
                  {plano.tag}
                </div>

                <div className="p-8">
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plano.titulo}
                  </h3>
                  <p className="text-foreground/70 mb-6">
                    {plano.subtitulo}
                  </p>

                  {/* Benefits */}
                  <ul className="space-y-3 mb-8">
                    {plano.beneficios.map((beneficio, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-irrigare-accent text-lg mt-1">✓</span>
                        <span className={`text-foreground leading-relaxed ${
                          beneficio.startsWith('Tudo do Essencial') ? 'font-semibold' : ''
                        }`}>
                          {beneficio}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer text */}
                  <p className="text-foreground/60 text-sm mb-6 italic">
                    {plano.rodape}
                  </p>

                  {/* CTA Button */}
                  <button
                    onClick={scrollToContact}
                    className={`w-full py-3 px-6 rounded-sm font-medium transition-all hover:shadow-lg ${
                      plano.isPremium
                        ? 'bg-irrigare-green text-white hover:bg-irrigare-green/90'
                        : 'bg-irrigare-accent text-white hover:bg-irrigare-accent/90'
                    }`}
                  >
                    {plano.ctaText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}