import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

import certSLR from '@/assets/cert-slr-ma.jpeg';
import certFreelancing from '@/assets/cert-freelancing.jpeg';
import certAllied from '@/assets/cert-allied-experience.jpeg';
import certSEO from '@/assets/cert-seo.jpeg';

const certificates = [
  {
    title: 'Experience Certificate — Allied School',
    description: 'Assistant Admin Officer at Allied School Muslim Campus, Bahawalpur (Mar 2017 – Oct 2020)',
    image: certAllied,
    type: 'Experience',
  },
  {
    title: 'SEO Training Certificate — DigiSkills',
    description: 'Completed SEO (Search Engine Optimization) course under DigiSkills Training Program DSTP3.0 (Aug–Nov 2025)',
    image: certSEO,
    type: 'Course',
  },
  {
    title: 'Freelancing Training Certificate — DigiSkills',
    description: 'Completed Freelancing course under DigiSkills Training Program DSTP3.0 (Aug–Nov 2025)',
    image: certFreelancing,
    type: 'Course',
  },
  {
    title: 'SLR-MA Workshop Certificate — IUB',
    description: 'Participated in One-Day Workshop on Systematic Literature Review and Meta Analysis at The Islamia University of Bahawalpur (Feb 2023)',
    image: certSLR,
    type: 'Workshop',
  },
];

const typeColors: Record<string, string> = {
  Experience: 'from-primary to-accent',
  Course: 'from-secondary to-primary',
  Workshop: 'from-accent to-secondary',
};

const CertificationsSection = () => (
  <section id="certifications" className="py-20 px-4 md:px-8 relative z-10">
    <div className="max-w-6xl mx-auto">
      <SectionHeading title="Certifications & Experience" subtitle="Verified credentials and professional certificates" />

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {certificates.map((cert, i) => (
          <AnimatedSection key={cert.title} delay={i * 0.15}>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass rounded-2xl overflow-hidden border border-border group"
            >
              {/* Badge */}
              <div className="relative">
                <div className={`absolute top-3 left-3 z-10 px-3 py-1 rounded-full text-xs font-bold text-primary-foreground bg-gradient-to-r ${typeColors[cert.type]}`}>
                  <Award size={12} className="inline mr-1 -mt-0.5" />
                  {cert.type}
                </div>
                <div className="overflow-hidden">
                  <motion.img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-56 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-display font-bold text-foreground text-lg mb-2">{cert.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{cert.description}</p>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
