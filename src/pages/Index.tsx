import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, Truck, Shield, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";
import CategoryCard from "@/components/categories/CategoryCard";

// Mock data - will be replaced with Supabase queries
const featuredProducts = [
  { id: 1, name: "Wireless Bluetooth Headphones", price: 2499, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400", category: "Electronics", stock: 15 },
  { id: 2, name: "Casual Cotton T-Shirt", price: 599, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400", category: "Clothing", stock: 50 },
  { id: 3, name: "Stainless Steel Water Bottle", price: 449, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400", category: "Home & Kitchen", stock: 3 },
  { id: 4, name: "Leather Wallet", price: 899, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400", category: "Accessories", stock: 0 },
];

const categories = [
  { id: 1, name: "Electronics", description: "Gadgets and devices", productCount: 45 },
  { id: 2, name: "Clothing", description: "Fashion and apparel", productCount: 120 },
  { id: 3, name: "Home & Kitchen", description: "Home essentials", productCount: 80 },
  { id: 4, name: "Accessories", description: "Bags, wallets & more", productCount: 35 },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/20 py-16 md:py-24">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to <span className="text-primary">AURANEST</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover quality products at affordable prices. Your one-stop destination for all your shopping needs.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/products">
              <Button size="lg">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Shop Now
              </Button>
            </Link>
            <Link to="/categories">
              <Button variant="outline" size="lg">
                Browse Categories
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Truck className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Free Delivery</h3>
              <p className="text-xs text-muted-foreground">On orders above ₹500</p>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Secure Shopping</h3>
              <p className="text-xs text-muted-foreground">100% secure payments</p>
            </div>
            <div className="text-center">
              <CreditCard className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Easy Payments</h3>
              <p className="text-xs text-muted-foreground">Multiple payment options</p>
            </div>
            <div className="text-center">
              <ShoppingBag className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold text-sm">Quality Products</h3>
              <p className="text-xs text-muted-foreground">Curated selection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Shop by Category</h2>
            <Link to="/categories" className="text-primary hover:underline flex items-center gap-1 text-sm">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <Link to="/products" className="text-primary hover:underline flex items-center gap-1 text-sm">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
