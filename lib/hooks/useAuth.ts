'use client';

import { useState, useEffect } from 'react';

export interface User {
  id: string;
  email: string;
  name: string;
}

const DEMO_USER: User = {
  id: '00000000-0000-0000-0000-000000000001',
  email: 'demo@chatbot.local',
  name: 'Demo User',
};

const STORAGE_KEY = 'chatbot_user_id';
const STORAGE_USER_KEY = 'chatbot_user';

/**
 * Hook for authentication.
 * Demo mode uses localStorage. TODO: replace stubs with Supabase auth.
 */
export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_USER_KEY);
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem(STORAGE_USER_KEY);
      }
    } else {
      // Legacy support for old storage key
      const userId = localStorage.getItem(STORAGE_KEY);
      if (userId === DEMO_USER.id) setUser(DEMO_USER);
    }
    setIsLoading(false);
  }, []);

  const setSession = (u: User) => {
    localStorage.setItem(STORAGE_KEY, u.id);
    localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(u));
    setUser(u);
  };

  // Demo login (legacy, keep for compatibility)
  const login = () => setSession(DEMO_USER);

  // TODO: replace with Supabase signInWithPassword
  const loginWithEmail = async (email: string, _password: string): Promise<void> => {
    setSession({ id: DEMO_USER.id, email, name: email.split('@')[0] });
  };

  // TODO: replace with Supabase signUp
  const signupWithEmail = async (name: string, email: string, _password: string): Promise<void> => {
    setSession({ id: DEMO_USER.id, email, name });
  };

  // TODO: replace with Supabase signInWithOAuth({ provider: 'google' })
  const loginWithGoogle = async (): Promise<void> => {
    setSession(DEMO_USER);
  };

  // TODO: replace with Supabase signInWithOAuth({ provider: 'apple' })
  const loginWithApple = async (): Promise<void> => {
    setSession(DEMO_USER);
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(STORAGE_USER_KEY);
    setUser(null);
  };

  return {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    loginWithEmail,
    signupWithEmail,
    loginWithGoogle,
    loginWithApple,
    logout,
  };
}
