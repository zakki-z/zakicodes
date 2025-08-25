import React from 'react';
import { buildMetadata, siteConfig } from '@/config/site.config';
import ContactPageComponent from "@/components/sections/contactPageComponent";


export const metadata = buildMetadata({
  title: `Contact | ${siteConfig.siteName}`,
  description: 'Get in touch about landing pages, branding, or templates.',
});

export default function ContactPage() {
  return <ContactPageComponent />;
}
