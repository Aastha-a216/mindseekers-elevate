import { useState } from "react";
import { Mail, Phone, MapPin, Send, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingElements from "@/components/FloatingElements";
import { useToast } from "@/hooks/use-toast";
import { socials } from "@/components/SocialSidebar";
import logo from "@/assets/logo.png";

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
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        {/* Animated background logo */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <img
            src={logo}
            alt=""
            className="w-64 sm:w-80 opacity-[0.04] dark:opacity-[0.06] animate-float mix-blend-multiply dark:mix-blend-screen"
            style={{ animationDuration: "6s" }}
          />
        </div>

        <div className="container-tight px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Reach out and our team will respond promptly.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding relative overflow-hidden">
        <FloatingElements variant="section" />
        <div className="container-tight max-w-5xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal>
                <div className="card-3d p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent text-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground text-sm mb-1">Email Us</h3>
                    <a href="mailto:help@mindseekers.live" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      help@mindseekers.live
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <div className="card-3d p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent text-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground text-sm mb-1">Call Us</h3>
                    <a href="tel:+918310803817" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      +91 8310803817
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="card-3d p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent text-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground text-sm mb-1">Location</h3>
                    <p className="text-sm text-muted-foreground">India</p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Social Links */}
              <ScrollReveal delay={300}>
                <div className="card-3d p-6">
                  <h3 className="font-heading font-semibold text-foreground text-sm mb-4">Follow Us</h3>
                  <div className="flex items-center gap-3">
                    {socials.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[0_0_12px_hsl(var(--primary)/0.3)] hover:scale-110 transition-all duration-300"
                      >
                        <s.icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={100}>
                <div className="card-3d p-6 sm:p-8">
                  <h2 className="text-xl font-heading font-bold text-foreground mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                        <Input
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                        <Input
                          placeholder="Your phone number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          required
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                      <Textarea
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={5}
                        className="rounded-lg resize-none"
                      />
                    </div>
                    <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 font-medium shadow-sm">
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
