export function ParaQuemE() {
  const checklistItems = [
    'Valoriza um lar onde estética e natureza coexistem harmoniosamente',
    'Viaja frequentemente e busca soluções que realmente funcionam',
    'Ama verde em casa mas não tem tempo para manutenção constante',
    'Não aceita soluções improvisadas ou visualmente invasivas',
    'Quer tecnologia que funciona de forma discreta'
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-8">
              Irrigare é para você que:
            </h2>

            <ul className="space-y-4">
              {checklistItems.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-primary text-xl mt-1">✓</span>
                  <span className="text-foreground text-lg leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <img
              src="/images/beforeandafter.png"
              alt="Antes e depois da instalação do sistema de irrigação"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}