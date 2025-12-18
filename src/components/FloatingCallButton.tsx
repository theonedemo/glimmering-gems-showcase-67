import { Phone } from "lucide-react";
import { shopInfo } from "@/data/jewellery";

const FloatingCallButton = () => {
  return (
    <a
      href={`tel:${shopInfo.phone}`}
      className="fixed bottom-6 right-6 z-50 md:hidden gradient-gold p-4 rounded-full shadow-gold animate-pulse hover:animate-none transition-all duration-300 hover:scale-110"
      aria-label="Call Now"
    >
      <Phone className="w-6 h-6 text-primary-foreground" />
    </a>
  );
};

export default FloatingCallButton;
