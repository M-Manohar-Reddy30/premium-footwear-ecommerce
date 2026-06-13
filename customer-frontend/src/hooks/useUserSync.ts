import { useAppDispatch } from "@/store/hooks";
import { setUser } from "@/store/slices/userSlice";

const dispatch = useAppDispatch();

const result = await syncUser(
  user.id,
  user.primaryEmailAddress?.emailAddress || "",
  user.fullName || ""
);

dispatch(
  setUser(result.user)
);