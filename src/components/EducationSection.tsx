import { GraduationCap, BookOpen, Award } from 'lucide-react';
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
          <AnimatedSection key={i} delay={i * 0.15} direction={i === 0 ? 'left' : i === 2 ? 'right' : 'up'}>
            <motion.div
              whileHover={{ scale: 1.05, y: -6 }}
              whileTap={{ scale: 0.97 }}
              className="glass rounded-xl overflow-hidden text-center h-full cursor-default"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="h-2 bg-gradient-to-r from-grey-1 via-grey-3 to-grey-5 origin-left"
              />
              <div className="p-6">
                <motion.div
                  whileHover={{ rotate: 15 }}
                  transition={{ type: 'spring' }}
                >
                  <GraduationCap size={28} className="text-primary mx-auto mb-4" />
                </motion.div>
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
          <AnimatedSection key={i} delay={i * 0.15} direction={i === 0 ? 'left' : 'right'}>
            <motion.div
              whileHover={{ scale: 1.05, x: i === 0 ? -4 : 4 }}
              className="glass rounded-xl overflow-hidden cursor-default"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="h-2 bg-gradient-to-r from-grey-1 to-grey-3 origin-left"
              />
              <div className="p-6 flex items-center gap-4">
                <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                  <Award size={22} className="text-primary shrink-0" />
                </motion.div>
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
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass glow-border p-8 rounded-xl text-center"
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <BookOpen size={24} className="text-primary mx-auto mb-3" />
          </motion.div>
          <h3 className="font-display text-lg font-semibold text-foreground mb-2">References</h3>
          <p className="text-muted-foreground italic">"Reference will be furnished on demand."</p>
        </motion.div>
      </AnimatedSection>
    </div>
  </section>
);

export default EducationSection;
