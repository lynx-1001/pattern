// src/features/auth/viewmodel/useRegister.ts
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { REGISTER_MUTATION } from '@/features/auth/model/auth.gql';
import type { AuthResponse, RegisterDto } from '@/features/auth/model/types';

interface UseRegisterReturn {
  handleRegister: (credentials: RegisterDto) => Promise<void>;
  loading: boolean;
  error: any; // Consider using ApolloError type
  data?: AuthResponse | null;
}

export const useRegister = (): UseRegisterReturn => {
  const [registerMutation, { data, loading, error }] = useMutation<{ register: AuthResponse }, { registerDto: RegisterDto }>(
    REGISTER_MUTATION
  );

  const handleRegister = async (credentials: RegisterDto) => {
    try {
      const response = await registerMutation({ variables: { registerDto: credentials } });
      if (response.data?.register.access_token && typeof window !== 'undefined') {
        // Store the token (optional: maybe you want user to login after register)
        localStorage.setItem('access_token', response.data.register.access_token);
        console.log('Registration successful:', response.data.register.user);
        alert(`Registration Successful! Welcome ${response.data.register.user.email}. You are now logged in.`); // Replace with better UI
        // Maybe redirect to dashboard or login page
        // window.location.href = '/dashboard';
      }
    } catch (e) {
      console.error('Registration failed:', e);
      alert(`Registration Failed: ${error?.message || 'Unknown error'}`); // Replace with better UI
    }
  };

  return {
    handleRegister,
    loading,
    error,
    data: data?.register,
  };
};