import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import { StarshipFeedScreen } from './src/screens/StarshipFeedScreen';
import { TermsScreen } from "./src/screens/TermsScreen";

const queryClient = new QueryClient()

const App = () => {
  return(
    <QueryClientProvider client={queryClient}>
      {/* <LoginScreen /> */}
      {/* <TermsScreen /> */}
      <StarshipFeedScreen />
    </QueryClientProvider>
  );
};

export default App;