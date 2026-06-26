import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WppButton() {
  return (
    <Link
      href="https://wa.me/5492236002711"
      target="_blank"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 md:h-16 md:w-16"    >
      <FaWhatsapp size={30} color="white" />
    </Link>
  );
}