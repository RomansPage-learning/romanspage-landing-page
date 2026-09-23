export type SubService = {
  name: string;
  desc: string;
};

export type PricingTier = {
  name: string;
  staffRange: string;
  price: string | null; // null → "Speak to a consultant"
  features: string[];
};

export type PracticeArea = {
  id: string;
  navLabel: string;
  title: string;
  teaser: string;
  intro: string;
  cta: string;
  icon: "people" | "chart" | "bulb" | "chip";
  bannerImage: string;
  subs: SubService[];
  pricingTiers?: PricingTier[];
  metaDescription?: string;
  externalLink?: { label: string; href: string };
};

export const practiceAreas: PracticeArea[] = [
  {
    id: "hr",
    navLabel: "HR Consulting and Advisory",
    title: "HR Consulting and Advisory",
    teaser:
      "Our consulting backbone — talent management, recruitment, capacity and governance — a professional advisory practice, not merely \"HR support.\"",
    intro:
      "Our consulting backbone — a professional advisory practice, not merely outsourced HR support. We help SMEs and growing organisations build the talent, structure and governance to scale with confidence, combining hands-on recruitment and payroll delivery with the kind of organisational assessment and capacity-building work that changes how a business actually runs day to day.",
    cta: "Talk to an HR advisor",
    icon: "people",
    bannerImage: "/brand/stock/professional-portrait-1.jpg",
    subs: [
      {
        name: "HR4SMEs",
        desc: "A complete outsourced HR function built for small and growing teams — end-to-end recruitment and onboarding, HR policy and documentation, payroll processing with full statutory compliance (Tax, Pension, NSITF, NHF), performance management and KPI tracking, and day-to-day employee relations. Designed so you never need an in-house HR department to run a professional, compliant workplace.",
      },
      {
        name: "Recruitment & Talent Placement",
        desc: "End-to-end sourcing, screening, interviewing and placement across every function — with a distinctive specialism in the agriculture value chain, including agribusiness specialists, field officers, extension workers and technical experts that generalist recruiters struggle to find. We manage the full hiring cycle, from role scoping and shortlisting to offer negotiation and onboarding support.",
      },
      {
        name: "Organisational Assessment",
        desc: "A structured diagnostic of your organisation — reviewing reporting lines, role clarity, staffing gaps, operational bottlenecks and governance practices — to surface exactly where structure, capacity or process is holding performance back. You get a clear, prioritised set of findings and recommendations, not an audit report that sits on a shelf.",
      },
      {
        name: "Capacity Building & HR Outsourcing",
        desc: "Hands-on staff training and leadership development, SOP design and documentation, and ongoing HR outsourcing for SMEs that need a dependable people function without the overhead of building one internally. We act as your embedded HR partner — available for policy questions, disciplinary guidance and workforce planning as your team grows.",
      },
    ],
    pricingTiers: [
      {
        name: "Startup",
        staffRange: "1–20 staff",
        price: "₦79,999/mo",
        features: [
          "Payroll & monthly statutory remittances",
          "Annual statutory filing & returns",
          "Recruitment (maximum of 3 specialised roles per month)",
          "HR policies, handbook & contracts reviews",
          "Onboarding & employee engagement",
          "Performance appraisals and recommendation",
          "Leave management & HR records",
          "Unlimited HR advisory support",
        ],
      },
      {
        name: "SME",
        staffRange: "21–50 staff",
        price: "₦149,999/mo",
        features: [
          "Everything in Startup, plus:",
          "Full statutory registrations (tax, PenCom, NSITF, NHF, ITF)",
          "Recruitment (maximum of 5 specialised roles per month)",
          "Background check and former employer verification",
          "Training needs assessments and recommendations",
          "Training via Coursademia @ 50% discounted rate",
          "Unlimited HR advisory support",
          "Employee relations & grievance handling",
          "Benefits & HMO administration (SME)",
          "Disciplinary & exit management (SME)",
          "Monthly HR reports",
          "Quarterly strategic HR review",
        ],
      },
      {
        name: "Corporate",
        staffRange: "51 & above",
        price: null,
        features: [
          "Everything in SME, plus:",
          "Fully customised HR dashboard",
          "Visit to the office once monthly",
          "Recruitment (unlimited)",
          "100% free trainings via Coursademia",
          "Benefits survey and recommendation",
          "Dedicated account manager",
        ],
      },
    ],
  },
  {
    id: "enterprise-agri-sme",
    navLabel: "Enterprise & Agri-SME Growth",
    title: "Enterprise & Agri-SME Growth Advisory Services",
    teaser:
      "Our Business Development Support Programme (BDSP) — the practical, end-to-end pathway that takes a business from \"where we are\" to \"investment-ready and growing.\"",
    intro:
      "Our Business Development Support Programme (BDSP) — the practical, end-to-end pathway that takes a business from \"where we are\" to \"investment-ready and growing.\" We combine structured diagnostics, funding-readiness work, hands-on business development, technology tools, and capacity building into a single engagement, so businesses don't have to piece together five different consultants. Since 2014, we've supported over 3,200 SMEs and agri-SMEs and helped unlock more than US$10 million in financing for the businesses we work with.",
    cta: "Explore business support",
    icon: "chart",
    bannerImage: "/brand/stock/meeting-handshake.jpg",
    subs: [
      {
        name: "Organisational Assessment & Diagnostics",
        desc: "A ground-up review of how the business runs today — business model, operations, staffing structure, systems, and financial readiness — to pinpoint what's constraining growth. Every engagement starts here: the output is a prioritised, practical action plan, not a generic audit report that sits on a shelf.",
      },
      {
        name: "Investment Readiness Programme",
        desc: "We get businesses genuinely fundable, not just \"pitch-ready.\" That means structuring the business case, cleaning up financial models, tightening governance and compliance, and preparing the documentation that investors, lenders and development finance institutions actually scrutinise before they commit.",
      },
      {
        name: "Business Development Support",
        desc: "Hands-on support building the tools a growing business needs to win work and win backers: business plans, funding and grant proposals, market-access strategy, and marketing support to help businesses reach the customers and partners they're targeting. Tailored to where the business actually is today, not a template.",
      },
      {
        name: "Technology Integration",
        desc: "We help businesses adopt practical digital tools that improve efficiency, visibility and scale. Support may include digital record-keeping, reporting systems, customer and market tools, process automation, digital learning and technology solutions that strengthen day-to-day operations.",
      },
      {
        name: "Access to Finance Support",
        desc: "We help enterprises navigate the journey from being finance-ready to securing the right opportunity. Our support covers grant and loan applications, funding proposals, financial models, investor documentation, due-diligence preparation and facilitated linkages to grant, loan and equity partners.",
      },
      {
        name: "Capacity Building Programmes",
        desc: "Targeted training, coaching and technical assistance designed to strengthen the capabilities of founders, managers and teams. Our programmes equip enterprises with the knowledge, practical tools and confidence to make better decisions, improve performance, adapt to changing market demands and build sustainable, growth-ready businesses.",
      },
    ],
    metaDescription:
      "Organisational diagnostics, investment readiness, business development support, technology integration, access to finance and capacity building — one connected Business Development Support Programme (BDSP) for SMEs and agri-SMEs ready to scale.",
  },
  {
    id: "skills-employability",
    navLabel: "Workforce Development & Job Creation",
    title: "Workforce Development and Job Creation Programmes",
    teaser:
      "We design and deliver integrated programmes that equip young people and women with relevant skills, connect them to real employment and enterprise opportunities, and support sustainable income creation.",
    intro:
      "We design and deliver integrated programmes that equip young people and women with relevant skills, connect them to real employment and enterprise opportunities, and support sustainable income creation. With over 50,000 young people trained, our focus is on measurable outcomes: jobs, business growth and improved livelihoods.",
    cta: "Discuss a programme",
    icon: "bulb",
    bannerImage: "/brand/gallery/training-audience-2.jpg",
    subs: [
      {
        name: "Employability Programmes",
        desc: "Structured, market-relevant training that prepares participants for the world of work and connects them to real employment opportunities. Through career guidance, workplace-readiness support, CV development, interview preparation, talent profiling and active job matching, we help participants identify realistic career paths and transition into jobs, internships and apprenticeships. Our relevant programmes have consistently achieved job-placement outcomes of over 75%.",
      },
      {
        name: "Entrepreneurship Programmes",
        desc: "Practical entrepreneurship and enterprise-development support that moves participants from business idea to viable enterprise. Participants receive guidance to clarify their business direction, develop the confidence and capabilities to manage growth, and access the tools needed to establish and strengthen their ventures. Support includes business registration, business-plan and proposal development, marketing support, and access-to-finance readiness for start-up and scale-up opportunities.",
      },
      {
        name: "Job Matching & Employer Engagement",
        desc: "Active engagement with employers to connect trained participants to jobs, internships, apprenticeships and enterprise opportunities. We work with employers to understand workforce needs, prepare candidates for available roles and track placement outcomes beyond programme completion.",
      },
      {
        name: "Digital Learning Programmes — Coursademia",
        desc: "Technology-enabled learning delivered through Coursademia, Romanspage's digital learning platform. Coursademia extends programme reach through accessible online and blended learning, digital assessments, certifications, learner tracking and practical learning resources that support participants before, during and after training. Explore Coursademia at coursademia.com.",
      },
      {
        name: "Career & Enterprise Fairs",
        desc: "Well-curated events that bring together jobseekers, entrepreneurs, employers, financial institutions, ecosystem partners and service providers. These fairs create direct pathways to recruitment, internships, business partnerships, market access, funding information and enterprise-support opportunities.",
      },
      {
        name: "Programme Design & Management",
        desc: "End-to-end design and delivery of workforce, youth, women, entrepreneurship and livelihood programmes. We support partners from programme strategy and curriculum design through participant mobilisation, field delivery, monitoring, evaluation and reporting — ensuring interventions translate into measurable employment and enterprise outcomes.",
      },
    ],
  },
  {
    id: "digital-learning",
    navLabel: "Technology Solutions",
    title: "Technology Solutions",
    teaser:
      "Through Bickford International, our technology-delivery arm, we provide practical digital solutions that help businesses, institutions and development programmes improve efficiency, strengthen service delivery and remain competitive in a changing world.",
    intro:
      "Through Bickford International, our technology-delivery arm, we provide practical digital solutions that help businesses, institutions and development programmes improve efficiency, strengthen service delivery and remain competitive in a changing world. We work with organisations to understand their needs, identify the right technology approach and deliver solutions that are secure, useful and built for scale. Whether the goal is to establish a stronger online presence, streamline internal operations, connect existing systems or equip teams to work more effectively with digital tools, our focus is on technology that delivers measurable value.",
    cta: "Start a digital project",
    externalLink: { label: "Visit Bickford International", href: "https://bickfordintl.com/" },
    icon: "chip",
    bannerImage: "/brand/gallery/coursademia-training-session.jpg",
    subs: [
      {
        name: "Technology Integration",
        desc: "We help organisations select, connect and adopt the digital tools that best support their operations. From integrating systems and improving data flow to redesigning workflows, we create practical technology environments that reduce manual work, improve visibility and support better decision-making.",
      },
      {
        name: "Website & Web Application Development",
        desc: "We design and develop responsive, user-friendly websites and web applications that strengthen your digital presence and make it easier for customers, partners and users to engage with your organisation. Each solution is tailored to your objectives, audience and service-delivery needs.",
      },
      {
        name: "Enterprise Software Development",
        desc: "We build robust, scalable software solutions that help organisations manage their operations more effectively. From internal workflow and reporting systems to customer and service-management platforms, our solutions are designed to improve efficiency, provide clearer insights and support sustainable growth.",
      },
      {
        name: "Mobile App Development & Application Integration",
        desc: "We develop intuitive mobile applications that bring services, information and engagement closer to customers and teams. From concept development and prototyping through deployment, we also connect applications with the systems and platforms your organisation already uses.",
      },
      {
        name: "AI Integration, Work Optimisation & Digital Skills Training",
        desc: "We help organisations use artificial intelligence and digital tools to improve how work gets done. Our solutions and practical training support teams to automate routine tasks, organise information, increase productivity and make faster, more informed decisions. The focus is not simply on introducing new technology, but on building the confidence and capability to apply it meaningfully in everyday work.",
      },
      {
        name: "QR Code API Design & Integration",
        desc: "We design and integrate secure, easy-to-use QR-code solutions that improve customer engagement, access to information and operational efficiency. These custom solutions can support product verification, service access, event management, payments, digital records and other business processes.",
      },
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  funder: string;
  practiceAreaId: string;
  summary: string;
  detail: string;
  image: string;
  status: "ongoing" | "completed";
  location: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "youth-in-agriculture",
    title: "Youth in Agriculture Project",
    funder: "Nimsy Agro",
    practiceAreaId: "enterprise-agri-sme",
    summary: "A 12-week pilot supporting 25-30 young people into solar-powered agricultural mechanisation.",
    detail:
      "Romanspage is partnering with Nimsy Agro to open practical pathways for young people to earn, grow businesses and lead innovation in modern agriculture. The Youth in Agriculture Project blends employability, entrepreneurship and agribusiness training with hands-on exposure to solar-powered agricultural mechanisation. Through Coursademia, practical field demonstrations and technical sessions with Nimsy Agro, participants build the skills to work as service agents, launch youth-led mechanisation businesses or remain connected to future opportunities through an alumni network. The 12-week pilot will support 25-30 young people to explore income opportunities in solar irrigation, threshing, drying and other pay-per-use services that make modern mechanisation more accessible to smallholder farmers.",
    image: "/brand/gallery/youth-agriculture-farmer-group.jpg",
    status: "ongoing",
    location: "Nigeria",
    featured: true,
  },
  {
    slug: "agra-investment-readiness",
    title: "AGRA-Supported Investment Readiness Programme for Agri-SMEs",
    funder: "AGRA · Welcome to Africa",
    practiceAreaId: "enterprise-agri-sme",
    summary: "Investment readiness for 12 high-potential agribusinesses across Kaduna, Niger and Nasarawa.",
    detail:
      "In partnership with Welcome to Africa and with support from AGRA, Romanspage delivered an intensive investment-readiness programme for 12 high-potential agribusinesses across Kaduna, Niger and Nasarawa States, operating across Nigeria's maize, rice and soybean value chains. Over two practical days, business owners strengthened the foundations investors look for: a compelling business story, credible financial records, stronger compliance, clear growth plans and confident investor pitches. Each SME left better positioned to communicate its value, address internal gaps and pursue finance opportunities with greater clarity, discipline and confidence.",
    image: "/brand/gallery/agra-farmer-training.jpg",
    status: "completed",
    location: "Niger, Kaduna & Nasarawa States",
    featured: true,
  },
  {
    slug: "nimsy-agro-capacity-assessment",
    title: "Organisational Capacity Assessment and Technical Assistance for Agri-tech SMEs",
    funder: "Wennovation / Heifer Nigeria Support Project",
    practiceAreaId: "hr",
    summary: "Organisational capacity assessment and technical assistance for Nimsy Agro Solar Concepts.",
    detail:
      "Through the Wennovation/Heifer Nigeria Support Project, Romanspage delivered targeted organisational capacity assessment and technical assistance for Nimsy Agro Solar Concepts, an agri-tech SME in Kaduna. The three-day intervention helped the business establish a clearer foundation for growth by strengthening its organisational structure, people practices and internal accountability. Romanspage developed a revised organogram, clarified roles and job expectations, oriented staff on the Employee Handbook and HR Manual, and introduced performance-appraisal criteria. The result was a more defined reporting structure and practical recommendations to improve recruitment, quality assurance, communication and performance management.",
    image: "/brand/gallery/nimsy-capacity-assessment-session.jpg",
    status: "completed",
    location: "Kaduna State",
    featured: true,
  },
  {
    slug: "giz-skye-digital-skills",
    title: "Digital Skills Training for Youth — GIZ SKYE Programme",
    funder: "GIZ · SOS Children's Villages Nigeria",
    practiceAreaId: "skills-employability",
    summary: "Practical digital-skills training for 50 young people across Auchi, Usen and Uromi in Edo State.",
    detail:
      "Romanspage, through Bickford International Partners, delivered practical digital-skills training for 50 young people across Auchi, Usen and Uromi in Edo State under the GIZ-supported Skills Development for Youth Employment (SKYE) Programme, implemented by SOS Children's Villages Nigeria. The training combined instructor-led learning, practical assignments, mentoring and assessments to equip participants with market-relevant skills in graphic design, data analytics, coding and search-engine optimisation. By linking technical learning with workplace readiness and continuous evaluation, the programme prepared young people to pursue digital-work and employment opportunities with stronger confidence and capability.",
    image: "/brand/gallery/sos-certificate-portrait.jpg",
    status: "completed",
    location: "Edo State",
    featured: true,
  },
  {
    slug: "oyo-youth-employability",
    title: "FS Oyo Employability and Job Placement Programme",
    funder: "SOS Children's Villages Nigeria",
    practiceAreaId: "skills-employability",
    summary: "369 young adults trained, with 273 securing internships and direct job placements.",
    detail:
      "For three years, Romanspage partnered with SOS Children's Villages Nigeria to help young people in Ibadan build the confidence, skills and connections needed to enter the world of work. The programme trained 369 young adults in workplace readiness, communication, digital productivity, financial literacy, CV development, interview preparation and personal branding. Through mock interviews, career coaching, Coursademia-based post-training support and annual job fairs, participants connected directly with employers and real opportunities. The programme delivered meaningful employment outcomes, with 273 participants securing internships and direct job placements across sectors including finance, ICT, education, hospitality and agro-processing.",
    image: "/brand/gallery/sos-certificate-group-1.jpg",
    status: "completed",
    location: "Oyo State",
    featured: true,
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "2014", label: "Founded — over a decade of impact" },
  { value: "3,200+", label: "SMEs supported through workforce development and investment readiness" },
  { value: "75,000+", label: "Youths trained, with 70% placed into jobs" },
  { value: "55%+", label: "Women participation" },
];

export type HeroSlide = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  imagePosition?: string;
  ctaHref: string;
  ctaLabel: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "brand",
    eyebrow: "Since 2014 · Consulting · Learning · Enterprise Development",
    title: "Empowering people. Building businesses. Enabling inclusive growth.",
    body: "Romanspage Consulting Group is an integrated consulting, learning and enterprise development company helping SMEs, agri-SMEs, development partners and young people build stronger organisations and scalable businesses.",
    image: "/brand/stock/team-hallway.jpg",
    imagePosition: "78% center",
    ctaHref: "/services",
    ctaLabel: "Explore our services",
  },
  {
    id: "hr",
    eyebrow: "HR Consulting and Advisory",
    title: "HR and organisation advisory built for growing teams.",
    body: "Recruitment, payroll and compliance, organisational assessment and capacity building — a professional advisory practice, not just outsourced HR.",
    image: "/brand/stock/professional-portrait-1.jpg",
    ctaHref: "/services/hr",
    ctaLabel: "See HR consulting and advisory",
  },
  {
    id: "enterprise-agri-sme",
    eyebrow: "Enterprise & Agri-SME Growth Advisory Services",
    title: "Investment-ready growth for SMEs and agri-SMEs.",
    body: "Business diagnostics, access-to-finance readiness and operational improvement — we've helped unlock over US$10M in financing for the businesses we support.",
    image: "/brand/stock/business-contract-discussion.jpg",
    ctaHref: "/services/enterprise-agri-sme",
    ctaLabel: "See enterprise & agri-SME growth",
  },
  {
    id: "skills-employability",
    eyebrow: "Workforce Development & Job Creation",
    title: "Training over 75,000 young people into real opportunity.",
    body: "Employability programmes, entrepreneurship training and job matching for donors, NGOs, government agencies and corporate CSR partners.",
    image: "/brand/gallery/training-audience-1.jpg",
    ctaHref: "/services/skills-employability",
    ctaLabel: "See workforce development programmes",
  },
];
