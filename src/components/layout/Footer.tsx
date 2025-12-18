import { Link } from "react-router-dom";
import { Sparkles, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { shopInfo } from "@/data/jewellery";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-gold" />
              <span className="font-display text-2xl font-semibold text-foreground">
                {shopInfo.name}
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting timeless elegance since generations. Each piece tells a story of tradition, 
              artistry, and pure luxury.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-lg text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                Home
              </Link>
              <Link to="/collection" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                Our Collection
              </Link>
              <Link to="/customize" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                Custom Orders
              </Link>
              <Link to="/contact" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-display text-lg text-foreground">Categories</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/collection?material=Gold" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                Gold Jewellery
              </Link>
              <Link to="/collection?material=Silver" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                Silver Jewellery
              </Link>
              <Link to="/customize" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                Personalized Pieces
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-lg text-foreground">Contact Us</h4>
            <div className="space-y-3">
              <a 
                href={`tel:${shopInfo.phone}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors text-sm"
              >
                <Phone className="w-4 h-4 text-gold" />
                {shopInfo.phone}
              </a>
              <a 
                href={`https://wa.me/${shopInfo.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4 text-gold" />
                WhatsApp
              </a>
              <a 
                href={`mailto:${shopInfo.email}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-gold transition-colors text-sm"
              >
                <Mail className="w-4 h-4 text-gold" />
                {shopInfo.email}
              </a>
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>{shopInfo.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} {shopInfo.name}. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Crafted with <span className="text-gold">♥</span> for jewellery lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
