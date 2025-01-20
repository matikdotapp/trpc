// shared/types.ts
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server';

// This is where you'll define the router type
export type AppRouter = {
  getUser: {
    input: { id: string };
    output: { id: string; name: string; email: string };
  };
};

// Helper types for input/output inference
export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;