import { SubscriptionPlan } from '../types';

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'basic-monthly',
    name: 'Basic',
    price: 5,
    billingPeriod: 'monthly',
    features: [
      'Up to 5 crops tracking',
      'Up to 10 animals',
      'Basic recommendations',
      'Activity journal',
      'Mobile access',
      'Email support'
    ],
    maxCrops: 5,
    maxAnimals: 10,
    advancedRecommendations: false,
    pestDatabase: false,
    weatherIntegration: false,
    exportReports: false,
    prioritySupport: false,
    customBranding: false
  },
  {
    id: 'pro-monthly',
    name: 'Pro',
    price: 10,
    billingPeriod: 'monthly',
    features: [
      'Up to 25 crops tracking',
      'Up to 50 animals',
      'Advanced AI recommendations',
      'Comprehensive pest database',
      'Weather integration',
      'Export reports (PDF/Excel)',
      'Priority email support',
      'Mobile & web access'
    ],
    maxCrops: 25,
    maxAnimals: 50,
    advancedRecommendations: true,
    pestDatabase: true,
    weatherIntegration: true,
    exportReports: true,
    prioritySupport: true,
    customBranding: false
  },
  {
    id: 'premium-monthly',
    name: 'Premium',
    price: 15,
    billingPeriod: 'monthly',
    features: [
      'Unlimited crops tracking',
      'Unlimited animals',
      'AI-powered precision farming',
      'Complete pest & disease database',
      'Advanced weather analytics',
      'Custom reports & analytics',
      '24/7 priority support',
      'Custom branding',
      'API access',
      'Multi-farm management'
    ],
    maxCrops: -1, // -1 means unlimited
    maxAnimals: -1,
    advancedRecommendations: true,
    pestDatabase: true,
    weatherIntegration: true,
    exportReports: true,
    prioritySupport: true,
    customBranding: true
  },
  {
    id: 'pro-yearly',
    name: 'Pro',
    price: 100, // 2 months free (10 * 10 months)
    billingPeriod: 'yearly',
    features: [
      'Up to 25 crops tracking',
      'Up to 50 animals',
      'Advanced AI recommendations',
      'Comprehensive pest database',
      'Weather integration',
      'Export reports (PDF/Excel)',
      'Priority email support',
      'Mobile & web access',
      '2 months free!'
    ],
    maxCrops: 25,
    maxAnimals: 50,
    advancedRecommendations: true,
    pestDatabase: true,
    weatherIntegration: true,
    exportReports: true,
    prioritySupport: true,
    customBranding: false
  },
  {
    id: 'premium-yearly',
    name: 'Premium',
    price: 150, // 2 months free (15 * 10 months)
    billingPeriod: 'yearly',
    features: [
      'Unlimited crops tracking',
      'Unlimited animals',
      'AI-powered precision farming',
      'Complete pest & disease database',
      'Advanced weather analytics',
      'Custom reports & analytics',
      '24/7 priority support',
      'Custom branding',
      'API access',
      'Multi-farm management',
      '2 months free!'
    ],
    maxCrops: -1,
    maxAnimals: -1,
    advancedRecommendations: true,
    pestDatabase: true,
    weatherIntegration: true,
    exportReports: true,
    prioritySupport: true,
    customBranding: true
  }
];

export const getMonthlyPlans = () => subscriptionPlans.filter(plan => plan.billingPeriod === 'monthly');
export const getYearlyPlans = () => subscriptionPlans.filter(plan => plan.billingPeriod === 'yearly');
export const getPlanById = (id: string) => subscriptionPlans.find(plan => plan.id === id);
export const getPlansByName = (name: string) => subscriptionPlans.filter(plan => plan.name === name);

export const planFeatureChecks = {
  canAddCrop: (userPlan: string, currentCropCount: number): boolean => {
    const plan = getPlanById(userPlan);
    if (!plan) return false;
    return plan.maxCrops === -1 || currentCropCount < plan.maxCrops;
  },
  
  canAddAnimal: (userPlan: string, currentAnimalCount: number): boolean => {
    const plan = getPlanById(userPlan);
    if (!plan) return false;
    return plan.maxAnimals === -1 || currentAnimalCount < plan.maxAnimals;
  },
  
  hasAdvancedRecommendations: (userPlan: string): boolean => {
    const plan = getPlanById(userPlan);
    return plan?.advancedRecommendations || false;
  },
  
  hasPestDatabase: (userPlan: string): boolean => {
    const plan = getPlanById(userPlan);
    return plan?.pestDatabase || false;
  },
  
  hasWeatherIntegration: (userPlan: string): boolean => {
    const plan = getPlanById(userPlan);
    return plan?.weatherIntegration || false;
  },
  
  canExportReports: (userPlan: string): boolean => {
    const plan = getPlanById(userPlan);
    return plan?.exportReports || false;
  }
};