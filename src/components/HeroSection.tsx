import { motion } from 'framer-motion';
import { ArrowDown, Globe } from 'lucide-react';
import profileImg from '@/assets/profile.jpeg';

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center justify-center relative section-padding pt-32">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full border border-border/50 animate-spin-slow pointer-events-none" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[650px] md:h-[650px] rounded-full border border-border/30 animate-spin-slow pointer-events-none" style={{ animationDirection: 'reverse' }} />

    <div className="max-w-5xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mx-auto mb-8 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-border shadow-xl"
        >
          <img src={profileImg} alt="Ahmar Saeed" className="w-full h-full object-cover object-top" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <div className="w-8 h-px bg-primary/50" />
          <p className="text-primary font-display text-sm md:text-base tracking-[0.3em] uppercase">
            Welcome to my portfolio
          </p>
          <div className="w-8 h-px bg-primary/50" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="gradient-text">AHMAR</span>{' '}
          <span className="text-foreground">SAEED</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-4 leading-relaxed"
        >
          Reliable IT & Administration Professional Delivering Secure Systems, Smooth Operations, and Smart Solutions
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="text-muted-foreground/70 max-w-2xl mx-auto mb-8 text-sm md:text-base"
        >
          Passionate about building robust IT infrastructures, managing networks, and ensuring seamless administrative operations with a focus on security and efficiency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          <span className="glass glow-border px-4 py-2 rounded-full text-sm flex items-center gap-2">
            <Globe size={14} className="text-grey-2" /> English, Urdu
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#experience"
            className="group px-8 py-3 rounded-lg font-display font-semibold bg-primary text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/20"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg glass glow-border font-display font-semibold text-foreground hover:bg-accent transition-all duration-300 hover:-translate-y-1"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors animate-float">
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
