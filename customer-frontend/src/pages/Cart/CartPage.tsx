import {
  useEffect,
  useState,
} from "react";

import {
  useUser,
} from "@clerk/clerk-react";

import {
  getCart,
} from "@/services/cartService";

export default function CartPage() {
  const { user } =
    useUser();

  const [cart, setCart] =
    useState<any[]>([]);

  useEffect(() => {
    const fetchCart =
      async () => {
        if (!user) return;

        const result =
          await getCart(
            user.id
          );

        setCart(
          result.cart
        );
      };

    fetchCart();
  }, [user]);

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-8">
        Cart
      </h1>

      {cart.length === 0 ? (
        <p>
          Cart Empty
        </p>
      ) : (
        <div className="space-y-4">

          {cart.map(
            (item) => (
              <div
                key={
                  item.product._id
                }
                className="border p-4 rounded-xl"
              >
                <h2>
                  {
                    item.product
                      .name
                  }
                </h2>

                <p>
                  Qty:
                  {
                    item.quantity
                  }
                </p>

                <p>
                  ₹
                  {
                    item.product
                      .discountPrice
                  }
                </p>
              </div>
            )
          )}

        </div>
      )}

    </div>
  );
}