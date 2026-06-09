export type NavigationItem = {
  label: string;
  href: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export type ValuePoint = {
  title: string;
  description: string;
};

export type HomePageContent = {
  siteName: string;
  navigation: NavigationItem[];
  hero: HeroContent;
  valuePoints: ValuePoint[];
  ctaBand: {
    title: string;
    description: string;
    action: { label: string; href: string };
  };
  footer: {
    copyrightOwner: string;
    links: NavigationItem[];
  };
};
