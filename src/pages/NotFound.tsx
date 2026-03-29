import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingBlobs from '@/components/FloatingBlobs';

const NotFound = () => (
  <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <FloatingBlobs />
    <div className="relative z-10 text-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="font-display text-8xl md:text-9xl font-bold gradient-text mb-4">404</h1>
        <p className="font-display text-2xl md:text-3xl text-foreground mb-3">Oops! Page Not Found</p>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-primary-foreground font-display font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5"
        >
          <Home size={18} />
          Go Back Home
        </Link>
      </motion.div>
    </div>
  </div>
);

export default NotFound;
