export interface JewelleryItem {
  id: string;
  name: string;
  material: "Gold" | "Silver";
  weight: string;
  image: string;
  description: string;
  price?: string;
  category: string;
}

export const jewelleryData: JewelleryItem[] = [
  {
    id: "GOLD-101",
    name: "Royal Gold Necklace",
    material: "Gold",
    weight: "25g",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600",
    description: "Traditional handcrafted gold necklace with intricate floral patterns, perfect for weddings and special occasions.",
    category: "Necklaces"
  },
  {
    id: "GOLD-102",
    name: "Elegant Gold Bangles Set",
    material: "Gold",
    weight: "40g",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600",
    description: "Set of 4 delicate gold bangles with traditional designs, symbolizing grace and elegance.",
    category: "Bangles"
  },
  {
    id: "GOLD-103",
    name: "Temple Gold Earrings",
    material: "Gold",
    weight: "12g",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600",
    description: "Exquisite temple-style gold earrings featuring divine motifs and precious stonework.",
    category: "Earrings"
  },
  {
    id: "GOLD-104",
    name: "Heritage Gold Ring",
    material: "Gold",
    weight: "8g",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600",
    description: "Classic gold ring with traditional patterns, perfect for engagements and daily wear.",
    category: "Rings"
  },
  {
    id: "GOLD-105",
    name: "Bridal Gold Choker",
    material: "Gold",
    weight: "55g",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=600",
    description: "Stunning bridal choker with kundan work and pearl drops, a masterpiece for your wedding day.",
    category: "Necklaces"
  },
  {
    id: "SIL-201",
    name: "Silver Filigree Necklace",
    material: "Silver",
    weight: "30g",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600",
    description: "Delicate silver filigree necklace showcasing exceptional craftsmanship and timeless beauty.",
    category: "Necklaces"
  },
  {
    id: "SIL-202",
    name: "Oxidized Silver Bangles",
    material: "Silver",
    weight: "35g",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600",
    description: "Set of oxidized silver bangles with tribal patterns, perfect for bohemian style lovers.",
    category: "Bangles"
  },
  {
    id: "SIL-203",
    name: "Silver Moon Earrings",
    material: "Silver",
    weight: "10g",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600",
    description: "Contemporary silver earrings with crescent moon design, blending tradition with modern aesthetics.",
    category: "Earrings"
  },
  {
    id: "SIL-204",
    name: "Sterling Silver Ring",
    material: "Silver",
    weight: "6g",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600",
    description: "Elegant sterling silver ring with minimalist design, perfect for everyday sophistication.",
    category: "Rings"
  },
  {
    id: "SIL-205",
    name: "Silver Anklet Pair",
    material: "Silver",
    weight: "20g",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600",
    description: "Traditional silver anklets with tiny bells, creating melodious sounds with every step.",
    category: "Anklets"
  },
  {
    id: "GOLD-106",
    name: "Gold Maang Tikka",
    material: "Gold",
    weight: "15g",
    image: "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=600",
    description: "Beautiful gold maang tikka with kundan stones, perfect for traditional ceremonies.",
    category: "Head Jewelry"
  },
  {
    id: "SIL-206",
    name: "Silver Statement Cuff",
    material: "Silver",
    weight: "45g",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=600",
    description: "Bold silver cuff bracelet with geometric patterns, making a powerful style statement.",
    category: "Bracelets"
  }
];

export const categories = [
  {
    id: "gold",
    name: "Gold Jewellery",
    description: "Timeless elegance in pure gold",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600"
  },
  {
    id: "silver",
    name: "Silver Jewellery", 
    description: "Contemporary beauty in sterling silver",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600"
  },
  {
    id: "personalized",
    name: "Personalized Jewellery",
    description: "Custom designs crafted just for you",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600"
  }
];

export const shopInfo = {
  name: "Elegance Jewellers",
  tagline: "Pure Gold & Silver Jewellery Crafted with Elegance",
  owner: "Rajesh Kumar",
  phone: "+919876543210",
  whatsapp: "+919876543210",
  email: "info@elegancejewellers.com",
  address: "123 Jewellery Lane, Gold Market, Mumbai - 400001, Maharashtra, India",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.5030811046!2d72.8315!3d18.9442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU2JzM5LjEiTiA3MsKwNDknNTMuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
};
