'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-12 sm:py-16">
        <div className="container-custom text-center px-4 sm:px-6">
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            {t.contact.heroTitle}
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            {t.contact.heroSubtitle}
          </p>
        </div>
      </section>

      <div className="section-padding">
        <div className="container-custom px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-8">
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-neutral-900 mb-6">
                  {t.contact.formTitle}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        {t.contact.fullName}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary focus:outline-none"
                        placeholder={t.contact.namePlaceholder}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        {t.contact.emailAddress}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary focus:outline-none"
                        placeholder={t.contact.emailPlaceholder}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        {t.contact.phoneNumber}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary focus:outline-none"
                        placeholder={t.contact.phonePlaceholder}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        {t.contact.subject}
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary focus:outline-none"
                      >
                        <option value="">{t.contact.selectSubject}</option>
                        <option value="general">{t.contact.generalInquiry}</option>
                        <option value="volunteer">{t.contact.volunteerOpportunities}</option>
                        <option value="donation">{t.contact.donationQuestions}</option>
                        <option value="partnership">{t.contact.partnershipOpportunities}</option>
                        <option value="other">{t.contact.other}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      {t.contact.message}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary focus:outline-none resize-none"
                      placeholder={t.contact.messagePlaceholder}
                    />
                  </div>

                  <button type="submit" className="w-full btn-secondary text-lg py-4 group">
                    <span className="flex items-center justify-center">
                      {t.contact.sendMessage}
                      <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </span>
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-6">
                <h3 className="font-heading font-bold text-xl text-neutral-900 mb-6">
                  {t.contact.contactInfo}
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">{t.contact.address}</h4>
                      <p className="text-neutral-600 text-sm">
                        {t.contact.addressLine1}<br />
                        {t.contact.addressLine2}<br />
                        {t.contact.addressLine3}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">{t.contact.phone}</h4>
                      <p className="text-neutral-600 text-sm">
                        {t.contact.phoneMain}<br />
                        {t.contact.phoneEmergency}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-neutral-900 mb-1">{t.contact.email}</h4>
                      <p className="text-neutral-600 text-sm break-words">
                        {t.contact.emailGeneral}<br />
                        {t.contact.emailVolunteer}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">{t.contact.officeHours}</h4>
                      <p className="text-neutral-600 text-sm">
                        {t.contact.officeHoursLine1}<br />
                        {t.contact.officeHoursLine2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-white rounded-2xl p-5 sm:p-6">
                <h3 className="font-heading font-bold text-xl mb-3">
                  {t.contact.visitOffice}
                </h3>
                <p className="text-white/90 mb-4">
                  {t.contact.visitOfficeText}
                </p>
                <a href="tel:+15551234567" className="btn-outline border-white text-white hover:bg-white hover:text-primary w-full text-center block">
                  {t.contact.callToSchedule}
                </a>
              </div>

              <div className="bg-neutral-50 rounded-2xl p-5 sm:p-6">
                <h3 className="font-heading font-bold text-lg text-neutral-900 mb-3">
                  {t.contact.quickLinks}
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="/donate" className="text-primary hover:underline">{t.contact.quickLink1}</a>
                  </li>
                  <li>
                    <a href="/about" className="text-primary hover:underline">{t.contact.quickLink2}</a>
                  </li>
                  <li>
                    <a href="/projects" className="text-primary hover:underline">{t.contact.quickLink3}</a>
                  </li>
                  <li>
                    <a href="/news" className="text-primary hover:underline">{t.contact.quickLink4}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="bg-neutral-100 py-12 sm:py-16">
        <div className="container-custom px-4 sm:px-6">
          <div className="rounded-2xl h-64 sm:h-80 md:h-96 overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412648718453!2d-73.98823492346169!3d40.74844097138558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1702404423456!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
