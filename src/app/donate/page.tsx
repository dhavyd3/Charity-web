'use client';

import { useState, useCallback } from 'react';
import { Heart, CreditCard, Building, DollarSign, Check, ArrowRight, ArrowLeft, User, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import StripeProvider from '@/components/payment/StripeProvider';
import CheckoutForm from '@/components/payment/CheckoutForm';

type Step = 'amount' | 'info' | 'payment';

export default function DonatePage() {
  const { t } = useLanguage();

  const [step, setStep] = useState<Step>('amount');
  const [amount, setAmount] = useState('50');
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [isCreatingIntent, setIsCreatingIntent] = useState(false);

  const predefinedAmounts = ['25', '50', '100', '250', '500'];
  const finalAmount = customAmount || amount;

  const handleContinueToPayment = useCallback(async () => {
    setPaymentError(null);
    setIsCreatingIntent(true);

    const endpoint = frequency === 'monthly'
      ? '/api/create-subscription'
      : '/api/create-payment-intent';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: parseFloat(finalAmount),
          email,
          name: `${firstName} ${lastName}`.trim(),
          metadata: { phone, frequency },
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || t.donate.payment.genericError);
      }

      setClientSecret(data.clientSecret);
      setStep('payment');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : t.donate.payment.genericError;
      setPaymentError(message);
    } finally {
      setIsCreatingIntent(false);
    }
  }, [frequency, finalAmount, email, firstName, lastName, phone, t]);

  const steps: { key: Step; label: string }[] = [
    { key: 'amount', label: t.donate.payment.stepAmount },
    { key: 'info', label: t.donate.payment.stepInfo },
    { key: 'payment', label: t.donate.payment.stepPayment },
  ];

  const currentStepIndex = steps.findIndex((s) => s.key === step);

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
            {/* Main Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-8">
                {/* Step Indicator */}
                <div className="flex items-center justify-between mb-8">
                  {steps.map((s, i) => (
                    <div key={s.key} className="flex items-center flex-1">
                      <div className="flex items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                            i <= currentStepIndex
                              ? 'bg-primary text-white'
                              : 'bg-neutral-200 text-neutral-500'
                          }`}
                        >
                          {i < currentStepIndex ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            i + 1
                          )}
                        </div>
                        <span
                          className={`ml-2 text-sm font-semibold hidden sm:inline ${
                            i <= currentStepIndex ? 'text-primary' : 'text-neutral-400'
                          }`}
                        >
                          {s.label}
                        </span>
                      </div>
                      {i < steps.length - 1 && (
                        <div
                          className={`flex-1 h-0.5 mx-3 ${
                            i < currentStepIndex ? 'bg-primary' : 'bg-neutral-200'
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Step 1: Amount */}
                {step === 'amount' && (
                  <div className="space-y-6">
                    <h2 className="font-heading font-bold text-xl sm:text-2xl text-neutral-900">
                      {t.donate.yourContribution}
                    </h2>

                    {/* Frequency */}
                    <div>
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

                    {/* Amount */}
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-3">
                        {t.donate.selectAmount}
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-3 mb-4">
                        {predefinedAmounts.map((amt) => (
                          <button
                            key={amt}
                            onClick={() => { setAmount(amt); setCustomAmount(''); }}
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
                          onChange={(e) => { setCustomAmount(e.target.value); setAmount(''); }}
                          className="w-full pl-10 pr-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary focus:outline-none"
                        />
                      </div>
                    </div>

                    <button
                      onClick={() => setStep('info')}
                      disabled={!finalAmount || parseFloat(finalAmount) < 1}
                      className="w-full btn-secondary text-lg py-4 flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <span>{t.donate.payment.continueToInfo} — ${finalAmount}{frequency === 'monthly' ? ` ${t.donate.perMonth}` : ''}</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                )}

                {/* Step 2: Personal Info */}
                {step === 'info' && (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <User className="w-6 h-6 text-primary" />
                      <h2 className="font-heading font-bold text-xl sm:text-2xl text-neutral-900">
                        {t.donate.yourInfo}
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-neutral-700 mb-1">{t.donate.firstName}</label>
                          <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder={t.donate.firstName}
                            className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary focus:outline-none"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-neutral-700 mb-1">{t.donate.lastName}</label>
                          <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder={t.donate.lastName}
                            className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary focus:outline-none"
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-1">{t.donate.emailAddress}</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={t.donate.emailAddress}
                          className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary focus:outline-none"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-neutral-700 mb-1">{t.donate.phoneOptional}</label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder={t.donate.phoneOptional}
                          className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary focus:outline-none"
                        />
                      </div>
                    </div>

                    {paymentError && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
                        {paymentError}
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => setStep('amount')}
                        className="sm:flex-1 btn-outline py-3 flex items-center justify-center space-x-2"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>{t.donate.payment.backToAmount}</span>
                      </button>
                      <button
                        onClick={handleContinueToPayment}
                        disabled={!firstName || !email || isCreatingIntent}
                        className="sm:flex-[2] btn-secondary py-3 flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {isCreatingIntent ? (
                          <span>{t.donate.payment.processing}</span>
                        ) : (
                          <>
                            <CreditCard className="w-5 h-5" />
                            <span>{t.donate.payment.continueToPayment}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Payment */}
                {step === 'payment' && clientSecret && (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-2">
                      <ShieldCheck className="w-6 h-6 text-primary" />
                      <h2 className="font-heading font-bold text-xl sm:text-2xl text-neutral-900">
                        {t.donate.paymentMethod}
                      </h2>
                    </div>

                    {/* Summary banner */}
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-neutral-600">{t.donate.payment.donationAmount}</p>
                        <p className="font-heading font-bold text-2xl text-primary">
                          ${finalAmount}
                          {frequency === 'monthly' ? <span className="text-sm font-normal text-neutral-600"> {t.donate.perMonth}</span> : ''}
                        </p>
                      </div>
                      <button
                        onClick={() => setStep('amount')}
                        className="text-sm text-primary hover:underline font-semibold"
                      >
                        {t.donate.payment.backToAmount}
                      </button>
                    </div>

                    {/* Wallet badges */}
                    <div className="flex items-center justify-center gap-3 text-xs text-neutral-500">
                      <span className="bg-neutral-100 px-3 py-1 rounded-full">{t.donate.payment.googlePayAvailable}</span>
                    </div>

                    <StripeProvider clientSecret={clientSecret}>
                      <CheckoutForm
                        amount={finalAmount}
                        frequency={frequency}
                        donorName={`${firstName} ${lastName}`.trim()}
                      />
                    </StripeProvider>

                    <button
                      onClick={() => setStep('info')}
                      className="w-full text-center text-sm text-neutral-500 hover:text-neutral-700 py-2"
                    >
                      ← {t.donate.payment.backToInfo}
                    </button>
                  </div>
                )}

                {/* Step 3 fallback: Stripe not configured */}
                {step === 'payment' && !clientSecret && !paymentError && (
                  <div className="text-center py-12">
                    <ShieldCheck className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
                    <p className="text-neutral-500">{t.donate.payment.configError}</p>
                    <button
                      onClick={() => setStep('info')}
                      className="mt-4 text-primary hover:underline font-semibold"
                    >
                      ← {t.donate.payment.backToInfo}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Impact Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-6">
                <h3 className="font-heading font-bold text-xl text-neutral-900 mb-4">
                  {t.donate.yourImpact}
                </h3>
                <div className="space-y-4">
                  {[
                    { amount: '$25', text: t.donate.impact25 },
                    { amount: '$50', text: t.donate.impact50 },
                    { amount: '$100', text: t.donate.impact100 },
                    { amount: '$250', text: t.donate.impact250 },
                  ].map((item) => (
                    <div key={item.amount} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-neutral-600">
                        <span className="font-semibold">{item.amount}</span> {item.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary text-white rounded-2xl p-5 sm:p-6">
                <h3 className="font-heading font-bold text-xl mb-3">
                  {t.donate.whyMonthly}
                </h3>
                <ul className="space-y-2 text-sm">
                  {[t.donate.monthlyReason1, t.donate.monthlyReason2, t.donate.monthlyReason3, t.donate.monthlyReason4].map((reason, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{reason}</span>
                    </li>
                  ))}
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
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }} />
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
              <p className="text-neutral-600 mb-4">{t.donate.volunteerDesc}</p>
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
              <p className="text-neutral-600 mb-4">{t.donate.corporateDesc}</p>
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
              <p className="text-neutral-600 mb-4">{t.donate.legacyDesc}</p>
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
