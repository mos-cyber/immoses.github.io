import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthContextType, RegisterData } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on app load
    const savedUser = localStorage.getItem('aceVisionUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Simulate API call - in real app, this would call your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock authentication - check against demo user
      if (email === 'farmer@acevision.com' && password === 'demo123') {
        const userData: User = {
          id: '1',
          email: email,
          name: 'John Farmer',
          farmName: 'Green Valley Farm',
          location: 'California, USA',
          subscription: {
            plan: 'basic',
            status: 'trial',
            startDate: new Date(),
            trialEndsAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000) // 14 days trial
          }
        };
        setUser(userData);
        localStorage.setItem('aceVisionUser', JSON.stringify(userData));
        setIsLoading(false);
        return true;
      }
      
      // Check if user exists in localStorage (for newly registered users)
      const users = JSON.parse(localStorage.getItem('aceVisionUsers') || '[]');
      const existingUser = users.find((u: User) => u.email === email);
      
      if (existingUser) {
        setUser(existingUser);
        localStorage.setItem('aceVisionUser', JSON.stringify(existingUser));
        setIsLoading(false);
        return true;
      }
      
      setIsLoading(false);
      return false;
    } catch (error) {
      setIsLoading(false);
      return false;
    }
  };

  const register = async (userData: RegisterData): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser: User = {
        id: Date.now().toString(),
        email: userData.email,
        name: userData.name,
        farmName: userData.farmName,
        location: userData.location,
        subscription: {
          plan: 'basic',
          status: 'trial',
          startDate: new Date(),
          trialEndsAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000) // 14 days trial
        }
      };
      
      // Save to localStorage (in real app, this would save to backend)
      const users = JSON.parse(localStorage.getItem('aceVisionUsers') || '[]');
      users.push(newUser);
      localStorage.setItem('aceVisionUsers', JSON.stringify(users));
      
      setUser(newUser);
      localStorage.setItem('aceVisionUser', JSON.stringify(newUser));
      setIsLoading(false);
      return true;
    } catch (error) {
      setIsLoading(false);
      return false;
    }
  };

  const updateSubscription = async (planId: string): Promise<boolean> => {
    if (!user) return false;
    
    setIsLoading(true);
    try {
      // Simulate API call for subscription update
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Extract plan details from planId
      const [planName, billingPeriod] = planId.split('-');
      
      const updatedUser: User = {
        ...user,
        subscription: {
          plan: planName as 'basic' | 'pro' | 'premium',
          status: 'active',
          startDate: new Date(),
          endDate: billingPeriod === 'yearly' 
            ? new Date(Date.now() + 365 * 24 * 60 * 60 * 1000) 
            : new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
        }
      };
      
      setUser(updatedUser);
      localStorage.setItem('aceVisionUser', JSON.stringify(updatedUser));
      
      // Update in users array as well
      const users = JSON.parse(localStorage.getItem('aceVisionUsers') || '[]');
      const updatedUsers = users.map((u: User) => 
        u.id === user.id ? updatedUser : u
      );
      localStorage.setItem('aceVisionUsers', JSON.stringify(updatedUsers));
      
      setIsLoading(false);
      return true;
    } catch (error) {
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('aceVisionUser');
  };

  const value: AuthContextType = {
    user,
    login,
    register,
    logout,
    isLoading,
    updateSubscription
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};