import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { format } from "date-fns";
import { CalendarIcon, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import AnimatedSection from "@/components/AnimatedSection";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM",
  "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM",
];

const serviceOptions = [
  "Dental Consultation & Check-up",
  "Teeth Cleaning",
  "Tooth Fillings",
  "Root Canal Treatment",
  "Dental Implants",
  "Braces & Clear Aligners",
  "Teeth Whitening",
  "Tooth Extraction",
];

const Booking = () => {
  const [searchParams] = useSearchParams();
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    const param = searchParams.get("service");
    if (!param) return;
    const decoded = decodeURIComponent(param);
    if (serviceOptions.includes(decoded)) {
      setService(decoded);
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (date && time && name && phone && service) {
      setConfirmed(true);
    }
  };

  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <AnimatedSection>
            <span className="text-sm text-gold font-medium tracking-wider uppercase">Schedule a Visit</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mt-3 mb-6 text-foreground">
              Book Your <span className="text-gradient-gold">Appointment</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Choose your preferred date, time, and service. We'll confirm your appointment within minutes.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-2xl">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Date */}
              <div className="space-y-2">
                <Label className="text-base font-medium">Select Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn("w-full justify-start text-left font-normal h-12 rounded-xl", !date && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4 text-gold" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(d) => d < new Date() || d.getDay() === 0}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Time */}
              <div className="space-y-2">
                <Label className="text-base font-medium">Select Time</Label>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setTime(slot)}
                      className={cn(
                        "flex items-center justify-center gap-1 px-2 py-2.5 rounded-xl border text-sm font-medium transition-all",
                        time === slot
                          ? "bg-gradient-gold text-primary-foreground border-gold shadow-md"
                          : "border-border text-muted-foreground hover:border-gold hover:text-gold-dark"
                      )}
                    >
                      <Clock className="w-3 h-3" />
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Service */}
              <div className="space-y-2">
                <Label className="text-base font-medium">Select Service</Label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger className="h-12 rounded-xl">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Name & Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-base font-medium">Full Name</Label>
                  <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" className="h-12 rounded-xl" required />
                </div>
                <div className="space-y-2">
                  <Label className="text-base font-medium">Phone Number</Label>
                  <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91 98765 43210" className="h-12 rounded-xl" required />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-gold text-primary-foreground rounded-full text-base hover:opacity-90 h-14"
                disabled={!date || !time || !name || !phone || !service}
              >
                Confirm Appointment
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </section>

      {/* Confirmation Dialog */}
      <Dialog open={confirmed} onOpenChange={setConfirmed}>
        <DialogContent className="rounded-2xl text-center max-w-md">
          <DialogHeader>
            <div className="mx-auto w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-gold" />
            </div>
            <DialogTitle className="font-serif text-2xl">Appointment Confirmed!</DialogTitle>
            <DialogDescription className="mt-4 space-y-2 text-sm">
              <p>Thank you, <strong>{name}</strong>! Your appointment has been booked.</p>
              <p className="text-muted-foreground">
                📅 {date && format(date, "PPP")} at {time}<br />
                🦷 {service}
              </p>
              <p className="text-muted-foreground mt-4">
                We'll send a confirmation to your phone. See you at IvoryEdge!
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Booking;
