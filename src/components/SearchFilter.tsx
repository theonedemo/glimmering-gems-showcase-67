import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  materialFilter: string;
  onMaterialChange: (value: string) => void;
}

const SearchFilter = ({ 
  searchTerm, 
  onSearchChange, 
  materialFilter, 
  onMaterialChange 
}: SearchFilterProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
      {/* Search */}
      <div className="relative w-full sm:w-80">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search by name or ID..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-card border-border focus:border-gold"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2">
        <Button
          variant={materialFilter === "all" ? "gold" : "outline"}
          size="sm"
          onClick={() => onMaterialChange("all")}
        >
          All
        </Button>
        <Button
          variant={materialFilter === "Gold" ? "gold" : "outline"}
          size="sm"
          onClick={() => onMaterialChange("Gold")}
        >
          Gold
        </Button>
        <Button
          variant={materialFilter === "Silver" ? "silver" : "outline"}
          size="sm"
          onClick={() => onMaterialChange("Silver")}
        >
          Silver
        </Button>
      </div>
    </div>
  );
};

export default SearchFilter;
