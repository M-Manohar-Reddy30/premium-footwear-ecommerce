import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({
  children,
}: Props) {
  const {
    isLoaded,
    isSignedIn,
  } = useUser();

  console.log(
    "ProtectedRoute:",
    {
      isLoaded,
      isSignedIn,
    }
  );

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" />;
  }

  return <>{children}</>;
}