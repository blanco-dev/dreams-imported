import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({
  params,
}: Props) {
  const { slug } = await params;

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  const message = encodeURIComponent(
    `Hola, me interesa ${product.name} que vi en Dreams Imported.`
  );

  return (
    <main className="min-h-screen bg-[#f7f3eb]">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <Link
          href="/catalogo"
          className="text-[#4e4fa8] font-semibold"
        >
          ← Volver al catálogo
        </Link>

        <div className="mt-10 grid gap-12 md:grid-cols-2">

          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-3xl object-cover"
            />
          </div>

          <div>

            <h1 className="mt-4 text-5xl font-bold">
              {product.name}
            </h1>

            <p className="mt-6 text-4xl font-bold text-[#4e4fa8]">
              ${product.price.toLocaleString("es-AR")}
            </p>

            <div className="mt-8">
              <h2 className="font-bold text-xl">
                Descripción
              </h2>
            <p className="mt-3 whitespace-pre-line text-black/70 leading-8">
              {product.description}
            </p>
            </div>

            <a
              href={`https://www.instagram.com/imported.dreams_/?text=${message}`}
              target="_blank"
              className="inline-block mt-10 bg-[#4e4fa8] text-white px-8 py-4 rounded-full font-semibold"
            >
              Comprar por Instagram
            </a>

          </div>

        </div>

      </div>

    </main>
  );
}