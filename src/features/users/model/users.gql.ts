// src/features/users/model/users.gql.ts
import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      email
      isActive
      isEmailVerified
      createdAt
      updatedAt
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query GetUserById($id: String!) { # Changed query name for clarity
    user(id: $id) {
      id
      email
      isActive
      isEmailVerified
      createdAt
      updatedAt
      profile {
        id
        firstName
        lastName
        avatar
        bio
        dateOfBirth
        phone
      }
    }
  }
`;