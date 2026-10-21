// 📄 src/components/GiftBox.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { config } from '../config';
import { Gift } from 'lucide-react';

export default function GiftBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 px-4 flex flex-col items-center min-h-[50vh] justify-center">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="box"
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="cursor-pointer flex flex-col items-center group"
          >
            <motion.div
              animate={{ rotate: [0, -5, 5, -5, 5, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              className="text-pink-500 drop-shadow-[0_0_30px_rgba(236,72,153,0.5)]"
            >
              <Gift size={120} strokeWidth={1} />
            </motion.div>
            <p className="mt-6 text-gray-400 font-medium">Click to open your gift</p>
          </motion.div>
        ) : (
          <motion.div
            key="message"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass p-10 rounded-3xl max-w-xl text-center border-pink-500/30"
          >
            <h2 className="text-3xl font-display text-gradient mb-4">Surprise! 🎁</h2>
            <p className="text-xl leading-relaxed text-gray-200">
              {config.finalWish}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}