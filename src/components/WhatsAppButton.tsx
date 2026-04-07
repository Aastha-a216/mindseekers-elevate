import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/918310803817?text=Hi%20MindSeekers%2C%20I%27m%20interested%20in%20your%20courses"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[90] group"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full bg-[hsl(142_70%_45%)] animate-[pulse-ring_2s_ease-out_infinite]" />
        {/* Button */}
        <div className="relative w-14 h-14 rounded-full bg-[hsl(142_70%_45%)] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
          <MessageCircle className="w-6 h-6 text-[hsl(0_0%_100%)]" />
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;
