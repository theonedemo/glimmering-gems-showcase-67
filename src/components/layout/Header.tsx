import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { shopInfo } from "@/data/jewellery";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/collection", label: "Collection" },
    { path: "/customize", label: "Customize" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-gold" />
            <span className="font-display text-2xl font-semibold text-foreground">
              {shopInfo.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-body text-sm tracking-wide transition-colors duration-300 ${
                  isActive(link.path)
                    ? "text-gold"
                    : "text-foreground/80 hover:text-gold"
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 gradient-gold rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Call Button */}
          <a href={`tel:${shopInfo.phone}`} className="hidden md:block">
            <Button variant="gold" size="default">
              <Phone className="w-4 h-4" />
              Call Now
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border/50 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-body text-lg py-2 transition-colors duration-300 ${
                    isActive(link.path)
                      ? "text-gold"
                      : "text-foreground/80 hover:text-gold"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a href={`tel:${shopInfo.phone}`} className="mt-4">
                <Button variant="gold" size="lg" className="w-full">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
