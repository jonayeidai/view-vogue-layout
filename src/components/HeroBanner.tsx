import heroBanner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <section className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden">
      <img
        src={heroBanner}
        alt="Premium eyewear collection"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent" />
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-7xl px-4 w-full">
          <div className="max-w-lg">
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-2">
              New Collection 2026
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-4">
              See the World in Style
            </h1>
            <p className="text-primary-foreground/80 text-sm sm:text-base mb-6">
              Premium eyewear crafted for comfort & elegance
            </p>
            <button className="rounded-full bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground hover:brightness-110 transition-all">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
