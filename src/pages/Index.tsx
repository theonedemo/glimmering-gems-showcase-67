import { Link } from "react-router-dom";
import { Phone, ArrowRight, Sparkles, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import JewelleryCard from "@/components/JewelleryCard";
import { jewelleryData, categories, shopInfo } from "@/data/jewellery";

const Index = () => {
  const featuredItems = jewelleryData.slice(0, 4);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full gold-border animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm text-muted-foreground">Handcrafted Excellence</span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight animate-fade-in-up animation-delay-100">
              <span className="text-foreground">Pure Gold & Silver</span>
              <br />
              <span className="text-gradient-gold">Jewellery Crafted</span>
              <br />
              <span className="text-foreground">with Elegance</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Discover our exquisite collection of traditional and contemporary jewellery, 
              each piece meticulously crafted to perfection.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
              <Link to="/collection">
                <Button variant="gold" size="xl">
                  Explore Collection
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a href={`tel:${shopInfo.phone}`}>
                <Button variant="luxury" size="xl">
                  <Phone className="w-5 h-5" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-gold/50 flex items-start justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-gold animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Sparkles, title: "Pure Materials", desc: "Certified 22K gold & 925 sterling silver" },
              { icon: Shield, title: "Quality Assured", desc: "BIS hallmarked with authenticity guarantee" },
              { icon: Truck, title: "Safe Delivery", desc: "Insured shipping across India" },
            ].map((feature, index) => (
              <div 
                key={feature.title}
                className="flex items-start gap-4 p-6 rounded-xl gold-border animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 rounded-lg gradient-gold">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Browse by Category
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Explore our curated collections of gold, silver, and personalized jewellery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link
                key={category.id}
                to={category.id === "personalized" ? "/customize" : `/collection?material=${category.id === "gold" ? "Gold" : "Silver"}`}
                className="group relative aspect-[4/5] rounded-2xl overflow-hidden gold-border gold-border-hover hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl text-foreground mb-2">{category.name}</h3>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                  <span className="inline-flex items-center gap-2 mt-4 text-gold text-sm font-medium group-hover:gap-3 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Featured Collection
              </h2>
              <p className="text-muted-foreground max-w-xl">
                Handpicked pieces from our finest craftsmen
              </p>
            </div>
            <Link to="/collection">
              <Button variant="outline" className="mt-4 md:mt-0">
                View All
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item, index) => (
              <JewelleryCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-gold opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Have a Custom Design in Mind?
            </h2>
            <p className="text-muted-foreground text-lg">
              Our master craftsmen can bring your vision to life. Share your ideas and 
              we'll create a unique piece just for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/customize">
                <Button variant="gold" size="lg">
                  <Sparkles className="w-4 h-4" />
                  Customize Now
                </Button>
              </Link>
              <a href={`tel:${shopInfo.phone}`}>
                <Button variant="luxury" size="lg">
                  <Phone className="w-4 h-4" />
                  Speak to Expert
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
