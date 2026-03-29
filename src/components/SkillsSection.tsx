import { Network, Cctv, Cpu, MonitorCog, MessageSquare, Crown, Lightbulb, Clock, Scale, HandshakeIcon, Heart, Flame } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

const techSkills = [
  { icon: Network, label: 'Networking', color: 'from-glow-cyan to-glow-blue' },
  { icon: Cctv, label: 'CCTV', color: 'from-glow-blue to-glow-purple' },
  { icon: Cpu, label: 'Hardware', color: 'from-glow-purple to-glow-pink' },
  { icon: MonitorCog, label: 'Software', color: 'from-glow-pink to-glow-orange' },
];

const adminSkills = [
  { icon: MessageSquare, label: 'Communication', color: 'from-glow-cyan to-glow-blue' },
  { icon: Crown, label: 'Leadership', color: 'from-glow-blue to-glow-purple' },
  { icon: Lightbulb, label: 'Problem-solving', color: 'from-glow-purple to-glow-pink' },
  { icon: Clock, label: 'Time Management', color: 'from-glow-pink to-glow-orange' },
  { icon: Scale, label: 'Decision-making', color: 'from-glow-orange to-glow-green' },
  { icon: HandshakeIcon, label: 'Conflict Management', color: 'from-glow-green to-glow-cyan' },
  { icon: Heart, label: 'Emotional Intelligence', color: 'from-glow-cyan to-glow-purple' },
  { icon: Flame, label: 'Work Under Pressure', color: 'from-glow-orange to-glow-pink' },
];

const SkillCard = ({ icon: Icon, label, color, i }: { icon: LucideIcon; label: string; color: string; i: number }) => (
  <AnimatedSection delay={i * 0.08}>
    <motion.div
      whileHover={{ scale: 1.05, y: -6 }}
      className="glass glow-border p-6 rounded-xl text-center cursor-default group"
    >
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mx-auto mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all`}>
        <Icon size={24} className="text-primary-foreground" />
      </div>
      <span className="font-display font-semibold text-foreground text-sm">{label}</span>
    </motion.div>
  </AnimatedSection>
);

const activities = [
  { label: 'Network Admin', color: 'text-glow-cyan' },
  { label: 'Server Maintenance', color: 'text-glow-blue' },
  { label: 'Troubleshooting', color: 'text-glow-purple' },
  { label: 'CCTV Management', color: 'text-glow-pink' },
  { label: 'Documentation', color: 'text-glow-orange' },
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
        {activities.map((a, i) => (
          <AnimatedSection key={a.label} delay={i * 0.1}>
            <motion.div whileHover={{ scale: 1.03 }} className="glass glow-border px-5 py-4 rounded-xl text-center flex items-center justify-center gap-2">
              <span className={`color-dot bg-current ${a.color}`} />
              <span className="text-foreground font-medium text-sm">{a.label}</span>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
