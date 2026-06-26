const items = [
  "Productos importados",
  "Atención personalizada",
  "Consulta por Instagram",
  "Stock seleccionado",
];

export default function TrustBanner() {
  return (
    <section className="border-y border-black/10 bg-white py-6 md:py-0">
      <div className="mx-auto grid max-w-7xl gap-5 px-6 py-4 md:grid-cols-4 md:py-6">
        {items.map((item) => (
          <div
            key={item}
            className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#4e4fa8]"
          >
            ✓ {item}
          </div>
        ))}
      </div>
    </section>
  );
}