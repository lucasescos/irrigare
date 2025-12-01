'use client';

import { Instagram, MessageCircle, Mail, MapPin } from 'lucide-react';

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = 2024; // Static year to avoid SSR issues

  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 - Logo e Tagline */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-4">
              <img
                src="/images/circlelogonoundertext.png"
                alt="Irrigare Logo"
                className="h-12 w-auto md:h-16"
                draggable="false"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Suas plantas sempre perfeitas.<br />
              Você sempre livre.
            </p>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('como-funciona')}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Como Funciona
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('servicos')}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projetos')}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Projetos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contato')}
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin size={16} />
                <span>Porto Alegre, RS</span>
              </div>

              <div className="flex items-center gap-2 text-gray-300">
                <Mail size={16} />
                <span>contato@irrigare.com</span>
              </div>

              <div className="flex items-center gap-2 text-gray-300">
                <MessageCircle size={16} />
                <span>(51) 9XXXX-XXXX</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.instagram.com/irrigare"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/5551999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Irrigare. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}