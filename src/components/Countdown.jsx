import { useState, useEffect } from 'react';
import { config } from '../config';
import { fireConfetti } from '../utils/confetti';
import { motion } from 'motion/react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isToday, setIsToday] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = config.targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setIsToday(true);
        fireConfetti();
        setTimeout(fireConfetti, 1000);
        setTimeout(fireConfetti, 2500);
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

  // 🌟 GRAND FINALE STATE 🌟
  if (isToday) {
    return (
      <section className="py-32 text-center relative z-10 flex flex-col items-center justify-center min-h-[60vh]">
        <motion.div
           initial={{ scale: 0.5, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ type: "spring", bounce: 0.5, duration: 1 }}
           className="mb-8"
        >
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 drop-shadow-[0_0_50px_rgba(236,72,153,0.8)] animate-pulse">
            IT'S TIME!
          </h2>
        </motion.div>
        
        <motion.div
           initial={{ y: 50, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 0.5, duration: 0.8 }}
           className="glass p-8 md:p-12 rounded-3xl max-w-3xl border-pink-500/30 shadow-[0_0_50px_rgba(236,72,153,0.2)]"
        >
          <p className="text-3xl md:text-5xl font-display mb-6 text-white">
            Happy Birthday <span className="text-gradient font-bold">{config.name}</span>! 🎉
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            The wait is finally over. Wishing you a day filled with endless joy, beautiful surprises, and all the happiness in the world. 
            Today is all about celebrating the amazing person you are!
          </p>
        </motion.div>
      </section>
    );
  }

  const TimeBlock = ({ value, label, isSeconds }) => (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
      <div className="relative glass flex flex-col items-center justify-center w-24 h-28 md:w-32 md:h-36 rounded-2xl border-white/10 hover:border-white/30 transition-colors">
        <motion.span 
          key={value}
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`text-4xl md:text-6xl font-bold font-display text-white ${isSeconds ? 'text-pink-400' : ''}`}
        >
          {value.toString().padStart(2, '0')}
        </motion.span>
        <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest mt-2 font-medium">
          {label}
        </span>
      </div>
    </div>
  );

  return (
    <section className="py-24 flex flex-col items-center px-4 relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display mb-3 text-white">The countdown begins</h2>
        <p className="text-gray-400">Get ready to celebrate the legend</p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        <TimeBlock value={timeLeft.days} label="Days" />
        <TimeBlock value={timeLeft.hours} label="Hours" />
        <TimeBlock value={timeLeft.minutes} label="Mins" />
        <TimeBlock value={timeLeft.seconds} label="Secs" isSeconds={true} />
      </div>
    </section>
  );
}