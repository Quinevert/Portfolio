export default function Services() {
  return (
    <section id="services" className="py-32 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold mb-12">Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {["UX/UI Design", "Product Design", "Development"].map((service) => (
            <div key={service} className="border p-6">
              <h3 className="font-medium">{service}</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Strategic, user-focused solutions designed for clarity and impact.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
