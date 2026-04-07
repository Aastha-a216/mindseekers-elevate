import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import TextReveal from "@/components/TextReveal";
import ParallaxSection from "@/components/ParallaxSection";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you shortly." });
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex flex-col justify-end overflow-hidden pb-20">
        <ParallaxSection speed={0.1}>
          <div className="absolute top-[25%] right-[10%] w-[350px] h-[350px] rounded-full bg-primary/[0.03] blur-[100px]" />
        </ParallaxSection>
        <div className="container-tight px-6 sm:px-8 lg:px-12 relative z-10 pt-32">
          <TextReveal>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-muted-foreground mb-6">Contact</p>
          </TextReveal>
          <TextReveal delay={100}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-[1.05] tracking-[-0.03em] mb-8 max-w-3xl">
              Get In <span className="gradient-text">Touch</span>
            </h1>
          </TextReveal>
          <TextReveal delay={200}>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Have questions? We'd love to hear from you. Reach out and our team will respond promptly.
            </p>
          </TextReveal>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-padding border-t border-border">
        <div className="container-tight max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              {[
                { icon: Mail, title: "Email", content: "help@mindseekers.live", href: "mailto:help@mindseekers.live" },
                { icon: Phone, title: "Phone", content: "+91 8310803817", href: "tel:+918310803817" },
                { icon: MapPin, title: "Location", content: "India" },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 80}>
                  <div className="py-6 border-b border-border">
                    <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-medium mb-2">{item.title}</p>
                    {item.href ? (
                      <a href={item.href} className="text-foreground hover:text-primary transition-colors text-lg">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-foreground text-lg">{item.content}</p>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={100}>
                <div className="card-3d p-8 sm:p-10">
                  <h2 className="text-xl font-heading font-bold text-foreground mb-8">Send a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs tracking-[0.1em] uppercase font-medium text-muted-foreground mb-2 block">Name</label>
                        <Input
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="rounded-lg input-animated h-12"
                        />
                      </div>
                      <div>
                        <label className="text-xs tracking-[0.1em] uppercase font-medium text-muted-foreground mb-2 block">Phone</label>
                        <Input
                          placeholder="Your phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          className="rounded-lg input-animated h-12"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs tracking-[0.1em] uppercase font-medium text-muted-foreground mb-2 block">Email</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="rounded-lg input-animated h-12"
                      />
                    </div>
                    <div>
                      <label className="text-xs tracking-[0.1em] uppercase font-medium text-muted-foreground mb-2 block">Message</label>
                      <Textarea
                        placeholder="How can we help?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        className="rounded-lg resize-none input-animated"
                      />
                    </div>
                    <Button type="submit" className="btn-premium bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12 font-medium">
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
