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
        <p className="text-center text-base font-bold tracking-[0.25em] sm:text-lg md:text-xl">
          Marcas destacadas
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex min-h-[110px] items-center justify-center rounded-2xl bg-white px-4 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <p className="text-center text-lg font-bold tracking-[0.12em] uppercase">
                {brand}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}