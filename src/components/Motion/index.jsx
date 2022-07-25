import { motion } from 'framer-motion';

export function Motion({ children, className }) {
  return (
    <motion.div
      animate="translateEnd"
      initial="translateInitial"
      transition={{ duration: 0.6 }}
      variants={{
        translateEnd: { translateY: 0 },
        translateInitial: { translateY: 290 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
