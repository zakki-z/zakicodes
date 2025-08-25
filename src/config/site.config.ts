// Please note Some data Below are Just Placeholder for now due to active development
import type { Metadata } from 'next';

export type SocialLink = {
  label: string;
  url: string;
  icon?: string; // name for icon library if needed later
};


export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export interface SiteConfig {
  siteName: string;
  domain: string;
  description: string;

  about: string;
  keywords: string[];
  ogImage: string;
  twitterHandle: string;
  author: string;
  author_img:string;

  theme: {
    default: 'light' | 'dark';
    allowSystem: boolean;
  };
  links: {
    website: string;
    github: string;
    linkedin: string;
    tips: string;
    email: string;
  };
  social: SocialLink[];
  navigation: NavItem[];
  seo: {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
  image?: string; // default og image
  imageAlt?: string;
  locale?: string;
  type?: string;
  twitterCard?: string;
  robots?: string;
  themeColor?: string;
  };

}

export const siteConfig: SiteConfig = {
  siteName: 'Zakariae Azhari',
  domain: 'zakicodes,engineer',
  author: 'Zakariae Azhari',
  description: 'Full Stack developer creating useful & delightful web experiences. Exploring ML & AI.',
  about:
    'I am a Full Stack developer who loves creating new things. I spend my spare time building free apps & tools, and I am currently diving into Machine Learning & AI to expand my problem‑solving toolkit. Always open to collaboration & new challenges.',
    author_img: 'https://avatars.githubusercontent.com/u/75434191?v=4',
    keywords: [
    'Zakariae Azhari',
    'Full Stack Developer',
    'Portfolio',
    'Next.js',
    'TypeScript',
    'TailwindCSS',
    'shadcn/ui',
    'Framer Motion',
    'Machine Learning',
    'AI'
  ],
  ogImage: '',
  twitterHandle: '',

  theme: {
    default: 'dark',
    allowSystem: true,
  },
  links: {
    website: 'https://muhammadfiaz.com',
    github: 'https://github.com/zakki-z',
    linkedin: 'https://linkedin.com/in/zakariaazhari',
    tips: 'https://zakicodes.engineer',
    email: 'mailto:zakariaeazhari@proton.me',
  },
  social: [
    { label: 'GitHub', url: 'https://github.com/zakki-z', icon: 'github' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/zakariaazhari', icon: 'linkedin' },
  ],
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'resume', href: '/resume' },
    { label: 'Contact', href: '/contact' }
  ],

  
  seo: {
    title: 'Zakariae Azhari',
    description: 'Backend developer creating useful & delightful web experiences. Exploring ML & AI.',
    keywords: [
      'Zakariae Azhari',
      'Backend Developer',
      'Portfolio',
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'shadcn/ui',
      'Framer Motion',
      'Machine Learning',
      'AI'
    ],
    canonical: 'https://zakicodes.engineer',
    image: '/og.png',
    imageAlt: "Zakariae Azhari - Backend Developer",
    locale: 'en-US',
    type: 'website',
    twitterCard: 'summary_large_image',
    robots: 'index,follow',
    themeColor: '#0f172a',
  },

};

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const { seo, siteName, domain } = siteConfig;

  const base: Metadata = {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: siteConfig.author, url: siteConfig.links.website }],
    metadataBase: new URL(`https://${domain}`),
    alternates: { canonical: seo.canonical ?? `https://${domain}` },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical ?? `https://${domain}`,
      siteName,
      images: seo.image ? [seo.image] : [],
      type: seo.type ?? 'website',
      locale: seo.locale,
    },
    twitter: {
      card: seo.twitterCard ?? 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: seo.image ? [seo.image] : [],
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
    },
    other: {
      robots: seo.robots,
      'theme-color': seo.themeColor,
      'og:image:alt': seo.imageAlt,
    },
  } as Metadata;

  return { ...base, ...overrides };
}

export type { Metadata };
