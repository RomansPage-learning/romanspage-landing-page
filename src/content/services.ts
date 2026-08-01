export type SubService = {
  name: string;
  desc: string;
};

export type PracticeArea = {
  id: string;
  navLabel: string;
  title: string;
  teaser: string;
  cta: string;
  icon: "people" | "chart" | "bulb" | "chip";
  subs: SubService[];
};

export const practiceAreas: PracticeArea[] = [
  {
    id: "hr",
    navLabel: "People, HR & Organisation",
    title: "People, HR & Organisation Advisory",
    teaser:
      "Our consulting backbone — talent management, recruitment, capacity and governance — a professional advisory practice, not merely \"HR support.\"",
    cta: "Talk to an HR advisor",
    icon: "people",
    subs: [
      {
        name: "HR4SMEs",
        desc: "Recruitment, onboarding, HR documentation, payroll and statutory compliance, performance management, KPIs, employee relations and staff policies.",
      },
      {
        name: "Recruitment & Talent Placement",
        desc: "Sourcing, screening and placing talent — with a distinctive specialism in the agriculture value chain (agribusiness specialists, field officers, technical experts).",
      },
      {
        name: "Organisational Assessment",
        desc: "Structure review, capacity assessment, operational and staffing gaps, governance review.",
      },
      {
        name: "Capacity Building & HR Outsourcing",
        desc: "Staff training, leadership development, SOP development, and acting as the HR partner for SMEs without an in-house HR department.",
      },
    ],
  },
  {
    id: "enterprise-agri-sme",
    navLabel: "Enterprise & Agri-SME Growth",
    title: "Enterprise & Agri-SME Growth Advisory",
    teaser:
      "Business development, access-to-finance and agri-SME growth — the natural home for agribusinesses, mechanisation and solar-irrigation providers, youth-in-agriculture models and enterprise support programmes.",
    cta: "Explore business support",
    icon: "chart",
    subs: [
      {
        name: "SME Business Diagnostics",
        desc: "Business model review, operations review, staffing, systems and financial readiness.",
      },
      {
        name: "Agri-SME Support",
        desc: "Support for agribusinesses, processors, mechanisation providers, solar-irrigation service providers and cooperatives.",
      },
      {
        name: "Business Development Services",
        desc: "Business plans, investment readiness, market access, proposal development and growth strategy.",
      },
      {
        name: "Access-to-Finance Readiness",
        desc: "Business case development, investor documentation, financial-model support and facilitation of grant, loan and equity linkages.",
      },
      {
        name: "Operational Improvement",
        desc: "SOPs, process mapping, reporting systems and field-operations support.",
      },
    ],
  },
  {
    id: "skills-employability",
    navLabel: "Skills & Employability",
    title: "Skills, Employability & Entrepreneurship Programmes",
    teaser:
      "Our programme-delivery practice for donors, NGOs, government agencies and corporate CSR partners — consolidating training, youth employability, entrepreneurship and job connection.",
    cta: "Discuss a programme",
    icon: "bulb",
    subs: [
      {
        name: "Employability Programmes",
        desc: "Soft skills, workplace readiness, CV writing, interview coaching and job-placement support.",
      },
      {
        name: "Entrepreneurship Programmes",
        desc: "Business ideation, planning, financial literacy, record keeping, market access and mentorship.",
      },
      {
        name: "Career Development",
        desc: "Career coaching, talent profiling and internship / apprenticeship linkage.",
      },
      {
        name: "Programme Design & Management",
        desc: "Designing and implementing youth, women, SME and livelihood programmes for funders.",
      },
      {
        name: "Job Matching & Employer Engagement",
        desc: "Connecting trained youth to employers, internships, apprenticeships and enterprise opportunities.",
      },
    ],
  },
  {
    id: "digital-learning",
    navLabel: "Digital Learning & Technology",
    title: "Digital Learning & Technology Solutions",
    teaser:
      "Where Coursademia and Bickford fit. Coursademia is our official learning infrastructure — not a side platform; Bickford is our technology and digital-skills delivery arm — not a separate, competing business.",
    cta: "Start a digital project",
    icon: "chip",
    subs: [
      {
        name: "Coursademia",
        desc: "The Group's online learning platform for soft skills, employability, entrepreneurship, SME training and blended learning.",
      },
      {
        name: "Bickford International Partners",
        desc: "Technology training, IT skills, digital tools, LMS support and digital-transformation support for SMEs.",
      },
      {
        name: "Romanspage Digital Learning Unit",
        desc: "Manages course development, learner data, certification, employer linkage and alumni tracking.",
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
};

export const REUSED_PHOTOS = [
  "/brand/banners/banner-1.png",
  "/brand/banners/banner-2.jpg",
  "/brand/images/about-1.jpg",
];

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
  },
  {
    slug: "agra-investment-readiness",
    title: "AGRA Investment-Readiness Programme",
    funder: "AGRA · Welcome2Africa International",
    practiceAreaId: "enterprise-agri-sme",
    summary: "Investment readiness for 100 SMEs across Niger, Kaduna and Nasarawa.",
    detail:
      "Investment readiness, operational restructuring and financial-compliance support to 100 SMEs across Niger, Kaduna and Nasarawa, including rice SMEs (e.g. Sulaitan Ltd, Arzikin Noma Services).",
    image: "/brand/gallery/training-audience-2.jpg",
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
  },
];

export type Stat = { value: string; label: string };

export const stats: Stat[] = [
  { value: "2014", label: "Founded — over a decade of impact" },
  { value: "2,700+", label: "SMEs built via Growth-Hack" },
  { value: "5,000+", label: "Young people trained" },
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
  ctaHref: string;
  ctaLabel: string;
};

export const heroSlides: HeroSlide[] = [
  {
    id: "brand",
    eyebrow: "Since 2014 · Consulting · Learning · Enterprise Development",
    title: "Empowering people. Building businesses. Enabling inclusive growth.",
    body: "Romanspage Consulting Group is an integrated consulting, learning and enterprise development company helping SMEs, agri-SMEs, development partners and young people build stronger organisations and scalable businesses.",
    image: REUSED_PHOTOS[0],
    ctaHref: "/services",
    ctaLabel: "Explore our services",
  },
  {
    id: "hr",
    eyebrow: "People, HR & Organisation Advisory",
    title: "HR and organisation advisory built for growing teams.",
    body: "Recruitment, payroll and compliance, organisational assessment and capacity building — a professional advisory practice, not just outsourced HR.",
    image: REUSED_PHOTOS[1],
    ctaHref: "/services#hr",
    ctaLabel: "See HR & organisation advisory",
  },
  {
    id: "enterprise-agri-sme",
    eyebrow: "Enterprise & Agri-SME Growth Advisory",
    title: "Investment-ready growth for SMEs and agri-SMEs.",
    body: "Business diagnostics, access-to-finance readiness and operational improvement — we've helped unlock over US$5M in financing for the businesses we support.",
    image: REUSED_PHOTOS[2],
    ctaHref: "/services#enterprise-agri-sme",
    ctaLabel: "See enterprise & agri-SME growth",
  },
  {
    id: "skills-employability",
    eyebrow: "Skills, Employability & Entrepreneurship",
    title: "Training over 5,000 young people into real opportunity.",
    body: "Employability programmes, entrepreneurship training and job matching for donors, NGOs, government agencies and corporate CSR partners.",
    image: REUSED_PHOTOS[0],
    ctaHref: "/services#skills-employability",
    ctaLabel: "See skills & employability programmes",
  },
];
