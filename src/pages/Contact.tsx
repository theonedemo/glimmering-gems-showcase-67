import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { shopInfo } from "@/data/jewellery";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      value: shopInfo.phone,
      action: `tel:${shopInfo.phone}`,
      buttonText: "Call Now",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Chat with us",
      action: `https://wa.me/${shopInfo.whatsapp.replace('+', '')}`,
      buttonText: "Open WhatsApp",
      external: true,
    },
    {
      icon: Mail,
      title: "Email",
      value: shopInfo.email,
      action: `mailto:${shopInfo.email}`,
      buttonText: "Send Email",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4 animate-fade-in-up">
              Contact Us
            </h1>
            <p className="text-muted-foreground text-lg animate-fade-in-up animation-delay-100">
              We'd love to hear from you. Reach out for inquiries, custom orders, or just to say hello.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <div
                key={method.title}
                className="p-8 rounded-2xl bg-card gold-border text-center space-y-4 animate-fade-in-up hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto rounded-full gradient-gold flex items-center justify-center">
                  <method.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl text-foreground">{method.title}</h3>
                <p className="text-muted-foreground">{method.value}</p>
                <a
                  href={method.action}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noopener noreferrer" : undefined}
                >
                  <Button variant="luxury" className="w-full">
                    {method.buttonText}
                  </Button>
                </a>
              </div>
            ))}
          </div>

          {/* Shop Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Details */}
            <div className="space-y-8 animate-fade-in-up animation-delay-200">
              <div>
                <h2 className="font-display text-3xl text-foreground mb-6">
                  Visit Our Store
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-muted">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-display text-foreground mb-1">Address</h4>
                      <p className="text-muted-foreground">{shopInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-muted">
                      <Clock className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-display text-foreground mb-1">Working Hours</h4>
                      <p className="text-muted-foreground">Monday - Saturday: 10:00 AM - 8:00 PM</p>
                      <p className="text-muted-foreground">Sunday: 11:00 AM - 6:00 PM</p>
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-card gold-border">
                    <h4 className="font-display text-foreground mb-2">Owner</h4>
                    <p className="text-gold text-lg">{shopInfo.owner}</p>
                    <p className="text-muted-foreground text-sm mt-2">
                      With over 25 years of experience in jewellery craftsmanship
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="animate-fade-in-up animation-delay-300">
              <div className="aspect-square lg:aspect-auto lg:h-full rounded-2xl overflow-hidden gold-border">
                <iframe
                  src={shopInfo.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Store Location"
                  className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
