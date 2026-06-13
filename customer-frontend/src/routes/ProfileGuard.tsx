import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

import { getUser } from "@/services/userService";

interface Props {
  children: React.ReactNode;
}

export default function ProfileGuard({
  children,
}: Props) {
  const { user, isLoaded } =
    useUser();

  const [loading, setLoading] =
    useState(true);

  const [completed, setCompleted] =
    useState(false);

  useEffect(() => {
    const checkProfile = async () => {
      if (!isLoaded) return;

      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const result =
          await getUser(user.id);

          console.log(
  "API Result:",
  result
);

console.log(
  "Profile Completed:",
  result.user?.profileCompleted
);

        console.log(
          "Profile Result:",
          result
        );

        setCompleted(
          result.user
            ?.profileCompleted ??
            false
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    checkProfile();
  }, [user, isLoaded]);

  if (loading) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  if (!completed) {
    return (
      <Navigate
        to="/complete-profile"
        replace
      />
    );
  }

  return <>{children}</>;
}