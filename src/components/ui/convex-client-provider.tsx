import { ConvexAuthNextjsServerProvider } from "@convex-dev/auth/nextjs/server";
// import { ConvexReactClient } from "convex/react";
import { ReactNode } from "react";

// const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    <ConvexAuthNextjsServerProvider>{children}</ConvexAuthNextjsServerProvider>
  );
}
