import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b bg-white/80 dark:bg-black/70">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="font-bold text-xl">
          Premium Footwear
        </h1>

        <ThemeToggle />
      </div>
    </header>
  );
}