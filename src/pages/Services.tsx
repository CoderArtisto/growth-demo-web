import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Stethoscope, Sparkles, PaintBucket, Zap, CircleDot, Smile, Sun, Scissors, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    icon: Stethoscope,
    title: "Dental Consultation & Check-up",
    bookingValue: "Dental Consultation & Check-up",
    short: "Comprehensive oral examination with digital diagnostics.",
    benefits: "Get a complete picture of your dental health with advanced digital X-rays, oral cancer screening, and a personalised treatment roadmap. Early detection saves time, money, and discomfort.",
  },
  {
    icon: Sparkles,
    title: "Teeth Cleaning (Scaling & Polishing)",
    bookingValue: "Teeth Cleaning",
    short: "Professional deep cleaning for a fresh, healthy smile.",
    benefits: "Remove plaque, tartar, and surface stains that regular brushing misses. Our gentle ultrasonic scaling leaves your teeth smooth, bright, and your gums healthier than ever.",
  },
  {
    icon: PaintBucket,
    title: "Tooth Fillings",
    bookingValue: "Tooth Fillings",
    short: "Restore damaged teeth with natural-looking fillings.",
    benefits: "We use tooth-coloured composite fillings that blend seamlessly with your natural teeth. Say goodbye to unsightly metal fillings — our restorations are virtually invisible.",
  },
  {
    icon: Zap,
    title: "Root Canal Treatment (RCT)",
    bookingValue: "Root Canal Treatment",
    short: "Painless root canal therapy to save your natural tooth.",
    benefits: "Modern root canal treatment is nothing like the old days. With digital anesthesia and rotary instruments, the procedure is virtually painless and completed in just one visit.",
  },
  {
    icon: CircleDot,
    title: "Dental Implants",
    bookingValue: "Dental Implants",
    short: "Permanent, natural-looking replacements for missing teeth.",
    benefits: "Our premium titanium implants feel, look, and function like natural teeth. With a 98% success rate and 10-year warranty, implants are the gold standard for tooth replacement.",
  },
  {
    icon: Smile,
    title: "Braces & Clear Aligners",
    bookingValue: "Braces & Clear Aligners",
    short: "Straighten your teeth with modern orthodontic solutions.",
    benefits: "Choose from traditional braces for complex cases or virtually invisible clear aligners for discreet straightening. Dr. Mehta creates custom treatment plans for beautiful, aligned smiles.",
  },
  {
    icon: Sun,
    title: "Teeth Whitening",
    bookingValue: "Teeth Whitening",
    short: "Professional whitening for a brilliantly bright smile.",
    benefits: "Our in-clinic whitening treatment can lighten your teeth by 5-8 shades in just one hour. We also offer custom take-home kits for gradual whitening at your convenience.",
  },
  {
    icon: Scissors,
    title: "Tooth Extraction",
    bookingValue: "Tooth Extraction",
    short: "Safe, gentle extraction including wisdom teeth removal.",
    benefits: "When extraction is necessary, our minimally invasive approach ensures quick healing and minimal discomfort. We specialise in complex wisdom tooth removals with same-day recovery protocols.",
  },
];

const Services = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <AnimatedSection>
            <span className="text-sm text-gold font-medium tracking-wider uppercase">What We Offer</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-3 mb-6 text-foreground">
              Our <span className="text-gradient-gold">Services</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From preventive care to complete smile makeovers — every treatment is delivered with precision, comfort, and a premium touch.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.05}>
                <Card
                  className={`group cursor-pointer transition-all duration-300 border-border/50 hover:shadow-xl ${
                    expanded === i ? "ring-2 ring-gold/30 shadow-xl" : ""
                  }`}
                  onClick={() => setExpanded(expanded === i ? null : i)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                        <service.icon className="w-6 h-6 text-gold" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-serif text-lg font-semibold text-foreground">{service.title}</h3>
                          {expanded === i ? (
                            <ChevronUp className="w-5 h-5 text-gold shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{service.short}</p>
                        {expanded === i && (
                          <div className="mt-4 pt-4 border-t border-border">
                            <p className="text-sm text-foreground/70 leading-relaxed">{service.benefits}</p>
                            <Link
                              to={`/booking?service=${encodeURIComponent(service.bookingValue)}`}
                              className="inline-block mt-4"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Button size="sm" className="bg-gradient-gold text-primary-foreground rounded-full hover:opacity-90">
                                Book This Treatment <ArrowRight className="w-3 h-3 ml-1" />
                              </Button>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-4">Not sure which treatment you need?</h2>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                Book a free consultation with Dr. Aryan Mehta. He'll assess your dental health and recommend the best treatment plan for you.
              </p>
              <Link to="/booking">
                <Button size="lg" className="bg-gradient-gold text-primary-foreground rounded-full px-10 hover:opacity-90">
                  Book Free Consultation <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;
