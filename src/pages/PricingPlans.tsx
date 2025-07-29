import React, { useState } from 'react';
import { Check, Crown, Star, Zap, ArrowRight, Download } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { getMonthlyPlans, getYearlyPlans } from '../data/subscriptionPlans';
import PaymentModal from '../components/PaymentModal';
import { Link } from 'react-router-dom';

const PricingPlans: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const { user } = useAuth();

  const plans = billingPeriod === 'monthly' ? getMonthlyPlans() : getYearlyPlans();

  const handleSelectPlan = (planId: string) => {
    if (!user) {
      // Redirect to login if not authenticated
      window.location.href = '/login';
      return;
    }
    setSelectedPlan(planId);
    setIsPaymentModalOpen(true);
  };

  const getPlanIcon = (planName: string) => {
    switch (planName) {
      case 'Basic':
        return <Zap className="h-8 w-8 text-primary-600" />;
      case 'Pro':
        return <Star className="h-8 w-8 text-blue-600" />;
      case 'Premium':
        return <Crown className="h-8 w-8 text-purple-600" />;
      default:
        return <Zap className="h-8 w-8 text-primary-600" />;
    }
  };

  const getPlanColor = (planName: string) => {
    switch (planName) {
      case 'Basic':
        return 'border-primary-200 hover:border-primary-300';
      case 'Pro':
        return 'border-blue-200 hover:border-blue-300 ring-2 ring-blue-500';
      case 'Premium':
        return 'border-purple-200 hover:border-purple-300';
      default:
        return 'border-gray-200 hover:border-gray-300';
    }
  };

  const getButtonColor = (planName: string) => {
    switch (planName) {
      case 'Basic':
        return 'bg-primary-600 hover:bg-primary-700 text-white';
      case 'Pro':
        return 'bg-blue-600 hover:bg-blue-700 text-white';
      case 'Premium':
        return 'bg-purple-600 hover:bg-purple-700 text-white';
      default:
        return 'bg-gray-600 hover:bg-gray-700 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Precision Agriculture Plan
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Scale your farming operations with our flexible pricing options
          </p>

          {/* Download App Link */}
          <div className="mb-8 p-4 bg-white rounded-xl shadow-lg inline-block">
            <div className="flex items-center space-x-3">
              <Download className="h-6 w-6 text-primary-600" />
              <div className="text-left">
                <p className="text-sm font-medium text-gray-900">Get the Mobile App</p>
                <Link 
                  to="/download" 
                  className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                  Download for iOS & Android →
                </Link>
              </div>
            </div>
          </div>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm font-medium ${billingPeriod === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-lg transition-transform ${
                  billingPeriod === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${billingPeriod === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
            {billingPeriod === 'yearly' && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Save 17%
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-xl border-2 transition-all duration-200 ${getPlanColor(plan.name)} ${
                plan.name === 'Pro' ? 'transform scale-105' : ''
              }`}
            >
              {plan.name === 'Pro' && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-blue-600 text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center justify-center mb-4">
                  {getPlanIcon(plan.name)}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                  {plan.name}
                </h3>
                
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-500 ml-2">/{billingPeriod === 'monthly' ? 'month' : 'year'}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSelectPlan(plan.id)}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 ${getButtonColor(plan.name)}`}
                >
                  <span>Get Started</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Comparison */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Feature Comparison
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4 font-medium text-gray-900">Features</th>
                  <th className="text-center py-4 px-4 font-medium text-gray-900">Basic</th>
                  <th className="text-center py-4 px-4 font-medium text-gray-900">Pro</th>
                  <th className="text-center py-4 px-4 font-medium text-gray-900">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-4 text-gray-700">Crops Tracking</td>
                  <td className="py-4 px-4 text-center text-gray-600">Up to 5</td>
                  <td className="py-4 px-4 text-center text-gray-600">Up to 25</td>
                  <td className="py-4 px-4 text-center text-gray-600">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-700">Animals Management</td>
                  <td className="py-4 px-4 text-center text-gray-600">Up to 10</td>
                  <td className="py-4 px-4 text-center text-gray-600">Up to 50</td>
                  <td className="py-4 px-4 text-center text-gray-600">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-700">AI Recommendations</td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-gray-400">Basic</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-700">Pest Database</td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-gray-400">—</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-700">Weather Integration</td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-gray-400">—</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-700">Export Reports</td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-gray-400">—</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-700">Custom Branding</td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-gray-400">—</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-gray-400">—</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Can I change my plan anytime?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Is there a free trial?
              </h3>
              <p className="text-gray-600">
                Yes, all new users get a 14-day free trial with access to Pro features to test the platform.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {isPaymentModalOpen && selectedPlan && (
        <PaymentModal
          planId={selectedPlan}
          isOpen={isPaymentModalOpen}
          onClose={() => {
            setIsPaymentModalOpen(false);
            setSelectedPlan(null);
          }}
        />
      )}
    </div>
  );
};

export default PricingPlans;