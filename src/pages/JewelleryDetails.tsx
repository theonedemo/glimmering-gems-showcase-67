import { useParams, Link } from "react-router-dom";
import { Phone, Scale, ArrowLeft, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { jewelleryData, shopInfo } from "@/data/jewellery";

const JewelleryDetails = () => {
  const { id } = useParams();
  const item = jewelleryData.find((j) => j.id === id);

  if (!item) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-3xl text-foreground mb-4">Item Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The jewellery item you're looking for doesn't exist.
          </p>
          <Link to="/collection">
            <Button variant="gold">
              <ArrowLeft className="w-4 h-4" />
              Back to Collection
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const relatedItems = jewelleryData
    .filter((j) => j.material === item.material && j.id !== item.id)
    .slice(0, 3);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <Link 
          to="/collection" 
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Collection
        </Link>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden gold-border animate-fade-in-up">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
            <span className={`absolute top-6 left-6 px-4 py-2 rounded-full text-sm font-semibold ${
              item.material === "Gold" 
                ? "gradient-gold text-primary-foreground" 
                : "gradient-silver text-primary-foreground"
            }`}>
              {item.material}
            </span>
          </div>

          {/* Info */}
          <div className="space-y-8 animate-fade-in-up animation-delay-100">
            {/* ID Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full gold-border">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="font-mono text-sm text-muted-foreground">{item.id}</span>
            </div>

            {/* Title */}
            <div>
              <h1 className="font-display text-3xl md:text-4xl text-foreground mb-2">
                {item.name}
              </h1>
              <p className="text-muted-foreground">{item.category}</p>
            </div>

            {/* Description */}
            <p className="text-foreground/80 text-lg leading-relaxed">
              {item.description}
            </p>

            {/* Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-card gold-border">
                <p className="text-muted-foreground text-sm mb-1">Material</p>
                <p className="font-display text-lg text-foreground">{item.material}</p>
              </div>
              <div className="p-4 rounded-xl bg-card gold-border">
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-gold" />
                  <p className="text-muted-foreground text-sm">Approx. Weight</p>
                </div>
                <p className="font-display text-lg text-foreground mt-1">{item.weight}</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${shopInfo.phone}`} className="flex-1">
                <Button variant="gold" size="lg" className="w-full">
                  <Phone className="w-4 h-4" />
                  Call to Buy
                </Button>
              </a>
              <a 
                href={`https://wa.me/${shopInfo.whatsapp.replace('+', '')}?text=Hi! I'm interested in ${item.name} (${item.id})`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="luxury" size="lg" className="w-full">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </Button>
              </a>
            </div>

            {/* Note */}
            <p className="text-muted-foreground text-sm">
              * Final price depends on current gold/silver rates and making charges. 
              Contact us for accurate pricing.
            </p>
          </div>
        </div>

        {/* Related Items */}
        {relatedItems.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-2xl text-foreground mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedItems.map((relatedItem) => (
                <Link
                  key={relatedItem.id}
                  to={`/jewellery/${relatedItem.id}`}
                  className="group flex gap-4 p-4 rounded-xl bg-card gold-border gold-border-hover hover-lift"
                >
                  <img
                    src={relatedItem.image}
                    alt={relatedItem.name}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-display text-foreground group-hover:text-gold transition-colors">
                      {relatedItem.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">{relatedItem.weight}</p>
                    <p className="text-gold text-sm mt-2">{relatedItem.id}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fixed CTA on Mobile */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-card/95 backdrop-blur-lg border-t border-border md:hidden z-40">
        <a href={`tel:${shopInfo.phone}`}>
          <Button variant="gold" size="lg" className="w-full">
            <Phone className="w-4 h-4" />
            Call Owner to Buy
          </Button>
        </a>
      </div>
    </Layout>
  );
};

export default JewelleryDetails;
