import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircleHeart,
  Package,
} from "lucide-react";

function RedditIcon({
  size = 24,
  strokeWidth = 2,
  className,
}: {
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="12" cy="14.5" rx="7.5" ry="5.5" />
      <path d="M12 9V7.2C12 5.4 13 4.4 14.6 4.4" />
      <circle cx="16.2" cy="4.2" r="1.4" />
      <circle cx="9.4" cy="13.8" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.6" cy="13.8" r="1" fill="currentColor" stroke="none" />
      <path d="M9.3 16.9c1.7 1.3 3.7 1.3 5.4 0" />
    </svg>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jainil Prajapati — Links" },
      {
        name: "description",
        content:
          "Find Jainil Prajapati's portfolio, open source, npm packages, and social profiles.",
      },
      { property: "og:title", content: "Jainil Prajapati — Links" },
      {
        property: "og:description",
        content:
          "Find Jainil Prajapati's portfolio, open source, npm packages, and social profiles.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const links = [
  {
    number: "01",
    title: "Explore my portfolio",
    description: "Selected products, experiments & case studies",
    href: "https://jaainil.com",
    icon: BriefcaseBusiness,
    tone: "blue",
  },
  {
    number: "02",
    title: "GitHub",
    description: "Open-source builds & Dokploy templates",
    href: "https://github.com/jaainil",
    icon: Github,
    tone: "red",
  },
  {
    number: "03",
    title: "npm packages",
    description: "Writenex CMS & more, published as ~imjp",
    href: "https://www.npmjs.com/~imjp",
    icon: Package,
    tone: "yellow",
  },
  {
    number: "04",
    title: "LinkedIn",
    description: "Experience, updates and conversations",
    href: "https://www.linkedin.com/in/jaainil/",
    icon: Linkedin,
    tone: "gray",
  },
  {
    number: "05",
    title: "Instagram",
    description: "The main account — life outside the build",
    href: "https://www.instagram.com/jaainil/",
    icon: Instagram,
    tone: "blue",
  },
  {
    number: "06",
    title: "Instagram — where I yapp",
    description: "AI, dev life & hot takes on @yapping.jaainil",
    href: "https://www.instagram.com/yapping.jaainil/",
    icon: MessageCircleHeart,
    tone: "red",
  },
  {
    number: "07",
    title: "Reddit",
    description: "u/enough_jainil — occasional posts & r/AI_India",
    href: "https://www.reddit.com/user/enough_jainil/",
    icon: RedditIcon,
    tone: "yellow",
  },
];

function BrickPortrait() {
  return (
    <div className="brick-portrait" aria-hidden="true">
      <span className="brick brick-hair" />
      <span className="brick brick-head" />
      <span className="brick brick-eye brick-eye-left" />
      <span className="brick brick-eye brick-eye-right" />
      <span className="brick brick-smile" />
      <span className="brick brick-body" />
      <span className="brick brick-shirt" />
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <div className="mx-auto w-full max-w-2xl px-4 pb-12 pt-5 sm:px-6 sm:pt-8">
        <header className="mb-8 flex items-center justify-between border-b-2 border-keyline pb-4">
          <a href="#top" className="flex items-center gap-2 font-black" aria-label="Jainil home">
            <span className="logo-brick">
              <span />
            </span>
            JP
          </a>
          <span className="kit-label">BUILD KIT · 2026</span>
        </header>

        <section id="top" className="relative mb-9 grid grid-cols-[1fr_auto] items-center gap-5">
          <div>
            <span className="status-chip">AVAILABLE FOR BUILDS</span>
            <h1 className="mt-5 text-5xl font-black leading-[0.92] sm:text-7xl">
              JAINIL
              <br />
              PRAJAPATI
            </h1>
            <p className="mt-4 max-w-md text-base font-medium text-secondary-foreground sm:text-lg">
              Product-minded developer building useful things, one piece at a time.
            </p>
            <p className="mt-3 flex items-center gap-1.5 text-sm font-bold text-muted-foreground">
              <MapPin size={16} strokeWidth={2.5} /> Anand, Gujarat, India
            </p>
          </div>
          <BrickPortrait />
        </section>

        <section aria-labelledby="links-heading">
          <div className="mb-4 flex items-end justify-between">
            <h2 id="links-heading" className="text-2xl font-black sm:text-3xl">
              PICK A PIECE
            </h2>
            <span className="text-xs font-black">{links.length} PIECES</span>
          </div>
          <div className="space-y-4">
            {links.map(({ number, title, description, href, icon: Icon, tone }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="link-piece group"
              >
                <span className={`piece-number piece-${tone}`}>{number}</span>
                <span className="piece-icon">
                  <Icon size={22} strokeWidth={2.5} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-black sm:text-lg">{title}</span>
                  <span className="mt-0.5 block text-xs font-medium text-muted-foreground sm:text-sm">
                    {description}
                  </span>
                </span>
                <ArrowUpRight className="piece-arrow" size={22} strokeWidth={2.5} />
              </a>
            ))}
          </div>
        </section>

        <section className="contact-sheet mt-10">
          <div>
            <span className="block text-xs font-black">HAVE A PROJECT IN MIND?</span>
            <h2 className="mt-1 text-2xl font-black">Let’s build it together.</h2>
          </div>
          <a className="email-button" href="mailto:jainilprajapati9@gmail.com">
            <Mail size={19} strokeWidth={2.5} /> Say hello
          </a>
        </section>

        <footer className="mt-9 flex items-center justify-between text-xs font-bold">
          <span>© 2026 JAINIL PRAJAPATI</span>
          <span>MADE WITH 42 PIECES</span>
        </footer>
      </div>
    </main>
  );
}
