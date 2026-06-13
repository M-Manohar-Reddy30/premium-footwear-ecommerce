import { api } from "./api";

export const addToCart =
  async (
    clerkId: string,
    productId: string
  ) => {
    const response =
      await api.post(
        "/cart/add",
        {
          clerkId,
          productId,
        }
      );

    return response.data;
  };

  export const getCart =
  async (
    clerkId: string
  ) => {
    const response =
      await api.get(
        `/cart/${clerkId}`
      );

    return response.data;
  };