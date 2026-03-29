import { Network, Server, Shield, FileText } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Office Network Infrastructure',
    desc: 'Designed and deployed a complete LAN/WAN setup for a corporate office with 50+ endpoints, ensuring high availability and security.',
    tags: ['Networking', 'LAN/WAN', 'Firewall'],
    gradient: 'from-glow-cyan via-glow-blue to-glow-purple',
    icon: Network,
  },
  {
    title: 'CCTV Surveillance System',
    desc: 'Installed and configured a 32-camera CCTV system with remote monitoring, motion detection, and cloud backup integration.',
    tags: ['CCTV', 'Security', 'Remote Access'],
    gradient: 'from-glow-blue via-glow-purple to-glow-pink',
    icon: Shield,
  },
  {
    title: 'Server Room Setup & Maintenance',
    desc: 'Set up and maintained a server room with proper cooling, UPS backup, and organized cabling for optimal performance.',
    tags: ['Server', 'Maintenance', 'Infrastructure'],
    gradient: 'from-glow-purple via-glow-pink to-glow-orange',
    icon: Server,
  },
  {
    title: 'Administrative Documentation System',
    desc: 'Developed a streamlined documentation process for administrative records, improving retrieval efficiency by 60%.',
    tags: ['Admin', 'Documentation', 'Process'],
    gradient: 'from-glow-orange via-glow-green to-glow-cyan',
    icon: FileText,
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding relative">
    <div className="max-w-6xl mx-auto relative z-10">
      <SectionHeading title="Projects" subtitle="Notable projects and implementations" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.15}>
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              className="glass rounded-xl overflow-hidden cursor-default group h-full"
            >
              {/* Colorful top bar */}
              <div className={`h-2 bg-gradient-to-r ${p.gradient}`} />
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                    <p.icon size={20} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">{p.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
