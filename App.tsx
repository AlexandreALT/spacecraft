import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Navigator } from "./src/navigation/Navigator";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigator />
    </QueryClientProvider>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
