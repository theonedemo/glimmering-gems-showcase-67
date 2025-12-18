import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import JewelleryCard from "@/components/JewelleryCard";
import SearchFilter from "@/components/SearchFilter";
import { jewelleryData } from "@/data/jewellery";

const Collection = () => {
  const [searchParams] = useSearchParams();
  const initialMaterial = searchParams.get("material") || "all";
  
  const [searchTerm, setSearchTerm] = useState("");
  const [materialFilter, setMaterialFilter] = useState(initialMaterial);

  const filteredItems = useMemo(() => {
    return jewelleryData.filter((item) => {
      const matchesSearch = 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.id.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesMaterial = 
        materialFilter === "all" || item.material === materialFilter;

      return matchesSearch && matchesMaterial;
    });
  }, [searchTerm, materialFilter]);

  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4 animate-fade-in-up">
              Our Collection
            </h1>
            <p className="text-muted-foreground text-lg animate-fade-in-up animation-delay-100">
              Explore our exquisite range of handcrafted gold and silver jewellery
            </p>
          </div>

          {/* Search & Filter */}
          <div className="animate-fade-in-up animation-delay-200">
            <SearchFilter
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              materialFilter={materialFilter}
              onMaterialChange={setMaterialFilter}
            />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredItems.length > 0 ? (
            <>
              <p className="text-muted-foreground mb-8">
                Showing {filteredItems.length} {filteredItems.length === 1 ? "item" : "items"}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((item, index) => (
                  <JewelleryCard key={item.id} item={item} index={index} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No items found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setMaterialFilter("all");
                }}
                className="text-gold hover:underline mt-4"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Collection;
