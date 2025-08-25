import React from 'react';
import { buildMetadata, siteConfig } from '@/config/site.config';
import ContactPageComponent from "@/components/sections/contactPageComponent";

export const metadata = buildMetadata({
  title: `Contact | ${siteConfig.siteName}`,
  description: 'Get in touch about landing pages, branding, or templates.',
});

export default function ContactPage() {
  return (
      <div className="min-h-screen py-16">
        <div className="mx-auto max-w-7xl px-6 mt-16 md:mt-24">
          <ContactPageComponent />
        </div>
      </div>
  );
}
