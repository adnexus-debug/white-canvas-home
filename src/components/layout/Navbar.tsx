import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, User, Menu, X, Package } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

// Mock auth state - will be replaced with Supabase auth
const mockUser = null; // Set to { role: 'admin' | 'customer' } to test
const cartItemCount = 0;

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinkClass = (path: string) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive(path)
        ? "bg-primary text-primary-foreground"
        : "text-foreground hover:bg-accent hover:text-accent-foreground"
    }`;

  return (
    <nav className="bg-card border-b border-border shadow-sm sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Package className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">AURANEST</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <Link to="/" className={navLinkClass("/")}>
              Home
            </Link>
            <Link to="/products" className={navLinkClass("/products")}>
              Products
            </Link>
            <Link to="/categories" className={navLinkClass("/categories")}>
              Categories
            </Link>
            {mockUser && (
              <Link to="/orders" className={navLinkClass("/orders")}>
                My Orders
              </Link>
            )}
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-3">
            {mockUser ? (
              <>
                <Link to="/cart" className="relative">
                  <Button variant="ghost" size="icon">
                    <ShoppingCart className="h-5 w-5" />
                    {cartItemCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {cartItemCount}
                      </span>
                    )}
                  </Button>
                </Link>
                <Link to="/profile">
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link to="/register">
                  <Button>Register</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              to="/"
              className={`block ${navLinkClass("/")}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/products"
              className={`block ${navLinkClass("/products")}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/categories"
              className={`block ${navLinkClass("/categories")}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Categories
            </Link>
            <div className="pt-2 border-t border-border flex gap-2">
              <Link to="/login" className="flex-1">
                <Button variant="ghost" className="w-full">
                  Login
                </Button>
              </Link>
              <Link to="/register" className="flex-1">
                <Button className="w-full">Register</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
