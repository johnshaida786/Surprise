// 📄 src/components/Preloader.jsx
import { motion } from 'motion/react';
import { config } from '../config';

export default function Preloader() {
  return (
    <motion.div
      className="fixed inset-0 bg-[#0a0a0f] z-50 flex flex-col items-center justify-center"
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, repeat: Infinity, direction: "reverse" }}
        className="text-6xl font-bold font-display text-gradient"
      >
        {config.name.charAt(0)}
      </motion.div>
      <motion.p 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        className="mt-4 text-gray-400 tracking-widest uppercase text-sm"
      >
        Preparing Surprise...
      </motion.p>
    </motion.div>
  );
}