import { products } from "@/data/products";

export default function FeaturedProducts() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#4e4fa8]">
            Selección Dreams
          </p>
          <h2 className="mt-2 text-4xl font-bold">
            Productos destacados
          </h2>
        </div>

        <a href="/catalogo" className="hidden font-semibold text-[#4e4fa8] md:block">
          Ver todo
        </a>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {products.map((product) => {
          const message = encodeURIComponent(
            `Hola, me interesa ${product.name} que vi en Dreams Imported.`
          );

          return (
            <article
              key={product.id}
              className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-80 w-full object-cover"
              />

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">
                  {product.category}
                </p>

                <h3 className="mt-2 min-h-[56px] text-lg font-bold leading-7 text-black">
                  {product.name}
                </h3>

                <p className="mt-4 text-2xl font-bold text-[#4e4fa8]">
                  ${product.price.toLocaleString("es-AR")}
                </p>

                <a
                  href={`https://www.instagram.com/imported.dreams_/?text=${message}`}
                  target="_blank"
                  className="mt-6 block rounded-full bg-[#4e4fa8] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#3b3c87]"
                >
                  Consultar por Instagram
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}