import Categories from "@/components/Categories";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import TrustBanner from "@/components/TrustBanner";
import Brands from "@/components/Brands";
import WppButton from "@/components/WppButton";
import VideoShowcase from "@/components/VideoShowcase";
import InstagramButton from "@/components/InstagramButton";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3eb]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="Dreams Imported"
                width={60}
                height={60}
                priority
              />

              <div>
                <p className="font-bold text-[#4e4fa8]">
                  Dreams Imported
                </p>

                <p className="text-xs text-black/50">
                  Productos Importados
                </p>
              </div>
            </Link>

<nav className="hidden md:flex gap-8">
  <Link href="/">Inicio</Link>
  <Link href="/catalogo">Catálogo</Link>
</nav>

          <a
            href="https://instagram.com/imported.dreams_"
            target="_blank"
            className="rounded-full bg-[#4e4fa8] px-5 py-2.5 text-sm font-semibold text-white"
          >
            Instagram
          </a>
        </div>
      </header>

<section className="relative mb-8 flex min-h-[70vh] items-center justify-center overflow-hidden bg-black md:mb-0">
<Image
  src="/products/fotoPrincipal.png"
  alt="Perfumes importados"
  fill
  priority
  className="absolute inset-0 object-cover"
/>
<div className="absolute inset-0 bg-black/30" />

            <div className="relative z-10 mx-auto max-w-4xl px-6 pt-10 pb-16 md:pb-10 text-center">
            <div className="mb-8 flex justify-center">
            <Image
              src="/logo.jpg"
              alt="Dreams Imported"
              width={140}
              height={140}
              priority
              className="rounded-full shadow-2xl"
            />
          </div>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-white/80">
            Productos importados
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-7xl">
            Dreams Imported
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
            Fragancias importadas y productos de belleza seleccionados.
          </p>

          <div className="mt-8 mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/catalogo"
              className="rounded-full bg-[#4e4fa8] px-8 py-4 font-semibold text-white transition hover:bg-[#3b3c87]"
            >
              Ver catálogo
            </Link>

            <a
              href="https://instagram.com/imported.dreams_"
              target="_blank"
              className="rounded-full bg-white px-8 py-4 font-semibold text-black transition hover:bg-[#f2f2f2]"
            >
              Comprar por Instagram
            </a>
          </div>
        </div>
      </section>
      <TrustBanner />
      <Categories />
      <VideoShowcase />
      <Brands />
      <Footer />
      <InstagramButton />
      <WppButton/>
    </main>
  );
}