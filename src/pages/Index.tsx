import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Shield, Heart, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { motion } from "framer-motion";

const services = [
  { icon: Sparkles, title: "Teeth Whitening", desc: "Brighten your smile with professional-grade whitening treatments." },
  { icon: Shield, title: "Dental Implants", desc: "Permanent, natural-looking replacements for missing teeth." },
  { icon: Heart, title: "Cosmetic Dentistry", desc: "Transform your smile with veneers, bonding & aesthetic treatments." },
  { icon: CheckCircle, title: "Braces & Aligners", desc: "Straighten your teeth discreetly with modern clear aligners." },
  { icon: Star, title: "Root Canal", desc: "Painless root canal therapy to save and restore your natural teeth." },
  { icon: Shield, title: "Dental Check-up", desc: "Comprehensive oral health examinations with digital diagnostics." },
];

const testimonials = [
  { name: "Priya Sharma", text: "I was terrified of dental visits, but Dr. Mehta made it so comfortable. The whitening results are stunning — I can't stop smiling!", rating: 5 },
  { name: "Rahul Kapoor", text: "Best dental experience in Delhi. The clinic feels like a luxury lounge, not a dentist's office. Highly recommend for implants.", rating: 5 },
  { name: "Ananya Gupta", text: "Got my clear aligners here and the entire journey was seamless. The team is incredibly caring and professional.", rating: 5 },
  { name: "Vikram Singh", text: "Dr. Aryan is truly an artist. My smile makeover completely changed how I feel about myself. Worth every penny.", rating: 5 },
];

const Index = () => (
  <div className="overflow-hidden">
    {/* Hero */}
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-cream" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-gold/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/5 blur-3xl" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold-dark text-sm font-medium mb-6">
              ✨ South Delhi's Premier Dental Studio
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
              Design Your Perfect Smile with{" "}
              <span className="text-gradient-gold">Advanced Dental Care</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Experience painless, world-class dentistry in a serene luxury setting. From smile makeovers to preventive care — your comfort is our craft.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/booking">
                <Button size="lg" className="bg-gradient-gold text-primary-foreground rounded-full px-8 text-base hover:opacity-90 shadow-lg">
                  Book Appointment <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <a href="tel:+911234567890">
                <Button size="lg" variant="outline" className="rounded-full px-8 text-base border-gold text-gold-dark hover:bg-gold/5">
                  Call Now
                </Button>
              </a>
            </div>
            <div className="flex items-center gap-6 mt-10 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-gold" /> 10,000+ Happy Patients</span>
              <span className="flex items-center gap-2"><Star className="w-4 h-4 text-gold" /> 4.9★ Google Rating</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-[450px] h-[500px] rounded-3xl overflow-hidden bg-warm-grey shadow-2xl">
              <img
                src="/clinic.jpg"
                alt="IvoryEdge dental clinic interior"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-40 h-40 rounded-2xl bg-card shadow-xl p-4 flex flex-col items-center justify-center border border-border">
                <span className="text-3xl font-bold text-gold">12+</span>
                <span className="text-xs text-muted-foreground text-center">Years of Excellence</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Services Preview */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm text-gold font-medium tracking-wider uppercase">Our Expertise</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3 text-foreground">
            Comprehensive Dental Services
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            From routine check-ups to complete smile makeovers — we offer a full spectrum of dental treatments with a gentle, premium touch.
          </p>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <Card className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border/50 bg-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <service.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline" className="rounded-full border-gold text-gold-dark hover:bg-gold/5 px-8">
              View All Services <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </AnimatedSection>
      </div>
    </section>

    {/* Before / After */}
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedSection className="text-center mb-12">
          <span className="text-sm text-gold font-medium tracking-wider uppercase">Transformations</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3 text-foreground">See the Difference</h2>
          <p className="text-muted-foreground mt-4">Drag the slider to reveal stunning smile transformations by Dr. Aryan Mehta.</p>
        </AnimatedSection>
        <AnimatedSection>
          <BeforeAfterSlider />
        </AnimatedSection>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm text-gold font-medium tracking-wider uppercase">Testimonials</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3 text-foreground">What Our Patients Say</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <Card className="border-border/50 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-foreground/80 leading-relaxed mb-4 italic">"{t.text}"</p>
                  <span className="font-medium text-foreground">{t.name}</span>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Doctor Highlight */}
    <section className="relative py-24 md:py-28 bg-background overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-0 h-72 w-72 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl" />
      <div className="container relative mx-auto px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
          <AnimatedSection className="lg:col-span-5">
            <div className="mx-auto max-w-md lg:mx-0">
              <div className="relative">
                <div
                  className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-gold/25 via-gold/5 to-transparent opacity-80"
                  aria-hidden
                />
                <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-[0_24px_60px_-12px_rgba(15,110,86,0.15)]">
                  <div className="aspect-[4/5] w-full">
                    <img
                      src="/doctor.jpg"
                      alt="Dr. Aryan Mehta, cosmetic dentist at IvoryEdge Dental Studio"
                      className="h-full w-full object-cover object-[center_15%]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="lg:col-span-7">
            <span className="text-sm font-medium uppercase tracking-wider text-gold">Meet Your Doctor</span>
            <h2 className="font-serif mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Dr. Aryan Mehta
            </h2>
            <p className="mt-2 text-sm font-medium text-gold-dark/90 md:text-base">
              Lead Dentist · Cosmetic &amp; restorative dentistry
            </p>
            <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
              With over 12 years of experience in cosmetic dentistry and smile design, Dr. Aryan Mehta is one of South
              Delhi&apos;s most trusted dental professionals. His gentle approach and eye for aesthetics have transformed
              thousands of smiles.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {[
                { label: "Experience", value: "12+ Years" },
                { label: "Patients", value: "10,000+" },
                { label: "Specialty", value: "Smile Design" },
                { label: "Rating", value: "4.9★" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border/60 bg-cream/80 px-3 py-4 text-center shadow-sm"
                >
                  <div className="font-sans text-lg font-bold text-gold sm:text-xl">{stat.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link to="/about">
                <Button variant="outline" className="rounded-full border-gold px-8 text-gold-dark hover:bg-gold/5">
                  Learn More <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* CTA Banner */}
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedSection>
          <div className="bg-foreground rounded-3xl p-12 md:p-16 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready for Your Best Smile?
            </h2>
            <p className="text-primary-foreground/60 max-w-xl mx-auto mb-8">
              Book a consultation today and take the first step toward the smile you've always wanted. Zero pain, total comfort.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/booking">
                <Button size="lg" className="bg-gradient-gold text-primary-foreground rounded-full px-10 hover:opacity-90">
                  Book Appointment
                </Button>
              </Link>
              <a href="tel:+911234567890">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-2 border-primary-foreground/50 bg-transparent px-10 text-primary-foreground shadow-none hover:bg-primary-foreground/10 hover:text-primary-foreground"
                >
                  Call +91 123 456 7890
                </Button>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Index;
