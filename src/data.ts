import { Feature, ShowcaseProject, StatItem, Testimonial, PricingPlan, FAQItem } from "./types";

export const FEATURES: Feature[] = [
  {
    id: "f1",
    title: "Quantum Neural Grid",
    description: "Connect to decentralized synthetic synapses running at sub-atomic wave state velocities. Zero latency, infinite intelligence routing.",
    iconName: "Cpu",
    tag: "Computing",
    glowColor: "cyan"
  },
  {
    id: "f2",
    title: "Dimensional Projection",
    description: "Render complex spatial environments natively in client viewpoints. Real-time holographic depth mapping with glass refractive physics.",
    iconName: "Layers",
    tag: "Visuals",
    glowColor: "purple"
  },
  {
    id: "f3",
    title: "Entropy Core Security",
    description: "Cryptographically shield your network against quantum decryption matrices. Zero-Trust verification powered by absolute noise generation.",
    iconName: "Shield",
    tag: "Security",
    glowColor: "pink"
  },
  {
    id: "f4",
    title: "Hyper-Light Cores",
    description: "Deploy serverless nodes positioned on orbiting satellites. True physical low-orbit edge acceleration across the atmosphere.",
    iconName: "Zap",
    tag: "Infrastructure",
    glowColor: "blue"
  },
  {
    id: "f5",
    title: "Spatially Linked APIs",
    description: "Interact with real-world geographic endpoints through physical sensor bindings. Integrate smart-cities with single-digit code lines.",
    iconName: "Globe",
    tag: "APIs",
    glowColor: "cyan"
  },
  {
    id: "f6",
    title: "Bio-Telemetry Sync",
    description: "Synchronize user experience design dynamically targeting biological rhythmic metrics. Custom adaptively tuned responsive dark themes.",
    iconName: "Heart",
    tag: "Telemetry",
    glowColor: "purple"
  }
];

export const PROJECTS: ShowcaseProject[] = [
  {
    id: "p1",
    title: "Chronos Portal v9",
    subtitle: "Absolute Time-Stamping Blockchains",
    category: "Temporal Ledger",
    imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    link: "#",
    specs: [
      { label: "Block Velocity", value: "0.02ms" },
      { label: "Throughput", value: "8.4M tps" },
      { label: "Consensus", value: "Entropy Core" }
    ]
  },
  {
    id: "p2",
    title: "Nebula Core Engine",
    subtitle: "Autonomous Space-Station Orchestrators",
    category: "Holographic Compute",
    imageSrc: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800",
    link: "#",
    specs: [
      { label: "Nodes", value: "14,200 Orbit" },
      { label: "SLA", value: "99.99999%" },
      { label: "Compute Class", value: "Holo v2" }
    ]
  },
  {
    id: "p3",
    title: "Singularity UI SDK",
    subtitle: "Self-Modifying Frontend Atoms",
    category: "Generative Systems",
    imageSrc: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
    link: "#",
    specs: [
      { label: "Dynamic Compilation", value: "On-the-fly" },
      { label: "File Size", value: "1.4kb Brotli" },
      { label: "Adaptive Density", value: "Responsive" }
    ]
  },
  {
    id: "p4",
    title: "Luminescence Hub",
    subtitle: "Atmospheric Laser Data Relays",
    category: "Photonics",
    imageSrc: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&q=80&w=800",
    link: "#",
    specs: [
      { label: "Laser Range", value: "540km" },
      { label: "Bandwidth", value: "1.2 Pbps" },
      { label: "MediaType", value: "Plasma Wave" }
    ]
  }
];

