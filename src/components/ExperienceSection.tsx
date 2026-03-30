import { Briefcase } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Takmeel Square DHA BWP (Pvt.) Ltd.',
    role: 'IT Officer',
    period: 'Jan 2024 – Dec 2025',
  },
  {
    company: 'Allied School Bahawalpur',
    role: 'Assistant Admin Officer',
    period: 'Mar 2017 – Oct 2020',
  },
];

const ExperienceSection = () => (
  <section id="experience" className="section-padding relative">
    <div className="max-w-4xl mx-auto relative z-10">
      <SectionHeading title="Experience" subtitle="My professional journey" />

      <div className="relative">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute left-6 md:left-1/2 top-0 w-px bg-gradient-to-b from-primary via-accent to-secondary"
        />

        {experiences.map((exp, i) => (
          <AnimatedSection key={i} delay={i * 0.25} direction={i % 2 === 0 ? 'left' : 'right'}>
            <div className={`flex items-start gap-6 mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} hidden md:block`}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="glass glow-border p-6 rounded-xl"
                >
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                  <p className="text-primary font-medium mb-2">{exp.company}</p>
                  <p className="text-muted-foreground text-sm">{exp.period}</p>
                </motion.div>
              </div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 + 0.3, type: 'spring', stiffness: 200 }}
                className="relative z-10 shrink-0"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
                  <Briefcase size={18} className="text-primary-foreground" />
                </div>
              </motion.div>

              <div className="flex-1 md:hidden">
                <motion.div whileHover={{ scale: 1.02 }} className="glass glow-border p-6 rounded-xl">
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                  <p className="text-primary font-medium mb-2">{exp.company}</p>
                  <p className="text-muted-foreground text-sm">{exp.period}</p>
                </motion.div>
              </div>

              <div className="flex-1 hidden md:block" />
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
