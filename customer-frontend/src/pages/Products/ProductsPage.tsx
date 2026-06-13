import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { getProducts } from "@/services/productService";

import type { Product } from "@/types/product";

export default function ProductsPage() {
  const [products, setProducts] =
    useState<Product[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result =
          await getProducts();

        setProducts(
          result.products
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="p-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-10">
        Products
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {products.map((product) => (

          <Link
                key={product._id}
                to={`/product/${product.slug}`}
                className="border rounded-3xl overflow-hidden block hover:shadow-xl transition duration-300"
             >

            <div className="h-64 bg-gray-100 flex items-center justify-center">

              {product.images?.[0] ? (
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <img
                    src="https://placehold.co/600x600?text=Premium+Footwear"
                    alt="placeholder"
                    className="w-full h-full object-cover"
                 />
              )}

            </div>

            <div className="p-4">

              <h2 className="font-bold text-xl">
                {product.name}
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                ₹{product.discountPrice}
              </p>

            </div>

          </Link>

        ))}

      </div>

    </div>
  );
}