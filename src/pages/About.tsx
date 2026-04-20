import { Link } from "react-router-dom";
import { ArrowRight, Award, Heart, Microscope, ShieldCheck, Stethoscope, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const values = [
  { icon: Heart, title: "Patient-First Care", desc: "Every decision we make starts with your comfort and well-being." },
  { icon: ShieldCheck, title: "Strict Hygiene", desc: "International-grade sterilisation protocols for your safety." },
  { icon: Microscope, title: "Advanced Technology", desc: "Digital X-rays, 3D scanning, and laser dentistry for precision." },
  { icon: Users, title: "Personalised Treatment", desc: "Custom treatment plans tailored to your unique dental needs." },
];

const qualifications = [
  { year: "2012", title: "BDS", desc: "Maulana Azad Institute of Dental Sciences, Delhi" },
  { year: "2015", title: "MDS (Prosthodontics)", desc: "All India Institute of Medical Sciences" },
  { year: "2017", title: "Advanced Cosmetic Dentistry", desc: "Certification from USA" },
  { year: "2018", title: "Indian Dental Association", desc: "Lifetime Member" },
  { year: "2020", title: "ICOI Fellow", desc: "International Congress of Oral Implantologists" },
];

const About = () => (
  <div className="pt-20 overflow-hidden">
    {/* Hero */}
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <span className="text-sm text-gold font-medium tracking-wider uppercase">Our Story</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-3 mb-6 text-foreground">
              Where Luxury Meets <span className="text-gradient-gold">Gentle Care</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-4">
              IvoryEdge Dental Studio was founded with a singular vision: to redefine the dental experience. We believe that world-class dental care shouldn't come with anxiety, discomfort, or a clinical atmosphere.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Located in the heart of Saket, South Delhi, our studio blends cutting-edge dental technology with a warm, spa-like ambiance. Every detail — from our serene interiors to our gentle treatment approach — is designed to make you feel at ease.
            </p>
            <Link to="/booking">
              <Button className="bg-gradient-gold text-primary-foreground rounded-full px-8 hover:opacity-90">
                Book a Visit <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="overflow-hidden rounded-3xl border border-border/50 bg-card shadow-xl">
              <div className="aspect-[4/3] w-full">
                <img
                  src="/interior.jpg"
                  alt="IvoryEdge Dental Studio treatment room in Saket, South Delhi"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm text-gold font-medium tracking-wider uppercase">Our Philosophy</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3 text-foreground">What Sets Us Apart</h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <Card className="text-center hover:shadow-lg transition-all border-border/50 h-full">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <v.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2 text-foreground">{v.title}</h3>
                  <p className="text-sm text-muted-foreground">{v.desc}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Doctor */}
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <AnimatedSection>
            <div className="sticky top-28">
              <div className="relative mx-auto max-w-md">
                <div
                  className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-gold/20 via-transparent to-gold/10"
                  aria-hidden
                />
                <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card shadow-xl">
                  <div className="aspect-[3/4] w-full">
                    <img
                      src="/doctor.jpg"
                      alt="Dr. Aryan Mehta, lead dentist at IvoryEdge Dental Studio"
                      className="h-full w-full object-cover object-[center_15%]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <span className="text-sm text-gold font-medium tracking-wider uppercase">Lead Dentist</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mt-3 mb-6 text-foreground">
              Dr. Aryan Mehta
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dr. Aryan Mehta brings over 12 years of expertise in cosmetic dentistry and smile design. Known for his meticulous attention to detail and compassionate chairside manner, he has helped over 10,000 patients achieve their dream smiles.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              His philosophy is simple: every patient deserves a pain-free, anxiety-free dental experience with results that exceed expectations. He stays at the forefront of dental innovation through continuous global training and research.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold-dark text-sm font-medium">
                <Stethoscope className="w-4 h-4" /> 12+ Years
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold-dark text-sm font-medium">
                <Award className="w-4 h-4" /> 10,000+ Smiles
              </div>
            </div>

            <h3 className="font-serif text-xl font-semibold mb-6 text-foreground">Qualifications & Milestones</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-gold/30 via-gold/50 to-gold/30" />

              <div className="space-y-6">
                {qualifications.map((q, index) => (
                  <motion.div
                    key={q.year}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative flex items-start gap-4"
                  >
                    {/* Timeline dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
                      className="relative z-10 w-10 h-10 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center shrink-0"
                    >
                      <Award className="w-4 h-4 text-gold" />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-gold bg-gold/10 px-2 py-0.5 rounded">
                          {q.year}
                        </span>
                        <span className="font-medium text-foreground">{q.title}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{q.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  </div>
);

export default About;
