"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, ExternalLink, Github, Menu, X } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.98]);

  // Refs for scroll animations
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const teamRef = useRef(null);

  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      const projectsPosition = projectsRef.current?.offsetTop || 0;
      const aboutPosition = aboutRef.current?.offsetTop || 0;
      const teamPosition = teamRef.current?.offsetTop || 0;

      if (scrollPosition >= teamPosition) {
        setActiveSection("team");
      } else if (scrollPosition >= aboutPosition) {
        setActiveSection("about");
      } else if (scrollPosition >= projectsPosition) {
        setActiveSection("projects");
      } else {
        setActiveSection("hero");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-black/95 dark:supports-[backdrop-filter]:bg-black/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <span className="text-xl font-bold tracking-tighter">02Cafe</span>
          </motion.div>
          <nav className="hidden md:flex items-center gap-6">
            {["projects", "about", "team"].map((section, index) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link
                  href={`#${section}`}
                  className={`text-sm font-medium hover:text-gray-500 dark:hover:text-gray-400 relative ${
                    activeSection === section
                      ? "after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-black dark:after:bg-white"
                      : ""
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t bg-white dark:bg-black"
            >
              <div className="container py-4 flex flex-col gap-4">
                {["projects", "about", "team"].map((section) => (
                  <Link
                    key={section}
                    href={`#${section}`}
                    className="text-sm font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 border-b">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    CREATING DIGITAL EXPERIENCES?
                  </h1>
                  <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                    We design and develop web applications that make an impact.
                    Clean, functional, and visually striking that AI said.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="rounded-none bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                    View Our Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-none border-black dark:border-white"
                  >
                    Contact Us
                  </Button>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="relative h-[400px] w-[400px] overflow-hidden">
                  <Image
                    src="/hero-image.png"
                    alt="Abstract geometric shapes in black and white"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          ref={projectsRef}
          className="w-full py-12 md:py-24 lg:py-32 border-b scroll-mt-16"
        >
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-start space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <div className="inline-block w-12 h-1 bg-black dark:bg-white"></div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Selected Projects
                </h2>
                <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                  A showcase of our most impactful work across various
                  industries and technologies.
                </p>
              </div>
            </motion.div>

            <Tabs defaultValue="all" className="mt-12">
              <TabsList className="grid w-full grid-cols-4 rounded-none border-b bg-transparent h-auto p-0">
                <TabsTrigger
                  value="all"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-black dark:data-[state=active]:border-white data-[state=active]:shadow-none py-2"
                >
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="web"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-black dark:data-[state=active]:border-white data-[state=active]:shadow-none py-2"
                >
                  Web Apps
                </TabsTrigger>
                <TabsTrigger
                  value="mobile"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-black dark:data-[state=active]:border-white data-[state=active]:shadow-none py-2"
                >
                  Mobile
                </TabsTrigger>
                <TabsTrigger
                  value="design"
                  className="rounded-none data-[state=active]:border-b-2 data-[state=active]:border-black dark:data-[state=active]:border-white data-[state=active]:shadow-none py-2"
                >
                  Design
                </TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="mt-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="web" className="mt-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {projects
                    .filter((p) => p.category === "web")
                    .map((project, index) => (
                      <ProjectCard
                        key={index}
                        project={project}
                        index={index}
                      />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="mobile" className="mt-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {projects
                    .filter((p) => p.category === "mobile")
                    .map((project, index) => (
                      <ProjectCard
                        key={index}
                        project={project}
                        index={index}
                      />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="design" className="mt-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {projects
                    .filter((p) => p.category === "design")
                    .map((project, index) => (
                      <ProjectCard
                        key={index}
                        project={project}
                        index={index}
                      />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          ref={aboutRef}
          className="w-full py-12 md:py-24 lg:py-32 border-b scroll-mt-16"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <motion.div
                className="flex flex-col justify-center space-y-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="space-y-2">
                  <div className="inline-block w-12 h-1 bg-black dark:bg-white"></div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Our Approach
                  </h2>
                  <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                    We believe in minimalism, functionality, and purpose-driven
                    design.
                  </p>
                </div>
                <div className="space-y-4 text-gray-500 dark:text-gray-400">
                  <p>
                    Founded in 2025, 02Cafe is a komeda coffee lover's clann. We
                    call ourself a web developer, but in reality, we just pray
                    to the AI in our VS Code and hopes for miracles.
                  </p>
                  <p>
                    We approach each project the way AI told us to — with
                    meticulous attention to detail, clean code, intuitive UX,
                    and designs that speak for themselves. Whether it’s a
                    scrappy startup or a legacy enterprise, we just follow the
                    AI’s advice and somehow end up with beautiful results.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="flex items-center justify-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-4">
                    <motion.div
                      className="aspect-square bg-gray-100 dark:bg-gray-800 p-6 flex items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="text-4xl font-bold">01</span>
                    </motion.div>
                    <motion.div
                      className="aspect-square bg-gray-100 dark:bg-gray-800 p-6"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <h3 className="font-bold mb-2">Research</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        We begin with thorough research to understand your goals
                        and audience by using AI.
                      </p>
                    </motion.div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <motion.div
                      className="aspect-square bg-gray-100 dark:bg-gray-800 p-6"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <h3 className="font-bold mb-2">Design</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        We create clean, functional designs that align with your
                        brand identity by AI.
                      </p>
                    </motion.div>
                    <motion.div
                      className="aspect-square bg-gray-100 dark:bg-gray-800 p-6"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <h3 className="font-bold mb-2">Develop</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        We build robust, scalable applications using modern
                        technologies by AI.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section
          id="team"
          ref={teamRef}
          className="w-full py-12 md:py-24 lg:py-32 border-b scroll-mt-16"
        >
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-start space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-2">
                <div className="inline-block w-12 h-1 bg-black dark:bg-white"></div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Our Team
                </h2>
                <p className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
                  Meet the creative minds behind our using AI.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} member={member} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col md:flex-row md:h-16 items-center justify-between gap-4 px-4 md:px-6">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-bold tracking-tighter">02Cafe</span>
          </motion.div>
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="#"
              className="text-xs text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-xs text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            >
              © 2025 02Cafe
            </Link>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

// Project Card Component with Animation
function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden rounded-none border-black dark:border-white h-full">
        <motion.div
          className="relative aspect-video overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </motion.div>
        <CardHeader className="p-4">
          <CardTitle className="text-lg">{project.title}</CardTitle>
          <CardDescription className="text-xs uppercase tracking-wide">
            {project.type}
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {project.description}
          </p>
        </CardContent>
        <CardFooter className="flex justify-between p-4 pt-0">
          <div className="flex gap-2 flex-wrap">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-2">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </motion.div>
              </Link>
            )}
            {project.demo && (
              <Link
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button size="icon" variant="ghost" className="h-8 w-8">
                    <ExternalLink className="h-4 w-4" />
                    <span className="sr-only">Live Demo</span>
                  </Button>
                </motion.div>
              </Link>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

// Team Member Component with Animation
function TeamMember({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden"
    >
      <motion.div
        className="aspect-[3/4] w-full overflow-hidden bg-gray-100 dark:bg-gray-800"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          width={300}
          height={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-4"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        <h3 className="font-bold text-white">{member.name}</h3>
        <p className="text-sm text-gray-300">{member.role}</p>
      </motion.div>
      <div className="mt-2">
        <h3 className="font-bold">{member.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {member.role}
        </p>
      </div>
    </motion.div>
  );
}

// Sample data for projects
const projects = [
  {
    title: "Closed Currency",
    type: "Web Application",
    description:
      "A closed currency exchange platform for educational institutions.",
    image: "/logo.png?height=400&width=600",
    tags: ["Next.js", "AI"],
    github: "https://github.com",
    demo: "https://demo.com",
    category: "web",
  },
];

// Sample data for team members
const teamMembers = [
  {
    name: "Saita08",
    role: "Founder & Creative Director",
    image: "/logo.png?height=400&width=300",
  },
  {
    name: "Ck Ja",
    role: "AI Prayer",
    image: "/ckja-zombie.png?height=400&width=300",
  },
  {
    name: "AI Serivce",
    role: "Director of All",
    image: "/logo.png?height=400&width=300",
  },
  {
    name: "You",
    role: "You are the Future CEO. Please help us",
    image: "/logo.png?height=400&width=300",
  },
];
