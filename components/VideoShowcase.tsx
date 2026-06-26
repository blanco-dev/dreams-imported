"use client";

import { useState } from "react";

const videos = [
  "/video/perfume-1.mp4",
  "/video/perfume-2.mp4",
  "/video/perfume-3.mp4",
];

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState(0);

  const nextVideo = () => {
    setActiveVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setActiveVideo((prev) =>
      prev === 0 ? videos.length - 1 : prev - 1
    );
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4e4fa8]">
        Experiencia Dreams
      </p>

      <h2 className="mt-2 text-4xl font-bold text-black">
        Descubrí nuestras fragancias
      </h2>

      <div className="mt-10 flex justify-center">
  <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-black shadow-xl">

    <video
      key={videos[activeVideo]}
      src={videos[activeVideo]}
      autoPlay
      muted
      loop
      playsInline
      controls
      className="h-[560px] w-full object-contain bg-black"
    />

    <button
      onClick={prevVideo}
      className="absolute left-5 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white/90 px-4 py-3 text-2xl font-bold text-black shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#4e4fa8] hover:text-white"
    >
      ‹
    </button>

    <button
      onClick={nextVideo}
className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white/90 px-4 py-3 text-2xl font-bold text-black shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#4e4fa8] hover:text-white"    >
      ›
    </button>

  </div>
</div>
    </section>
  );
}