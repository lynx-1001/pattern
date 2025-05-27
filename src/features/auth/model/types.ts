// src/features/auth/model/types.ts

// Based on your provided GraphQL schema
// DateTime scalar can be represented as string or Date in TypeScript
export type DateTime = string; // Or Date, depending on how you handle it

export interface User {
  id: string;
  email: string;
  isActive: boolean;
  isEmailVerified: boolean;
  createdAt: DateTime;
  updatedAt: DateTime;
  profile?: Profile | null;
}

export interface Profile {
  id: string;
  firstName?: string | null;
  lastName?: string | null;
  avatar?: string | null;
  bio?: string | null;
  dateOfBirth?: string | null;
  phone?: string | null;
  createdAt: DateTime;
  updatedAt: DateTime;
  user: User; // This might cause circular dependency if not handled carefully, or could be just userId
}

export interface AuthResponse {
  access_token: string;
  user: User;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface RegisterDto {
  email: string;
  password: string;
}


