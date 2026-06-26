import Link from "next/link";

const categories = [
  {
    title: "Fragancias",
    href: "/categoria/fragancias",
    image: "/products/versace-fraiche.jpg",
  },
  {
    title: "Belleza",
    href: "/categoria/belleza",
    image: "/products/body-splash.jpg",
  },
];

export default function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-10 text-center text-4xl font-bold">
        Explorá por categorías
      </h2>

      <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
        {categories.map((category) => (
          <Link
            key={category.title}
            href={category.href}
            className="group relative h-96 overflow-hidden rounded-3xl bg-black shadow-lg"
          >
            <img
              src={category.image}
              alt={category.title}
              className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/35" />

            <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
              <h3 className="text-2xl font-bold text-white">
                {category.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}