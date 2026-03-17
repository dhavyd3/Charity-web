'use client';

import { useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { Loader2, Lock, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

interface CheckoutFormProps {
  amount: string;
  frequency: 'once' | 'monthly';
  donorName: string;
  emailProvided: boolean;
  isAnonymous: boolean;
}

export default function CheckoutForm({
  amount,
  frequency,
  donorName,
  emailProvided,
  isAnonymous,
}: CheckoutFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const { t } = useLanguage();

  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);
    setErrorMessage(null);

    const returnUrlParams = new URLSearchParams({
      amount,
      anonymous: isAnonymous ? '1' : '0',
      emailProvided: emailProvided ? '1' : '0',
      frequency,
    });

    if (donorName) {
      returnUrlParams.set('name', donorName);
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/donate/success?${returnUrlParams.toString()}`,
      },
    });

    if (error) {
      setErrorMessage(error.message || t.donate.payment.genericError);
      setIsProcessing(false);
    }
    // If no error, Stripe redirects to return_url
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-neutral-50 border-2 border-neutral-200 rounded-xl p-4 sm:p-6">
        <PaymentElement
          options={{
            layout: 'tabs',
            wallets: {
              googlePay: 'auto',
              applePay: 'auto',
            },
          }}
        />
      </div>

      {errorMessage && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start space-x-3">
          <div className="flex-shrink-0 w-5 h-5 text-red-500 mt-0.5">⚠</div>
          <p className="text-sm text-red-700">{errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full btn-secondary text-lg py-4 flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isProcessing ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>{t.donate.payment.processing}</span>
          </>
        ) : (
          <>
            <Lock className="w-5 h-5" />
            <span>
              {t.donate.payment.payNow} ${amount}
              {frequency === 'monthly' ? ` ${t.donate.perMonth}` : ''}
            </span>
          </>
        )}
      </button>

      <div className="flex items-center justify-center space-x-4 text-xs text-neutral-500">
        <div className="flex items-center space-x-1">
          <ShieldCheck className="w-4 h-4" />
          <span>{t.donate.payment.securedByStripe}</span>
        </div>
        <span>•</span>
        <span>{t.donate.payment.encryptedConnection}</span>
      </div>
    </form>
  );
}
