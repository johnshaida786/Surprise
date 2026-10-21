import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Gallery from './components/Gallery';
import Timeline from './components/Timeline';
import Reasons from './components/Reasons';
import Letter from './components/Letter';
import Cake from './components/Cake';
import GiftBox from './components/GiftBox';
import MusicToggle from './components/MusicToggle';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <div className="relative bg-[#0a0a0f] min-h-screen text-white selection:bg-pink-500/30">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 origin-left z-50"
        style={{ scaleX }}
      />

      <main className="flex flex-col gap-24 pb-24">
        <Hero />
        <Countdown />  {/* <-- MAKE SURE IT IS ONLY HERE ONCE */}
        <Gallery />
        <Timeline />
        <Reasons />
        <Letter />
        <Cake />
        <GiftBox />
        <Footer />
      </main>

      <MusicToggle />
    </div>
  );
}