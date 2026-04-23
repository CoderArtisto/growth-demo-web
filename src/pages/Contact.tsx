import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner";
import { sendContactEmail } from "@/lib/emailjs";

const CONTACT_EMAIL = "student29gopal@gmail.com";

/** OpenStreetMap embed centered on Saket, South Delhi */
const SAKET_MAP_EMBED_SRC =
  "https://www.openstreetmap.org/export/embed.html?bbox=77.185%2C28.505%2C77.245%2C28.545&layer=mapnik&marker=28.5245%2C77.2195";

const contactInfo = [
  { icon: MapPin, label: "Address", value: "IvoryEdge Dental Studio, Saket, South Delhi, 110017" },
  { icon: Phone, label: "Phone", value: "+91 123 456 7890", href: "tel:+911234567890" },
  { icon: Mail, label: "Email", value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { icon: Clock, label: "Hours", value: "Mon–Sat: 9AM–8PM | Sun: 10AM–2PM" },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [phone, setPhone] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow digits and limit to 10 characters
    const digitsOnly = value.replace(/\D/g, "").slice(0, 10);
    setPhone(digitsOnly);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (phone.length !== 10) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    setIsSending(true);
    try {
      await sendContactEmail({
        name: formData.fullName,
        phone,
        email: formData.email,
        message: formData.message,
      });
      toast.success("Message sent to the doctor successfully!");
      setSubmitted(true);
    } catch (error) {
      toast.error("Failed to send message. Please try again or call directly.");
      console.error("EmailJS Error:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <AnimatedSection>
            <span className="text-sm text-gold font-medium tracking-wider uppercase">Get In Touch</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-3 mb-6 text-foreground">
              Contact <span className="text-gradient-gold">Us</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Have questions or need assistance? We're just a call or message away.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <AnimatedSection>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Visit Our Studio</h2>
              <div className="space-y-4 mb-10">
                {contactInfo.map((item) => (
                  <Card key={item.label} className="border-border/50">
                    <CardContent className="p-4 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-foreground">{item.label}</span>
                        {item.href ? (
                          <a href={item.href} className="block text-sm text-muted-foreground hover:text-gold transition-colors">{item.value}</a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{item.value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="w-full aspect-video rounded-2xl overflow-hidden border border-border/50 bg-warm-grey shadow-sm">
                <iframe
                  title="Map of Saket, South Delhi"
                  src={SAKET_MAP_EMBED_SRC}
                  className="h-full w-full min-h-[220px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="mt-2 text-center text-xs text-muted-foreground">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Saket+South+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  Open in Google Maps
                </a>
              </p>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={0.2}>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Send Us a Message</h2>
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                  <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-6 rounded-full border-gold text-gold-dark">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="contact-fullName">Full Name</Label>
                      <Input
                        id="contact-fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        className="h-12 rounded-xl"
                        required
                        autoComplete="name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-phone">Phone</Label>
                      <Input
                        id="contact-phone"
                        name="phone"
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="9876543210"
                        className="h-12 rounded-xl"
                        required
                        autoComplete="tel"
                        maxLength={10}
                        inputMode="numeric"
                        pattern="[0-9]{10}"
                        title="Please enter exactly 10 digits"
                      />
                      <p className="text-xs text-muted-foreground">Enter 10 digit mobile number</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="you@example.com"
                      className="h-12 rounded-xl"
                      required
                      autoComplete="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Message</Label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="How can we help you?"
                      className="min-h-[120px] rounded-xl"
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" disabled={isSending} className="w-full bg-gradient-gold text-primary-foreground rounded-full text-base hover:opacity-90 h-14">
                    {isSending ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" /> Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
