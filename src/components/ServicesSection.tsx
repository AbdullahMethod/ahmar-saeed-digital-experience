import { Server, Shield, Network, Cctv, Monitor, Wrench } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';

const services = [
  { icon: Network, title: 'Network Administration', desc: 'Design, setup, and maintain secure local and wide area networks for seamless connectivity.' },
  { icon: Cctv, title: 'CCTV & Surveillance', desc: 'Install, configure, and manage surveillance systems for comprehensive security coverage.' },
  { icon: Server, title: 'Server Management', desc: 'Maintain and optimize servers for peak performance, uptime, and data integrity.' },
  { icon: Monitor, title: 'IT Support & Helpdesk', desc: 'Provide responsive technical support and troubleshooting for hardware and software issues.' },
  { icon: Shield, title: 'System Security', desc: 'Implement security protocols, firewalls, and data protection measures across IT infrastructure.' },
  { icon: Wrench, title: 'Hardware Maintenance', desc: 'Diagnose, repair, and maintain computer hardware, peripherals, and networking equipment.' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -10 },
  visible: (i: number) => ({
    opacity: 1, y: 0, rotateX: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' as const },
  }),
};

const ServicesSection = () => (
  <section id="services" className="section-padding relative">
    <div className="max-w-6xl mx-auto relative z-10">
      <SectionHeading title="Services" subtitle="What I bring to the table" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            whileHover={{ scale: 1.05, y: -8 }}
            whileTap={{ scale: 0.97 }}
            className="glass glow-border p-6 rounded-xl cursor-default group h-full"
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-5"
            >
              <s.icon size={24} className="text-primary-foreground" />
            </motion.div>
            <h3 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
