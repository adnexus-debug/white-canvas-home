import { Package } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Package className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">AURANEST</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your trusted online shopping destination. Quality products at affordable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/products" className="hover:text-primary">Products</a></li>
              <li><a href="/categories" className="hover:text-primary">Categories</a></li>
              <li><a href="/about" className="hover:text-primary">About Us</a></li>
              <li><a href="/contact" className="hover:text-primary">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: support@auranest.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: BCA Department, University</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AURANEST. BCA SDP Project.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
