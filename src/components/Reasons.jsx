// 📄 src/components/Reasons.jsx
import { motion } from 'motion/react';
import { config } from '../config';
import { Shield, Smile, Gamepad2, Lightbulb } from 'lucide-react';

const IconMap = { Shield, Smile, Gamepad2, Lightbulb };

export default function Reasons() {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto w-full">
      <h2 className="text-4xl font-display text-center mb-12">Why You're Awesome 🏆</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {config.reasons.map((reason, idx) => {
          const IconComponent = IconMap[reason.icon] || Smile;
          return (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02, rotateX: 5, rotateY: 5 }}
              className="glass p-8 rounded-3xl flex flex-col items-center text-center cursor-default"
              style={{ perspective: 1000 }}
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.2)]">
                <IconComponent size={32} />
              </div>
              <h3 className="text-2xl font-display mb-3">{reason.title}</h3>
              <p className="text-gray-400">{reason.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}