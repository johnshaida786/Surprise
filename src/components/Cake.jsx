// 📄 src/components/Cake.jsx
import { useState } from 'react';
import { motion } from 'motion/react';
import { fireConfetti } from '../utils/confetti';

export default function Cake() {
  const [candlesOut, setCandlesOut] = useState(false);

  const blowCandles = () => {
    setCandlesOut(true);
    fireConfetti();
  };

  return (
    <section className="py-20 px-4 flex flex-col items-center">
      <h2 className="text-4xl font-display text-center mb-12">Make a Wish 🌠</h2>
      
      <div className="relative flex flex-col items-center mb-10">
        {/* Candles */}
        <div className="flex gap-4 mb-2 z-10">
          {[1, 2, 3].map((candle) => (
            <div key={candle} className="flex flex-col items-center">
              {!candlesOut && (
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }} 
                  transition={{ duration: 0.5, repeat: Infinity, delay: candle * 0.1 }}
                  className="w-3 h-4 bg-yellow-400 rounded-full blur-[2px] mb-1" 
                />
              )}
              <div className="w-2 h-10 bg-white/80 rounded-t-sm" />
            </div>
          ))}
        </div>
        
        {/* Cake Body */}
        <div className="w-48 h-24 bg-gradient-to-b from-pink-500 to-purple-600 rounded-t-xl relative overflow-hidden">
           <div className="absolute top-0 w-full h-4 bg-white/20 rounded-full blur-sm" />
           <div className="absolute top-4 w-full flex justify-between px-2">
              <div className="w-4 h-8 bg-pink-400/50 rounded-full" />
              <div className="w-4 h-8 bg-pink-400/50 rounded-full" />
              <div className="w-4 h-8 bg-pink-400/50 rounded-full" />
           </div>
        </div>
        <div className="w-56 h-4 bg-gray-800 rounded-b-xl" />
      </div>

      {!candlesOut ? (
        <button onClick={blowCandles} className="px-6 py-3 glass hover:bg-white/10 rounded-full font-medium transition-colors">
          Blow Candles 💨
        </button>
      ) : (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xl text-pink-400 font-display">
          Wish Granted! ✨
        </motion.p>
      )}
    </section>
  );
}