import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ReactQueryA } from "./ReactQueryA";
import { Spinner } from "./Spinner";

export const SuspenseDemo = () => (
  <ErrorBoundary
    fallback={
      <div>
        <h1>Something went wrong</h1>
      </div>
    }
  >
    <Suspense fallback={<Spinner />}>
      <ReactQueryA />
    </Suspense>
  </ErrorBoundary>
);
