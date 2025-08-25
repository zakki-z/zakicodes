"use client";

import { useState } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Github,
  ExternalLink,
  Star,
  GitFork,
  Calendar,
  Search,
  X
} from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from '@/components/ui/pagination';

interface Project {
  id: number;
  name: string;
  description: string;
  github_url?: string;
  live_url?: string;
  technologies: string[];
  period: string;
  status: 'completed' | 'ongoing';
  highlights: string[];
}

const staticProjects: Project[] = [
  {
    id: 6,
    name: "Sale Analytics",
    description: "A machine learning project designed to analyze sales data",
    github_url: "https://github.com/zakki-z/Sales-Analytics.git",
    technologies: ["Python", "Flask", "Scikit-learn"],
    period: "Jan 2025 – Apr 2025",
    status: "completed",
    highlights: [
      "Classify products into performance categories",
      "predicts potential bestsellers among new products based on sales figures and growth trends"
    ]
  },
  {
    id: 1,
    name: "SaleSync",
    description: "A full-stack sales management platform enabling real-time resource tracking with ML models for predictive analysis.",
    github_url: "https://github.com/zakki-z/SaleSync.git",
    technologies: ["Spring Boot", "Next.js", "Python", "PostgreSQL"],
    period: "Jan 2025 – Apr 2025",
    status: "completed",
    highlights: [
      "Built a full-stack sales management platform enabling real-time resource tracking",
      "Integrated ML models for predictive analysis, reducing decision-making time",
      "Designed scalable REST APIs supporting multi-tenant architecture"
    ]
  },
  {
    id: 2,
    name: "SkillConnect",
    description: "A freelancer marketplace allowing clients to post projects and freelancers to manage workflows with secure, role-based dashboards.",
    github_url: "https://github.com/zakki-z/SkillConnect.git",
    technologies: ["PHP", "PostgreSQL"],
    period: "May 2025",
    status: "completed",
    highlights: [
      "Developed a freelancer marketplace allowing clients to post projects and freelancers to manage workflows",
      "Designed secure, role-based dashboards"
    ]
  },
  {
    id: 5,
    name: "LaBriocheBlanche",
    description: "A promotional website (Next.js, Tailwind CSS), increasing customer\n" +
        "engagement.",
    live_url: "https://labriocheblanche.ma",
    technologies: ["Next.js", "Seo"],
    period: "jun 2025",
    status: "completed",
    highlights: [
      "Developed and maintained a promotional website (Next.js, Tailwind CSS), increasing customer\n" +
      "engagement."
    ]
  },
  {
    id: 3,
    name: "MySafeNet",
    description: "A secure, privacy-first chat application",
    github_url: "https://github.com/zakki-z/MySafeNet.git",
    technologies: ["Spring Boot", "Next.js", "PostgreSQL","Websocket"],
    period: "July 2025 – Present",
    status: "ongoing",
    highlights: [
      "Developing an end-to-end encrypted chat platform with real-time messaging via WebSocket",
      "Implementing group chat, role-based permissions, and secure authentication"
    ]
  },
  {
    id: 4,
    name: "Ortho",
    description: "A physiotherapy video platform with automated recommendations based on surgery type and recovery stage.",
    github_url: "https://github.com/yourusername/ortho",
    technologies: ["Spring Boot", "Next.js", "PostgreSQL"],
    period: "Aug 2025 – Present",
    status: "ongoing",
    highlights: [
      "Creating a physiotherapy video platform with automated recommendations based on surgery type and recovery stage"
    ]
  }
];

