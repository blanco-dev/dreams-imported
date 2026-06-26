const brands = [
  "LATTAFA",
  "ARMAF",
  "AL HARAMAIN",
  "VICTORIA'S SECRET",
  "VERSACE",
  "BHARARA",
];

export default function Brands() {
  return (
    <section className="bg-[#f7f3eb] px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-[#4e4fa8]">
          Marcas destacadas
        </p>

        <div className="mt-8 grid grid-cols-3 gap-3 md:grid-cols-3">
          {brands.map((brand) => (
            <div
              key={brand}
              className="rounded-2xl bg-white px-6 py-6 text-center text-lg font-bold tracking-[0.15em] text-[#111] shadow-sm"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}