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
};

export const practiceAreas: PracticeArea[] = [
  {
    id: "hr",
    navLabel: "People, HR & Organisation",
    title: "People, HR & Organisation Advisory",
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
          "Payroll & compliance (Tax, Pension, NSITF, NHF)",
          "Policies & HR documentation",
          "Employee engagement",
          "Unlimited HR support",
        ],
      },
      {
        name: "SME",
        staffRange: "20–50 staff",
        price: "₦149,999/mo",
        features: [
          "Payroll & compliance (Tax, Pension, NSITF, NHF)",
          "Policies & HR documentation",
          "Employee engagement",
          "Unlimited HR support",
          "Recruitment & talent placement",
          "Organisational assessment, outsourcing & training",
        ],
      },
      {
        name: "Enterprise",
        staffRange: "50+ staff / large corporation",
        price: null,
        features: [
          "Fully customised HR partnership",
          "Dedicated account manager",
          "Everything in Startup & SME",
        ],
      },
    ],
  },
  {
    id: "enterprise-agri-sme",
    navLabel: "Enterprise & Agri-SME Growth",
    title: "Enterprise & Agri-SME Growth Advisory",
    teaser:
      "Business development, access-to-finance and agri-SME growth — the natural home for agribusinesses, mechanisation and solar-irrigation providers, youth-in-agriculture models and enterprise support programmes.",
    intro:
      "Business development, access-to-finance and agri-SME growth advisory — the natural home for agribusinesses, mechanisation and solar-irrigation providers, youth-in-agriculture models and enterprise support programmes. We work directly with the operational and financial realities of Nigerian SMEs, and have helped the businesses we support unlock over US$5 million in financing to date.",
    cta: "Explore business support",
    icon: "chart",
    bannerImage: "/brand/stock/meeting-handshake.jpg",
    subs: [
      {
        name: "SME Business Diagnostics",
        desc: "A ground-up review of how your business actually runs — business model, operating processes, staffing structure, systems and financial readiness — to pinpoint the specific constraints slowing growth. The output is a practical action plan, prioritised by what will move the business forward fastest, not a generic report.",
      },
      {
        name: "Agri-SME Support",
        desc: "Specialist advisory for agribusinesses, processors, mechanisation service providers, solar-irrigation companies and farmer cooperatives — the segment of the economy general business consultants rarely understand well. We work with the real value-chain constraints: seasonality, input financing, off-take arrangements and last-mile distribution.",
      },
      {
        name: "Business Development Services",
        desc: "Investor-ready business plans, market-access strategy, funding-proposal development and growth planning tailored to where your business actually is today. We've guided businesses through the exact diligence and documentation that funders like AGRA, Mastercard Foundation and development finance institutions expect to see.",
      },
      {
        name: "Access-to-Finance Readiness",
        desc: "We prepare businesses for the scrutiny that comes with real funding — building the business case, investor documentation and financial models that lenders and investors actually ask for — then facilitate warm introductions to grant, loan and equity partners in our network. This discipline has helped the SMEs we support unlock over US$5 million in financing to date.",
      },
      {
        name: "Operational Improvement",
        desc: "Standard operating procedures, process mapping, reporting systems and hands-on field-operations support that turn ad-hoc ways of working into something repeatable and scalable. Particularly valuable for agri-SMEs managing dispersed field teams, seasonal labour and multi-site operations.",
      },
    ],
  },
  {
    id: "skills-employability",
    navLabel: "Skills & Employability",
    title: "Skills, Employability & Entrepreneurship Programmes",
    teaser:
      "Our programme-delivery practice for donors, NGOs, government agencies and corporate CSR partners — consolidating training, youth employability, entrepreneurship and job connection.",
    intro:
      "Our programme-delivery practice for donors, NGOs, government agencies and corporate CSR partners — consolidating training, youth employability, entrepreneurship and job connection into one accountable delivery partner. We've trained over 50,000 young people to date, with a consistent focus on measurable outcomes — placement, income and enterprise growth — not just attendance.",
    cta: "Discuss a programme",
    icon: "bulb",
    bannerImage: "/brand/gallery/training-audience-2.jpg",
    subs: [
      {
        name: "Employability Programmes",
        desc: "Structured training in soft skills and workplace readiness — CV writing, interview coaching, workplace etiquette and communication — paired with active job-placement support, not just a certificate at the end. Delivered at scale for donor and government-funded youth programmes, with over 50,000 young people trained to date.",
      },
      {
        name: "Entrepreneurship Programmes",
        desc: "Practical training in business ideation, planning, financial literacy, record-keeping and market access — backed by ongoing mentorship, not a one-off workshop. Built for first-time entrepreneurs, market women and youth-led micro-businesses who need support that continues after the training ends.",
      },
      {
        name: "Career Development",
        desc: "One-on-one career coaching and talent profiling to help young people identify realistic, well-matched career paths, paired with direct linkage to internship and apprenticeship opportunities with our employer partners. We track outcomes, not just attendance.",
      },
      {
        name: "Programme Design & Management",
        desc: "End-to-end design and implementation of youth, women, SME and livelihood programmes on behalf of donors, government agencies and corporate CSR partners — from programme logic and curriculum design through field delivery, monitoring and reporting. Delivered for funders including SOS Children's Villages, Mastercard Foundation and AGRA.",
      },
      {
        name: "Job Matching & Employer Engagement",
        desc: "Active employer engagement and job-matching that connects trained youth to real internships, apprenticeships and enterprise opportunities — closing the loop between training and actual employment outcomes. We maintain relationships with employer partners specifically so placement isn't left to chance.",
      },
    ],
  },
  {
    id: "digital-learning",
    navLabel: "Digital Learning & Technology",
    title: "Digital Learning & Technology Solutions",
    teaser:
      "Where Coursademia and Bickford fit. Coursademia is our official learning infrastructure — not a side platform; Bickford is our technology and digital-skills delivery arm — not a separate, competing business.",
    intro:
      "Where Coursademia and Bickford fit into the wider Group. Coursademia is our official learning infrastructure — not a side platform — built to scale our programme work to more people, cohorts and locations, with tracking and certification built in. Bickford is our technology and digital-skills delivery arm, helping SMEs take real, practical steps into digital transformation.",
    cta: "Start a digital project",
    icon: "chip",
    bannerImage: "/brand/gallery/coursademia-training-session.jpg",
    subs: [
      {
        name: "Coursademia",
        desc: "The Group's own online learning platform — soft skills, employability, entrepreneurship and SME training delivered through structured, blended learning with tracking and certification built in. It's the infrastructure that lets our programme work scale to more people, cohorts and locations than in-person delivery alone ever could.",
      },
      {
        name: "Bickford International Partners",
        desc: "Our technology and digital-skills delivery arm — IT training, digital-tools adoption, learning-management-system support and hands-on digital-transformation support for SMEs taking their first real steps into technology. Not a separate, competing business — Bickford is how the Group delivers on the technology half of its promise.",
      },
      {
        name: "Romanspage Digital Learning Unit",
        desc: "The internal team behind the platform — managing course development, learner data, certification issuance, employer linkage and alumni tracking so that what people learn on Coursademia connects back to real opportunity. This is also where the self-assessment and guided-recommendation experience for the wider Romanspage site will be built.",
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
    slug: "kwara-sme-finance",
    title: "Kwara SME Finance & Capacity Development Project",
    funder: "Mastercard Foundation · T.A Community",
    practiceAreaId: "enterprise-agri-sme",
    summary: "Tailored business development support to 200 SMEs.",
    detail:
      "Tailored business development support to 200 SMEs to unlock over US$5 million in financing (ongoing).",
    image: "/brand/gallery/training-audience-1.jpg",
    status: "ongoing",
    location: "Kwara State",
    featured: true,
  },
  {
    slug: "agra-investment-readiness",
    title: "AGRA Investment-Readiness Programme",
    funder: "AGRA · Welcome2Africa International",
    practiceAreaId: "enterprise-agri-sme",
    summary: "Investment readiness for 100 SMEs across Niger, Kaduna and Nasarawa.",
    detail:
      "Investment readiness, operational restructuring and financial-compliance support to 100 SMEs across Niger, Kaduna and Nasarawa, including rice SMEs (e.g. Sulaitan Ltd, Arzikin Noma Services).",
    image: "/brand/gallery/agra-farmer-training.jpg",
    status: "completed",
    location: "Niger, Kaduna & Nasarawa States",
    featured: true,
  },
  {
    slug: "edocares-enterprise-strengthening",
    title: "EdoCARES Enterprise Strengthening Programme",
    funder: "World Bank · Edo State Government / EdoJobs",
    practiceAreaId: "hr",
    summary: "500+ SMEs trained and supported, unlocking grant funding.",
    detail:
      "Trained and supported 500+ SMEs, enabling over 70% to access grant funding (over US$1 million).",
    image: "/brand/gallery/training-audience-3.jpg",
    status: "completed",
    location: "Edo State",
    featured: true,
  },
  {
    slug: "oyo-youth-employability",
    title: "Oyo Youth Employability & Placement",
    funder: "SOS Children's Villages",
    practiceAreaId: "skills-employability",
    summary: "400 youths trained in employability skills.",
    detail:
      "Trained 400 youths in employability skills and supported job placement, achieving a strong placement rate.",
    image: "/brand/gallery/sos-certificate-group-1.jpg",
    status: "completed",
    location: "Oyo State",
  },
  {
    slug: "market-women-financial-literacy",
    title: "Market Women Financial Literacy & Mentorship",
    funder: "Mastercard Foundation",
    practiceAreaId: "hr",
    summary: "Financial literacy and record-keeping training for market women.",
    detail:
      "Financial literacy and record-keeping training to improve women's financial capacity and access to finance.",
    image: "/brand/gallery/sos-certificate-portrait.jpg",
    status: "completed",
    location: "Multiple states",
  },
  {
    slug: "sme-organisational-capacity-assessments",
    title: "SME Organisational Capacity Assessments",
    funder: "AGRA",
    practiceAreaId: "enterprise-agri-sme",
    summary: "Capacity assessments strengthening SMEs toward access to finance.",
    detail:
      "Capacity assessments strengthening SMEs toward access to finance across the AGRA priority states.",
    image: "/brand/gallery/sos-certificate-group-2.jpg",
    status: "completed",
    location: "Niger, Kaduna & Nasarawa States",
  },
  {
    slug: "agra-business-angel-investment-session",
    title: "AGRA Business Angel Investment & Finance Strategy Session",
    funder: "AGRA · Welcome2Africa International",
    practiceAreaId: "enterprise-agri-sme",
    summary: "A strategy session on catalysing agribusiness investment and finance for SMEs.",
    detail:
      "Facilitated a strategy session on catalysing agribusiness investment and finance for SMEs through the strengthening of Business Angel investments, bringing together AGRA, Welcome2Africa International and partner stakeholders across the programme's focus states.",
    image: "/brand/gallery/agra-programme-banner.jpg",
    status: "completed",
    location: "Niger, Kaduna & Nasarawa States",
  },
  {
    slug: "kbs-lms-handover",
    title: "Kaduna Business School — LMS Build & Handover",
    funder: "Kaduna Business School",
    practiceAreaId: "digital-learning",
    summary: "Built and handed over a custom learning management system, then trained staff to run it.",
    detail:
      "Designed and built a custom LMS for Kaduna Business School — covering learner, instructor and admin workflows — then led a hands-on technical handover session, walking their team through running and managing the platform.",
    image: "/brand/gallery/kbs-lms-training.jpg",
    status: "completed",
    location: "Kaduna State",
  },
  {
    slug: "noma-services-partner-visit",
    title: "Partner Visit: Noma Services Consolidated Ltd",
    funder: "Noma Services Consolidated Ltd (Partner)",
    practiceAreaId: "enterprise-agri-sme",
    summary: "A partner visit to Noma Services, an agri-fintech partner aggregating smallholder farmer financing.",
    detail:
      "Visited Noma Services Consolidated Ltd — a technology-driven agriculture and rural development partner working to aggregate smallholder farmers, unlock financing and promote financial inclusion — to strengthen our ongoing partnership and explore joint opportunities across our agri-SME work.",
    image: "/brand/gallery/noma-partner-visit.jpg",
    status: "completed",
    location: "Partner office visit",
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "2014", label: "Founded — over a decade of impact" },
  { value: "2,700+", label: "SMEs built via Growth-Hack" },
  { value: "50,000+", label: "Young people trained" },
  { value: "500+", label: "SMEs supported (EdoCARES)" },
  { value: "55%+", label: "Female participation" },
  { value: "US$5M+", label: "Financing unlocked" },
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
    eyebrow: "People, HR & Organisation Advisory",
    title: "HR and organisation advisory built for growing teams.",
    body: "Recruitment, payroll and compliance, organisational assessment and capacity building — a professional advisory practice, not just outsourced HR.",
    image: "/brand/stock/professional-portrait-1.jpg",
    ctaHref: "/services/hr",
    ctaLabel: "See HR & organisation advisory",
  },
  {
    id: "enterprise-agri-sme",
    eyebrow: "Enterprise & Agri-SME Growth Advisory",
    title: "Investment-ready growth for SMEs and agri-SMEs.",
    body: "Business diagnostics, access-to-finance readiness and operational improvement — we've helped unlock over US$5M in financing for the businesses we support.",
    image: "/brand/stock/handshake-exterior.jpg",
    ctaHref: "/services/enterprise-agri-sme",
    ctaLabel: "See enterprise & agri-SME growth",
  },
  {
    id: "skills-employability",
    eyebrow: "Skills, Employability & Entrepreneurship",
    title: "Training over 50,000 young people into real opportunity.",
    body: "Employability programmes, entrepreneurship training and job matching for donors, NGOs, government agencies and corporate CSR partners.",
    image: "/brand/gallery/training-audience-1.jpg",
    ctaHref: "/services/skills-employability",
    ctaLabel: "See skills & employability programmes",
  },
];
