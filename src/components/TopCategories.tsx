import { Glasses, Sun, Eye, Baby, Sparkles, Tag } from "lucide-react";

const categories = [
  { name: "Eyeglasses", icon: Glasses },
  { name: "Sunglasses", icon: Sun },
  { name: "Contact Lenses", icon: Eye },
  { name: "Kids Glasses", icon: Baby },
  { name: "Power Sunglasses", icon: Sparkles },
  { name: "Sale", icon: Tag },
];

const TopCategories = () => {
  return (
    <section className="py-10 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-8 text-center">
          Top Categories
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#"
              className="group flex flex-col items-center gap-3"
            >
              <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-sm">
                <cat.icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-foreground">
                {cat.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
