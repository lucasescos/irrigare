'use client';

import { MessageCircle, Phone, Clock } from 'lucide-react';

export function CTAFinal() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5551999999999'; // Número placeholder
    const message = encodeURIComponent('Olá! Gostaria de agendar uma consultoria gratuita para instalar um sistema de irrigação.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 md:py-32 bg-irrigare-green">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Pronto para ter plantas perfeitas sem preocupação?
          </h2>

          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Agende uma consultoria gratuita e receba um orçamento personalizado diretamente pelo WhatsApp.
          </p>

          {/* WhatsApp CTA Button */}
          <button
            onClick={handleWhatsAppClick}
            className="bg-irrigare-accent text-white px-12 py-6 text-xl font-medium hover:bg-irrigare-accent/90 transition-all hover:shadow-2xl hover:scale-105 inline-flex items-center gap-4 rounded-lg shadow-lg mb-12"
          >
            <MessageCircle size={24} />
            <div className="text-left">
              <div>Falar com Especialista</div>
              <div className="text-sm font-normal opacity-90">Clique e comece pelo WhatsApp</div>
            </div>
          </button>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">Atendimento Rápido</h3>
              <p className="text-white/80">Resposta imediata através do WhatsApp</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-white" size={24} />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">Orçamento Personalizado</h3>
              <p className="text-white/80">Solução sob medida para o seu espaço</p>
            </div>

            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-md rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={24} />
              </div>
              <h3 className="text-white text-lg font-semibold mb-2">Sem Compromisso</h3>
              <p className="text-white/80">Consultoria gratuita e sem obrigações</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}