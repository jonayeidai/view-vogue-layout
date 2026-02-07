import featuredBanner from "@/assets/featured-banner.jpg";

const FeaturedBanner = () => {
  return (
    <section className="py-6">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-2xl h-[250px] sm:h-[350px]">
          <img
            src={featuredBanner}
            alt="Featured collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8 sm:px-14">
            <div>
              <p className="text-xs uppercase tracking-widest text-accent font-medium mb-2">
                Featured
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
                Premium Collection
              </h2>
              <p className="text-primary-foreground/70 text-sm mb-5">
                Outdoor eyewear designed for adventure
              </p>
              <button className="rounded-full border-2 border-primary-foreground px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground hover:text-foreground transition-all">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBanner;