export const STATS: StatItem[] = [
  {
    id: "s1",
    value: "420",
    label: "Compute Operations",
    suffix: " TFLOPs/s",
    glowClass: "text-neon-blue"
  },
  {
    id: "s2",
    value: "0.08",
    label: "Neural-Mesh Latency",
    suffix: " ms",
    glowClass: "text-neon-purple"
  },
  {
    id: "s3",
    value: "99.999",
    label: "Uptime Consensus",
    suffix: " %",
    glowClass: "text-neon-cyan"
  },
  {
    id: "s4",
    value: "1.2",
    label: "Data Packet Wave Velocity",
    suffix: " C",
    glowClass: "text-neon-pink"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Dr. Elara Vance",
    role: "Director of Spatial Compute",
    company: "Apex Neuro",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    quote: "Integrating Aetheris into our quantum neural grids felt like moving from dark ages to lightspeed. The holographic rendering capabilities are pristine, rendering 10M complex shapes under sub-millisecond timelines.",
    rating: 5
  },
  {
    id: "t2",
    name: "Kaelen Drake",
    role: "Chief Architect",
    company: "Aetheris Lab Labs",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    quote: "Standard web architectures are completely bound to flat coordinates. Aetheris gives us a hyperdimensional canvas where design responds directly to cursor motion field vectors. Absolute absolute masterclass.",
    rating: 5
  },
  {
    id: "t3",
    name: "Myra Thorne",
    role: "Lead Interactive Designer",
    company: "Velas Dynamics",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    quote: "We replaced our Vercel/Linear templates with the custom 3D web experiences designed by Aetheris templates. Conversion jumped by 84% overnight. The ambient glows work smoothly on both standard screens and mobile.",
    rating: 5
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "pr1",
    name: "Pulse",
    priceMonthly: 49,
    priceYearly: 39,
    description: "Start exploring spatial physics on standard client screens. Fits developer portfolios and innovative products.",
    features: [
      "Access to base Three.js 3D assets",
      "Dynamic mouse glow tracker",
      "Responsive glassmorphism components",
      "Inter display typography kit",
      "Quantum latency routing up to 10 nodes"
    ],
    isPopular: false,
    glowColor: "blue",
    ctaText: "Initiate Pulse Engine"
  },
  {
    id: "pr2",
    name: "Aether Core",
    priceMonthly: 129,
    priceYearly: 99,
    description: "Deploy ultra-premium interactive graphics linked to physical sensor APIs. Designed for scaling hardware & software brands.",
    features: [
      "Every Pulse feature included",
      "Holographic particle custom shaders",
      "Hover physics gravity settings",
      "Full 3D tilt custom component pack",
      "Satellite-linked orbital nodes routing",
      "Priority telemetry-driven UI adaptations"
    ],
    isPopular: true,
    glowColor: "purple",
    ctaText: "Empower My Core"
  },
  {
    id: "pr3",
    name: "Cosmic Ultimate",
    priceMonthly: 299,
    priceYearly: 249,
    description: "The ultimate hyperdimensional toolkit containing continuous custom asset creation and custom 3D mesh rendering.",
    features: [
      "Every Core feature included",
      "Unlimited custom 3D scene objects",
      "Custom atmospheric visual templates",
      "Direct sound-wave visualizers hook",
      "Complete dedicated space-time channels",
      "24/7 Chief Quantum Architect support"
    ],
    isPopular: false,
    glowColor: "pink",
    ctaText: "Aero-Space Entry"
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "q1",
    question: "How does the Three.js canvas affect performance on mobile?",
    answer: "Aetheris uses GPU-accelerated requestAnimationFrame cycles and automatic pixel ratio throttling. Under mobile environments, the object complexity and particle count scales down smoothly so we maintain 60FPS on any phone."
  },
  {
    id: "q2",
    question: "Do I need dedicated graphics cards to run these visuals?",
    answer: "Absolutely not. The layouts utilize standard WebGL 2.0 capabilities and optimized vertex calculations which compile directly to any standard system integrated graphics, including mobile and low-power devices."
  },
  {
    id: "q3",
    question: "Are the cursor trails and magnetic hovers customizable?",
    answer: "Yes, you can configure damping thresholds, mass gravity multipliers, magnetic attraction radii, and customize gradients via easily readable tailwind classes or react configs."
  },
  {
    id: "q4",
    question: "Does this template integrate with modern frameworks like Vite and Next.js?",
    answer: "Yes. The experience is written cleanly in standard React with Framer Motion and Tree-Shaken Three.js modules, making it immediately drop-in ready for modern build pipelines."
  },
  {
    id: "q5",
    question: "What is physically orbital computing edge sync?",
    answer: "It refers to edge endpoints deployed as synthetic micro-processes on orbiting telemetry satellites, shortening network routing paths for continental scale cross-hemisphere handshakes!"
  }
];
