import CategoryCard from "@/components/categories/CategoryCard";

// Mock data - will be replaced with Supabase queries
const categories = [
  { id: 1, name: "Electronics", description: "Smartphones, laptops, headphones, and more", productCount: 45 },
  { id: 2, name: "Clothing", description: "T-shirts, jeans, dresses, and fashion wear", productCount: 120 },
  { id: 3, name: "Home & Kitchen", description: "Appliances, cookware, and home essentials", productCount: 80 },
  { id: 4, name: "Accessories", description: "Bags, wallets, watches, and jewelry", productCount: 35 },
  { id: 5, name: "Books", description: "Fiction, non-fiction, and academic books", productCount: 200 },
  { id: 6, name: "Sports & Fitness", description: "Equipment, sportswear, and fitness gear", productCount: 60 },
];

const Categories = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-2">Categories</h1>
      <p className="text-muted-foreground mb-8">
        Browse products by category to find what you're looking for
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
