import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { config } from '../config';
import { fireConfetti } from '../utils/confetti';
import { ChevronDown, Sparkles } from 'lucide-react';

// --- 1. Typewriter Component ---
const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < text.length) {
        setDisplayText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayText(text.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (currentIndex === text.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (currentIndex === 0) {
        setIsDeleting(false);
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, text]);

  return <span>{displayText}<span className="animate-pulse text-pink-500">|</span></span>;
};

// --- 2. Magnetic Button Component ---
const MagneticButton = ({ children, ...props }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// --- Main Hero Component ---
export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) * 0.05;
    const moveY = (clientY - window.innerHeight / 2) * 0.05;
    mouseX.set(moveX);
    mouseY.set(moveY);
  };

  const springConfig = { damping: 25, stiffness: 150 };
  const parallaxX = useSpring(mouseX, springConfig);
  const parallaxY = useSpring(mouseY, springConfig);

  return (
    <section 
      className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Orbs */}
      <motion.div style={{ x: useTransform(parallaxX, v => -v * 2), y: useTransform(parallaxY, v => -v * 2) }} className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/30 rounded-full blur-[120px] pointer-events-none" />
      <motion.div style={{ x: useTransform(parallaxX, v => v * 2), y: useTransform(parallaxY, v => v * 2) }} className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-pink-600/30 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Decorations */}
      <motion.div style={{ x: parallaxX, y: parallaxY }} className="absolute top-20 left-[20%] text-5xl opacity-40 pointer-events-none animate-float">🎈</motion.div>
      <motion.div style={{ x: useTransform(parallaxX, v => -v * 1.5), y: useTransform(parallaxY, v => -v * 1.5) }} className="absolute bottom-40 right-[20%] text-5xl opacity-40 pointer-events-none animate-float-delayed">✨</motion.div>
      <motion.div style={{ x: useTransform(parallaxX, v => v * 1.2), y: useTransform(parallaxY, v => v * 1.2) }} className="absolute top-40 right-[30%] text-4xl opacity-40 pointer-events-none animate-float">🎉</motion.div>

      <div className="z-10 flex flex-col items-center">
        <div className="flex items-center gap-2 px-6 py-2 rounded-full glass mb-6 text-sm font-medium text-pink-200 border-pink-500/30">
          <Sparkles size={16} className="text-pink-400" />
          {/* Changed to "To My Brother" */}
          <Typewriter text="To My Brother" />
        </div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-8 tracking-tighter flex flex-wrap justify-center items-center gap-x-4"
        >
          <span>Happy Birthday,</span>
          <div className="flex items-center gap-2 md:gap-4 flex-wrap justify-center w-full">
            {/* Name with continuous gradient */}
            <span className="text-gradient animated-gradient">{config.name}</span>
            
            {/* 🎂 ANIMATED CAKE EMOJI */}
            <motion.span
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, -10, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                repeatDelay: 1
              }}
              className="inline-block drop-shadow-[0_0_20px_rgba(236,72,153,0.6)] cursor-pointer hover:scale-125 transition-transform"
              onClick={fireConfetti}
              title="Click me!"
            >
              🎂
            </motion.span>
          </div>
        </motion.h1>
        
        <MagneticButton>
          <button
            onClick={fireConfetti}
            className="mt-6 group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(236,72,153,0.8)] overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <span className="group-hover:text-white transition-colors duration-300">Tap to Celebrate 🎊</span>
          </button>
        </MagneticButton>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 text-gray-500 hover:text-white transition-colors cursor-pointer"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <ChevronDown size={36} />
      </motion.div>
    </section>
  );
}