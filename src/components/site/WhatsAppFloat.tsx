import { MessageCircle } from "lucide-react";

export const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/551125030083"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="group fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.6)] transition-transform duration-300 hover:scale-110 md:bottom-8 md:right-8 md:h-16 md:w-16"
    >
      {/* pulse rings */}
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping"
        style={{ animationDuration: "2s" }}
      />
      <span
        aria-hidden
        className="absolute inset-0 rounded-full bg-[#25D366]/40"
      />

      {/* WhatsApp glyph */}
      <svg
        viewBox="0 0 32 32"
        className="relative h-7 w-7 md:h-8 md:w-8 fill-white"
        aria-hidden
      >
        <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.36 0 2.94-.53 2.94-1.806 0-.143 0-.28-.044-.42-.115-.515-1.706-.85-1.97-1.045-.115-.087-.247-.13-.402-.13zM16.43 25.013c-2.21 0-4.32-.733-6.067-2.122l-4.235 1.36 1.39-4.118c-1.547-1.85-2.396-4.18-2.396-6.59 0-6.087 4.91-11.027 10.97-11.027a10.83 10.83 0 0 1 7.748 3.222 10.91 10.91 0 0 1 3.21 7.79c0 6.087-4.954 11.485-10.62 11.485zM16.5.5C8.927.5 2.74 6.766 2.74 14.43c0 2.45.645 4.84 1.87 6.95L2.5 28.5l7.32-2.354a13.69 13.69 0 0 0 6.61 1.683h.007c7.572 0 13.74-6.266 13.74-13.93C30.18 6.74 24.07.5 16.5.5z" />
      </svg>
    </a>
  );
};
