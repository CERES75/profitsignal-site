"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ChevronDown, MessageSquare, Target, LineChart, ArrowRight } from "lucide-react";

// Animated Section Component
const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut", delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Icons
const AnalysisIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

const StrategyIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);

const ImplementIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

const OptimizeIcon = () => (
  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    />
  </svg>
);

const WebsiteIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
    />
  </svg>
);

const LeadGenIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const AcquisitionIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="w-6 h-6 text-emerald-400 drop-shadow-sm flex-shrink-0"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const MailIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
);

const InstagramIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const FacebookIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const LinkedInIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 10l7-7m0 0l7 7m-7-7v18"
    />
  </svg>
);

const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// Hero helpers
const heroParticles = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: `${6 + i * 6}%`,
  top: `${14 + (i % 5) * 14}%`,
  size: 2 + (i % 3),
  delay: (i % 4) * 0.6,
  duration: 3 + (i % 4),
}));

const HeroGlow = ({ className = "" }: { className?: string }) => (
  <div
    className={`pointer-events-none absolute rounded-full blur-3xl ${className}`}
    aria-hidden="true"
  />
);

const HeroLineChart = () => {
  const path =
    "M 10 130 C 60 124, 86 108, 114 90 C 138 75, 154 82, 178 72 C 202 62, 220 42, 248 36 C 282 29, 312 18, 350 8";

  return (
    <div className="relative h-44 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:42px_42px] opacity-30" />

      <svg viewBox="0 0 360 140" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="heroLine" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
          <linearGradient id="heroArea" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(168,85,247,0.28)" />
            <stop offset="100%" stopColor="rgba(96,165,250,0.03)" />
          </linearGradient>
        </defs>

        <motion.path
          d={`${path} L 350 140 L 10 140 Z`}
          fill="url(#heroArea)"
          initial={{ opacity: 0.2 }}
          animate={{ opacity: [0.16, 0.3, 0.18] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.path
          d={path}
          fill="none"
          stroke="url(#heroLine)"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.7 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.7, ease: "easeOut" }}
        />

        <motion.circle
          cx="350"
          cy="8"
          r="5"
          fill="#ffffff"
          initial={{ opacity: 0.7, scale: 0.8 }}
          animate={{ opacity: [0.6, 1, 0.6], scale: [0.8, 1.18, 0.8] }}
          transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqItems = [
    {
      question: "Quanto tempo serve per realizzare il sito?",
      answer:
        "Di solito tra 2 e 4 settimane. Il tempo dipende dalla complessità del progetto.",
    },
    {
      question: "Il sito sarà progettato per generare contatti?",
      answer:
        "Sì. Ogni sito è progettato con una struttura orientata alla conversione per trasformare i visitatori in contatti reali.",
    },
    {
      question: "In cosa è diverso da un normale sito web?",
      answer:
        "Molti siti sono solo una vetrina. Noi progettiamo sistemi digitali pensati per generare clienti e opportunità reali.",
    },
    {
      question: "Offrite supporto dopo la pubblicazione?",
      answer:
        "Sì. Possiamo continuare a supportarti con miglioramenti, aggiornamenti e ottimizzazioni.",
    },
    {
      question: "Come posso iniziare?",
      answer:
        "Puoi prenotare una consulenza gratuita di 15 minuti per capire se possiamo aiutarti.",
    },
  ];

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: "",
    servizio: "",
    messaggio: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);

      const sections = ["metodo", "pacchetto-crescita", "risultati", "servizi", "faq", "chi-siamo", "contatti"];
      let currentSection = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const serviceMap: Record<string, string> = {
      "sito-web": "Sito web ad alta conversione",
      "lead-gen": "Sistema di lead generation",
      acquisizione: "Strategia acquisizione clienti",
      altro: "Altro",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "b61e64f0-c4d2-4cb3-9d2c-fd7fd07c7f5d",
          subject: `Nuova Richiesta di Contatto da ${formData.nome} - ProfitSignal`,
          from_name: "ProfitSignal Website",
          replyto: formData.email,
          Nome: formData.nome,
          Email: formData.email,
          Telefono: formData.telefono || "Non fornito",
          Servizio: formData.servizio
            ? serviceMap[formData.servizio] || formData.servizio
            : "Non specificato",
          Messaggio: formData.messaggio,
          Fonte: "ProfitSignal Contact Form",
          Lingua: "Italiano",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        setFormData({
          nome: "",
          email: "",
          telefono: "",
          servizio: "",
          messaggio: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#pacchetto-crescita", label: "Crescita" },
  { href: "#metodo", label: "Metodo" },
  { href: "#risultati", label: "Risultati" },
  { href: "#servizi", label: "Servizi" },
  { href: "#faq", label: "FAQ" },
  { href: "#chi-siamo", label: "Chi siamo" },
  { href: "#contatti", label: "Contatti" },
];
  

  const results = [
    {
      number: "01",
      title: "Più richieste di contatto",
      description:
        "Siti progettati per trasformare i visitatori in richieste di preventivo e opportunità commerciali.",
      icon: MessageSquare,
    },
    {
      number: "02",
      title: "Traffico qualificato",
      description:
        "Campagne pubblicitarie mirate per intercettare persone realmente interessate ai tuoi servizi.",
      icon: Target,
    },
    {
      number: "03",
      title: "Crescita misurabile",
      description:
        "Monitoraggio continuo delle performance per migliorare risultati, conversioni e ritorno sull’investimento.",
      icon: LineChart,
    },
  ];

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      {/* Premium Dark Header */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-slate-900/80 backdrop-blur-2xl shadow-2xl shadow-black/20 border-b border-white/5"
            : "bg-gradient-to-b from-slate-900 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-28 min-w-0">
            <Link href="/" className="flex items-center min-w-0 max-w-[78%]">
              <Image
                src="https://ugc.same-assets.com/ToF3sWRYag7DdlJhJBnq9wd5V0fYDZym.png"
                alt="ProfitSignal"
                width={230}
                height={65}
                className="h-10 sm:h-12 w-auto max-w-full object-contain"
                priority
              />
            </Link>

            <div className="hidden lg:flex items-center gap-12 ml-16">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-all duration-300 relative group ${
                      isActive ? "text-blue-400" : "text-white/90 hover:text-blue-300"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <div className="hidden sm:flex items-center gap-1 text-sm font-medium">
                <span className="px-2 py-1 text-blue-400 font-semibold">IT</span>
                <span className="text-white/30">|</span>
                <Link
                  href="/en"
                  className="px-2 py-1 text-white/60 hover:text-white transition-colors"
                >
                  EN
                </Link>
              </div>

              <Button
                className="hidden sm:inline-flex bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:brightness-110 transition-all duration-300 hover:scale-[1.02] px-6 py-5 rounded-xl font-medium"
                onClick={() =>
                  document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Prenota una consulenza
              </Button>

              <button
                className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menu"
              >
                {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-slate-900 border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              <div className="flex items-center gap-2 text-sm font-medium pb-4 border-b border-white/10">
                <span className="px-3 py-2 text-blue-400 font-semibold">IT</span>
                <span className="text-white/30">|</span>
                <Link
                  href="/en"
                  className="px-3 py-2 text-white/60 hover:text-white transition-colors"
                >
                  EN
                </Link>
              </div>

              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`block text-lg font-medium py-2 transition-colors duration-300 ${
                      isActive ? "text-blue-400" : "text-white/90 hover:text-blue-300"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                );
              })}

              <Button
                className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl py-6 whitespace-normal break-words text-center"
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Consulenza gratuita
              </Button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_78%,rgba(124,58,237,0.18),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(59,130,246,0.16),transparent_26%),linear-gradient(180deg,#0f172a_0%,#111827_45%,#0f172a_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:36px_36px] sm:bg-[size:58px_58px]" />

          <HeroGlow className="left-[-5rem] bottom-10 w-[260px] h-[260px] sm:w-[420px] sm:h-[420px] bg-purple-500/12" />
          <HeroGlow className="right-[-4rem] top-16 w-[240px] h-[240px] sm:w-[360px] sm:h-[360px] bg-blue-500/12" />

          {heroParticles.map((p) => (
            <motion.span
              key={p.id}
              className="pointer-events-none absolute rounded-full bg-white/70 shadow-[0_0_12px_rgba(96,165,250,0.75)]"
              style={{
                left: p.left,
                top: p.top,
                width: p.size,
                height: p.size,
              }}
              initial={{ opacity: 0.16, scale: 0.8 }}
              animate={{ opacity: [0.12, 0.8, 0.12], scale: [0.8, 1.2, 0.8] }}
              transition={{
                delay: p.delay,
                duration: p.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-32 sm:pt-36 pb-20 w-full">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-blue-500/15 border border-blue-400/30 backdrop-blur-md shadow-lg shadow-blue-500/10">
                <span className="text-sm sm:text-base font-semibold text-blue-300 tracking-wide">
                  Digital Growth Partner
                </span>
              </div>

              <h1 className="mt-8 text-4xl sm:text-6xl md:text-7xl font-bold leading-[1.02] text-white">
                Fai crescere il tuo business
              </h1>

              <p className="mt-6 max-w-3xl mx-auto lg:mx-0 text-xl sm:text-2xl text-gray-300 leading-relaxed">
                Siti web, brand, social e pubblicità progettati per{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                  generare clienti
                </span>{" "}
                con strategie digitali misurabili per aziende e professionisti.
              </p>

              <div className="pt-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40 hover:brightness-110 transition-all duration-300 hover:scale-[1.04] text-lg px-10 py-6 rounded-xl font-semibold tracking-wide"
                  onClick={() =>
                    document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  OTTIENI PIÙ CLIENTI
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-3 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
                  Risultati misurabili
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(192,132,252,0.8)]" />
                  Strategie su misura
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.8)]" />
                  Crescita orientata ai clienti
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20, y: 24 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.85, delay: 0.12 }}
              className="relative"
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.28 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,38,0.95),rgba(11,17,33,0.88))] p-6 sm:p-7 shadow-[0_0_70px_rgba(59,130,246,0.10)] backdrop-blur-xl"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.14),transparent_22%)]" />

                <motion.div
                  className="pointer-events-none absolute -inset-px rounded-[28px]"
                  animate={{ opacity: [0.12, 0.28, 0.12] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(96,165,250,0.18), rgba(168,85,247,0.14), rgba(96,165,250,0.08))",
                    filter: "blur(20px)",
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-slate-300">
                    <span className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
                    Caso recente
                  </div>

                  <div className="mt-5">
                    <p className="text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-white leading-tight">
                      +42 <span className="text-violet-300">nuovi clienti</span>
                    </p>
                    <p className="mt-2 text-xl sm:text-2xl text-slate-300">in 90 giorni</p>
                  </div>

                  <div className="mt-6">
                    <HeroLineChart />
                  </div>

                  <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-200">
                    {["Traffico qualificato", "Lead", "Clienti"].map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.45 + index * 0.12, duration: 0.45 }}
                        className="group/item flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 transition-all duration-300 hover:border-blue-400/30 hover:bg-white/[0.05]"
                      >
                        <span>{item}</span>

                        <motion.span
                          className="h-2.5 w-2.5 rounded-full bg-violet-400 shadow-[0_0_14px_rgba(192,132,252,0.95)]"
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{
                            duration: 2 + index * 0.35,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pacchetto Crescita */}
      <section id="pacchetto-crescita" className="py-24 lg:py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16 sm:mb-24">
            <span className="inline-block text-sm font-semibold text-blue-500 tracking-wider uppercase mb-4">
              Pacchetto Crescita
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Un pacchetto crescita su misura per il tuo business
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              Analizziamo la tua situazione, individuiamo i punti deboli e interveniamo
              dove manca struttura o dove c’è margine di miglioramento, costruendo un
              pacchetto completo progettato per generare clienti.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: "01",
                icon: <AnalysisIcon />,
                title: "Analisi della situazione",
                desc: "Studiamo il tuo business, la tua presenza online e il tuo posizionamento per capire cosa manca e cosa frena davvero la crescita.",
              },
              {
                num: "02",
                icon: <StrategyIcon />,
                title: "Strategia su misura",
                desc: "Definiamo un pacchetto crescita personalizzato, intervenendo solo dove serve davvero per migliorare risultati e acquisizione clienti.",
              },
              {
                num: "03",
                icon: <ImplementIcon />,
                title: "Costruzione del pacchetto",
                desc: "Realizziamo ciò che serve alla tua crescita: sito web, brand, gestione Instagram e Facebook, pubblicità online e strumenti digitali.",
              },
              {
                num: "04",
                icon: <OptimizeIcon />,
                title: "Ottimizzazione continua",
                desc: "Monitoriamo i risultati e miglioriamo nel tempo il pacchetto per aumentare richieste, clienti e performance del business.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                viewport={{ once: true }}
                className="relative group min-w-0"
              >
                <div className="p-8 rounded-xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full overflow-hidden">
                  <div className="absolute -top-4 -left-2 text-6xl font-bold text-gray-100 group-hover:text-blue-100 transition-colors">
                    {step.num}
                  </div>
                  <div className="relative min-w-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white mb-6">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 break-words">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed break-words">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatedSection delay={0.2} className="mt-16 sm:mt-20">
            <div className="rounded-2xl bg-slate-900 p-8 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="inline-block text-sm font-semibold text-blue-400 tracking-wider uppercase mb-4">
                    Cosa può includere
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-5">
                    Un pacchetto completo, costruito attorno alle esigenze del cliente
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Non proponiamo una soluzione standard: costruiamo un pacchetto
                    crescita personalizzato in base a ciò che serve davvero per far
                    crescere la tua attività online.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Sito web ad alta conversione",
                    "Brand e identità visiva",
                    "Gestione Instagram e Facebook",
                    "Pubblicità online mirata",
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="rounded-xl bg-white/5 border border-white/10 p-5 text-white"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 text-center">
                <a href="#contatti" className="inline-block">
                  <Button
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/40 hover:brightness-110 transition-all duration-300 hover:scale-[1.02] py-5 sm:py-6 rounded-xl text-base sm:text-lg font-medium whitespace-normal break-words text-center px-6 sm:px-10"
                  >
                    RICHIEDI IL TUO PACCHETTO CRESCITA
                  </Button>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Metodo */}
      <section id="metodo" className="py-24 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16 sm:mb-24">
            <span className="inline-block text-sm font-semibold text-blue-500 tracking-wider uppercase mb-4">
              Il nostro approccio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Il nostro metodo
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Un processo strutturato per trasformare la tua presenza digitale in
              risultati concreti.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: "01",
                icon: <AnalysisIcon />,
                title: "Analisi",
                desc: "Studiamo il tuo mercato e il tuo posizionamento online.",
              },
              {
                num: "02",
                icon: <StrategyIcon />,
                title: "Strategia",
                desc: "Progettiamo un sistema digitale orientato alla conversione.",
              },
              {
                num: "03",
                icon: <ImplementIcon />,
                title: "Implementazione",
                desc: "Realizziamo sito web, funnel e canali di acquisizione.",
              },
              {
                num: "04",
                icon: <OptimizeIcon />,
                title: "Ottimizzazione",
                desc: "Monitoriamo i dati e miglioriamo le performance nel tempo.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                viewport={{ once: true }}
                className="relative group min-w-0"
              >
                <div className="p-8 rounded-xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full overflow-hidden">
                  <div className="absolute -top-4 -left-2 text-6xl font-bold text-gray-100 group-hover:text-blue-100 transition-colors">
                    {step.num}
                  </div>
                  <div className="relative min-w-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white mb-6">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 break-words">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed break-words">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risultati */}
      <section id="risultati" className="py-24 lg:py-40 bg-white scroll-mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16 sm:mb-24">
            <span className="inline-block text-sm font-semibold text-blue-500 tracking-wider uppercase mb-4">
              Risultati
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Risultati che il sistema ProfitSignal può generare
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Il nostro obiettivo è trasformare la tua presenza online in un flusso
              costante di contatti qualificati attraverso un sistema progettato per
              attrarre, convertire e ottimizzare.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="relative group min-w-0"
                >
                  <div className="p-8 rounded-xl bg-gray-50 hover:bg-white border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300 cursor-pointer h-full overflow-hidden">
                    <div className="absolute -top-4 -left-2 text-6xl font-bold text-gray-100 group-hover:text-blue-100 transition-colors">
                      {item.number}
                    </div>

                    <div className="relative min-w-0">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white mb-6">
                        <Icon className="h-7 w-7" strokeWidth={2.1} />
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-3 break-words">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed break-words">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Servizi */}
      <section id="servizi" className="py-24 lg:py-40 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16 sm:mb-24">
            <span className="inline-block text-sm font-semibold text-blue-400 tracking-wider uppercase mb-4">
              Cosa facciamo
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Soluzioni per la crescita digitale
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-400">
              Servizi strategici pensati per generare risultati concreti e misurabili.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <WebsiteIcon />,
                title: "Siti web ad alta conversione",
                desc: "Siti progettati per trasformare i visitatori in contatti e clienti. Non semplici vetrine, ma veri strumenti di business.",
                features: [
                  "Design orientato alla conversione",
                  "Ottimizzato per mobile",
                  "SEO-ready",
                ],
              },
              {
                icon: <LeadGenIcon />,
                title: "Sistemi di lead generation",
                desc: "Strategie digitali per generare richieste e appuntamenti qualificati in modo costante e prevedibile.",
                features: [
                  "Funnel di acquisizione",
                  "Landing page ottimizzate",
                  "Automazioni marketing",
                ],
              },
              {
                icon: <AcquisitionIcon />,
                title: "Strategie di acquisizione clienti",
                desc: "Campagne e sistemi digitali per aumentare il flusso di nuovi clienti e massimizzare il ROI.",
                features: [
                  "Campagne ads mirate",
                  "Content strategy",
                  "Analytics e reporting",
                ],
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 * i }}
                viewport={{ once: true }}
                className="group min-w-0"
              >
                <div className="h-full p-8 lg:p-10 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-500 overflow-hidden">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 break-words">{service.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed break-words">{service.desc}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-gray-300 min-w-0">
                        <CheckIcon />
                        <span className="break-words">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clienti */}
      <section className="py-24 lg:py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <AnimatedSection className="min-w-0">
              <span className="inline-block text-sm font-semibold text-blue-500 tracking-wider uppercase mb-4">
                I nostri clienti
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Per chi lavoriamo
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Collaboriamo con realtà che vogliono crescere concretamente online, non
                con chi cerca solo una presenza digitale.
              </p>

              <div className="space-y-4">
                {[
                  "Aziende locali che vogliono dominare il proprio mercato",
                  "Professionisti che desiderano più clienti qualificati",
                  "Piccole e medie imprese pronte a scalare",
                  "Attività che vogliono generare clienti online",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 * i }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm min-w-0 overflow-hidden"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-slate-700 font-medium text-base sm:text-lg leading-snug break-words min-w-0">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="relative min-w-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl blur-3xl opacity-10" />
              <div className="relative bg-white rounded-xl p-6 sm:p-10 shadow-xl border border-gray-100 overflow-hidden max-w-full">
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2 break-words">
                    Vuoi sapere se facciamo al caso tuo?
                  </h3>
                  <p className="text-gray-600">Prenota una call gratuita di 15 minuti</p>
                </div>
                <Button
                  className="w-full max-w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/40 hover:brightness-110 transition-all duration-300 hover:scale-[1.02] py-5 sm:py-6 rounded-xl text-base sm:text-lg font-medium whitespace-normal break-words text-center px-4 sm:px-6"
                  onClick={() =>
                    document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  PRENOTA LA CONSULENZA
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Chi siamo */}
      <section
        id="chi-siamo"
        className="relative py-24 lg:py-40 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-10%] top-20 w-[320px] h-[320px] bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute right-[-8%] bottom-10 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.015)_1px,transparent_1px)] bg-[size:42px_42px] sm:bg-[size:56px_56px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection className="order-2 lg:order-1 min-w-0">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="absolute -inset-6 bg-gradient-to-br from-blue-500/15 via-purple-500/10 to-blue-500/10 rounded-[32px] blur-3xl opacity-70" />

                <div className="relative rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,#081329_0%,#020817_100%)] p-8 sm:p-10 lg:p-14 min-h-[420px] flex items-center overflow-hidden shadow-[0_0_80px_rgba(59,130,246,0.08)] transition-all duration-500 hover:shadow-[0_0_120px_rgba(168,85,247,0.16)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.12),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.12),transparent_24%)]" />

                  <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:34px_34px]" />

                  <motion.div
                    className="absolute top-10 right-10 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,1)]"
                    animate={{ opacity: [0.3, 1, 0.3], scale: [0.9, 1.3, 0.9] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                  />

                  <motion.div
                    className="absolute bottom-12 left-12 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_18px_rgba(192,132,252,1)]"
                    animate={{ opacity: [0.25, 0.85, 0.25], scale: [0.9, 1.25, 0.9] }}
                    transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                  />

                  <div className="relative z-10">
                    <span className="text-xs tracking-[0.28em] text-blue-400 uppercase mb-6 block font-medium">
                      Manifesto
                    </span>

                    <blockquote className="text-[2.2rem] sm:text-[2.6rem] lg:text-[3rem] text-white font-light leading-[1.25] italic tracking-tight max-w-[680px]">
                      “Non realizziamo semplici siti web. Costruiamo sistemi digitali
                      progettati per generare opportunità di business.”
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            <AnimatedSection delay={0.15} className="order-1 lg:order-2 space-y-8 min-w-0">
              <div>
                <span className="inline-block text-sm font-semibold text-blue-500 tracking-wider uppercase mb-4">
                  Chi siamo
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.05]">
                  Il partner per la tua crescita digitale
                </h2>
              </div>

              <div className="w-20 h-[3px] rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />

              <div className="space-y-7 text-lg text-gray-600 leading-relaxed max-w-xl">
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="relative pl-5"
                >
                  <span className="absolute left-0 top-3 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.7)]" />
                  <p>
                    <strong className="text-slate-900">ProfitSignal</strong> nasce con un
                    obiettivo semplice: aiutare aziende e professionisti a trasformare
                    la presenza online in clienti reali.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="relative pl-5"
                >
                  <span className="absolute left-0 top-3 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.7)]" />
                  <p>
                    Non ci limitiamo a creare siti web esteticamente belli.
                    Progettiamo sistemi digitali strategici che lavorano per te,
                    generando contatti e opportunità di business in modo costante.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="relative pl-5"
                >
                  <span className="absolute left-0 top-3 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
                  <p>
                    Ogni progetto nasce da un&apos;analisi approfondita e si sviluppa
                    con una strategia chiara, orientata ai risultati e alla crescita
                    misurabile.
                  </p>
                </motion.div>
              </div>

              <div className="grid sm:grid-cols-3 gap-3 pt-4">
                {["Strategia", "Conversione", "Crescita misurabile"].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.08 * i }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3 }}
                    className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm px-4 py-4 text-sm font-medium text-slate-700 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-purple-600" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:36px_36px] sm:bg-[size:50px_50px]" />

        <AnimatedSection className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center min-w-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight break-words">
            Pronto a far crescere il tuo business online?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Scopri come possiamo aiutarti a generare più clienti con un sistema
            digitale personalizzato.
          </p>
          <Button
            size="lg"
            className="w-full sm:w-auto max-w-full bg-gradient-to-r from-slate-900 to-slate-800 text-white hover:from-slate-800 hover:to-slate-700 shadow-2xl shadow-black/30 hover:shadow-black/40 hover:brightness-110 transition-all duration-300 hover:scale-[1.02] text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-7 rounded-xl font-semibold border border-white/20 whitespace-normal break-words text-center"
            onClick={() =>
              document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            PRENOTA LA CONSULENZA GRATUITA
          </Button>
        </AnimatedSection>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Domande frequenti
            </h2>
            <p className="text-muted-foreground">
              Risposte alle domande più comuni.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between text-left px-6 py-5 rounded-xl transition-all duration-200 hover:bg-blue-50 hover:shadow-sm"
                >
                  <span className="text-lg font-medium">
                    {item.question}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contatti */}
      <section id="contatti" className="py-24 lg:py-40 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16 sm:mb-20">
            <span className="inline-block text-sm font-semibold text-blue-500 tracking-wider uppercase mb-4">
              Contattaci
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Iniziamo a lavorare insieme
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Compila il form per richiedere una consulenza strategica gratuita
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <AnimatedSection delay={0.1} className="min-w-0">
              <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6 sm:p-8 lg:p-10 overflow-hidden">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Richiedi una consulenza
                </h3>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700"
                  >
                    <p className="font-medium">Richiesta inviata con successo!</p>
                    <p className="text-sm">Ti contatteremo entro 24 ore.</p>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700"
                  >
                    <p className="font-medium">Si è verificato un errore.</p>
                    <p className="text-sm">
                      Per favore riprova o contattaci direttamente via email.
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                        Nome completo *
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        required
                        value={formData.nome}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50 focus:bg-white"
                        placeholder="Il tuo nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50 focus:bg-white"
                        placeholder="email@esempio.it"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefono
                      </label>
                      <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50 focus:bg-white"
                        placeholder="+39 ..."
                      />
                    </div>
                    <div>
                      <label htmlFor="servizio" className="block text-sm font-medium text-gray-700 mb-2">
                        Servizio di interesse
                      </label>
                      <select
                        id="servizio"
                        name="servizio"
                        value={formData.servizio}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-gray-50 focus:bg-white"
                      >
                        <option value="">Seleziona...</option>
                        <option value="sito-web">Sito web ad alta conversione</option>
                        <option value="lead-gen">Sistema di lead generation</option>
                        <option value="acquisizione">Strategia acquisizione clienti</option>
                        <option value="altro">Altro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="messaggio" className="block text-sm font-medium text-gray-700 mb-2">
                      Come possiamo aiutarti? *
                    </label>
                    <textarea
                      id="messaggio"
                      name="messaggio"
                      required
                      rows={4}
                      value={formData.messaggio}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none bg-gray-50 focus:bg-white"
                      placeholder="Descrivi brevemente il tuo progetto o le tue esigenze..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 shadow-lg hover:shadow-xl hover:shadow-blue-500/40 hover:brightness-110 transition-all duration-300 hover:scale-[1.02] text-base sm:text-lg py-5 sm:py-6 rounded-xl disabled:opacity-70 font-medium whitespace-normal break-words text-center"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Invio in corso...
                      </span>
                    ) : (
                      "Richiedi consulenza gratuita"
                    )}
                  </Button>
                </form>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="space-y-6 min-w-0">
              <div className="grid gap-4">
                <a
                  href="mailto:profitsignalmedia@gmail.com"
                  className="flex items-center gap-5 p-6 rounded-xl bg-white border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-lg transition-all duration-300 min-w-0"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white shrink-0">
                    <MailIcon />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <p className="text-gray-600 break-all">profitsignalmedia@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+393920314427"
                  className="flex items-center gap-5 p-6 rounded-xl bg-white border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-lg transition-all duration-300 min-w-0"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white shrink-0">
                    <PhoneIcon />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-slate-900 mb-1">Telefono</h3>
                    <p className="text-gray-600">+39 392 031 4427</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/profitsignalmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 p-6 rounded-xl bg-white border border-gray-100 hover:border-purple-200 shadow-sm hover:shadow-lg transition-all duration-300 min-w-0"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white shrink-0">
                    <InstagramIcon />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-slate-900 mb-1">Instagram</h3>
                    <p className="text-gray-600">@profitsignalmedia</p>
                  </div>
                </a>
              </div>

              <div className="p-8 rounded-xl bg-slate-900 text-white overflow-hidden">
                <h3 className="text-xl font-bold mb-4">Cosa succede dopo?</h3>
                <ol className="space-y-4">
                  {[
                    "Ricevi la nostra conferma entro 24 ore",
                    "Fissiamo una call strategica gratuita",
                    "Analizziamo insieme le tue esigenze",
                    "Ti presentiamo una proposta personalizzata",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-4 min-w-0">
                      <span className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-gray-300 break-words">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 sm:py-20 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="min-w-0">
              <div className="mb-6">
                <Image
                  src="https://ugc.same-assets.com/SXdB71-Hv5w9TGoHY8aB8PtFIZbAHVap.png"
                  alt="ProfitSignal"
                  width={230}
                  height={65}
                  className="w-auto h-12 object-contain max-w-full"
                />
              </div>

              <p className="text-gray-400 leading-relaxed">
                Sistemi digitali progettati per generare clienti, non solo traffico.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Link rapidi</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Seguici</h4>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/profitsignalmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61587405156228"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/alessandro-ceresoli-78b27a3b4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <LinkedInIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <span>© 2026 ProfitSignal. All rights reserved.</span>

            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookie-policy" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/393920314427?text=Ciao!%20Vorrei%20informazioni%20sui%20vostri%20servizi."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 sm:bottom-8 left-4 sm:left-8 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Contattaci su WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        <span className="hidden md:block absolute left-16 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Scrivici su WhatsApp
        </span>
      </a>

      {/* Scroll to top */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={scrollToTop}
          className="fixed bottom-24 sm:bottom-8 right-4 sm:right-8 w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
          aria-label="Torna su"
        >
          <ArrowUpIcon />
        </motion.button>
      )}
    </main>
  );
}
