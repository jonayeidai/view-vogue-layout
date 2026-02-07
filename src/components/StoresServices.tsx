import { MapPin, Home, MessageCircle, Users } from "lucide-react";

const services = [
  { title: "Visit Your Nearest Store", description: "Find stores near you", icon: MapPin, color: "bg-brand-teal" },
  { title: "Home Try-On", description: "Try frames at home", icon: Home, color: "bg-brand-gold" },
  { title: "Order on WhatsApp", description: "Chat & order easily", icon: MessageCircle, color: "bg-primary" },
  { title: "Connect with Experts", description: "Get expert advice", icon: Users, color: "bg-brand-navy-light" },
];

const StoresServices = () => {
  return (
    <section className="py-10 bg-surface-warm">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-8">
          Nearby Stores & Services
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <a
              key={service.title}
              href="#"
              className="group rounded-xl border border-border bg-card p-5 hover:shadow-md transition-all"
            >
              <div className={`h-10 w-10 rounded-lg ${service.color} flex items-center justify-center mb-3`}>
                <service.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="text-sm font-semibold text-card-foreground mb-1">
                {service.title}
              </h3>
              <p className="text-xs text-muted-foreground">{service.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoresServices;
