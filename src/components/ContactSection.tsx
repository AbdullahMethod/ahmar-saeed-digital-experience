import { Mail, MapPin, Phone } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';

const ContactSection = () => (
  <section id="contact" className="section-padding relative">
    <div className="max-w-4xl mx-auto relative z-10">
      <SectionHeading title="Get In Touch" subtitle="Let's connect and explore opportunities" />

      <AnimatedSection>
        <div className="glass glow-border p-8 md:p-12 rounded-xl text-center">
          <p className="text-foreground/90 text-lg mb-8 max-w-xl mx-auto">
            I'm always open to discussing new opportunities in IT and Administration. Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-primary" />
              <span>ahmarsaeed1999@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-primary" />
              <span>Bahawalpur, Pakistan</span>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ContactSection;
