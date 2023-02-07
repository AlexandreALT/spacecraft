import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Navigator } from "./src/navigation/Navigator";

import { LoginScreen } from "./src/screens/LoginScreen";
import { StarshipFeedScreen } from "./src/screens/StarshipFeedScreen";
import { TermsScreen } from "./src/screens/TermsScreen";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <LoginScreen /> */}
      {/* <TermsScreen /> */}
      {/* <StarshipFeedScreen /> */}
      <Navigator />
    </QueryClientProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
