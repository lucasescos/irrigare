'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToContact = () => {
    scrollToSection('contato');
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="relative w-10 h-10 md:w-12 md:h-12">
            <img
              src="/images/circlelogonoundertext.png"
              alt="Irrigare Circle Logo"
              className="absolute inset-0 w-full h-full rounded-full object-contain"
              draggable="false"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('projetos')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Projetos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
            <button
              onClick={scrollToContact}
              className="bg-irrigare-accent text-white px-6 py-2 rounded-sm hover:bg-irrigare-green transition-all hover:shadow-lg"
            >
              WhatsApp
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg">
            <div className="flex flex-col p-6 space-y-4">
              <button
                onClick={() => scrollToSection('como-funciona')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Como Funciona
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('projetos')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Projetos
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                Contato
              </button>
              <button
                onClick={scrollToContact}
                className="bg-irrigare-accent text-white px-6 py-3 rounded-sm hover:bg-irrigare-green transition-all hover:shadow-lg mt-4"
              >
                WhatsApp
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}