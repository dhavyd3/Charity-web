'use client';

import { useState } from 'react';
import { Heart, CreditCard, Building, DollarSign, Check } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

export default function DonatePage() {
  const { t } = useLanguage();

  const [amount, setAmount] = useState('50');
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank'>('card');

  const predefinedAmounts = ['25', '50', '100', '250', '500'];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-12 sm:py-16">
        <div className="container-custom text-center px-4 sm:px-6">
          <Heart className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6" />
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            {t.donate.heroTitle}
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            {t.donate.heroSubtitle}
          </p>
        </div>
      </section>

      <div className="section-padding">
        <div className="container-custom max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Donation Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-8">
                <h2 className="font-heading font-bold text-xl sm:text-2xl text-neutral-900 mb-6">
                  {t.donate.yourContribution}
                </h2>

                {/* Frequency Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-neutral-700 mb-3">
                    {t.donate.frequency}
                  </label>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <button
                      onClick={() => setFrequency('once')}
                      className={`p-3 sm:p-4 rounded-lg border-2 transition-all ${
                        frequency === 'once'
                          ? 'border-primary bg-primary/5 text-primary'
                          : 'border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <div className="font-semibold">{t.donate.oneTime}</div>
                      <div className="text-sm text-neutral-600">{t.donate.oneTimeDesc}</div>
                    </button>
                    <button
                      onClick={() => setFrequency('monthly')}
                      className={`p-3 sm:p-4 rounded-lg border-2 transition-all ${
                        frequency === 'monthly'
                          ? 'border-primary bg-primary/5 text-primary'
                          : 'border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <div className="font-semibold">{t.donate.monthly}</div>
                      <div className="text-sm text-neutral-600">{t.donate.monthlyDesc}</div>
                    </button>
                  </div>
                </div>

                {/* Amount Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-neutral-700 mb-3">
                    {t.donate.selectAmount}
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3 mb-4">
                    {predefinedAmounts.map((amt) => (
                      <button
                        key={amt}
                        onClick={() => {
                          setAmount(amt);
                          setCustomAmount('');
                        }}
                        className={`p-3 rounded-lg border-2 font-semibold transition-all ${
                          amount === amt && !customAmount
                            ? 'border-primary bg-primary text-white'
                            : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                      >
                        ${amt}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <input
                      type="number"
                      placeholder={t.donate.customAmount}
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setAmount('');
                      }}
                      className="w-full pl-10 pr-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                {/* Payment Method */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-neutral-700 mb-3">
                    {t.donate.paymentMethod}
                  </label>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <button
                      onClick={() => setPaymentMethod('card')}
                      className={`p-3 sm:p-4 rounded-lg border-2 transition-all flex items-center justify-center space-x-2 ${
                        paymentMethod === 'card'
                          ? 'border-primary bg-primary/5 text-primary'
                          : 'border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <CreditCard className="w-5 h-5" />
                      <span className="font-semibold text-sm sm:text-base">{t.donate.creditCard}</span>
                    </button>
                    <button
                      onClick={() => setPaymentMethod('bank')}
                      className={`p-3 sm:p-4 rounded-lg border-2 transition-all flex items-center justify-center space-x-2 ${
                        paymentMethod === 'bank'
                          ? 'border-primary bg-primary/5 text-primary'
                          : 'border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <Building className="w-5 h-5" />
                      <span className="font-semibold text-sm sm:text-base">{t.donate.bankTransfer}</span>
                    </button>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="mb-6">
                  <h3 className="font-semibold text-neutral-900 mb-4">{t.donate.yourInfo}</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder={t.donate.firstName}
                        className="px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary focus:outline-none"
                      />
                      <input
                        type="text"
                        placeholder={t.donate.lastName}
                        className="px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary focus:outline-none"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder={t.donate.emailAddress}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary focus:outline-none"
                    />
                    <input
                      type="tel"
                      placeholder={t.donate.phoneOptional}
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button className="w-full btn-secondary text-lg py-4">
                  {t.donate.donateAmount} ${customAmount || amount} {frequency === 'monthly' ? t.donate.perMonth : ''}
                </button>

                <p className="text-sm text-neutral-500 text-center mt-4">
                  {t.donate.secureDonation}
                </p>
              </div>
            </div>

            {/* Impact Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-6">
                <h3 className="font-heading font-bold text-xl text-neutral-900 mb-4">
                  {t.donate.yourImpact}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-neutral-600">
                      <span className="font-semibold">$25</span> {t.donate.impact25}
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-neutral-600">
                      <span className="font-semibold">$50</span> {t.donate.impact50}
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-neutral-600">
                      <span className="font-semibold">$100</span> {t.donate.impact100}
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-neutral-600">
                      <span className="font-semibold">$250</span> {t.donate.impact250}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-white rounded-2xl p-5 sm:p-6">
                <h3 className="font-heading font-bold text-xl mb-3">
                  {t.donate.whyMonthly}
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{t.donate.monthlyReason1}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{t.donate.monthlyReason2}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{t.donate.monthlyReason3}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{t.donate.monthlyReason4}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-100 rounded-2xl p-5 sm:p-6">
                <h3 className="font-heading font-bold text-lg text-neutral-900 mb-3">
                  {t.donate.transparency}
                </h3>
                <p className="text-sm text-neutral-600 mb-3">
                  {t.donate.transparencyText}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">{t.donate.programServices}</span>
                    <span className="font-semibold">85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">{t.donate.administration}</span>
                    <span className="font-semibold">10%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">{t.donate.fundraising}</span>
                    <span className="font-semibold">5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Ways to Help */}
      <section className="section-padding bg-white">
        <div className="container-custom px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-900 mb-4">
              {t.donate.otherWays}
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
              {t.donate.otherWaysSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-neutral-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3">
                {t.donate.volunteer}
              </h3>
              <p className="text-neutral-600 mb-4">
                {t.donate.volunteerDesc}
              </p>
              <a href="/contact" className="text-primary font-semibold hover:underline">
                {t.donate.volunteerLink}
              </a>
            </div>

            <div className="bg-neutral-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3">
                {t.donate.corporatePartnership}
              </h3>
              <p className="text-neutral-600 mb-4">
                {t.donate.corporateDesc}
              </p>
              <a href="/contact" className="text-primary font-semibold hover:underline">
                {t.donate.corporateLink}
              </a>
            </div>

            <div className="bg-neutral-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3">
                {t.donate.legacyGiving}
              </h3>
              <p className="text-neutral-600 mb-4">
                {t.donate.legacyDesc}
              </p>
              <a href="/contact" className="text-primary font-semibold hover:underline">
                {t.donate.legacyLink}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
