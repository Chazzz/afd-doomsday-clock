import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AfDDoomsdayClock() {
  const [percentage, setPercentage] = useState(20);

  useEffect(() => {
    document.title = "German Doomsday Clock"; // Sets the browser tab title
  }, []);

  const getTimeAndMessage = (percent) => {
    if (percent >= 43.9) return { time: "00:00", message: "🔥 Hitler O'Clock: Democracy collapses!" };
    if (percent >= 40) return { time: "23:55", message: "AfD could plausibly lead a far-right government." };
    if (percent >= 35) return { time: "23:45", message: "AfD may become the strongest party in Germany." };
    if (percent >= 30) return { time: "23:30", message: "AfD is in serious contention for the Chancellery." };
    if (percent >= 25) return { time: "23:00", message: "AfD solidifies itself as Germany’s second-largest party." };
    if (percent >= 20) return { time: "22:30", message: "AfD is a significant opposition force." };
    if (percent >= 15) return { time: "22:00", message: "AfD maintains strong regional influence." };
    if (percent >= 10) return { time: "21:30", message: "AfD is still a fringe party." };
    if (percent >= 5) return { time: "21:00", message: "AfD enters the Bundestag with national seats." };
    return { time: "20:30", message: "AfD ceases to exist as a political force." };
  };

  const { time, message } = getTimeAndMessage(percentage);
  const [hours, minutes] = time.split(":").map(Number);

  const hourRotation = (hours % 12) * 30 + minutes * 0.5; // 30° per hour, 0.5° per minute
  const minuteRotation = minutes * 6; // 6° per minute

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-4">German Doomsday Clock</h1>

      {/* Input Field and Label on the Same Line */}
      <div className="flex items-center gap-2">
        <label className="font-semibold">AfD Vote Percentage:</label>
        <input
          type="number"
          value={percentage}
          onChange={(e) => setPercentage(Number(e.target.value))}
          className="text-black p-2 rounded-lg w-20"
          min="0"
          max="50"
        />
      </div>

      {/* Analog Clock with Correct Rotation */}
      <div className="relative mt-6 w-40 h-40 flex items-center justify-center bg-gray-800 rounded-full border-4 border-gray-700">
        {/* Hour Hand */}
        <motion.div
          className="absolute bg-white"
          style={{
            width: "4px",
            height: "30%",
            bottom: "50%",
            left: "calc(50% - 2px)",
            transformOrigin: "bottom center",
            transform: `rotate(${hourRotation}deg)`,
          }}
          animate={{ rotate: hourRotation }}
          transition={{ duration: 0.5 }}
        />

        {/* Minute Hand */}
        <motion.div
          className="absolute bg-red-500"
          style={{
            width: "3px",
            height: "40%",
            bottom: "50%",
            left: "calc(50% - 1.5px)",
            transformOrigin: "bottom center",
            transform: `rotate(${minuteRotation}deg)`,
          }}
          animate={{ rotate: minuteRotation }}
          transition={{ duration: 0.5 }}
        />

        {/* Clock Center Dot */}
        <div className="absolute w-4 h-4 bg-white rounded-full" />
      </div>

      {/* Digital Time & Message */}
      <div className="mt-4 w-96 text-center p-4 bg-gray-800 border border-gray-700">
        <p className="text-lg">The time is 🕰 {time}</p>
        <p className="text-lg">{message}</p>
      </div>

      {/* Divider for Separation */}
      <div className="mt-8 w-full max-w-md border-t border-gray-600 opacity-50"></div>

      {/* Context Commentary */}
      <footer className="mt-6 text-center p-4 text-gray-400 text-sm max-w-sm mx-auto leading-relaxed">
        <p className="text-gray-300 font-semibold text-lg">Historical Context</p>
        <p className="mt-2">
          In 1933, the Nazi Party secured <strong>43.9% of the vote</strong>, allowing Hitler to consolidate power 
          and dismantle democracy. No single moment marks the fall of a system, but thresholds matter.
        </p>
        <p className="mt-4">
          Today, with the rise of the far-right party AfD, history reminds us that democracy is rarely lost overnight—it erodes, 
          vote by vote, policy by policy. The trajectory of political extremism often follows patterns of normalization, 
          coalition-building, and legal maneuvering.
        </p>
        <p className="mt-4">
          This clock tracks the potential tipping points in electoral support.
          The question remains: how close to midnight does democracy have to get before the alarms go off?
        </p>
      </footer>
    </div>
  );
}
