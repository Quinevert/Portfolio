import {motion} from "framer-motion";

export default function Footer() {
  return (
    <section style={{ backgroundImage: "url(../assets/hero bg.jpg)" }} className="min-h-screen flex items-center zen-dots-regular bg-black">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-6"
      >
        <h1 className="text-6xl font-semibold">
          Hero section
        </h1>
      </motion.div>
    </section>
  );
}
