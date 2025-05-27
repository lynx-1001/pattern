// src/features/auth/model/auth.gql.ts
import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($loginDto: LoginDto!) {
    login(loginDto: $loginDto) {
      access_token
      user {
        id
        email
        isActive
        isEmailVerified
        createdAt
        updatedAt
        # profile { # Uncomment if you need profile details immediately after login
        #   id
        #   firstName
        #   lastName
        # }
      }
    }
  }
`;

export const REGISTER_MUTATION = gql`
  mutation Register($registerDto: RegisterDto!) {
    register(registerDto: $registerDto) {
      access_token
      user {
        id
        email
      }
    }
  }
`;