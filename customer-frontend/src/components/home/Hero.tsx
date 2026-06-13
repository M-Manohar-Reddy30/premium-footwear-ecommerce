import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center justify-center px-6">
      
      {/* Background Blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-[0.3em] text-sm text-gray-500"
        >
          Premium Footwear Collection
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black mt-4"
        >
          Walk With
          <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Confidence
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-2xl mx-auto mt-6 text-gray-600 dark:text-gray-300"
        >
          Discover luxury footwear crafted for performance,
          comfort, and style.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="px-8 py-4 rounded-2xl bg-black text-white dark:bg-white dark:text-black font-semibold">
            Shop Now
          </button>

          <button className="px-8 py-4 rounded-2xl border font-semibold">
            Explore Collection
          </button>
        </motion.div>
      </div>
    </section>
  );
}