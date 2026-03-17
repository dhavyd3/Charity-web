import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripe();
    const { amount, currency = 'usd', email, name, metadata } = await request.json();
    const donorEmail = typeof email === 'string' ? email.trim() : '';
    const donorName = typeof name === 'string' ? name.trim() : '';

    if (!amount || amount < 1) {
      return NextResponse.json(
        { error: 'Invalid donation amount' },
        { status: 400 }
      );
    }

    const amountInCents = Math.round(parseFloat(amount) * 100);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountInCents,
      currency,
      automatic_payment_methods: { enabled: true },
      metadata: {
        donation_type: 'one-time',
        donor_name: donorName,
        donor_email: donorEmail,
        ...metadata,
      },
      receipt_email: donorEmail || undefined,
      description: `One-time donation to Together For Orphans`,
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error: unknown) {
    console.error('Error creating payment intent:', error);
    const message = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
