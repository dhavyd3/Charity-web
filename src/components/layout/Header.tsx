'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Heart, Globe, ChevronDown } from 'lucide-react';
import { CONTACT } from '@/lib/constants';
import { useLanguage } from '@/lib/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.aboutUs, href: '/about' },
    { name: t.nav.ourHospital, href: '/hospital' },
    { name: t.nav.receptionCenters, href: '/centers' },
    { name: t.nav.education, href: '/education' },
    { name: t.nav.projects, href: '/projects' },
    { name: t.nav.news, href: '/news' },
    { name: t.nav.contact, href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-100 shadow-sm">
      {/* Top Bar */}
      <div className="bg-neutral-50 border-b border-neutral-100">
        <div className="container-custom">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-4 text-neutral-600">
              <span className="hidden sm:inline">📞 {CONTACT.phone}</span>
              <span className="hidden md:inline">✉️ {CONTACT.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setLanguage(language === 'EN' ? 'FR' : 'EN')}
                className="flex items-center space-x-1.5 text-neutral-600 hover:text-primary transition-colors px-3 py-1 rounded-full hover:bg-white border border-transparent hover:border-neutral-200"
                aria-label={language === 'EN' ? 'Switch to French' : 'Switch to English'}
              >
                <Globe size={14} />
                <span className="font-medium">{language === 'EN' ? 'FR' : 'EN'}</span>
                <ChevronDown size={12} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 group flex-shrink-0">
            <div className="relative w-10 h-10 lg:w-14 lg:h-14 flex-shrink-0">
              <Image
                src="/images/Together-For-Orphans.jpg"
                alt="Together For Orphans"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-200"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-base lg:text-lg font-heading font-bold text-primary leading-tight">
                TFO
              </span>
              <span className="text-[11px] lg:text-xs text-neutral-500 font-medium whitespace-nowrap">
                {t.header.tagline}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center flex-1 justify-center mx-4">
            <div className="flex items-center space-x-0.5 xl:space-x-1">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-2.5 xl:px-3.5 py-2 text-[13px] xl:text-sm font-medium text-neutral-700 hover:text-primary transition-colors duration-200 group whitespace-nowrap"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            {/* Donate Button */}
            <Link
              href="/donate"
              className="hidden md:flex items-center space-x-2 bg-secondary hover:bg-secondary-dark text-white font-semibold px-5 lg:px-6 py-2 lg:py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm lg:text-base whitespace-nowrap"
            >
              <Heart size={16} fill="currentColor" />
              <span>{t.header.donate}</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg text-neutral-700 hover:text-primary hover:bg-neutral-50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t border-neutral-100 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <nav className="container-custom py-4 space-y-1">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 px-4 text-neutral-700 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 px-4">
            <Link
              href="/donate"
              className="flex items-center justify-center space-x-2 w-full bg-secondary hover:bg-secondary-dark text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <Heart size={18} fill="currentColor" />
              <span>{t.header.donateNow}</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
