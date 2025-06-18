import React from "react";
import { motion } from "framer-motion";

const stockData = [
  { symbol: "NIFTY", price: "22,680", change: "+0.45%" },
  { symbol: "SENSEX", price: "74,221", change: "-0.15%" },
  { symbol: "RELIANCE", price: "2,970", change: "+1.20%" },
  { symbol: "TCS", price: "3,420", change: "+0.10%" },
  { symbol: "INFY", price: "1,400", change: "-0.25%" },
];

const Ticker = () => {
  return (
    <div className="w-full bg-[#0b1120] overflow-hidden py-2 text-white">
      <motion.div
        className="flex gap-16 whitespace-nowrap animate-marquee px-6"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {stockData.map((stock, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="font-bold">{stock.symbol}:</span>
            <span>{stock.price}</span>
            <span
              className={`text-sm ${
                stock.change.startsWith("+")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              ({stock.change})
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Ticker;
