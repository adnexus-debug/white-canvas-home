import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface CategoryCardProps {
  id: number;
  name: string;
  description: string;
  productCount: number;
}

const CategoryCard = ({ id, name, description, productCount }: CategoryCardProps) => {
  return (
    <Link to={`/products?category=${id}`}>
      <Card className="hover:shadow-md hover:border-primary/50 transition-all cursor-pointer group">
        <CardContent className="p-6 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
            <span className="text-xs text-muted-foreground mt-2 block">
              {productCount} products
            </span>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
