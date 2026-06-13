export default function Newsletter() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="rounded-3xl border p-10 text-center">
        <h2 className="text-4xl font-bold">
          Join Our Newsletter
        </h2>

        <p className="mt-4 text-gray-500">
          Get updates about new arrivals and exclusive offers.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="border rounded-xl px-4 py-3 w-full md:w-96"
          />

          <button className="px-6 py-3 rounded-xl bg-black text-white dark:bg-white dark:text-black">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}