import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

import { getProduct } from "@/services/productService";
import { addToWishlist } from "@/services/wishlistService";
import {
  addToCart,
} from "@/services/cartService";
export default function ProductDetailsPage() {
  const { slug } = useParams();
  const { user } = useUser();

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        if (!slug) return;

        const result = await getProduct(slug);

        setProduct(result.product);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  const handleWishlist = async () => {
    try {
      if (!user) {
        alert("Please login first");
        return;
      }

      if (!product) {
        alert("Product not found");
        return;
      }

      await addToWishlist(
        user.id,
        product._id
      );

      alert("Added To Wishlist");
    } catch (error) {
      console.error(error);
      alert("Failed to add to wishlist");
    }
  };

  const handleCart =
  async () => {
    try {
      if (!user || !product)
        return;

      await addToCart(
        user.id,
        product._id
      );

      alert(
        "Added To Cart"
      );
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="p-10">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-10">

        {/* Product Image */}
        <div className="border rounded-3xl overflow-hidden">
          {product.images?.[0] ? (
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src="https://placehold.co/800x800?text=Premium+Footwear"
              alt="placeholder"
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-4xl font-bold">
            {product.name}
          </h1>

          <p className="mt-4 text-gray-500">
            {product.description}
          </p>

          <div className="mt-6">
            <span className="text-3xl font-bold">
              ₹{product.discountPrice}
            </span>

            {product.price &&
              product.price !== product.discountPrice && (
                <span className="ml-3 text-gray-400 line-through">
                  ₹{product.price}
                </span>
              )}
          </div>

          <div className="mt-8 flex gap-4">
            <button
              onClick={handleCart}
              className="bg-black text-white px-6 py-3 rounded-xl"
            >
              Add To Cart
            </button>

            <button
              onClick={handleWishlist}
              className="border px-6 py-3 rounded-xl"
            >
              Add To Wishlist
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}