export function ProjectsGrid() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [showTags, setShowTags] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  // Get all unique technologies from projects
  const allTopics = Array.from(
      new Set(staticProjects.flatMap(project => project.technologies))
  ).sort();

  // Filter projects based on search and selected topic
  const filteredProjects = staticProjects.filter(project => {
    const matchesSearch = search === '' ||
        project.name.toLowerCase().includes(search.toLowerCase()) ||
        project.description.toLowerCase().includes(search.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(search.toLowerCase()));

    const matchesTopic = selectedTopic === null ||
        project.technologies.includes(selectedTopic);

    return matchesSearch && matchesTopic;
  });

  const totalPages = Math.ceil(filteredProjects.length / pageSize);
  const paginatedProjects = filteredProjects.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
      <>
        {/* Projects Search Bar & Tag Filter */}
        <div className="mb-6">
          {/* Centered Search Bar with icon */}
          <div className="relative max-w-md mx-auto mb-2">
            <Search className="absolute left-3 top-1/2 h-4 w-4 text-muted-foreground transform -translate-y-1/2 transition-colors" />
            <Input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="pl-10 bg-background/50 backdrop-blur-sm border-border/60 focus:border-primary/50"
            />
          </div>
          <div className="flex sm:hidden justify-between items-center mb-2">
            <button
                className="px-4 py-2 rounded-full border text-xs font-medium transition-colors bg-primary text-primary-foreground border-border"
                onClick={() => setShowTags((v) => !v)}
                aria-label="Toggle tags filter"
            >
              {showTags ? 'Hide Tags' : 'Show Tags'}
            </button>
            <button
                className={`px-4 py-2 rounded-full border text-xs font-medium transition-colors ${selectedTopic === null ? 'bg-background text-foreground' : 'bg-primary text-primary-foreground'} border-border`}
                onClick={() => setSelectedTopic(null)}
            >
              Clear Filter
            </button>
          </div>
          {/* Mobile: collapsible tags */}
          {showTags && (
              <div className="flex flex-wrap items-center gap-3 mt-2 justify-start sm:hidden">
                {allTopics.map((topic) => (
                    <Button
                        key={topic}
                        variant={selectedTopic === topic ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedTopic(topic)}
                        className="text-xs h-7"
                    >
                      {topic}
                    </Button>
                ))}
                {(search || selectedTopic) && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => { setSearch(''); setSelectedTopic(null); }}
                        className="text-xs h-7 text-muted-foreground hover:text-foreground"
                    >
                      <X className="h-3 w-3 mr-1" />
                      Clear
                    </Button>
                )}
              </div>
          )}
          {/* Desktop: tag bar */}
          <div className="hidden sm:flex flex-wrap items-center gap-3 mt-4 justify-start">
            <button
                className="px-4 py-2 rounded-full border text-xs font-medium transition-colors bg-primary text-primary-foreground border-border"
                onClick={() => setShowTags((v) => !v)}
                aria-label="Toggle tags filter desktop"
            >
              {showTags ? 'Hide Tags' : 'Show Tags'}
            </button>
            <button
                className={`px-4 py-2 rounded-full border text-xs font-medium transition-colors ${selectedTopic === null ? 'bg-background text-foreground' : 'bg-primary text-primary-foreground'} border-border`}
                onClick={() => setSelectedTopic(null)}
            >
              Clear Filter
            </button>
            {showTags && allTopics.map((topic) => (
                <Button
                    key={topic}
                    variant={selectedTopic === topic ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedTopic(topic)}
                    className="text-xs h-7"
                >
                  {topic}
                </Button>
            ))}
            {(search || selectedTopic) && showTags && (
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => { setSearch(''); setSelectedTopic(null); }}
                    className="text-xs h-7 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-3 w-3 mr-1" />
                  Clear
                </Button>
            )}
          </div>
          {/* Active Filters */}
          {(search || selectedTopic) && (
              <div className="flex flex-wrap items-center gap-2 mt-2 justify-start">
                <span className="text-sm text-muted-foreground">Active filters:</span>
                {search && (
                    <Badge variant="secondary" className="text-xs">
                      Search: &quot;{search}&quot;
                    </Badge>
                )}
                {selectedTopic && (
                    <Badge variant="secondary" className="text-xs">
                      Tag: {selectedTopic}
                    </Badge>
                )}
              </div>
          )}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {paginatedProjects.map((project, index) => (
              <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="h-full flex flex-col"
              >
                <Card className="group h-full min-h-[420px] flex flex-col flex-1 overflow-hidden border-0 bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Project preview image placeholder */}
                  <div className="relative h-32 w-full overflow-hidden mb-2 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <div className="text-4xl font-bold text-primary/20">
                      {project.name.charAt(0)}
                    </div>
                  </div>

                  <CardHeader className="relative space-y-4 flex-1">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-1">
                            {project.name}
                          </CardTitle>
                          {project.status === 'ongoing' && (
                              <Badge variant="outline" className="text-xs bg-green-50 text-green-600 border-green-200">
                                Ongoing
                              </Badge>
                          )}
                        </div>
                        <CardDescription className="line-clamp-2 leading-relaxed">
                          {project.description}
                        </CardDescription>
                      </div>
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{project.period}</span>
                    </div>
                  </CardHeader>

                  <CardContent className="relative space-y-4 flex-1 flex flex-col justify-between">
                    {/* Technologies */}
                    {project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 3).map((tech) => (
                              <Badge
                                  key={tech}
                                  variant="secondary"
                                  className="text-xs bg-muted/50 hover:bg-muted/70 transition-colors"
                              >
                                {tech}
                              </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{project.technologies.length - 3}
                              </Badge>
                          )}
                        </div>
                    )}

                    {/* Project Highlights */}
                    <div className="space-y-1">
                      {project.highlights.slice(0, 2).map((highlight, idx) => (
                          <div key={idx} className="text-xs text-muted-foreground flex items-start gap-1">
                            <span className="text-primary mt-1">•</span>
                            <span className="line-clamp-2">{highlight}</span>
                          </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-3 pt-4">
                      {project.github_url && (  // ← Add this condition
                          <Button asChild size="sm" variant="outline" className="flex-1">
                            <Link
                                href={project.github_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2"
                            >
                              <Github className="h-3 w-3" />
                              Code
                            </Link>
                          </Button>
                      )}  {/* ← Close the condition here */}

                      {project.live_url && (
                          <Button asChild size="sm" className="flex-1">
                            <Link
                                href={project.live_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2"
                            >
                              <ExternalLink className="h-3 w-3" />
                              Live
                            </Link>
                          </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
          ))}
        </div>

        {/* Show message when no projects match filter */}
        {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found matching your criteria.</p>
              <Button
                  variant="outline"
                  onClick={() => { setSearch(''); setSelectedTopic(null); }}
                  className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
            <Pagination className="mt-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                      href="#"
                      onClick={e => {
                        e.preventDefault();
                        if (currentPage > 1) setCurrentPage(p => Math.max(1, p - 1));
                      }}
                      className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }).map((_, i) => (
                    <PaginationItem key={i}>
                      <PaginationLink
                          href="#"
                          isActive={currentPage === i + 1}
                          onClick={e => { e.preventDefault(); setCurrentPage(i + 1); }}
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                      href="#"
                      onClick={e => {
                        e.preventDefault();
                        if (currentPage < totalPages) setCurrentPage(p => Math.min(totalPages, p + 1));
                      }}
                      className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
        )}
      </>
  );
}
