"use client";

import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Download,
    MapPin,
    Calendar,
    Building,
    GraduationCap,
    Award,
    Globe,
    Code,
    Database,
    Cloud,
    Settings, LucideIcon
} from 'lucide-react';

const education = [
    {
        institution: "École des Hautes Études d'Ingénierie (EHEI)",
        location: "Oujda, Morocco",
        degree: "Master's in Software Engineering & Management",
        period: "2021 – Present",
        coursework: ["Software Architecture", "Machine Learning", "Projects Management", "Database Systems"]
    }
];

const experience = [
    {
        company: "La Brioche Blanche",
        position: "IT Support & Developer",
        location: "Oujda, Morocco",
        period: "Jan 2025 – Present",
        achievements: [
            "Designed and deployed a custom inventory and sales management system (Spring Boot, Next.js, Python, PostgreSQL), reducing manual processing time",
            "Developed and maintained a promotional website (Next.js, Tailwind CSS), increasing customer engagement",
            "Provided IT support for 50+ employees, maintaining 99.9% system uptime"
        ]
    },
    {
        company: "iTFin",
        position: "Software Developer Intern",
        location: "Amersfoort, Netherlands",
        period: "Jul 2025",
        achievements: [
            "Helped developing an HR management application (.NET, Next.js, FireBird) with secure backend supporting 200+ concurrent users",
            "Implement role-based access control, expected to cut administrative processing time by 35%"
        ]
    },
    {
        company: "SQLI",
        position: "Software Developer Intern",
        location: "Oujda, Morocco",
        period: "Sep 2025 – Present",
        achievements: []
    }
];

const technicalSkills = {
    "Languages & Frameworks": [
        "Java (Spring Boot)",
        "Python (FastAPI, PyTorch, TensorFlow, Scikit-learn)",
        "JavaScript (Next.js, React, Ajax)",
        "PHP (Symfony)",
        "C++, C#",
        ".NET"
    ],
    "Cloud & DevOps": [
        "Docker Compose",
        "Ansible",
        "Nginx",
        "AWS",
        "Oracle Cloud",
        "CI/CD Pipelines",
        "Container Orchestration"
    ],
    "API & Testing / Tools": [
        "Postman",
        "REST APIs",
        "GitLab",
        "GitHub",
        "Linux",
        "Bash Scripting",
        "JWT",
        "Bootstrap",
        "Event Driven Design",
        "Microservices",
        "UML",
        "Merise",
        "Agile Methodologies"
    ],
    "Databases & Web Technologies": [
        "PostgreSQL",
        "MySQL",
        "SQL Server",
        "Firebird",
        "HTML",
        "Tailwind CSS",
        "WebSockets",
        "Mercure",
        "GraphQL"
    ]
};

const certifications = [
    {
        name: "Introduction to Software Engineering",
        issuer: "IBM",
        date: "Dec 2024",
        status: "completed"
    },
    {
        name: "Python for Data Science, AI & Development",
        issuer: "IBM",
        date: "Feb 2025",
        status: "completed"
    },
    {
        name: "AWS Fundamentals Specialization",
        issuer: "AWS",
        date: "In Progress",
        status: "in-progress"
    },
    {
        name: "OCI Foundations Associate",
        issuer: "Oracle",
        date: "In Progress",
        status: "in-progress"
    }
];

const languages = [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Fluent" },
    { name: "French", level: "Intermediate" }
];

const skillIcons: Record<string, LucideIcon> = {
    "Languages & Frameworks": Code,
    "Cloud & DevOps": Cloud,
    "API & Testing / Tools": Settings,
    "Databases & Web Technologies": Database
};

export function ResumePage() {
    const handleDownloadResume = () => {
        // Add your resume download logic here
        console.log("Download resume");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90">
            <div className="container mx-auto px-4 py-12 space-y-12">
                {/* Header with Download Button */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Badge variant="outline" className="mb-6 bg-primary/5 text-primary border-primary/20">
                            <GraduationCap className="mr-1 h-3 w-3" />
                            Resume
                        </Badge>
                        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
                            Professional{' '}
                            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Resume
            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Software Engineer & Developer with expertise in modern technologies and full-stack development.
                        </p>
                    </motion.div>
                </div>

                {/* Education Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-6"
                >
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <GraduationCap className="h-6 w-6 text-primary" />
                        Education
                    </h2>
                    {education.map((edu, index) => (
                        <Card key={index} className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-foreground">{edu.institution}</h3>
                                        <p className="text-lg text-primary font-medium">{edu.degree}</p>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                                            <MapPin className="h-4 w-4" />
                                            <span>{edu.location}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Calendar className="h-4 w-4" />
                                        <span>{edu.period}</span>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p className="text-sm font-medium text-foreground mb-2">Relevant Coursework:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {edu.coursework.map((course) => (
                                            <Badge key={course} variant="secondary" className="text-xs">
                                                {course}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </motion.section>

                {/* Professional Experience Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="space-y-6"
                >
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Building className="h-6 w-6 text-primary" />
                        Professional Experience
                    </h2>
                    {experience.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        >
                            <Card className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4 mb-4">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-foreground">{exp.company}</h3>
                                            <p className="text-lg text-primary font-medium">{exp.position}</p>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                                                <MapPin className="h-4 w-4" />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Calendar className="h-4 w-4" />
                                            <span>{exp.period}</span>
                                        </div>
                                    </div>
                                    {exp.achievements.length > 0 && (
                                        <div className="space-y-2">
                                            {exp.achievements.map((achievement, i) => (
                                                <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <span className="text-primary mt-1">•</span>
                                                    <span>{achievement}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.section>

                {/* Technical Skills Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="space-y-6"
                >
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Code className="h-6 w-6 text-primary" />
                        Technical Skills
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {Object.entries(technicalSkills).map(([category, skills], index) => {
                            const Icon = skillIcons[category] || Code;
                            return (
                                <motion.div
                                    key={category}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                                >
                                    <Card className="h-full bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
                                        <CardHeader className="pb-3">
                                            <CardTitle className="text-lg flex items-center gap-2">
                                                <Icon className="h-5 w-5 text-primary" />
                                                {category}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex flex-wrap gap-2">
                                                {skills.map((skill) => (
                                                    <Badge key={skill} variant="outline" className="text-xs">
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.section>

                {/* Certifications Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="space-y-6"
                >
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Award className="h-6 w-6 text-primary" />
                        Certifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                            >
                                <Card className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
                                    <CardContent className="p-4">
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-foreground">{cert.name}</h3>
                                                <p className="text-sm text-primary font-medium">{cert.issuer}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm text-muted-foreground">{cert.date}</p>
                                                <Badge
                                                    variant={cert.status === 'completed' ? 'default' : 'secondary'}
                                                    className="text-xs mt-1"
                                                >
                                                    {cert.status === 'completed' ? 'Completed' : 'In Progress'}
                                                </Badge>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Languages Section */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="space-y-6"
                >
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Globe className="h-6 w-6 text-primary" />
                        Languages
                    </h2>
                    <Card className="bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border border-border/50">
                        <CardContent className="p-6">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {languages.map((lang, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                                        className="text-center p-3 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10"
                                    >
                                        <p className="font-semibold text-foreground">{lang.name}</p>
                                        <p className="text-sm text-muted-foreground">({lang.level})</p>
                                    </motion.div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </motion.section>
            </div>
        </div>
    );
}
