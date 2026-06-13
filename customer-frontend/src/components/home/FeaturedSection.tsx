export default function FeaturedSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-10">
        Featured Collection
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="rounded-3xl border overflow-hidden"
          >
            <div className="h-64 bg-gray-100 dark:bg-zinc-800"></div>

            <div className="p-6">
              <h3 className="font-bold text-xl">
                Premium Shoe {item}
              </h3>

              <p className="mt-2 text-gray-500">
                Luxury comfort and performance.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}