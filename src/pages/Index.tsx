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

const Index = () => (
  <div className="relative min-h-screen overflow-x-hidden">
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
  </div>
);

export default Index;
