"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";

const categories = [
  { label: "Todos", value: "todos" },
  { label: "Fragancias", value: "fragancias" },
  { label: "Belleza", value: "belleza" },
];

export default function CatalogoPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("todos");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "todos" || product.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <main className="min-h-screen bg-[#f7f3eb]">
<section className="bg-white">
  <div className="mx-auto max-w-7xl px-6 py-12">

    <div className="mb-4">
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full border border-[#4e4fa8]/20 bg-white px-5 py-3 text-sm font-semibold text-[#4e4fa8] shadow-sm transition-all hover:-translate-x-1 hover:border-[#4e4fa8] hover:bg-[#4e4fa8] hover:text-white"
      >
        <span className="text-lg">←</span>
        Volver al inicio
      </Link>
    </div>

    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#4e4fa8]">
      Dreams Imported
    </p>

    <h1 className="mt-3 text-5xl font-bold">
      Catálogo
    </h1>

    <p className="mt-4 max-w-2xl text-base leading-7 text-black/60">
      Explorá nuestra selección de fragancias y productos de belleza importados.
      Para realizar tu compra, escribinos por Instagram.
    </p>

  </div>
</section>
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 grid gap-4 md:grid-cols-[1fr_auto]">
          <input
            type="text"
            placeholder="Buscar producto..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full rounded-full border border-black/10 bg-white px-6 py-4 text-[#111111] placeholder:text-black/40 outline-none transition focus:border-[#4e4fa8] focus:ring-4 focus:ring-[#4e4fa8]/10"
            />

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                  activeCategory === category.value
                    ? "bg-[#4e4fa8] text-white"
                    : "bg-white text-black hover:bg-black/5"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <p className="mb-6 text-sm font-medium text-[#555]">
        {filteredProducts.length} productos encontrados
        </p>

        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => {
            const message = encodeURIComponent(
              `Hola, me interesa ${product.name} que vi en Dreams Imported.`
            );

            return (
              <article
  key={product.id}
  className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
>
  <Link href={`/producto/${product.slug}`}>
    <img
      src={product.image}
      alt={product.name}
      className="h-72 w-full object-cover"
    />
  </Link>

  <div className="flex flex-1 flex-col p-5">

    <Link href={`/producto/${product.slug}`}>
        <h2 className="mt-2 min-h-[56px] text-lg font-bold leading-7 text-black hover:text-[#4e4fa8]">
        {product.name}
        </h2>
    </Link>

<p className="mt-3 mb-6 text-xl font-bold text-[#4e4fa8]">
  ${product.price.toLocaleString("es-AR")}
</p>

    <a
      href="https://instagram.com/imported.dreams_"
      target="_blank"
      className="mt-auto block rounded-full bg-[#4e4fa8] px-5 py-3 text-center text-sm font-semibold text-white"
    >
      Consultar
    </a>
  </div>
</article>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="rounded-3xl bg-white p-10 text-center">
            <h2 className="text-2xl font-bold">
              No encontramos productos
            </h2>
            <p className="mt-2 text-black/60">
              Probá con otra búsqueda o categoría.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}