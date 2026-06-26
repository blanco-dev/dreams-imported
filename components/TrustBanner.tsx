const items = [
  "Productos importados",
  "Atención personalizada",
  "Consulta por Instagram",
  "Stock seleccionado",
];

export default function TrustBanner() {
  return (
    <section className="border-y border-black/10 bg-white">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 py-6 md:grid-cols-4">
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