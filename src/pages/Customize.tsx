import { useState, useRef, FormEvent } from "react";
import { Upload, X, Sparkles, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const Customize = () => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    description: "",
    minWeight: "",
    maxWeight: "",
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        toast({
          title: "Invalid file type",
          description: "Please upload an image file.",
          variant: "destructive",
        });
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({ title: "Name is required", variant: "destructive" });
      return false;
    }
    if (!formData.mobile.trim() || !/^\d{10}$/.test(formData.mobile)) {
      toast({ title: "Valid 10-digit mobile number is required", variant: "destructive" });
      return false;
    }
    if (!formData.description.trim()) {
      toast({ title: "Description is required", variant: "destructive" });
      return false;
    }
    if (!formData.minWeight || !formData.maxWeight) {
      toast({ title: "Weight range is required", variant: "destructive" });
      return false;
    }
    if (Number(formData.minWeight) > Number(formData.maxWeight)) {
      toast({ title: "Minimum weight cannot exceed maximum weight", variant: "destructive" });
      return false;
    }
    return true;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Request Submitted!",
        description: "Thank you! Our team will contact you shortly.",
      });
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      mobile: "",
      description: "",
      minWeight: "",
      maxWeight: "",
    });
    setImagePreview(null);
    setIsSubmitted(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-card/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-72 h-72 bg-gold/20 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full gold-border mb-6 animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-sm text-muted-foreground">Personalized Orders</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4 animate-fade-in-up animation-delay-100">
              Customize Your Jewellery
            </h1>
            <p className="text-muted-foreground text-lg animate-fade-in-up animation-delay-200">
              Share your vision with us, and our master craftsmen will create a unique piece just for you
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {isSubmitted ? (
              <div className="text-center py-16 space-y-6 animate-scale-in">
                <div className="w-20 h-20 mx-auto rounded-full gradient-gold flex items-center justify-center">
                  <Check className="w-10 h-10 text-primary-foreground" />
                </div>
                <h2 className="font-display text-3xl text-foreground">Thank You!</h2>
                <p className="text-muted-foreground text-lg">
                  Our team will contact you shortly to discuss your custom jewellery design.
                </p>
                <Button variant="gold" onClick={resetForm}>
                  Submit Another Request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 animate-fade-in-up">
                <div className="p-8 rounded-2xl bg-card gold-border space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="bg-muted border-border focus:border-gold"
                    />
                  </div>

                  {/* Mobile */}
                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile Number *</Label>
                    <Input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      className="bg-muted border-border focus:border-gold"
                    />
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Jewellery Description *</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Describe your dream jewellery piece - design, style, stones, etc."
                      rows={4}
                      className="bg-muted border-border focus:border-gold resize-none"
                    />
                  </div>

                  {/* Weight Range */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="minWeight">Min Weight (grams) *</Label>
                      <Input
                        id="minWeight"
                        name="minWeight"
                        type="number"
                        min="1"
                        value={formData.minWeight}
                        onChange={handleInputChange}
                        placeholder="e.g., 10"
                        className="bg-muted border-border focus:border-gold"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="maxWeight">Max Weight (grams) *</Label>
                      <Input
                        id="maxWeight"
                        name="maxWeight"
                        type="number"
                        min="1"
                        value={formData.maxWeight}
                        onChange={handleInputChange}
                        placeholder="e.g., 20"
                        className="bg-muted border-border focus:border-gold"
                      />
                    </div>
                  </div>

                  {/* Image Upload */}
                  <div className="space-y-2">
                    <Label>Reference Image (Optional)</Label>
                    <div className="relative">
                      {imagePreview ? (
                        <div className="relative aspect-video rounded-xl overflow-hidden gold-border">
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-full h-full object-contain bg-muted"
                          />
                          <button
                            type="button"
                            onClick={removeImage}
                            className="absolute top-2 right-2 p-2 rounded-full bg-background/80 text-foreground hover:bg-destructive hover:text-destructive-foreground transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <label className="flex flex-col items-center justify-center gap-4 p-8 rounded-xl border-2 border-dashed border-border hover:border-gold cursor-pointer transition-colors">
                          <div className="p-4 rounded-full bg-muted">
                            <Upload className="w-6 h-6 text-muted-foreground" />
                          </div>
                          <div className="text-center">
                            <p className="text-foreground font-medium">Click to upload</p>
                            <p className="text-muted-foreground text-sm mt-1">
                              PNG, JPG up to 5MB
                            </p>
                          </div>
                          <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                          />
                        </label>
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="gold"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      Submit Custom Order Request
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Customize;
