import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  const eventDate = new Date("2025-10-05T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-purple-950 flex flex-col items-center justify-center text-center text-white p-6 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/dj-background.jpg')", // Replace with your DJ background image later
        backgroundBlendMode: "overlay",
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <motion.img
        src="/images/sunday-feast-logo.png" // Replace with your uploaded logo later
        alt="Sunday Feast Logo"
        className="w-40 md:w-56 mb-6 relative z-10 drop-shadow-2xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-extrabold mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] relative z-10"
      >
        Sunday Feast
      </motion.h1>

      <p className="text-2xl md:text-3xl font-light mb-2 relative z-10">By DJ Khamusique</p>
      <p className="text-lg md:text-xl italic mb-2 relative z-10">Venue: Thuthukani</p>
      <p className="text-lg md:text-xl italic mb-12 relative z-10">Theme: Denim & White</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative z-10">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <motion.div
            key={unit}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-md border border-white/20"
          >
            <p className="text-5xl md:text-6xl font-extrabold drop-shadow-md">{value}</p>
            <span className="uppercase text-sm md:text-base tracking-widest opacity-90">{unit}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-12 relative z-10"
      >
        <button className="px-10 py-5 text-xl rounded-2xl shadow-2xl bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 hover:from-purple-800 hover:to-red-600 transition-all duration-300">
          Buy Tickets
        </button>
      </motion.div>
    </motion.div>
  );
}
