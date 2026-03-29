import { Shield, Monitor, Network, Cctv, Wrench, Server, Briefcase } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

const highlights = [
  { icon: Monitor, label: 'IT Support', color: 'text-glow-cyan' },
  { icon: Briefcase, label: 'Administration', color: 'text-glow-blue' },
  { icon: Network, label: 'Networking', color: 'text-glow-purple' },
  { icon: Cctv, label: 'CCTV Systems', color: 'text-glow-pink' },
  { icon: Wrench, label: 'Troubleshooting', color: 'text-glow-orange' },
  { icon: Server, label: 'System Management', color: 'text-glow-green' },
];

const lookingFor = [
  { role: 'IT Officer', color: 'from-glow-cyan/20 to-glow-blue/20' },
  { role: 'Data Maintenance', color: 'from-glow-blue/20 to-glow-purple/20' },
  { role: 'CCTV Operator', color: 'from-glow-purple/20 to-glow-pink/20' },
  { role: 'System Administration', color: 'from-glow-pink/20 to-glow-orange/20' },
  { role: 'Assistant Admin Officer', color: 'from-glow-orange/20 to-glow-green/20' },
];

const AboutSection = () => (
  <section id="about" className="section-padding relative">
    <div className="max-w-6xl mx-auto relative z-10">
      <SectionHeading title="About Me" subtitle="A dedicated professional with expertise in IT infrastructure and administration" />

      <AnimatedSection className="glass glow-border p-8 md:p-12 mb-16">
        <p className="text-foreground/90 leading-relaxed text-lg mb-8">
          I am a committed IT and Administration professional with hands-on experience in managing IT infrastructure,
          network systems, CCTV operations, and administrative processes. I bring a blend of technical expertise and
          administrative acumen to deliver secure systems, streamlined operations, and effective solutions.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass glow-border p-4 rounded-xl flex items-center gap-3 cursor-default"
            >
              <item.icon size={20} className={`${item.color} shrink-0`} />
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <SectionHeading title="Looking For" subtitle="Positions I'm actively seeking" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {lookingFor.map((item, i) => (
          <AnimatedSection key={item.role} delay={i * 0.1}>
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              className={`colorful-card p-6 text-center cursor-default group bg-gradient-to-br ${item.color}`}
            >
              <Shield size={24} className="text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-display font-semibold text-foreground">{item.role}</span>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
