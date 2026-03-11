'use client';

import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { SITE_NAME, CONTACT, SOCIAL_LINKS } from '@/lib/constants';
import { useLanguage } from '@/lib/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { name: t.nav.aboutUs, href: '/about' },
    { name: t.nav.ourHospital, href: '/hospital' },
    { name: t.nav.receptionCenters, href: '/centers' },
    { name: t.nav.education, href: '/education' },
  ];

  const programs = [
    { name: t.footer.healthcare, href: '/hospital' },
    { name: t.footer.educationProgram, href: '/education' },
    { name: t.footer.sustainableDev, href: '/projects' },
    { name: t.footer.childProtection, href: '/about' },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-white font-heading font-bold text-lg mb-4">
              {SITE_NAME}
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-4">
              {t.footer.ourPrograms}
            </h3>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link
                    href={program.href}
                    className="text-sm hover:text-secondary transition-colors"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-heading font-bold text-lg mb-4">
              {t.footer.contactUs}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone size={18} className="flex-shrink-0" />
                <span>{CONTACT.phone}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail size={18} className="flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="hover:text-secondary transition-colors break-all"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
            <div className="mt-4 text-sm">
              <p className="font-semibold text-white mb-1">{t.footer.officeHours}</p>
              <p>{CONTACT.officeHours}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>© {new Date().getFullYear()} {SITE_NAME}. {t.footer.allRightsReserved}</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-secondary transition-colors">
                {t.footer.privacyPolicy}
              </Link>
              <Link href="/terms" className="hover:text-secondary transition-colors">
                {t.footer.termsOfService}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
