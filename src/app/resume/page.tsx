import { ResumePage } from "@/components/sections/resume";
import { siteConfig } from '@/config/site.config';

export const metadata = {
    title: `Resume | ${siteConfig.siteName}`,
    description: 'Professional resume showcasing my experience, skills, and education.',
};

export default function Page() {
    return (
        <div className="min-h-screen py-16">
            <div className="mx-auto max-w-7xl px-6 mt-16 md:mt-24">
                <ResumePage />
            </div>
        </div>
    );
}
