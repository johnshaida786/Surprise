import confetti from "canvas-confetti";

export const fireConfetti = () => {
  const duration = 3 * 1000;
  const end = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#a855f7', '#ec4899', '#fb923c']
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#a855f7', '#ec4899', '#fb923c']
    });

    if (Date.now() < end) requestAnimationFrame(frame);
  };
  frame();
};