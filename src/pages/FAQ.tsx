import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  { q: "What courses does MindSeekers offer?", a: "MindSeekers offers courses across Computer Science & IT (AI, Data Science, ML, Web Development, AWS, DSA, Cyber Security), Engineering (AutoCAD, MATLAB, IoT, VLSI, Aspen HYSYS), and Non-Technical domains (IELTS, Digital Marketing, HR, Financial Analysis)." },
  { q: "What is the duration of the courses?", a: "Course durations range from 8 to 20 weeks depending on the subject. Each course is designed to be comprehensive yet flexible to accommodate working professionals and students." },
  { q: "Do I get a certificate after completion?", a: "Yes! Upon successful completion of any course, you receive an industry-recognized certification from MindSeekers Technologies, which is valued by 30+ partner companies." },
  { q: "Is there any placement assistance?", a: "Absolutely! We provide 100% placement assistance including resume building, mock interviews, portfolio development, and direct referrals to our 30+ hiring partner companies." },
  { q: "What is the fee structure?", a: "Our courses are priced at ₹9,000 (original price ₹12,000). We also offer EMI options and occasional discounts. Contact us for the latest pricing and offers." },
  { q: "Are the classes online or offline?", a: "We offer both online and offline learning options. Online classes include live sessions, recorded lectures, and interactive doubt-clearing sessions with mentors." },
  { q: "Who are the instructors?", a: "Our instructors are industry professionals with years of experience in their respective fields. They bring real-world insights and practical knowledge to every session." },
  { q: "Can I access course materials after completion?", a: "Yes, you get lifetime access to all course materials, recorded sessions, and resources even after completing the course." },
  { q: "What if I have doubts during the course?", a: "We provide live doubt-clearing sessions, personal mentorship, and a dedicated community forum where you can ask questions and get help from instructors and peers." },
  { q: "How do I enroll in a course?", a: "You can enroll by visiting our enrollment page or contacting us directly. Simply fill out the enrollment form and our team will guide you through the process." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Layout>
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-tight px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our courses, certifications, and placement support.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-tight max-w-3xl">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={(i % 3) * 50}>
                <div className="card-3d overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-5 text-left"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  >
                    <span className="font-heading font-semibold text-foreground pr-4">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                        openIndex === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === i && (
                    <div className="px-5 pb-5">
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQ;
