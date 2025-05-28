// src/features/auth/viewmodel/useLogin.ts
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '@/features/auth/model/auth.gql';
import type { AuthResponse, LoginDto } from '@/features/auth/model/types';
import { setToken } from '@/lib/auth/useAuthToken';
import { APP_ROUTES } from '@/constants/app_routes';

interface UseLoginReturn {
  handleLogin: (credentials: LoginDto) => Promise<void>;
  loading: boolean;
  error: any; // Consider using ApolloError type
  data?: AuthResponse | null;
}

export const useLogin = (): UseLoginReturn => {
  const [loginMutation, { data, loading, error }] = useMutation<{ login: AuthResponse }, { loginDto: LoginDto }>(
    LOGIN_MUTATION
  );
  const router = useRouter();

  const handleLogin = async (credentials: LoginDto) => {
    try {
      const response = await loginMutation({ variables: { loginDto: credentials } });
      if (response.data?.login.access_token && typeof window !== 'undefined') {
        // Store the token (e.g., in localStorage)
        setToken(response.data.login.access_token);
        // You might want to redirect the user or update global state here
        console.log('Login successful:', response.data.login.user);
        alert(`Login Successful! Welcome ${response.data.login.user.email}`); // Replace with better UI
        router.push(APP_ROUTES.dashboard);

      }
    } catch (e) {
      // Error is already captured by the `error` variable from useMutation
      console.error('Login failed:', e);
       alert(`Login Failed: ${error?.message || 'Unknown error'}`); // Replace with better UI
    }
  };

  return {
    handleLogin,
    loading,
    error,
    data: data?.login,
  };
};
