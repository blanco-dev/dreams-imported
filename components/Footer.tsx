import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid md:grid-cols-3 gap-10">

          <div>

            <Image
              src="/logo.jpg"
              alt="Dreams Imported"
              width={90}
              height={90}
            />

            <h3 className="mt-4 text-2xl font-bold">
              Dreams Imported
            </h3>

            <p className="mt-3 text-white/70">
Fragancias importadas y productos de belleza seleccionados. Trabajamos con marcas reconocidas para ofrecer calidad, originalidad y atención personalizada.
            </p>

          </div>

          <div>

            <h4 className="font-bold text-lg">
              Categorías
            </h4>

            <ul className="mt-4 space-y-2 text-white/70">

              <li>Fragancias</li>

              <li>Belleza</li>

            </ul>

          </div>

          <div>

            <h4 className="font-bold text-lg">
              Contacto
            </h4>

            <a
              href="https://instagram.com/imported.dreams_"
              target="_blank"
              className="block mt-4 text-white/70"
            >
              @imported.dreams_
            </a>

          </div>

        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-white/50">
          © 2026 Dreams Imported
        </div>

      </div>

    </footer>
  );
}