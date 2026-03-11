'use client';

import { useEffect, useState } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';

type PaymentStatusType = 'succeeded' | 'processing' | 'requires_payment_method' | 'error';

export default function PaymentStatus() {
  const stripe = useStripe();
  const { t } = useLanguage();
  const [status, setStatus] = useState<PaymentStatusType | null>(null);

  useEffect(() => {
    if (!stripe) return;

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    if (!clientSecret) return;

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      if (!paymentIntent) {
        setStatus('error');
        return;
      }
      switch (paymentIntent.status) {
        case 'succeeded':
          setStatus('succeeded');
          break;
        case 'processing':
          setStatus('processing');
          break;
        case 'requires_payment_method':
          setStatus('requires_payment_method');
          break;
        default:
          setStatus('error');
      }
    });
  }, [stripe]);

  if (!status) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  const configs: Record<PaymentStatusType, { icon: React.ReactNode; title: string; description: string; color: string }> = {
    succeeded: {
      icon: <CheckCircle className="w-16 h-16 text-primary" />,
      title: t.donate.payment.successTitle,
      description: t.donate.payment.successDescription,
      color: 'text-primary',
    },
    processing: {
      icon: <Loader2 className="w-16 h-16 text-secondary animate-spin" />,
      title: t.donate.payment.processingTitle,
      description: t.donate.payment.processingDescription,
      color: 'text-secondary',
    },
    requires_payment_method: {
      icon: <XCircle className="w-16 h-16 text-red-500" />,
      title: t.donate.payment.failedTitle,
      description: t.donate.payment.failedDescription,
      color: 'text-red-500',
    },
    error: {
      icon: <XCircle className="w-16 h-16 text-red-500" />,
      title: t.donate.payment.errorTitle,
      description: t.donate.payment.errorDescription,
      color: 'text-red-500',
    },
  };

  const config = configs[status];

  return (
    <div className="text-center py-8">
      <div className="flex justify-center mb-4">{config.icon}</div>
      <h3 className={`font-heading font-bold text-2xl mb-2 ${config.color}`}>
        {config.title}
      </h3>
      <p className="text-neutral-600">{config.description}</p>
    </div>
  );
}
