const Footer = () => {
  const links = {
    "Services": ["Store Locator", "Home Eye Check-up", "Free Eye Test", "Frame Size Guide"],
    "About Us": ["Our Story", "Careers", "Blog", "Press"],
    "Help": ["FAQ", "Contact Us", "Return Policy", "Warranty"],
    "Shop": ["Eyeglasses", "Sunglasses", "Contact Lenses", "Accessories"],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Banner */}
      <div className="bg-brand-navy-light py-6">
        <div className="mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-primary-foreground">Buy 1 Get 1 Free</h3>
            <p className="text-sm text-primary-foreground/70">On all eyeglasses & sunglasses</p>
          </div>
          <button className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground hover:brightness-110 transition-all">
            Shop Now
          </button>
        </div>
      </div>

      {/* Links */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-sm font-bold text-primary-foreground mb-4">{heading}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-2xl font-bold">👓 OptiVue</span>
          <p className="text-xs text-primary-foreground/50">
            © 2026 OptiVue. All rights reserved. | Do More, See More.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
