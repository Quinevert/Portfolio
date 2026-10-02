export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-neutral-100 text-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold mb-12">Selected Projects</h2>

        <div className="grid gap-12">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-medium">Kaevros Follow Up Tool</h3>
                <p className="text-neutral-600 mt-2">
                  A web-based platform designed to streamline internal workflows.
                </p>
              </div>
              <img src="/images/project.jpg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
