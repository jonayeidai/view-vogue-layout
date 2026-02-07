import { Circle, Square, Diamond, Hexagon, Octagon, Pentagon } from "lucide-react";

interface ShapeFilterProps {
  title: string;
}

const shapes = [
  { name: "Rectangle", icon: Square },
  { name: "Round", icon: Circle },
  { name: "Cat-Eye", icon: Diamond },
  { name: "Aviator", icon: Hexagon },
  { name: "Geometric", icon: Octagon },
  { name: "Clubmaster", icon: Pentagon },
];

const ShapeFilter = ({ title }: ShapeFilterProps) => {
  return (
    <section className="py-8 bg-background">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
          {title}
        </h2>
        <div className="flex gap-4 sm:gap-8 overflow-x-auto pb-2 scrollbar-hide">
          {shapes.map((shape) => (
            <a
              key={shape.name}
              href="#"
              className="flex flex-col items-center gap-2 min-w-[72px] group"
            >
              <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full border-2 border-border flex items-center justify-center group-hover:border-primary group-hover:bg-secondary transition-all">
                <shape.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground whitespace-nowrap">
                {shape.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShapeFilter;
