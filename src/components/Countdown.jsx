import { useState, useEffect } from 'react';
import { config } from '../config';
import { fireConfetti } from '../utils/confetti';
import { motion, AnimatePresence } from 'motion/react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isToday, setIsToday] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const distance = config.targetDate.getTime() - new Date().getTime();
      if (distance < 0) {
        clearInterval(timer); setIsToday(true);
        fireConfetti(); setTimeout(fireConfetti, 1000); setTimeout(fireConfetti, 2500);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (isToday) {
    return (
      <section className="py-32 text-center relative z-10 flex flex-col items-center justify-center min-h-[60vh]">
        <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", bounce: 0.5 }}>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 drop-shadow-[0_0_50px_rgba(236,72,153,0.8)] animate-pulse">
            IT'S TIME!
          </h2>
        </motion.div>
        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="glass p-8 md:p-12 rounded-3xl max-w-3xl border-pink-500/30 shadow-[0_0_50px_rgba(236,72,153,0.2)] mt-8 bg-black/60 backdrop-blur-xl">
          <p className="text-3xl md:text-5xl font-display mb-6 text-white">Happy Birthday <span className="text-gradient font-bold">{config.name}</span>! 🎉</p>
          <p className="text-lg md:text-xl text-gray-200">The wait is finally over. Wishing you a day filled with endless joy, beautiful surprises, and all the happiness in the world!</p>
        </motion.div>
      </section>
    );
  }

  const TimeBlock = ({ value, label, theme }) => {
    const formattedValue = value.toString().padStart(2, '0');

    const themes = {
      purple: { glow: "group-hover:from-purple-500/50 group-hover:to-purple-900/50", bg: "bg-purple-500/10", text: "text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.8)]", border: "border-purple-500/30 group-hover:border-purple-400/60" },
      cyan: { glow: "group-hover:from-cyan-500/50 group-hover:to-blue-900/50", bg: "bg-cyan-500/10", text: "text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]", border: "border-cyan-500/30 group-hover:border-cyan-400/60" },
      orange: { glow: "group-hover:from-orange-500/50 group-hover:to-red-900/50", bg: "bg-orange-500/10", text: "text-orange-400 drop-shadow-[0_0_15px_rgba(249,115,22,0.8)]", border: "border-orange-500/30 group-hover:border-orange-400/60" },
      pink: { glow: "group-hover:from-pink-500/50 group-hover:to-rose-900/50", bg: "bg-pink-500/10", text: "text-pink-400 drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]", border: "border-pink-500/30 group-hover:border-pink-400/60" }
    };

    const style = themes[theme];

    return (
      <div className="relative group">
        <div className={`absolute -inset-1 bg-gradient-to-b from-white/10 to-transparent rounded-2xl ${style.glow} transition-all duration-500 blur-md`} />
        
        <div className={`relative flex flex-col items-center justify-center w-20 h-28 md:w-28 md:h-36 rounded-2xl bg-[#0a0a0f]/80 backdrop-blur-xl border ${style.border} shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden transition-colors duration-500`}>
          
          <div className={`absolute inset-0 ${style.bg} blur-xl`} />

          <div className="relative overflow-hidden h-[2.5rem] md:h-[3.5rem] w-full flex justify-center">
            {/* AnimatePresence will ONLY trigger when the 'key' changes. 
                We removed 'initial' so it doesn't animate on page load. */}
            <AnimatePresence mode="popLayout">
              <motion.span
                key={formattedValue}
                initial={false} // <-- ADDED THIS to stop the initial load animation
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -30, opacity: 0, filter: "blur(4px)" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`absolute text-4xl md:text-6xl font-bold font-display tracking-tighter tabular-nums ${style.text}`}
              >
                {formattedValue}
              </motion.span>
            </AnimatePresence>
          </div>
          
          <span className="relative text-[10px] md:text-xs text-gray-300 uppercase tracking-widest mt-1 font-medium">
            {label}
          </span>
        </div>
      </div>
    );
  };

  return (
    <section className="relative py-32 flex flex-col items-center px-4 overflow-hidden w-full">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{ backgroundImage: "url('./images/8.jpg')" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-black/60 to-[#0a0a0f] z-0" />

      <div className="relative z-10 flex flex-col items-center w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display mb-3 text-white tracking-tight drop-shadow-lg">The countdown begins</h2>
          <p className="text-gray-300 text-lg drop-shadow-md">Get ready to celebrate the legend</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          <TimeBlock value={timeLeft.days} label="Days" theme="purple" />
          <TimeBlock value={timeLeft.hours} label="Hours" theme="cyan" />
          <TimeBlock value={timeLeft.minutes} label="Mins" theme="orange" />
          <TimeBlock value={timeLeft.seconds} label="Secs" theme="pink" />
        </div>
      </div>
    </section>
  );
}