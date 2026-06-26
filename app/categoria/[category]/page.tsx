import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";

const categoryNames: Record<string, string> = {
  fragancias: "Fragancias",
  belleza: "Belleza",
};

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;

  const categoryTitle = categoryNames[category];

  if (!categoryTitle) {
    notFound();
  }

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <main className="min-h-screen bg-[#f7f3eb]">
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <Link href="/catalogo" className="font-semibold text-[#4e4fa8]">
            ← Volver al catálogo
          </Link>

          <h1 className="mt-6 text-5xl font-bold text-[#222222]">{categoryTitle}</h1>

          <p className="mt-4 text-black/60">
            Productos disponibles en la categoría {categoryTitle}.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
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
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
      {product.category}
    </p>

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
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="rounded-3xl bg-white p-10 text-center">
            <h2 className="text-2xl font-bold">No hay productos cargados</h2>
          </div>
        )}
      </section>
    </main>
  );
}