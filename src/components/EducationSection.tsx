import { GraduationCap, BookOpen, Award } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

const education = [
  { degree: 'BS Elementary Education', institution: 'The Islamia University of Bahawalpur', color: 'from-glow-cyan to-glow-blue' },
  { degree: 'F.A', institution: '', color: 'from-glow-blue to-glow-purple' },
  { degree: 'Matric', institution: 'BISE Bahawalpur', color: 'from-glow-purple to-glow-pink' },
];

const courses = [
  { title: 'SEO', provider: 'DigiSkills', color: 'from-glow-orange to-glow-pink' },
  { title: 'Freelancing', provider: 'DigiSkills', color: 'from-glow-green to-glow-cyan' },
];

const EducationSection = () => (
  <section id="education" className="section-padding relative">
    <div className="max-w-5xl mx-auto relative z-10">
      <SectionHeading title="Education" subtitle="Academic background" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
        {education.map((ed, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <motion.div whileHover={{ scale: 1.03, y: -4 }} className="glass rounded-xl overflow-hidden text-center h-full cursor-default">
              <div className={`h-2 bg-gradient-to-r ${ed.color}`} />
              <div className="p-6">
                <GraduationCap size={28} className="text-primary mx-auto mb-4" />
                <h3 className="font-display font-bold text-foreground mb-2">{ed.degree}</h3>
                {ed.institution && <p className="text-muted-foreground text-sm">{ed.institution}</p>}
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      <SectionHeading title="Courses & Certifications" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
        {courses.map((c, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <motion.div whileHover={{ scale: 1.03 }} className="glass rounded-xl overflow-hidden cursor-default">
              <div className={`h-2 bg-gradient-to-r ${c.color}`} />
              <div className="p-6 flex items-center gap-4">
                <Award size={22} className="text-primary shrink-0" />
                <div>
                  <h4 className="font-display font-semibold text-foreground">{c.title}</h4>
                  <p className="text-muted-foreground text-sm">{c.provider}</p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection>
        <div className="glass glow-border p-8 rounded-xl text-center">
          <BookOpen size={24} className="text-primary mx-auto mb-3" />
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">References</h3>
          <p className="text-muted-foreground italic">"Reference will be furnished on demand."</p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default EducationSection;
