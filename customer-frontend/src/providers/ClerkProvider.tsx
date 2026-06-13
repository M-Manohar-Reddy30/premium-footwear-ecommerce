import { ClerkProvider } from "@clerk/clerk-react";
import { ReactNode } from "react";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

interface Props {
  children: ReactNode;
}

export default function AppClerkProvider({ children }: Props) {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      {children}
    </ClerkProvider>
  );
}