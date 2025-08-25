"use client";

import { motion } from 'motion/react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { siteConfig } from '@/config/site.config';

const whatImDoing = [
  {
    title: "Data Science & AI",
    description: "Proven experience in Data Science and Artificial Intelligence, leveraging advanced algorithms and machine learning models to deliver actionable insights and intelligent automation across diverse domains.",
    icon: "🤖",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Programming",
    description: "Experience working with multiple languages and frameworks, allowing me to develop both web and enterprise-level applications.",
    icon: "💻",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Cloud Computing",
    description: "Recognizing the importance of system architecture, as well as integrating modern cloud technologies into my development workflow.",
    icon: "☁️",
    gradient: "from-purple-500/20 to-violet-500/20"
  },
  {
    title: "BackEnd",
    description: "Understand how to design and implement robust server-side logic, managing databases efficiently, and ensuring seamless integration between the frontend and backend.",
    icon: "🗄️",
    gradient: "from-orange-500/20 to-yellow-500/20"
  }
];

export function AboutContent() {
  return (
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-12"
      >
        <Card className="relative bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border-0 overflow-hidden">
          <CardHeader className="relative z-10 flex flex-col items-center justify-center gap-4 pt-8 pb-2">
            <div className="relative w-48 h-48 overflow-hidden border-4 border-primary shadow-xl bg-background">
              <Image
                  src="/img/image.jpg"
                  alt={`Zakariae Azhari's avatar`}
                  width={192}
                  height={192}
                  className="object-cover w-full h-full rounded-lg"
                  priority
              />
              {/* SaaS-style background effect */}
              <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[340px] h-[340px] bg-gradient-radial from-primary/30 to-transparent rounded-lg blur-2xl opacity-40 dark:opacity-60" />
                <div className="absolute bottom-0 right-0 w-[180px] h-[180px] bg-gradient-to-br from-secondary/30 to-transparent rounded-lg blur-xl opacity-30 dark:opacity-50" />
              </div>
            </div>
            <div className="text-center text-3xl font-extrabold text-primary mt-4">Zakariae Azhari</div>
          </CardHeader>
          <CardContent className="space-y-4 relative z-10">
            <p className="text-muted-foreground leading-relaxed">
              Hi, I&apos;m Zakaria, a passionate and driven software engineer student in Morocco. With a strong foundation in programming and a keen interest in technology, I specialize in building robust and innovative solutions that solve real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond coding, I&apos;m committed to continuous learning and personal growth. I enjoy exploring new technologies and discovering new concepts. My goal is to create impactful applications and leave a lasting mark in the tech world.
            </p>
          </CardContent>
        </Card>

        {/* What I'm Doing Section */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-foreground mb-8">What I&apos;m Doing</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {whatImDoing.map((item, index) => (
                <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="h-full bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    <CardContent className="relative z-10 p-6 space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="text-4xl bg-gradient-to-br from-primary/20 to-secondary/20 p-3 rounded-xl border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
  );
}
