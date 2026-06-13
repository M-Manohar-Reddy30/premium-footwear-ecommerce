import { X } from "lucide-react";
import { Link } from "react-router-dom";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed top-0 left-0 h-full w-72 bg-white dark:bg-black z-50 shadow-xl p-6">

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold">
            Premium Footwear
          </h2>

          <button onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col gap-6 text-lg">

          <Link to="/" onClick={onClose}>
            Home
          </Link>

          <Link to="/products" onClick={onClose}>
            Shop
          </Link>

          <Link to="/categories" onClick={onClose}>
            Categories
          </Link>

          <Link to="/wishlist" onClick={onClose}>
            Wishlist
          </Link>

          <Link to="/cart" onClick={onClose}>
            Cart
          </Link>

          <Link to="/profile" onClick={onClose}>
            Profile
          </Link>

        </div>
      </div>
    </>
  );
}