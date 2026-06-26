import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function InstagramButton() {
  return (
    <Link
      href="https://www.instagram.com/imported.dreams_"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="fixed bottom-6 left-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 text-white shadow-xl transition-all duration-300 hover:scale-110"
    >
      <FaInstagram size={34} />

      <span className="absolute inset-0 animate-ping rounded-full bg-pink-500 opacity-30"></span>
    </Link>
  );
}