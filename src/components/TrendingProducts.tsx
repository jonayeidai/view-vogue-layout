import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const products = [
  { id: 1, name: "Classic Rectangle", price: "₹1,299", originalPrice: "₹2,499", image: product1, tag: "Bestseller" },
  { id: 2, name: "Round Tortoise", price: "₹1,499", originalPrice: "₹2,999", image: product2, tag: "New" },
  { id: 3, name: "Aviator Gold", price: "₹1,799", originalPrice: "₹3,499", image: product3, tag: "Trending" },
  { id: 4, name: "Cat Eye Noir", price: "₹1,199", originalPrice: "₹2,299", image: product4, tag: null },
  { id: 5, name: "Wayfarer Classic", price: "₹999", originalPrice: "₹1,999", image: product5, tag: "Sale" },
  { id: 6, name: "Clubmaster Retro", price: "₹1,599", originalPrice: "₹2,799", image: product6, tag: null },
];

interface TrendingProductsProps {
  title: string;
  showAll?: boolean;
}

const TrendingProducts = ({ title, showAll = true }: TrendingProductsProps) => {
  const displayProducts = showAll ? products : products.slice(0, 4);

  return (
    <section className="py-10 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">{title}</h2>
          {showAll && (
            <a href="#" className="text-sm font-medium text-primary hover:underline">
              View All →
            </a>
          )}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {displayProducts.map((product) => (
            <a
              key={product.id}
              href="#"
              className="group rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-square bg-secondary/50 p-3">
                {product.tag && (
                  <span className="absolute top-2 left-2 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-semibold text-primary-foreground">
                    {product.tag}
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-medium text-card-foreground truncate">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm font-bold text-foreground">{product.price}</span>
                  <span className="text-xs text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
