import { Instagram, Linkedin } from "lucide-react";

const socials = [
  { icon: Instagram, href: "https://instagram.com/mindseekers.live", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/mindseekers", label: "LinkedIn" },
];

const SocialSidebar = () => {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="w-10 h-10 rounded-full border border-border bg-card/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary hover:shadow-[0_0_12px_hsl(var(--primary)/0.3)] hover:scale-110 transition-all duration-300"
        >
          <s.icon className="w-4 h-4" />
        </a>
      ))}
    </div>
  );
};

export { socials };
export default SocialSidebar;
