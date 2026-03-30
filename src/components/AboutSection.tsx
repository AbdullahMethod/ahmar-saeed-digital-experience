import { Shield, Monitor, Network, Cctv, Wrench, Server, Briefcase } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import AnimatedCounter from './AnimatedCounter';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

const highlights = [
  { icon: Monitor, label: 'IT Support' },
  { icon: Briefcase, label: 'Administration' },
  { icon: Network, label: 'Networking' },
  { icon: Cctv, label: 'CCTV Systems' },
  { icon: Wrench, label: 'Troubleshooting' },
  { icon: Server, label: 'System Management' },
];

const lookingFor = [
  'IT Officer',
  'Data Maintenance',
  'CCTV Operator',
  'System Administration',
  'Assistant Admin Officer',
];

const stats = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 6, suffix: '+', label: 'Core Skills' },
  { value: 10, suffix: '+', label: 'Projects Done' },
];

const AboutSection = () => (
  <section id="about" className="section-padding relative">
    <div className="max-w-6xl mx-auto relative z-10">
      <SectionHeading title="About Me" subtitle="A dedicated professional with expertise in IT infrastructure and administration" />

      {/* Stats */}
      <AnimatedSection className="grid grid-cols-3 gap-4 mb-16">
        {stats.map((s) => (
          <AnimatedCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
        ))}
      </AnimatedSection>

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
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 120 }}
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="glass glow-border p-4 rounded-xl flex items-center gap-3 cursor-default"
            >
              <motion.div
                whileHover={{ rotate: 10 }}
                transition={{ type: 'spring' }}
              >
                <item.icon size={20} className="text-primary shrink-0" />
              </motion.div>
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <SectionHeading title="Looking For" subtitle="Positions I'm actively seeking" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {lookingFor.map((role, i) => (
          <AnimatedSection key={role} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
            <motion.div
              whileHover={{ scale: 1.05, y: -6 }}
              whileTap={{ scale: 0.97 }}
              className="colorful-card p-6 text-center cursor-default group"
            >
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                <Shield size={24} className="text-primary mx-auto mb-3" />
              </motion.div>
              <span className="font-display font-semibold text-foreground">{role}</span>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
