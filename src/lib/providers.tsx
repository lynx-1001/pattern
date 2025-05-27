'use client'; // This directive is necessary for client-side providers in App Router

import { ApolloProvider } from '@apollo/client';
import client from './apolloClient'; // Path to your apolloClient.ts

export function Providers({ children }: { children: React.ReactNode }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}