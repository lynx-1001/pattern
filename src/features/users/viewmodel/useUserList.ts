// src/features/users/viewmodel/useUserList.ts
'use client'; // useQuery is a client-side hook

import { useQuery } from '@apollo/client';
import { GET_USERS } from '@/features/users/model/users.gql';
import type { User } from '@/features/users/model/types';

interface UseUserListReturn {
  users: User[];
  loading: boolean;
  error: any; // Consider using ApolloError type
  refetch: () => void; // Function to refetch data
}

export const useUserList = (): UseUserListReturn => {
  const { data, loading, error, refetch } = useQuery<{ users: User[] }>(GET_USERS);

  return {
    users: data?.users || [], // Return empty array if data is not available
    loading,
    error,
    refetch,
  };
};