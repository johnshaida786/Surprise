// 📄 src/components/Footer.jsx
import { config } from '../config';

export default function Footer() {
  return (
    <footer className="py-12 text-center text-gray-500 border-t border-white/5">
      <p className="flex items-center justify-center gap-2">
        Made with <span className="text-red-500 animate-pulse">❤️</span> by {config.madeBy}
      </p>
    </footer>
  );
}