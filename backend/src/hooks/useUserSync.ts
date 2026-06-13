import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";

import { syncUser } from "@/services/userService";

export default function useUserSync() {
  const { user, isSignedIn } = useUser();

  useEffect(() => {
    if (!isSignedIn || !user) return;

    syncUser(
      user.id,
      user.primaryEmailAddress?.emailAddress || "",
      user.fullName || ""
    );
  }, [isSignedIn, user]);
}