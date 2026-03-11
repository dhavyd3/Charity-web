'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, Heart, ArrowRight, Mail, Share2 } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

function SuccessContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();

  const amount = searchParams.get('amount') || '';
  const frequency = searchParams.get('frequency') || 'once';
  const name = searchParams.get('name') || '';

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Success Header */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 sm:py-20">
        <div className="container-custom text-center px-4 sm:px-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16" />
          </div>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-4">
            {t.donate.payment.successTitle}
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto opacity-90">
            {t.donate.payment.thankYouMessage}
          </p>
        </div>
      </section>

      <div className="section-padding">
        <div className="container-custom max-w-3xl px-4 sm:px-6">
          {/* Donation Summary Card */}
          {amount && (
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8">
              <h2 className="font-heading font-bold text-xl sm:text-2xl text-neutral-900 mb-6 flex items-center space-x-2">
                <Heart className="w-6 h-6 text-primary" />
                <span>{t.donate.payment.donationSummary}</span>
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-neutral-100">
                  <span className="text-neutral-600">{t.donate.payment.donationAmount}</span>
                  <span className="font-heading font-bold text-2xl text-primary">
                    ${amount}
                    {frequency === 'monthly' && (
                      <span className="text-sm font-normal text-neutral-500"> {t.donate.perMonth}</span>
                    )}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-neutral-100">
                  <span className="text-neutral-600">{t.donate.payment.donationType}</span>
                  <span className="font-semibold text-neutral-900">
                    {frequency === 'monthly'
                      ? t.donate.payment.monthlyDonation
                      : t.donate.payment.oneTimeDonation}
                  </span>
                </div>
                {name && (
                  <div className="flex justify-between items-center py-3 border-b border-neutral-100">
                    <span className="text-neutral-600">{t.donate.payment.donorNameLabel}</span>
                    <span className="font-semibold text-neutral-900">{name}</span>
                  </div>
                )}
              </div>
              <div className="mt-6 bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-neutral-600">{t.donate.payment.confirmationSent}</p>
              </div>
            </div>
          )}

          {/* What Happens Next */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-8">
            <h2 className="font-heading font-bold text-xl sm:text-2xl text-neutral-900 mb-6">
              {t.donate.payment.whatHappensNext}
            </h2>
            <div className="space-y-4">
              {[t.donate.payment.nextStep1, t.donate.payment.nextStep2, t.donate.payment.nextStep3].map(
                (step, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      {i + 1}
                    </div>
                    <p className="text-neutral-600 pt-1">{step}</p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Share & Return */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl shadow-xl p-6 text-center">
              <Share2 className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h3 className="font-heading font-bold text-lg text-neutral-900 mb-2">
                {t.donate.payment.shareMessage}
              </h3>
              <p className="text-sm text-neutral-600">
                {t.donate.payment.shareDescription}
              </p>
            </div>
            <Link
              href="/donate"
              className="bg-white rounded-2xl shadow-xl p-6 text-center hover:shadow-2xl transition-shadow flex flex-col items-center justify-center"
            >
              <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-heading font-bold text-lg text-neutral-900 mb-2">
                {t.donate.payment.returnToDonate}
              </h3>
              <ArrowRight className="w-5 h-5 text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DonateSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
