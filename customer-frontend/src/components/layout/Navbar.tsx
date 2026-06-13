import { useState } from "react";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

import {
  Heart,
  ShoppingCart,
  Menu,
} from "lucide-react";

import {
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b bg-white/80 dark:bg-black/70">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

          {/* Logo */}
          <h1 className="font-black text-2xl">
            Premium Footwear
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 font-medium">
            <a href="/">Home</a>
            <a href="/products">Shop</a>
            <a href="/categories">Categories</a>
            <a href="/about">About</a>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            <SignedIn>
              <a href="/wishlist">
                <Heart
                  size={22}
                  className="cursor-pointer hover:scale-110 transition"
                />
              </a>

              <a href="/cart">
                <ShoppingCart
                  size={22}
                  className="cursor-pointer hover:scale-110 transition"
                />
              </a>
            </SignedIn>

            <ThemeToggle />

            <SignedOut>
              <a
                href="/sign-in"
                className="font-semibold"
              >
                Sign In
              </a>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={24} />
            </button>

          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}