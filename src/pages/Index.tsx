import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import FloatingBlobs from '@/components/FloatingBlobs';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CertificationsSection from '@/components/CertificationsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.1 } },
};

const Index = () => (
  <AnimatePresence>
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      className="relative min-h-screen overflow-x-hidden"
    >
      <FloatingBlobs />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </motion.div>
  </AnimatePresence>
);

export default Index;
