const categories = [
  "Running",
  "Sports",
  "Sneakers",
  "Casual",
  "Formal",
  "Sandals",
];

export default function CategorySection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-10">
        Shop By Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category}
            className="group rounded-3xl border p-8 hover:shadow-xl transition-all cursor-pointer"
          >
            <h3 className="text-xl font-semibold">
              {category}
            </h3>

            <p className="text-sm mt-2 text-gray-500">
              Premium Collection
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}