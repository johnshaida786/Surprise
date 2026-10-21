// 📄 src/components/Timeline.jsx
import { motion } from 'motion/react';
import { config } from '../config';

export default function Timeline() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto w-full">
      <h2 className="text-4xl font-display text-center mb-16">Our Journey 🛤️</h2>
      
      <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:border-none">
        {config.timeline.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`relative mb-12 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:ml-0 md:text-right' : 'md:pl-12 md:ml-auto'}`}
          >
            {/* Dot */}
            <div className={`absolute top-0 w-6 h-6 bg-pink-500 rounded-full border-4 border-[#0a0a0f] -left-[35px] md:left-auto ${idx % 2 === 0 ? 'md:-right-[12px]' : 'md:-left-[12px]'}`} />
            
            <div className="glass p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <span className="text-sm font-bold text-pink-400 mb-2 block">{item.year}</span>
              <h3 className="text-2xl font-display mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}