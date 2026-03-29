import { GraduationCap, BookOpen } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

const education = [
  { degree: 'BS Elementary Education', institution: 'The Islamia University of Bahawalpur' },
  { degree: 'F.A', institution: '' },
  { degree: 'Matric', institution: 'BISE Bahawalpur' },
];

const courses = [
  { title: 'SEO', provider: 'DigiSkills' },
  { title: 'Freelancing', provider: 'DigiSkills' },
];

const EducationSection = () => (
  <section id="education" className="section-padding relative">
    <div className="max-w-5xl mx-auto relative z-10">
      <SectionHeading title="Education" subtitle="Academic background" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
        {education.map((ed, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <motion.div whileHover={{ scale: 1.03, y: -4 }} className="glass glow-border p-6 rounded-xl text-center h-full">
              <GraduationCap size={28} className="text-primary mx-auto mb-4" />
              <h3 className="font-display font-bold text-foreground mb-2">{ed.degree}</h3>
              {ed.institution && <p className="text-muted-foreground text-sm">{ed.institution}</p>}
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      <SectionHeading title="Courses & Certifications" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
        {courses.map((c, i) => (
          <AnimatedSection key={i} delay={i * 0.15}>
            <motion.div whileHover={{ scale: 1.03 }} className="glass glow-border p-6 rounded-xl flex items-center gap-4">
              <BookOpen size={22} className="text-primary shrink-0" />
              <div>
                <h4 className="font-display font-semibold text-foreground">{c.title}</h4>
                <p className="text-muted-foreground text-sm">{c.provider}</p>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection>
        <div className="glass glow-border p-8 rounded-xl text-center">
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">References</h3>
          <p className="text-muted-foreground italic">"Reference will be furnished on demand."</p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default EducationSection;
