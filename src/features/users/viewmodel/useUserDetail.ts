// src/features/users/viewmodel/useUserDetail.ts
'use client';

import { useQuery } from '@apollo/client';
import { GET_USER_BY_ID } from '@/features/users/model/users.gql';
import type { User } from '@/features/users/model/types';

interface UseUserDetailReturn {
  user?: User | null;
  loading: boolean;
  error: any;
  refetch: (variables?: { id: string }) => void;
}

export const useUserDetail = (userId: string): UseUserDetailReturn => {
  const { data, loading, error, refetch } = useQuery<{ user: User }, { id: string }>(
    GET_USER_BY_ID,
    {
      variables: { id: userId },
      skip: !userId, // Don't run query if userId is not available
    }
  );

  return {
    user: data?.user,
    loading,
    error,
    refetch: (variables) => refetch(variables || { id: userId }),
  };
};
