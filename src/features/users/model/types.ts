
// src/features/users/model/types.ts
import type { User as AuthUser, DateTime, Profile as AuthProfile } from '@/features/auth/model/types';

// Re-export or redefine for this feature
export type User = AuthUser & {
    profile?: Profile | null; // Ensure profile is part of User type for this feature
};
export type Profile = AuthProfile; // Assuming Profile structure is the same
export type { DateTime };
