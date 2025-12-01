export function Diferenciais() {
  const diferenciais = [
    {
      titulo: 'Conhecimento Técnico Especializado',
      texto: 'Cada projeto é desenvolvido com profundo entendimento de fisiologia vegetal e necessidades hídricas específicas de cada espécie.'
    },
    {
      titulo: 'Instalação Integrada ao Ambiente',
      texto: 'Planejamos cada detalhe para que o sistema se harmonize com seu espaço. Discreto, funcional, esteticamente pensado.'
    },
    {
      titulo: 'Sob Medida de Verdade',
      texto: 'Cada projeto é único. Calculamos necessidade hídrica por espécie, analisamos microclima do ambiente, adequamos à sua rotina.'
    },
    {
      titulo: 'Suporte Quando Precisar',
      texto: 'Essencial para autonomia ou Premium para tranquilidade total. Você escolhe o nível de acompanhamento ideal.'
    }
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(/images/dripper.png)'
        }}
      >
        <div className="absolute inset-0 bg-irrigare-green/90" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-white mb-16">
            Por que Irrigare?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {diferenciais.map((diferencial, index) => (
              <div
                key={index}
                className="bg-white/15 backdrop-blur-md rounded-lg p-6 border border-white/30 hover:bg-white/25 transition-all duration-300 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {diferencial.titulo}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {diferencial.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}