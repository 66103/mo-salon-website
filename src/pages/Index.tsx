import heroImage from "@/assets/hero-salon.jpg";
import { Button } from "@/components/ui/button";
import { Scissors, Sparkles, Palette, Heart, MapPin, Phone, Clock, Instagram } from "lucide-react";

const services = [
  { icon: Scissors, name: "Precision Cuts", desc: "Tailored cuts that frame your features and complement your lifestyle.", price: "From $65" },
  { icon: Palette, name: "Color & Balayage", desc: "Hand-painted color, balayage, and dimensional highlights.", price: "From $140" },
  { icon: Sparkles, name: "Treatments", desc: "Restorative gloss, keratin and bond-building treatments.", price: "From $85" },
  { icon: Heart, name: "Bridal & Events", desc: "Bespoke styling for weddings and special occasions.", price: "From $180" },
];

const stylists = [
  { name: "Mo Karim", role: "Founder & Master Stylist", initials: "MK" },
  { name: "Lena Park", role: "Color Specialist", initials: "LP" },
  { name: "Ana Rivera", role: "Senior Stylist", initials: "AR" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="container flex items-center justify-between py-6">
          <a href="#" className="text-primary-foreground">
            <span className="font-display text-3xl tracking-wide">MO</span>
            <span className="ml-2 text-xs uppercase tracking-[0.3em] opacity-80">Salon</span>
          </a>
          <ul className="hidden md:flex items-center gap-10 text-sm uppercase tracking-[0.2em] text-primary-foreground/90">
            <li><a href="#services" className="hover:text-gold transition-smooth">Services</a></li>
            <li><a href="#about" className="hover:text-gold transition-smooth">About</a></li>
            <li><a href="#team" className="hover:text-gold transition-smooth">Team</a></li>
            <li><a href="#visit" className="hover:text-gold transition-smooth">Visit</a></li>
          </ul>
          <Button asChild variant="outline" className="hidden md:inline-flex border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <a href="#book">Book Now</a>
          </Button>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Interior of MO Salon featuring warm lighting and modern styling stations"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 container flex h-full flex-col items-center justify-center text-center text-primary-foreground">
          <span className="text-xs uppercase tracking-[0.4em] text-gold mb-6">Est. 2014 · Hair Atelier</span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-4xl">
            Where craft meets <em className="text-gold not-italic">character</em>.
          </h1>
          <p className="mt-8 max-w-xl text-base md:text-lg text-primary-foreground/85 font-light">
            A modern hair atelier in the heart of the city. Considered cuts, luminous color,
            and a calm space designed for you.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-gold text-primary hover:bg-gold/90 rounded-none px-10 h-12 uppercase tracking-[0.2em] text-xs">
              <a href="#book">Reserve a Chair</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-none px-10 h-12 uppercase tracking-[0.2em] text-xs">
              <a href="#services">Our Services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 md:py-32 container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gold">About MO</span>
            <h2 className="mt-4 text-4xl md:text-5xl leading-tight">
              A salon built on<br />intention and craft.
            </h2>
            <div className="mt-6 h-px w-16 bg-gold" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Founded by master stylist Mo Karim, MO Salon is a refuge for those who value
              quiet luxury and great hair. Our team blends classic technique with a modern
              sensibility — every guest leaves looking and feeling like the best version of themselves.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We use ammonia-free color, plant-based care, and time-honored cutting methods
              to create looks that grow out beautifully.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[
              { n: "12", l: "Years of craft" },
              { n: "8k+", l: "Happy guests" },
              { n: "20+", l: "Awards & press" },
            ].map((s) => (
              <div key={s.l} className="text-center border-l border-border first:border-0 px-2">
                <div className="font-display text-4xl md:text-5xl text-gold">{s.n}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-secondary py-24 md:py-32">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">What we do</span>
            <h2 className="mt-4 text-4xl md:text-5xl">Services & Pricing</h2>
            <p className="mt-6 text-muted-foreground">
              From a precision cut to a full color transformation — every service is consultative,
              unhurried, and tailored to you.
            </p>
          </div>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <article key={s.name} className="bg-background p-8 shadow-soft hover:shadow-elegant transition-smooth group">
                <s.icon className="h-8 w-8 text-gold" strokeWidth={1.2} />
                <h3 className="mt-6 text-2xl">{s.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6 pt-6 border-t border-border text-xs uppercase tracking-[0.2em] text-gold">{s.price}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 md:py-32 container">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">The team</span>
          <h2 className="mt-4 text-4xl md:text-5xl">Stylists with soul.</h2>
        </div>
        <div className="mt-16 grid md:grid-cols-3 gap-10">
          {stylists.map((p) => (
            <div key={p.name} className="text-center">
              <div className="aspect-[3/4] bg-muted flex items-center justify-center shadow-soft">
                <span className="font-display text-7xl text-gold">{p.initials}</span>
              </div>
              <h3 className="mt-6 text-2xl">{p.name}</h3>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-2">{p.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section id="book" className="bg-primary text-primary-foreground py-24 md:py-32">
        <div className="container text-center max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Reserve</span>
          <h2 className="mt-4 text-4xl md:text-6xl">Ready for a refresh?</h2>
          <p className="mt-6 text-primary-foreground/75 leading-relaxed">
            Booking takes under a minute. Tell us what you're after and we'll match you
            with the right stylist.
          </p>
          <Button asChild size="lg" className="mt-10 bg-gold text-primary hover:bg-gold/90 rounded-none px-12 h-12 uppercase tracking-[0.2em] text-xs">
            <a href="tel:+15551234567">Book your appointment</a>
          </Button>
        </div>
      </section>

      {/* Visit / Footer */}
      <footer id="visit" className="bg-background py-20 border-t border-border">
        <div className="container grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div>
              <span className="font-display text-3xl">MO</span>
              <span className="ml-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">Salon</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm">
              A modern hair atelier — precision cuts, luminous color, and a calm,
              considered space.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold">Visit</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0" />128 Linden Ave<br />Brooklyn, NY 11201</li>
              <li className="flex items-center gap-3"><Phone className="h-4 w-4 shrink-0" />(555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold">Hours</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-3"><Clock className="h-4 w-4 shrink-0" />Tue–Fri · 10–8</li>
              <li className="ml-7">Sat · 9–6</li>
              <li className="ml-7">Sun–Mon · Closed</li>
            </ul>
            <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm text-foreground hover:text-gold transition-smooth">
              <Instagram className="h-4 w-4" /> @mosalon
            </a>
          </div>
        </div>
        <div className="container mt-16 pt-8 border-t border-border text-xs text-muted-foreground flex justify-between">
          <span>© {new Date().getFullYear()} MO Salon. All rights reserved.</span>
          <span>Crafted with care.</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
