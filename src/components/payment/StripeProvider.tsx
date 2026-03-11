'use client';

import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '@/lib/stripe-client';
import type { ReactNode } from 'react';

interface StripeProviderProps {
  clientSecret: string;
  children: ReactNode;
}

export default function StripeProvider({ clientSecret, children }: StripeProviderProps) {
  if (!stripePromise) {
    return (
      <div className="text-center py-8 text-neutral-500">
        <p>Payment system is not configured.</p>
      </div>
    );
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {
          theme: 'stripe',
          variables: {
            colorPrimary: '#2D5F3F',
            colorBackground: '#ffffff',
            colorText: '#111827',
            colorDanger: '#dc2626',
            fontFamily: 'Inter, system-ui, sans-serif',
            borderRadius: '8px',
            spacingUnit: '4px',
          },
          rules: {
            '.Input': {
              border: '2px solid #E5E7EB',
              boxShadow: 'none',
              padding: '12px',
            },
            '.Input:focus': {
              border: '2px solid #2D5F3F',
              boxShadow: 'none',
            },
            '.Label': {
              fontWeight: '600',
              fontSize: '14px',
              color: '#374151',
              marginBottom: '6px',
            },
            '.Tab': {
              border: '2px solid #E5E7EB',
              borderRadius: '8px',
            },
            '.Tab--selected': {
              border: '2px solid #2D5F3F',
              backgroundColor: 'rgba(45, 95, 63, 0.05)',
            },
          },
        },
      }}
    >
      {children}
    </Elements>
  );
}
