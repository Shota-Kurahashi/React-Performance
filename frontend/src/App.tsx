import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ClassicalFetchA } from "./components/ClassicalFetchA";
import { ClassicalFetchB } from "./components/ClassicalFetchB";
import { Layout } from "./components/Layout";
import { StateProvider } from "./context/StateProvider";
import { ReactQueryB } from "./components/ReactQueryB";
import { MainContext } from "./components/MainContext";
import { MainZustand } from "./components/MainZustand";
import { SuspenseDemo } from "./components/SuspenseDemo";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      suspense: true,
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
            {/* <Suspense fallback={<Spinner />}> */}
            <Route path="/" element={<SuspenseDemo />} />
            {/* </Suspense> */}
            <Route path="/query-b" element={<ReactQueryB />} />
            <Route path="/main-context" element={<MainContext />} />
            <Route path="/main-zustand" element={<MainZustand />} />
          </Routes>
        </Layout>
      </StateProvider>
    </BrowserRouter>
    <ReactQueryDevtools />
  </QueryClientProvider>
);

export default App;
