import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProductCard from "@/components/products/ProductCard";

// Mock data - will be replaced with Supabase queries
const allProducts = [
  { id: 1, name: "Wireless Bluetooth Headphones", price: 2499, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400", category: "Electronics", stock: 15 },
  { id: 2, name: "Casual Cotton T-Shirt", price: 599, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400", category: "Clothing", stock: 50 },
  { id: 3, name: "Stainless Steel Water Bottle", price: 449, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400", category: "Home & Kitchen", stock: 3 },
  { id: 4, name: "Leather Wallet", price: 899, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400", category: "Accessories", stock: 0 },
  { id: 5, name: "Smart Watch", price: 4999, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400", category: "Electronics", stock: 8 },
  { id: 6, name: "Denim Jeans", price: 1299, image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400", category: "Clothing", stock: 25 },
  { id: 7, name: "Coffee Mug Set", price: 799, image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400", category: "Home & Kitchen", stock: 12 },
  { id: 8, name: "Sunglasses", price: 1499, image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400", category: "Accessories", stock: 20 },
];

const categories = ["All", "Electronics", "Clothing", "Home & Kitchen", "Accessories"];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  // Filter and sort products
  const filteredProducts = allProducts
    .filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>{cat}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full md:w-48">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name (A-Z)</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground mb-4">
        Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
      </p>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-muted-foreground">
          <p>No products found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Products;
