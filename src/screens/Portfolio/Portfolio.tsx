import { Github, Twitter, Linkedin, ExternalLink, Globe } from "lucide-react";
import { Button } from "../../components/ui/button";
import qrBillingImg from "../../../assets/qr billing 4.png";
import ecommerceImg from "../../../assets/ecommerce image 3.png";
import myProfilePic from "../../../assets/mypivpng.png";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Lab", href: "#lab" },
];

const experienceCards = [
  {
    title: "CIB on the Mobile",
    subtitle: "Digital Onboarding",
    description:
      "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    color: "from-[#130428] via-[#251043] to-[#250c45]",
    accent: "#7127ba",
    imgBg: "from-[#3a0e6b] to-[#1a0640]",
    icon: "📱",
    tag: "Mobile App",
  },
  {
    title: "CIB on the Mobile",
    subtitle: "Smart Banking",
    description:
      "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    color: "from-[#130428] via-[#251043] to-[#250c45]",
    accent: "#9d4dd4",
    imgBg: "from-[#4a1285] to-[#200855]",
    icon: "💳",
    tag: "FinTech",
  },
  {
    title: "CIB on the Mobile",
    subtitle: "User Dashboard",
    description:
      "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    color: "from-[#130428] via-[#251043] to-[#250c45]",
    accent: "#7127ba",
    imgBg: "from-[#3a0e6b] to-[#1a0640]",
    icon: "📊",
    tag: "Dashboard",
  },
  {
    title: "CIB on the Mobile",
    subtitle: "Payment System",
    description:
      "Take your client onboard seamlessly by our amazing tool of digital onboard process.",
    color: "from-[#130428] via-[#251043] to-[#250c45]",
    accent: "#9d4dd4",
    imgBg: "from-[#4a1285] to-[#200855]",
    icon: "💰",
    tag: "Payments",
  },
];

const techStack = [
  { name: "React", color: "#61DAFB" },
  { name: "Node.js", color: "#6cc24a" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "MongoDB", color: "#47A248" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Next.js", color: "#ffffff" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "Docker", color: "#2496ED" },
  { name: "Git", color: "#F05032" },
];

const featuredProjects = [
  {
    tag: "Featured Project",
    title: "SMART QR BILLING",
    description:
      "This is a Billing Software For Restaurants with Smart QR Ordering feature, Smart Billing, Easy Ordering, Safe payments. Separate Portals For Admin, Customer and Waiter.",
    image: qrBillingImg,
    bgColor: "#2b0b3a",
    links: [
      { icon: <Globe size={18} />, label: "Live Demo" },
      { icon: <Github size={18} />, label: "GitHub" },
    ],
  },
  {
    tag: "Featured Project",
    title: "E-Commerce",
    description:
      "This is a E-Commerce website. The Admin Can Add as Many Products He Want, He can Manage his Users, Orders, Payments, etc., With Smooth User experience.",
    image: ecommerceImg,
    bgColor: "#2b0b3a",
    links: [
      { icon: <Globe size={18} />, label: "Live Demo" },
      { icon: <Github size={18} />, label: "GitHub" },
    ],
  },
];

// Logo SVG inline
const LogoMark = ({ size = 28 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 8L32 8L16 20L32 32L8 32"
      stroke="white"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TechBadge = ({ name, color }: { name: string; color: string }) => (
  <span
    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-poppins text-xs font-medium text-white/80 backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10"
    style={{ boxShadow: `0 0 8px ${color}30` }}
  >
    <span
      className="h-2 w-2 flex-shrink-0 rounded-full"
      style={{ backgroundColor: color }}
    />
    {name}
  </span>
);

export const Portfolio = (): JSX.Element => {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#0b0120] text-white">
      {/* Glow blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute left-[10%] top-[5%] h-[200px] w-[200px] md:h-[300px] md:w-[300px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(118,60,172,0.5)_0%,transparent_100%)] blur-2xl" />
        <div className="absolute right-[15%] top-[40%] h-[250px] w-[250px] md:h-[400px] md:w-[400px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(78,20,152,0.4)_0%,transparent_100%)] blur-2xl" />
        <div className="absolute bottom-[10%] left-[20%] h-[200px] w-[200px] md:h-[350px] md:w-[350px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(113,39,186,0.35)_0%,transparent_100%)] blur-2xl" />
      </div>



      {/* Hero Section */}
      <section
        id="home"
        className="relative z-10 max-w-[1100px] px-4 pb-2 pt-6 md:px-10 md:pb-4 md:pt-16"
      >
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-10">
          {/* Avatar */}
          <div className="relative flex h-[180px] w-[180px] md:h-[250px] md:w-[250px] flex-shrink-0 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(118,60,172,0.85)_0%,transparent_70%)]" />
            <div className="absolute inset-[6px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.15)_18%,transparent_100%)]" />
            <img
              src={myProfilePic}
              alt="Sreeram"
              className="relative z-10 h-[200px] w-[200px] md:h-[290px] md:w-[290px] rounded-full object-cover object-top ring-2 ring-[#7127ba]/60"
            />
          </div>

          {/* Intro text */}
          <div className="relative text-center md:text-left">
            <div className="mb-2 flex flex-wrap items-center justify-center md:justify-start gap-1.5 font-preahvihear text-[14px] md:text-[17px] tracking-[0.34px]">
              <span className="text-white underline decoration-white/30 underline-offset-4">
                Hi i am
              </span>
              <span className="text-[#7127ba] underline decoration-[#7127ba]/50 underline-offset-4">
                Sreeram
              </span>
            </div>
            <p className="mb-2 font-preahvihear text-[14px] md:text-[17px] tracking-[0.34px] text-white underline decoration-white/30 underline-offset-4">
              A Designer who
            </p>
            <div className="mb-4 inline-block">
              <h1 className="font-preahvihear text-[32px] md:text-[50px] font-normal leading-[1.05] tracking-[0.5px]">
                <span className="text-white">
                  Judges a book
                  <br />
                  by its{" "}
                </span>
                <span className="relative inline-block">
                  <span className="pointer-events-none absolute left-1/2 top-1/2 h-[42px] w-[110px] md:h-[52px] md:w-[170px] -translate-x-1/2 -translate-y-1/2 -rotate-[4.74deg] rounded-full border border-white/70" />
                  <span className="relative z-10 text-[#7127ba]">cover</span>
                </span>
                <span className="text-white">...</span>
              </h1>
            </div>
            <p className="-mt-1 md:mt-0 font-preahvihear text-[10px] md:text-[11px] tracking-[0.22px] text-white/80">
              Because if the cover does not impress you what else can?
            </p>
          </div>
        </div>
      </section>

      {/* Full stack section - right edge */}
      <div className="relative z-10 flex justify-start md:justify-end px-4 pb-2 md:px-10 md:pb-4">
        <div className="max-w-full md:max-w-[760px]">

          {/* Mobile: stacked layout with side-by-side text below */}
          <div className="flex flex-col gap-2 md:hidden rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
            <h2 className="font-preahvihear text-[20px] whitespace-nowrap font-normal leading-[1.2] tracking-[0px] text-white">
              I&apos;m a Full Stack{" "}
              <span className="text-[#471977]">Developer</span>
            </h2>
            <div className="mt-3 w-full">
              <ul className="font-preahvihear text-[12px] font-normal leading-[1.6] tracking-[0.3px] text-white/90 list-disc pl-5 pr-2">
                <li>A self-taught UI/UX designer</li>
                <li>Good in full stack development</li>
                <li>Can manage frontend and backend perfectly</li>
                <li>I make meaningful and delightful digital products</li>
                <li>Creating equilibrium between user needs and business goal</li>
              </ul>
            </div>
          </div>

          {/* Desktop: original layout */}
          <div className="hidden md:block">
            <h2 className="font-preahvihear text-[50px] font-normal leading-[1.1] tracking-[1px] text-white">
              I&apos;m a Full Stack{" "}
              <span className="text-[#471977]">Developer</span>
            </h2>
            <p className="mt-2 font-preahvihear text-[21px] tracking-[0.42px] text-white/90">
              I&apos;m sreeram, i work for startups, and as freellancer ...
            </p>
            <div className="mt-7 space-y-1 font-preahvihear text-[20px] font-normal leading-[1.65] tracking-[0.44px] text-white/85">
              <p>
                A self-taught UI/UX designer,Im good in full stack development ,
                can manage frontend and backend perfectly,
              </p>
              <p>
                I make meaningful and delightful digital products that create an
                equilibrium
              </p>
              <p>between user needs and business goaal.</p>
            </div>
          </div>

        </div>
      </div>


      {/* Cross-functional / Tech Stack Section */}
      <section className="relative z-10 mx-auto max-w-[1100px] px-4 pt-4 pb-6 md:px-10 md:py-16">
        <div className="mx-auto max-w-[700px] text-center">
          <h3 className="font-preahvihear text-[18px] md:text-[26px] font-normal leading-[1.4] tracking-[0.48px] text-white">
            I&apos;m currently looking to join a{" "}
            <span className="text-[#a261ff]">cross-functional</span> team
          </h3>
          <p className="mt-1 font-preahvihear text-[12px] md:text-[17px] tracking-[0.06px] text-white/75">
            that values improving people&apos;s lives through accessible design
          </p>
        </div>

        {/* Tech stack badges */}
        <div className="mt-6 md:mt-10 flex flex-wrap justify-center gap-2">
          {techStack.map((tech) => (
            <TechBadge key={tech.name} name={tech.name} color={tech.color} />
          ))}
        </div>

        {/* Glowing orb / logo visualization */}
        <div className="relative mx-auto mt-10 md:mt-16 flex h-[200px] md:h-[340px] w-full max-w-[880px] items-center justify-center">
          {/* Outer rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[200px] w-[320px] md:h-[340px] md:w-[700px] rounded-full border border-white/5" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[160px] w-[260px] md:h-[280px] md:w-[580px] rounded-full border border-white/8" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[120px] w-[210px] md:h-[220px] md:w-[480px] rounded-full border border-white/10" />
          </div>
          {/* Glow */}
          <div className="absolute h-[160px] w-[240px] md:h-[300px] md:w-[500px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(118,60,172,0.75)_0%,transparent_100%)]" />
          {/* Inner glow sphere */}
          <div className="absolute h-[100px] w-[100px] md:h-[180px] md:w-[180px] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(113,39,186,0.9)_0%,rgba(48,16,128,0.6)_40%,transparent_70%)]" />
          {/* Logo in center */}
          <div className="relative z-10 flex h-[50px] w-[50px] md:h-[72px] md:w-[72px] items-center justify-center">
            <LogoMark size={52} />
          </div>

          {/* Floating sparkles */}
          {[
            "top-[14%] left-[18%]",
            "top-[22%] right-[20%]",
            "top-[60%] left-[12%]",
            "top-[70%] right-[18%]",
            "top-[40%] left-[5%]",
            "top-[35%] right-[6%]",
          ].map((pos, i) => (
            <div
              key={i}
              className={`absolute ${pos} h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-[#a261ff]/70`}
              style={{ boxShadow: "0 0 6px #a261ff" }}
            />
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section
        id="lab"
        className="relative z-10 mx-auto max-w-[1100px] px-4 pt-4 pb-8 md:px-10 md:py-10"
      >
        <div className="space-y-8 md:space-y-20">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="grid items-start gap-5 md:gap-8 grid-cols-1 md:grid-cols-[minmax(0,400px)_minmax(0,1fr)]"
            >
              {/* Project info */}
              <article>
                <p className="font-poppins text-sm md:text-base font-semibold tracking-[0.32px] text-[#9757d3]">
                  {project.tag}
                </p>
                <h3 className="mt-1 md:mt-2 font-poppins text-[22px] md:text-[34px] font-semibold tracking-[0.68px] text-[#ccd6f6]">
                  {project.title}
                </h3>
                <p className="mt-2 md:mt-4 font-preahvihear text-[13px] md:text-[18px] leading-[1.65] tracking-[0.44px] text-white/80">
                  {project.description}
                </p>
                <div className="mt-4 md:mt-6 flex items-center gap-3">
                  {project.links.map((link, i) => (
                    <button
                      key={i}
                      type="button"
                      className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/70 transition-all hover:border-[#7127ba]/60 hover:bg-[#7127ba]/20 hover:text-white"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </button>
                  ))}
                </div>
              </article>

              {/* Project panel */}
              <div
                className="rounded-[8px] md:rounded-[10px] p-3 md:p-6 shadow-[0_0_60px_rgba(113,39,186,0.15)]"
                style={{ backgroundColor: project.bgColor }}
              >
                <div className="relative h-[200px] md:h-[340px] w-full overflow-hidden rounded-[6px] md:rounded-[8px]">
                  {/* Dark overlay on image */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#1a0640]/40 to-transparent" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-contain"
                  />
                  {/* Floating project title badge */}
                  <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 z-20 rounded-lg border border-white/10 bg-[#0b0120]/80 px-2 py-1 md:px-3 md:py-1.5 backdrop-blur-sm">
                    <p className="font-poppins text-[10px] md:text-xs font-semibold text-white">
                      {project.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Footer */}
      <footer
        id="contact"
        className="relative z-10 mx-auto max-w-[1100px] px-4 pt-6 pb-8 md:px-10 md:pb-20 md:pt-20"
      >
        <div className="max-w-[500px]">
          <h2 className="font-preahvihear text-[18px] md:text-[25px] tracking-[0.5px] text-white">
            Contact
          </h2>
          <div className="mt-5 md:mt-8 space-y-1 font-preahvihear text-[12px] md:text-[15px] leading-[1.65] tracking-[0.3px] text-white/75">
            <p>
              I&apos;m currently looking to join a cross-functional team that
              values improving people&apos;s lives
            </p>
            <p>
              through accessible design. or have a project in mind? Let&apos;s
              connect.
            </p>
            <p className="mt-4 md:mt-5 text-white">sreeram0242@gmail.com</p>
            <div className="mt-5 md:mt-6">
              <Button
                onClick={() => window.open('https://wa.me/919629661668', '_blank')}
                className="bg-[#7127ba] text-white hover:bg-[#a261ff] transition-colors font-poppins text-sm px-6 py-5 rounded-full shadow-[0_0_15px_rgba(113,39,186,0.3)]"
              >
                Contact Now
              </Button>
            </div>
          </div>
          <div className="mt-6 md:mt-8 flex items-center gap-2.5 md:gap-3">
            {[
              {
                icon: <Github size={18} />,
                href: "#",
                label: "GitHub",
              },
              {
                icon: <Twitter size={18} />,
                href: "#",
                label: "Twitter",
              },
              {
                icon: <Linkedin size={18} />,
                href: "#",
                label: "LinkedIn",
              },
              {
                icon: <ExternalLink size={18} />,
                href: "#",
                label: "Portfolio",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/60 transition-all hover:border-[#7127ba]/50 hover:bg-[#7127ba]/15 hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 md:mt-16 border-t border-white/5 pt-6 md:pt-8 text-center font-poppins text-[10px] md:text-xs text-white/30">
          Designed &amp; Built by Sreeram &mdash; {new Date().getFullYear()}
        </div>
      </footer>
    </main>
  );
};
