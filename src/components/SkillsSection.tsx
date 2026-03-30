import { Network, Cctv, Cpu, MonitorCog, MessageSquare, Crown, Lightbulb, Clock, Scale, HandshakeIcon, Heart, Flame } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

const techSkills = [
  { icon: Network, label: 'Networking' },
  { icon: Cctv, label: 'CCTV' },
  { icon: Cpu, label: 'Hardware' },
  { icon: MonitorCog, label: 'Software' },
];

const adminSkills = [
  { icon: MessageSquare, label: 'Communication' },
  { icon: Crown, label: 'Leadership' },
  { icon: Lightbulb, label: 'Problem-solving' },
  { icon: Clock, label: 'Time Management' },
  { icon: Scale, label: 'Decision-making' },
  { icon: HandshakeIcon, label: 'Conflict Management' },
  { icon: Heart, label: 'Emotional Intelligence' },
  { icon: Flame, label: 'Work Under Pressure' },
];

const SkillCard = ({ icon: Icon, label, i }: { icon: LucideIcon; label: string; i: number }) => (
  <AnimatedSection delay={i * 0.08}>
    <motion.div
      whileHover={{ scale: 1.05, y: -6 }}
      className="glass glow-border p-6 rounded-xl text-center cursor-default group"
    >
      <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all">
        <Icon size={24} className="text-primary-foreground" />
      </div>
      <span className="font-display font-semibold text-foreground text-sm">{label}</span>
    </motion.div>
  </AnimatedSection>
);

const activities = [
  'Network Admin',
  'Server Maintenance',
  'Troubleshooting',
  'CCTV Management',
  'Documentation',
];

const SkillsSection = () => (
  <section id="skills" className="section-padding relative">
    <div className="max-w-6xl mx-auto relative z-10">
      <SectionHeading title="Technical Skills" subtitle="Core technical competencies" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {techSkills.map((s, i) => <SkillCard key={s.label} {...s} i={i} />)}
      </div>

      <SectionHeading title="Admin Skills" subtitle="Professional soft skills" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {adminSkills.map((s, i) => <SkillCard key={s.label} {...s} i={i} />)}
      </div>

      <SectionHeading title="Activities" subtitle="Day-to-day professional activities" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {activities.map((label, i) => (
          <AnimatedSection key={label} delay={i * 0.1}>
            <motion.div whileHover={{ scale: 1.03 }} className="glass glow-border px-5 py-4 rounded-xl text-center flex items-center justify-center gap-2">
              <span className="color-dot bg-primary" />
              <span className="text-foreground font-medium text-sm">{label}</span>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
