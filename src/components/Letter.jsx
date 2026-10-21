// 📄 src/components/Letter.jsx
import { useState } from 'react';
import { motion } from 'motion/react';
import { config } from '../config';
import { Mail } from 'lucide-react';

export default function Letter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 px-4 max-w-3xl mx-auto w-full flex flex-col items-center">
      <h2 className="text-4xl font-display text-center mb-12">A Note For You ✉️</h2>
      
      <motion.div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer glass p-8 rounded-3xl w-full max-w-2xl text-center relative overflow-hidden group"
      >
        {!isOpen ? (
          <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center py-10">
            <Mail size={64} className="text-pink-400 mb-4 group-hover:scale-110 transition-transform" />
            <p className="text-xl font-medium">Click to open your letter</p>
          </motion.div>
        ) : (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-left py-4">
            <p className="text-lg leading-relaxed whitespace-pre-wrap text-gray-200">
              {config.letter}
            </p>
            <p className="mt-8 text-pink-400 font-display text-2xl text-right">— {config.madeBy}</p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}