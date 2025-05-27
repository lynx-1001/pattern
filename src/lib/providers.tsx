'use client'; // This directive is necessary for client-side providers in App Router

import { ApolloProvider } from '@apollo/client';
import client from './apolloClient'; // Path to your apolloClient.ts
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    </ThemeProvider>
  )
}