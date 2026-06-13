export interface Product {
  _id: string;

  name: string;

  slug: string;

  description: string;

  price: number;

  discountPrice: number;

  stock: number;

  images: string[];

  featured: boolean;

  trending: boolean;

  newArrival: boolean;
}