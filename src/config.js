// 📄 src/config.js
export const config = {
  name: "SHAIK KHAZA BABU", 
  madeBy: "SHAIK JOHN SHAIDA",
  
  // Target: October 27, 2026
  targetDate: new Date(2026, 9, 27, 0, 0, 0), 

  finalWish: "Wishing you the most amazing year ahead. Keep shining! 🌟",

  letter: "Dear Brother,\n\nHappy Birthday! I wanted to build something special just for you to show how much you mean to me. You are my best friend, my partner in crime, and the best brother anyone could ask for.\n\nKeep smiling, keep dreaming, and never change. Have a fantastic year ahead!",

  // Note: %20 represents the space in your file names (e.g., "photo 2.jpeg")
  photos: [
    { src: "./images/photo1.jpeg", alt: "Memory 1", caption: "Always laughing" },
    { src: "./images/photo%202.jpeg", alt: "Memory 2", caption: "Best trips" },
    { src: "./images/photo%203.jpeg", alt: "Memory 3", caption: "Brothers" },
    { src: "./images/photo%204.jpeg", alt: "Memory 4", caption: "Good times" },
    { src: "./images/photo%205.jpeg", alt: "Memory 5", caption: "Crazy days" },
    { src: "./images/photo%206.jpeg", alt: "Memory 6", caption: "Forever" },
  ],

  reasons: [
    { title: "The Protector", desc: "Always having my back, no matter what.", icon: "Shield" },
    { title: "The Comedian", desc: "Your jokes are terrible, but you still make me laugh.", icon: "Smile" },
    { title: "The Teammate", desc: "The best partner for gaming and sports.", icon: "Gamepad2" },
    { title: "The Advisor", desc: "Thanks for all the life advice (even the unsolicited ones).", icon: "Lightbulb" },
  ],

  timeline: [
    { 
      year: "Childhood", 
      title: "The Beginning", 
      desc: "Fighting over toys and building forts.", 
      photo: "./images/photo1.jpeg" 
    },
    { 
      year: "Teens", 
      title: "Growing Up", 
      desc: "Late night talks, video games, and endless music.", 
      photo: "./images/photo%202.jpeg" 
    },
    { 
      year: "Today", 
      title: "Best Friends", 
      desc: "Grateful for every moment we share.", 
      photo: "./images/photo%203.jpeg" 
    }
  ]
};