import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ClassicalFetchA } from "./components/ClassicalFetchA";
import { ClassicalFetchB } from "./components/ClassicalFetchB";
import { Layout } from "./components/Layout";
import { ReactQueryA } from "./components/ReactQueryA";
import { StateProvider } from "./context/StateProvider";
import { ReactQueryB } from "./components/ReactQueryB";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <StateProvider>
        <Layout>
          <Routes>
            <Route path="/fetch-a" element={<ClassicalFetchA />} />
            <Route path="/fetch-b" element={<ClassicalFetchB />} />
            <Route path="/" element={<ReactQueryA />} />
            <Route path="/query-b" element={<ReactQueryB />} />
          </Routes>
        </Layout>
      </StateProvider>
    </BrowserRouter>
    <ReactQueryDevtools />
  </QueryClientProvider>
);

export default App;
