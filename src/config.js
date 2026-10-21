// 📄 src/config.js
export const config = {
  name: "SHAIK KHAZA BABU", 
  madeBy: "SHAIK JOHN SHAIDA",
  
  // Target: October 27, 2026
  targetDate: new Date(2026, 9, 27, 0, 0, 0), 

  finalWish: "Wishing you the most amazing year ahead. Keep shining! 🌟",

  letter: "Dear Brother,\n\nHappy Birthday! I wanted to build something special just for you to show how much you mean to me. You are my best friend, my partner in crime, and the best brother anyone could ask for.\n\nKeep smiling, keep dreaming, and never change. Have a fantastic year ahead!",

  // Note: I added %20 where your spaces are so the browser can read them. 
  photos: [
    { src: "/src/public/images/photo1.jpeg", alt: "Memory 1", caption: "Always laughing" },
    { src: "/src/public/images/photo%202.jpeg", alt: "Memory 2", caption: "Best trips" },
    { src: "/src/public/images/photo%203.jpeg", alt: "Memory 3", caption: "Brothers" },
    { src: "/src/public/images/photo%204.jpeg", alt: "Memory 4", caption: "Good times" },
    { src: "/src/public/images/photo%205.jpeg", alt: "Memory 5", caption: "Crazy days" },
    { src: "/src/public/images/photo%206.jpeg", alt: "Memory 6", caption: "Forever" },
  ],

  reasons: [
    { title: "The Protector", desc: "Always having my back, no matter what.", icon: "Shield" },
    { title: "The Comedian", desc: "Your jokes are terrible, but you still make me laugh.", icon: "Smile" },
    { title: "The Teammate", desc: "The best partner for gaming and sports.", icon: "Gamepad2" },
    { title: "The Advisor", desc: "Thanks for all the life advice (even the unsolicited ones).", icon: "Lightbulb" },
  ],

  // I added the `photo` property to each timeline event for the new sticky image animation!
  timeline: [
    { 
      year: "Childhood", 
      title: "The Beginning", 
      desc: "Fighting over toys and building forts.", 
      photo: "/src/public/images/photo1.jpeg" 
    },
    { 
      year: "Teens", 
      title: "Growing Up", 
      desc: "Late night talks, video games, and endless music.", 
      photo: "/src/public/images/photo%202.jpeg" 
    },
    { 
      year: "Today", 
      title: "Best Friends", 
      desc: "Grateful for every moment we share.", 
      photo: "/src/public/images/photo%203.jpeg" 
    }
  ]
};