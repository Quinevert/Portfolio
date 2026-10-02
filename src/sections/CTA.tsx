import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-32 bg-black text-white text-center">
      <h2 className="text-5xl font-bold mb-6">Feel like collaborating?</h2>
      <Link
        to="/contact"
        className="inline-block mt-4 border px-8 py-3 hover:bg-white hover:text-black transition"
      >
        Get in touch
      </Link>
    </section>
  );
}
