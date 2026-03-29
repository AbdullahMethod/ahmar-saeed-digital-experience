import { Mail, MapPin, Send } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

const ContactSection = () => (
  <section id="contact" className="section-padding relative">
    <div className="max-w-4xl mx-auto relative z-10">
      <SectionHeading title="Get In Touch" subtitle="Let's connect and explore opportunities" />

      <AnimatedSection>
        <div className="glass rounded-xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-glow-cyan via-glow-blue via-glow-purple via-glow-pink to-glow-orange" />
          <div className="p-8 md:p-12 text-center">
            <p className="text-foreground/90 text-lg mb-8 max-w-xl mx-auto">
              I'm always open to discussing new opportunities in IT and Administration. Feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 text-muted-foreground">
                <Mail size={18} className="text-glow-cyan" />
                <span>ahmarsaeed1999@gmail.com</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={18} className="text-glow-pink" />
                <span>Bahawalpur, Pakistan</span>
              </motion.div>
            </div>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              href="mailto:ahmarsaeed1999@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-display font-semibold text-primary-foreground transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--glow-cyan)), hsl(var(--glow-blue)), hsl(var(--glow-purple)))'
              }}
            >
              <Send size={16} />
              Send Email
            </motion.a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ContactSection;
