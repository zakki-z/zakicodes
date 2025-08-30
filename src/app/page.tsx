import { HeroSection } from '@/components/sections/hero';
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <main className="w-full">
        <HeroSection />
        <Analytics />
    </main>
  );
}
