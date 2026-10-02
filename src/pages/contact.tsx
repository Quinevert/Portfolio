import { Navbar } from "../components/navbar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white flex items-center">
        <div className="max-w-xl mx-auto px-6">
          <h1 className="text-4xl font-semibold mb-6">Contact</h1>
          <p className="text-neutral-400">
            Let’s discuss your project or collaboration.
          </p>
        </div>
      </main>
    </>
  );
}
