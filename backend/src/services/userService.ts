import { api } from "./api";

export const syncUser = async (
  clerkId: string,
  email: string,
  fullName: string
) => {
  const response = await api.post("/users/sync", {
    clerkId,
    email,
    fullName,
  });

  return response.data;
};

export const getUser = async (
  clerkId: string
) => {
  const response = await api.get(
    `/users/${clerkId}`
  );

  return response.data;
};