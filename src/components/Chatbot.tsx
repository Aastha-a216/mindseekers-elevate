import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  role: "user" | "bot";
  text: string;
}

const quickReplies = [
  "What courses do you offer?",
  "How do I enroll?",
  "Tell me about placements",
  "What is the course fee?",
];

const botResponses: Record<string, string> = {
  "courses": "We offer 17+ courses across Computer Science, Engineering, and Non-Technical domains including AI, Cyber Security, Web Development, Data Science, and more! Visit our Courses page for details.",
  "enroll": "You can enroll by clicking the 'Enroll Now' button on any course page, or visit form.qfixonline.com/mind to register directly!",
  "placement": "We provide 100% placement assistance including resume building, mock interviews, and direct company connections. Check our Placements page for success stories!",
  "fee": "Our courses are priced at ₹9,000 (originally ₹12,000). This includes lifetime access, certificate, mentorship, and placement support.",
  "default": "Thanks for reaching out! For detailed queries, please contact us at help@mindseekers.live or call +91 8310803817. We're happy to help! 😊",
};

function getBotReply(msg: string): string {
  const lower = msg.toLowerCase();
  if (lower.includes("course") || lower.includes("program") || lower.includes("offer")) return botResponses.courses;
  if (lower.includes("enroll") || lower.includes("register") || lower.includes("join") || lower.includes("sign up")) return botResponses.enroll;
  if (lower.includes("placement") || lower.includes("job") || lower.includes("career")) return botResponses.placement;
  if (lower.includes("fee") || lower.includes("price") || lower.includes("cost") || lower.includes("charge")) return botResponses.fee;
  return botResponses.default;
}

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hi there! 👋 Welcome to MindSeekers. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { role: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: getBotReply(text) }]);
    }, 600);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl ${
          open ? "rotate-0" : ""
        }`}
        aria-label="Open chat"
      >
        {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] rounded-2xl shadow-elevated border border-border bg-card overflow-hidden transition-all duration-300 origin-bottom-right ${
          open ? "scale-100 opacity-100 pointer-events-auto" : "scale-90 opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-primary text-primary-foreground px-5 py-4">
          <p className="font-heading font-semibold text-sm">MindSeekers Support</p>
          <p className="text-xs opacity-80">We typically reply instantly</p>
        </div>

        {/* Messages */}
        <div className="h-72 overflow-y-auto p-4 space-y-3 bg-background">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-primary text-primary-foreground rounded-br-md"
                    : "bg-secondary text-secondary-foreground rounded-bl-md"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
          <div ref={endRef} />
        </div>

        {/* Quick replies */}
        {messages.length <= 2 && (
          <div className="px-4 pb-2 flex flex-wrap gap-1.5 bg-background">
            {quickReplies.map((q) => (
              <button
                key={q}
                onClick={() => send(q)}
                className="px-3 py-1.5 text-xs rounded-full border border-border text-foreground/70 hover:bg-secondary hover:text-foreground transition-colors"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="px-4 py-3 border-t border-border bg-card flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send(input)}
            placeholder="Type a message..."
            className="flex-1 text-sm bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
          />
          <button
            onClick={() => send(input)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
