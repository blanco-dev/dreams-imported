import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WppButton() {
  return (
    <Link
      href="https://wa.me/5492236002711"
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 animate-bounce items-center justify-center rounded-full bg-[#25D366] shadow-xl"    >
      <FaWhatsapp size={36} color="white" />
    </Link>
  );
}