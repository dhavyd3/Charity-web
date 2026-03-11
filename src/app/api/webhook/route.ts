import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'Missing stripe-signature header' }, { status: 400 });
  }

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error('STRIPE_WEBHOOK_SECRET is not configured');
    return NextResponse.json({ error: 'Webhook not configured' }, { status: 500 });
  }

  const stripe = getStripe();
  let event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    console.error(`Webhook signature verification failed: ${message}`);
    return NextResponse.json({ error: `Webhook Error: ${message}` }, { status: 400 });
  }

  switch (event.type) {
    case 'payment_intent.succeeded': {
      const paymentIntent = event.data.object;
      console.log(`✅ Payment succeeded: ${paymentIntent.id} — $${(paymentIntent.amount / 100).toFixed(2)}`);
      // TODO: Record donation in database, send confirmation email
      break;
    }
    case 'payment_intent.payment_failed': {
      const failedPayment = event.data.object;
      console.log(`❌ Payment failed: ${failedPayment.id}`);
      // TODO: Handle failed payment (notify admin, log)
      break;
    }
    case 'invoice.paid': {
      const invoice = event.data.object;
      console.log(`✅ Subscription invoice paid: ${invoice.id}`);
      // TODO: Record recurring donation
      break;
    }
    case 'invoice.payment_failed': {
      const failedInvoice = event.data.object;
      console.log(`❌ Subscription payment failed: ${failedInvoice.id}`);
      // TODO: Handle failed subscription payment
      break;
    }
    case 'customer.subscription.deleted': {
      const subscription = event.data.object;
      console.log(`🔔 Subscription cancelled: ${subscription.id}`);
      // TODO: Update donor record
      break;
    }
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
