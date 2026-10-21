import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Music, Pause } from 'lucide-react';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (isPlaying) { 
      audioRef.current.pause(); 
    } else { 
      audioRef.current.play().catch(e => console.log("Audio error", e)); 
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} onClick={toggleMusic}
      className="fixed bottom-6 right-6 p-4 glass rounded-full text-white shadow-xl hover:bg-white/10 transition-colors z-50 flex items-center justify-center">
      
      {/* NO IMPORT STATEMENT. Just use the relative path directly. */}
      <audio ref={audioRef} src="./music/birthday.mp3" loop />
      
      {isPlaying ? <Pause size={24} /> : <Music size={24} />}
      {isPlaying && <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full animate-ping" />}
    </motion.button>
  );
}