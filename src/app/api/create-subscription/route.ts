import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripe();
    const { amount, currency = 'usd', email, name, metadata } = await request.json();

    if (!amount || amount < 1) {
      return NextResponse.json(
        { error: 'Invalid donation amount' },
        { status: 400 }
      );
    }

    const amountInCents = Math.round(parseFloat(amount) * 100);

    // Find or create a Stripe customer
    const customers = await stripe.customers.list({ email, limit: 1 });
    let customer;
    if (customers.data.length > 0) {
      customer = customers.data[0];
    } else {
      customer = await stripe.customers.create({
        email,
        name,
        metadata: { source: 'together-for-orphans' },
      });
    }

    // Create a price for this recurring amount
    const price = await stripe.prices.create({
      unit_amount: amountInCents,
      currency,
      recurring: { interval: 'month' },
      product_data: {
        name: 'Monthly Donation to Together For Orphans',
      },
    });

    // Create the subscription with payment
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: price.id }],
      payment_behavior: 'default_incomplete',
      payment_settings: {
        save_default_payment_method: 'on_subscription',
      },
      expand: ['latest_invoice.payment_intent'],
      metadata: {
        donation_type: 'monthly',
        donor_name: name || '',
        donor_email: email || '',
        ...metadata,
      },
    });

    const invoice = subscription.latest_invoice;
    const paymentIntent =
      typeof invoice === 'object' && invoice !== null && 'payment_intent' in invoice
        ? invoice.payment_intent
        : null;

    const clientSecret =
      typeof paymentIntent === 'object' && paymentIntent !== null && 'client_secret' in paymentIntent
        ? paymentIntent.client_secret
        : null;

    if (!clientSecret) {
      return NextResponse.json(
        { error: 'Failed to create subscription payment' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      clientSecret,
      subscriptionId: subscription.id,
    });
  } catch (error: unknown) {
    console.error('Error creating subscription:', error);
    const message = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
