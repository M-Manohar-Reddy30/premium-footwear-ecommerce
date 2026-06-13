import { api } from "./api";

export const addToWishlist = async (
  clerkId: string,
  productId: string
) => {
  const response = await api.post(
    "/wishlist/add",
    {
      clerkId,
      productId,
    }
  );

  return response.data;
};