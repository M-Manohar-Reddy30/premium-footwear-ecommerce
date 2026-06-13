import { useAppSelector } from "@/store/hooks";

export default function ProfilePage() {
  const user =
    useAppSelector(
      (state) => state.user
    );

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-4xl font-bold">
        Redux User Profile
      </h1>

      <div className="mt-6 space-y-2">
        <p>Name: {user.fullName}</p>

        <p>Email: {user.email}</p>

        <p>
          Profile Completed:
          {user.profileCompleted
            ? " Yes"
            : " No"}
        </p>
      </div>
    </div>
  );
}