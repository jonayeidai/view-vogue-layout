import { Search, Heart, ShoppingBag, User, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  "Eyeglasses",
  "Sunglasses",
  "Contact Lenses",
  "Power Sunglasses",
  "Kids Glasses",
  "Accessories",
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-md">
      {/* Top bar */}
      <div className="bg-brand-navy-light px-4 py-1.5 text-center">
        <p className="text-xs font-medium text-primary-foreground tracking-wide">
          FREE Shipping on orders above ₹999 | Buy 1 Get 1 Free
        </p>
      </div>

      {/* Main nav */}
      <div className="mx-auto max-w-7xl px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold tracking-tight text-primary-foreground">
                👓 OptiVue
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Search */}
          <div className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search eyeglasses, sunglasses..."
                className="w-full rounded-full bg-primary-foreground/10 border border-primary-foreground/20 pl-10 pr-4 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:flex items-center gap-1 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <User className="h-5 w-5" />
              <span className="text-xs font-medium hidden xl:inline">Sign In</span>
            </button>
            <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors relative">
              <Heart className="h-5 w-5" />
            </button>
            <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-accent text-[10px] font-bold flex items-center justify-center text-accent-foreground">
                0
              </span>
            </button>
            <button
              className="lg:hidden text-primary-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-primary-foreground/10 px-4 py-4">
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-full bg-primary-foreground/10 border border-primary-foreground/20 pl-10 pr-4 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/50"
              />
            </div>
          </div>
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
