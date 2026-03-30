import { Mail, MapPin, Send } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

const ContactSection = () => (
  <section id="contact" className="section-padding relative">
    <div className="max-w-4xl mx-auto relative z-10">
      <SectionHeading title="Get In Touch" subtitle="Let's connect and explore opportunities" />

      <AnimatedSection direction="up">
        <motion.div
          whileHover={{ y: -4 }}
          className="glass rounded-xl overflow-hidden"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="h-2 bg-gradient-to-r from-grey-1 via-grey-3 to-grey-5 origin-left"
          />
          <div className="p-8 md:p-12 text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-foreground/90 text-lg mb-8 max-w-xl mx-auto"
            >
              I'm always open to discussing new opportunities in IT and Administration. Feel free to reach out!
            </motion.p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <motion.div
                whileHover={{ scale: 1.08, x: -2 }}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <Mail size={18} className="text-primary" />
                <span>ahmarchoudhry56@gmail.com</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.08, x: 2 }}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <MapPin size={18} className="text-primary" />
                <span>Bahawalpur, Pakistan</span>
              </motion.div>
            </div>
            <motion.a
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:ahmarchoudhry56@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-display font-semibold bg-primary text-primary-foreground transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
            >
              <Send size={16} />
              Send Email
            </motion.a>
          </div>
        </motion.div>
      </AnimatedSection>
    </div>
  </section>
);

export default ContactSection;
