const PromoBanner = () => {
  return (
    <section className="py-6">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-2xl bg-brand-teal px-6 py-10 sm:px-12 sm:py-14 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/90 to-primary/80" />
          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-2">
              FREE Lens Replacement
            </h2>
            <p className="text-primary-foreground/80 text-sm sm:text-base mb-6">
              Any Frame. Any Power. Any Reason.
            </p>
            <button className="rounded-full bg-primary-foreground px-8 py-3 text-sm font-semibold text-primary hover:bg-primary-foreground/90 transition-all">
              Know More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
