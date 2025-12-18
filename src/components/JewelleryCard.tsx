import { Link } from "react-router-dom";
import { Phone, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JewelleryItem } from "@/data/jewellery";
import { shopInfo } from "@/data/jewellery";

interface JewelleryCardProps {
  item: JewelleryItem;
  index?: number;
}

const JewelleryCard = ({ item, index = 0 }: JewelleryCardProps) => {
  return (
    <div 
      className="group bg-card rounded-xl overflow-hidden gold-border gold-border-hover hover-lift animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image */}
      <Link to={`/jewellery/${item.id}`} className="block relative aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Material Badge */}
        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${
          item.material === "Gold" 
            ? "gradient-gold text-primary-foreground" 
            : "gradient-silver text-primary-foreground"
        }`}>
          {item.material}
        </span>
        
        {/* ID Badge */}
        <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-mono bg-background/80 text-foreground backdrop-blur-sm">
          {item.id}
        </span>
      </Link>

      {/* Content */}
      <div className="p-5 space-y-4">
        <div>
          <Link to={`/jewellery/${item.id}`}>
            <h3 className="font-display text-lg text-foreground hover:text-gold transition-colors">
              {item.name}
            </h3>
          </Link>
          <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Weight */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Scale className="w-4 h-4 text-gold" />
          <span>Approx. {item.weight}</span>
        </div>

        {/* CTA */}
        <a href={`tel:${shopInfo.phone}`} className="block">
          <Button variant="gold" className="w-full">
            <Phone className="w-4 h-4" />
            Call to Buy
          </Button>
        </a>
      </div>
    </div>
  );
};

export default JewelleryCard;
