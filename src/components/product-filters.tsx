import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { products } from "@/lib/data"

type Filters = {
  priceRange: [number, number];
  categories: string[];
  colors: string[];
};

type SetFilters = (filters: (prev: Filters) => Filters) => void;


const categories = Array.from(new Set(products.map(p => p.category)))
const colors = Array.from(new Set(products.map(p => p.color)))

export function ProductFilters({ filters, setFilters }: {
  filters: Filters;
  setFilters: SetFilters;
}) {
  const handlePriceChange = (value: number[]) => {
    setFilters((prev) => ({ ...prev, priceRange: value as [number, number] }));
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      categories: checked
        ? [...prev.categories, category]
        : prev.categories.filter(c => c !== category)
    }))
  }

  const handleColorChange = (color: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      colors: checked
        ? [...prev.colors, color]
        : prev.colors.filter(c => c !== color)
    }))
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
      </div>
      <div>
        <h3 className="text-md font-medium mb-2">Price Range</h3>
        <Slider
          min={0}
          max={1000}
          step={10}
          value={filters.priceRange}
          onValueChange={handlePriceChange}
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-gray-500">
          <span>${filters.priceRange[0]}</span>
          <span>${filters.priceRange[1]}</span>
        </div>
      </div>
      <div>
        <h3 className="text-md font-medium mb-2">Categories</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <div key={category} className="flex items-center">
              <Checkbox
                id={`category-${category}`}
                checked={filters.categories.includes(category)}
                onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
              />
              <Label htmlFor={`category-${category}`} className="ml-2">
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-md font-medium mb-2">Colors</h3>
        <div className="space-y-2">
          {colors.map(color => (
            <div key={color} className="flex items-center">
              <Checkbox
                id={`color-${color}`}
                checked={filters.colors.includes(color)}
                onCheckedChange={(checked) => handleColorChange(color, checked as boolean)}
              />
              <Label htmlFor={`color-${color}`} className="ml-2">
                {color}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

