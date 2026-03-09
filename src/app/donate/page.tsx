'use client';

import { useState } from 'react';
import { Heart, CreditCard, Building, DollarSign, Check } from 'lucide-react';

export default function DonatePage() {
  const [amount, setAmount] = useState('50');
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank'>('card');

  const predefinedAmounts = ['25', '50', '100', '250', '500'];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16">
        <div className="container-custom text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Make a Donation
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Your generosity transforms lives and creates hope for vulnerable children
          </p>
        </div>
      </section>

      <div className="section-padding">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Donation Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="font-heading font-bold text-2xl text-neutral-900 mb-6">
                  Your Contribution
                </h2>

                {/* Frequency Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-neutral-700 mb-3">
                    Donation Frequency
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setFrequency('once')}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        frequency === 'once'
                          ? 'border-primary bg-primary/5 text-primary'
                          : 'border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <div className="font-semibold">One-Time</div>
                      <div className="text-sm text-neutral-600">Single donation</div>
                    </button>
                    <button
                      onClick={() => setFrequency('monthly')}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        frequency === 'monthly'
                          ? 'border-primary bg-primary/5 text-primary'
                          : 'border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <div className="font-semibold">Monthly</div>
                      <div className="text-sm text-neutral-600">Recurring donation</div>
                    </button>
                  </div>
                </div>

                {/* Amount Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-neutral-700 mb-3">
                    Select Amount (USD)
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
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
                      placeholder="Custom amount"
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
                    Payment Method
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setPaymentMethod('card')}
                      className={`p-4 rounded-lg border-2 transition-all flex items-center justify-center space-x-2 ${
                        paymentMethod === 'card'
                          ? 'border-primary bg-primary/5 text-primary'
                          : 'border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <CreditCard className="w-5 h-5" />
                      <span className="font-semibold">Credit Card</span>
                    </button>
                    <button
                      onClick={() => setPaymentMethod('bank')}
                      className={`p-4 rounded-lg border-2 transition-all flex items-center justify-center space-x-2 ${
                        paymentMethod === 'bank'
                          ? 'border-primary bg-primary/5 text-primary'
                          : 'border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <Building className="w-5 h-5" />
                      <span className="font-semibold">Bank Transfer</span>
                    </button>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="mb-6">
                  <h3 className="font-semibold text-neutral-900 mb-4">Your Information</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary focus:outline-none"
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary focus:outline-none"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary focus:outline-none"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number (Optional)"
                      className="w-full px-4 py-3 border-2 border-neutral-200 rounded-lg focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button className="w-full btn-secondary text-lg py-4">
                  Donate ${customAmount || amount} {frequency === 'monthly' ? '/ month' : ''}
                </button>

                <p className="text-sm text-neutral-500 text-center mt-4">
                  Your donation is secure and tax-deductible
                </p>
              </div>
            </div>

            {/* Impact Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h3 className="font-heading font-bold text-xl text-neutral-900 mb-4">
                  Your Impact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-neutral-600">
                      <span className="font-semibold">$25</span> provides school supplies for one child
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-neutral-600">
                      <span className="font-semibold">$50</span> covers meals for a child for one month
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-neutral-600">
                      <span className="font-semibold">$100</span> pays for medical check-ups for 10 children
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-neutral-600">
                      <span className="font-semibold">$250</span> sponsors one child's education for a semester
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary text-white rounded-2xl p-6">
                <h3 className="font-heading font-bold text-xl mb-3">
                  Why Donate Monthly?
                </h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Provides consistent support for ongoing programs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Helps us plan and budget more effectively</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Creates lasting change in children's lives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Cancel anytime, no commitment</span>
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-100 rounded-2xl p-6">
                <h3 className="font-heading font-bold text-lg text-neutral-900 mb-3">
                  100% Transparency
                </h3>
                <p className="text-sm text-neutral-600 mb-3">
                  We ensure that your donations are used efficiently and effectively.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Program Services:</span>
                    <span className="font-semibold">85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Administration:</span>
                    <span className="font-semibold">10%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Fundraising:</span>
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
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-neutral-900 mb-4">
              Other Ways to Help
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              There are many ways to support our mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3">
                Volunteer
              </h3>
              <p className="text-neutral-600 mb-4">
                Share your time and skills to make a direct impact
              </p>
              <a href="/contact" className="text-primary font-semibold hover:underline">
                Learn More →
              </a>
            </div>

            <div className="bg-neutral-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3">
                Corporate Partnership
              </h3>
              <p className="text-neutral-600 mb-4">
                Partner with us to create meaningful CSR programs
              </p>
              <a href="/contact" className="text-primary font-semibold hover:underline">
                Get in Touch →
              </a>
            </div>

            <div className="bg-neutral-50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-xl text-neutral-900 mb-3">
                Legacy Giving
              </h3>
              <p className="text-neutral-600 mb-4">
                Leave a lasting legacy through planned giving
              </p>
              <a href="/contact" className="text-primary font-semibold hover:underline">
                Find Out How →
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
