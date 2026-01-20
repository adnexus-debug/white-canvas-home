import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  stock: number;
}

const ProductCard = ({ id, name, price, image, category, stock }: ProductCardProps) => {
  const isOutOfStock = stock === 0;

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow animate-fade-in">
      <div className="aspect-square relative bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        {isOutOfStock && (
          <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
            <span className="text-destructive font-semibold">Out of Stock</span>
          </div>
        )}
        {stock > 0 && stock <= 5 && (
          <span className="absolute top-2 right-2 bg-warning text-warning-foreground text-xs px-2 py-1 rounded">
            Only {stock} left
          </span>
        )}
      </div>
      
      <CardContent className="p-4">
        <span className="text-xs text-muted-foreground uppercase tracking-wide">
          {category}
        </span>
        <h3 className="font-semibold mt-1 line-clamp-2">{name}</h3>
        <p className="text-lg font-bold text-primary mt-2">
          ₹{price.toLocaleString("en-IN")}
        </p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          disabled={isOutOfStock}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
