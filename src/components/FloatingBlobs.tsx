import { motion } from 'framer-motion';

const FloatingBlobs = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <motion.div
      animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.1, 1] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      className="floating-blob w-96 h-96 bg-grey-2 top-20 -left-48"
    />
    <motion.div
      animate={{ y: [0, 25, 0], x: [0, -20, 0], scale: [1, 0.9, 1] }}
      transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      className="floating-blob w-80 h-80 bg-grey-4 top-1/2 -right-40"
    />
    <motion.div
      animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
      className="floating-blob w-72 h-72 bg-grey-3 bottom-20 left-1/3"
    />
    <motion.div
      animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.12, 0.05] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      className="floating-blob w-64 h-64 bg-grey-5 top-1/3 left-1/4"
    />
    <motion.div
      animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      className="floating-blob w-56 h-56 bg-grey-1 bottom-1/3 right-1/4"
    />
  </div>
);

export default FloatingBlobs;
