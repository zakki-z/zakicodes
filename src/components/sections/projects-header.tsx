"use client";

import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Github, Code2 } from 'lucide-react';

export function ProjectsHeader() {
  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Badge variant="outline" className="mb-6 bg-primary/5 text-primary border-primary/20">
          <Code2 className="mr-1 h-3 w-3" />
          Projects
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6">
          My{' '}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A collection of projects that showcase my skills in solving real world problems, by developing full-stack applications, and
          integrating machine learning tools. Each project represents
          a journey of learning and innovation.
        </p>
      </motion.div>
    </div>
  );
}
