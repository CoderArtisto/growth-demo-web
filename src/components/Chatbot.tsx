import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const FAQ_RESPONSES: Record<string, string> = {
  price: "Our consultation starts at ₹500. Teeth whitening ranges from ₹8,000–₹15,000, and dental implants start at ₹25,000. We offer flexible EMI options too! Book a free consultation for a personalized quote.",
  cost: "Our consultation starts at ₹500. Teeth whitening ranges from ₹8,000–₹15,000, and dental implants start at ₹25,000. We offer flexible EMI options too! Book a free consultation for a personalized quote.",
  pain: "We understand your concern! At IvoryEdge, we use advanced painless techniques including digital anesthesia and sedation dentistry. Most patients say they barely felt a thing. Your comfort is our top priority. 😊",
  hurt: "We understand your concern! At IvoryEdge, we use advanced painless techniques including digital anesthesia and sedation dentistry. Most patients say they barely felt a thing. Your comfort is our top priority. 😊",
  book: "You can book an appointment directly on our website! Visit the Book Appointment page, choose your preferred date and time, and we'll confirm within minutes. Or call us at +91 123 456 7890.",
  appointment: "You can book an appointment directly on our website! Visit the Book Appointment page, choose your preferred date and time, and we'll confirm within minutes. Or call us at +91 123 456 7890.",
  time: "Most treatments are completed in a single visit! Consultations take 20-30 minutes, cleanings about 45 minutes, and whitening about 1 hour. Complex treatments like implants may require multiple visits.",
  duration: "Most treatments are completed in a single visit! Consultations take 20-30 minutes, cleanings about 45 minutes, and whitening about 1 hour. Complex treatments like implants may require multiple visits.",
  location: "We're located in Saket, South Delhi (110017). Easy access from Select Citywalk Mall area. We have ample parking available!",
  address: "We're located in Saket, South Delhi (110017). Easy access from Select Citywalk Mall area. We have ample parking available!",
  timing: "We're open Monday to Saturday, 9 AM – 8 PM, and Sundays from 10 AM – 2 PM. We recommend booking in advance for weekend slots!",
  hour: "We're open Monday to Saturday, 9 AM – 8 PM, and Sundays from 10 AM – 2 PM. We recommend booking in advance for weekend slots!",
  implant: "Dental implants at IvoryEdge start at ₹25,000. We use premium titanium implants with a 10-year warranty. The procedure is virtually painless with our advanced techniques. Book a consultation to learn more!",
  whitening: "Our professional teeth whitening starts at ₹8,000. We offer both in-clinic (1-hour session) and take-home kits. Results last 6-12 months with proper care!",
  braces: "We offer traditional braces starting at ₹30,000 and clear aligners from ₹50,000. Dr. Aryan Mehta specializes in smile design and will recommend the best option for you!",
};

const getResponse = (input: string): string => {
  const lower = input.toLowerCase();
  for (const [key, response] of Object.entries(FAQ_RESPONSES)) {
    if (lower.includes(key)) return response;
  }
  return "Thank you for reaching out! I'd be happy to help. For specific questions about treatments or pricing, I recommend booking a free consultation with Dr. Aryan Mehta. You can book online or call us at +91 123 456 7890. How else can I assist you?";
};

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hello! 👋 Welcome to IvoryEdge Dental Studio. I'm here to help with any questions about our services, pricing, or appointments. How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", content: getResponse(input) }]);
    }, 600);
  };

  return (
    <>
      {/* Toggle button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ delay: 1.5, type: "spring" }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-gold text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl shadow-2xl border border-border bg-card overflow-hidden flex flex-col"
            style={{ height: "500px", maxHeight: "calc(100vh - 6rem)" }}
          >
            {/* Header */}
            <div className="bg-gradient-gold px-5 py-4 flex items-center justify-between">
              <div>
                <h3 className="font-serif font-semibold text-primary-foreground text-base">IvoryEdge Assistant</h3>
                <p className="text-xs text-primary-foreground/70">Available 24/7 • Typically replies instantly</p>
              </div>
              <button onClick={() => setOpen(false)} className="text-primary-foreground/70 hover:text-primary-foreground">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-gradient-gold text-primary-foreground rounded-br-md"
                        : "bg-muted text-foreground rounded-bl-md"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-border p-3 flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about services, pricing..."
                className="flex-1 rounded-full text-sm"
              />
              <Button onClick={handleSend} size="icon" className="bg-gradient-gold text-primary-foreground rounded-full shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
