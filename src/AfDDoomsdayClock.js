import { useState } from "react";
import { motion } from "framer-motion";

export default function AfDDoomsdayClock() {
  const [percentage, setPercentage] = useState(20);

  const getTimeAndMessage = (percent) => {
    if (percent >= 43.9) return { time: "12:00 AM", message: "🔥 Hitler O'Clock: Democracy collapses!" };
    if (percent >= 40) return { time: "11:55 PM", message: "AfD could plausibly lead a far-right government." };
    if (percent >= 35) return { time: "11:45 PM", message: "AfD may become the strongest party in Germany." };
    if (percent >= 30) return { time: "11:30 PM", message: "AfD is in serious contention for the Chancellery." };
    if (percent >= 25) return { time: "11:00 PM", message: "AfD solidifies itself as Germany’s second-largest party." };
    if (percent >= 20) return { time: "10:30 PM", message: "AfD is a significant opposition force." };
    if (percent >= 15) return { time: "10:00 PM", message: "AfD maintains strong regional influence." };
    if (percent >= 10) return { time: "9:30 PM", message: "AfD is still a fringe party." };
    if (percent >= 5) return { time: "9:00 PM", message: "AfD enters the Bundestag with national seats." };
    return { time: "8:30 PM", message: "AfD ceases to exist as a political force." };
  };

  const { time, message } = getTimeAndMessage(percentage);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">AfD Doomsday Clock</h1>
        <label className="block text-left font-semibold">Vote Percentage:</label>
        <input
          type="number"
          value={percentage}
          onChange={(e) => setPercentage(Number(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded mt-2"
          min="0"
          max="50"
        />
        <motion.div
          className="mt-6 text-4xl font-bold text-gray-700"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
        >
          🕰 {time}
        </motion.div>
        <p className="mt-4 text-lg font-semibold text-gray-600">{message}</p>
      </div>
    </div>
  );
}
