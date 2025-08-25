"use client";

import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
    Mail,
    Phone,
    MapPin,
    Github,
    Linkedin,
    Globe,
    MessageCircle,
    ExternalLink, Badge
} from 'lucide-react';
import Link from 'next/link';

const contactInfo = {
    name: "Zakariae Azhari",
    phone: "+212 707-762-299",
    email: "zakariaeazhari@proton.me",
    location: "Oujda, Morocco",
    portfolio: "https://zakicodes.engineer",
    social: [
        {
            name: "LinkedIn",
            username: "zakariaazhari",
            url: "https://linkedin.com/in/zakariaazhari",
            icon: Linkedin,
            color: "hover:text-blue-600"
        },
        {
            name: "GitHub",
            username: "zakki-z",
            url: "https://github.com/zakki-z",
            icon: Github,
            color: "hover:text-gray-900 dark:hover:text-white"
        }
    ]
};

export default function ContactPageComponent() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log("Form submitted");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90">
            <div className="container mx-auto px-4 py-12 space-y-12">

                {/* Header */}
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center space-y-4"
                >
                    <div className="flex justify-center mb-6">
                        <Badge className="bg-primary/5 text-primary border-primary/20 border inline-flex items-center">
                            <MessageCircle className="mr-1 h-3 w-3" />
                            Contact
                        </Badge>
                    </div>
                    <h1 className="text-4xl font-bold text-foreground">Get In Touch</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        I&apos;m always open to discussing new opportunities, collaborating on projects,
                        or just having a chat about technology and development.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Main Contact Card */}
                        <Card className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border border-border/50">
                            <CardHeader className="text-center pb-4">
                                <CardTitle className="text-2xl font-bold text-foreground">
                                    {contactInfo.name}
                                </CardTitle>
                                <p className="text-muted-foreground">Software Engineer & Developer</p>
                            </CardHeader>
                            <CardContent className="space-y-6">

                                {/* Contact Details */}
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10">
                                        <Phone className="h-5 w-5 text-primary" />
                                        <div>
                                            <p className="text-sm text-muted-foreground">Phone</p>
                                            <Link
                                                href={`tel:${contactInfo.phone}`}
                                                className="font-medium text-foreground hover:text-primary transition-colors"
                                            >
                                                {contactInfo.phone}
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10">
                                        <Mail className="h-5 w-5 text-primary" />
                                        <div>
                                            <p className="text-sm text-muted-foreground">Email</p>
                                            <Link
                                                href={`mailto:${contactInfo.email}`}
                                                className="font-medium text-foreground hover:text-primary transition-colors break-all"
                                            >
                                                {contactInfo.email}
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10">
                                        <MapPin className="h-5 w-5 text-primary" />
                                        <div>
                                            <p className="text-sm text-muted-foreground">Location</p>
                                            <p className="font-medium text-foreground">{contactInfo.location}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10">
                                        <Globe className="h-5 w-5 text-primary" />
                                        <div>
                                            <p className="text-sm text-muted-foreground">Portfolio</p>
                                            <Link
                                                href={contactInfo.portfolio}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
                                            >
                                                zakicodes.engineer
                                                <ExternalLink className="h-3 w-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="space-y-3">
                                    <h3 className="font-semibold text-foreground">Connect With Me</h3>
                                    <div className="flex gap-3">
                                        {contactInfo.social.map((social, index) => (
                                            <motion.div
                                                key={social.name}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                            >
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    asChild
                                                    className="flex items-center gap-2 hover:border-primary/50"
                                                >
                                                    <Link
                                                        href={social.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className={`transition-colors ${social.color}`}
                                                    >
                                                        <social.icon className="h-4 w-4" />
                                                        {social.username}
                                                    </Link>
                                                </Button>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Quick Contact Actions */}
                        <Card className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border border-border/50">
                            <CardContent className="p-6">
                                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                                    <MessageCircle className="h-5 w-5 text-primary" />
                                    Quick Actions
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <Button asChild className="w-full">
                                        <Link href={`mailto:${contactInfo.email}`}>
                                            <Mail className="h-4 w-4 mr-2" />
                                            Send Email
                                        </Link>
                                    </Button>
                                    <Button variant="outline" asChild className="w-full">
                                        <Link href={`tel:${contactInfo.phone}`}>
                                            <Phone className="h-4 w-4 mr-2" />
                                            Call Now
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center space-y-4 max-w-3xl mx-auto"
                >
                    <Card className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border border-border/50">
                        <CardContent className="p-6">
                            <h3 className="font-semibold text-foreground mb-3">Let&apos;s Build Something Amazing Together</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Whether you have a project in mind, need technical consultation, or just want to discuss
                                the latest in software development, I&apos;m here to help. I respond to all messages within 24 hours.
                            </p>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
