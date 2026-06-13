import { Routes, Route } from "react-router-dom";

import HomePage from "@/pages/Home/HomePage";

import SignInPage from "@/pages/Auth/SignInPage";
import SignUpPage from "@/pages/Auth/SignUpPage";

import ProfilePage from "@/pages/Profile/ProfilePage";
import WishlistPage from "@/pages/Wishlist/WishlistPage";
import CartPage from "@/pages/Cart/CartPage";

import MainLayout from "@/layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import ProfileCompletePage from "@/pages/ProfileComplete/ProfileCompletePage";
import ProfileGuard from "./ProfileGuard";
import ProductsPage from "@/pages/Products/ProductsPage";
import ProductDetailsPage from "@/pages/ProductDetails/ProductDetailsPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />

      <Route path="/sign-in/*" element={<SignInPage />} />
      <Route path="/sign-up/*" element={<SignUpPage />} />

      <Route
  path="/profile"
  element={
    <ProtectedRoute>
      <MainLayout>
        <ProfilePage />
      </MainLayout>
    </ProtectedRoute>
  }
/>

      <Route
        path="/wishlist"
        element={
          <ProtectedRoute>
            <ProfileGuard>
              <MainLayout>
                <WishlistPage />
              </MainLayout>
            </ProfileGuard>
          </ProtectedRoute>
        }
      />

      <Route
  path="/cart"
  element={
    <ProtectedRoute>
      <ProfileGuard>
        <MainLayout>
          <CartPage />
        </MainLayout>
      </ProfileGuard>
    </ProtectedRoute>
  }
/>

      <Route
        path="/complete-profile"
        element={
          <MainLayout>
            <ProfileCompletePage />
          </MainLayout>
        }
      />

      <Route
  path="/products"
  element={
    <MainLayout>
      <ProductsPage />
    </MainLayout>
  }
/>

      <Route
        path="/product/:slug"
        element={
          <MainLayout>
            <ProductDetailsPage />
          </MainLayout>
        }
      />

    </Routes>
  );
}