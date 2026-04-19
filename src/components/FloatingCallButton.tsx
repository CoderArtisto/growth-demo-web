import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const FloatingCallButton = () => (
  <motion.a
    href="tel:+911234567890"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 1, type: "spring" }}
    className="fixed bottom-6 left-6 z-40 w-14 h-14 rounded-full bg-gradient-gold text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
    aria-label="Call Now"
  >
    <Phone className="w-6 h-6" />
  </motion.a>
);

export default FloatingCallButton;
