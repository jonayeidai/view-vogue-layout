const brands = [
  "Ray-Ban", "Oakley", "Prada", "Gucci", "Tom Ford", "Versace"
];

const BrandsSection = () => {
  return (
    <section className="py-10 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-8 text-center">
          Our Brands
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {brands.map((brand) => (
            <a
              key={brand}
              href="#"
              className="group flex items-center justify-center rounded-xl border border-border bg-card p-6 sm:p-8 hover:shadow-md hover:border-primary/30 transition-all"
            >
              <span className="text-lg font-bold text-muted-foreground group-hover:text-primary transition-colors">
                {brand}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
