import React from "react";
import { motion } from "framer-motion";

const dummyNews = [
  {
    title: "Nifty Hits All-Time High as IT and Banking Stocks Rally",
    summary:
      "Indian benchmark indices closed at record highs, supported by gains in the IT and banking sectors. Analysts expect bullish momentum to continue.",
    source: "Economic Times",
    date: "June 18, 2025",
  },
  {
    title: "Foreign Investors Pump ₹15,000 Cr into Indian Equities in June",
    summary:
      "FIIs continue their buying spree in Indian equities, showing confidence in long-term economic prospects amid global uncertainty.",
    source: "Moneycontrol",
    date: "June 17, 2025",
  },
  {
    title: "RBI Holds Repo Rate at 6.5%, Focus Remains on Inflation",
    summary:
      "RBI maintained status quo on key interest rates citing inflationary risks. Analysts predict rate cuts in early 2026.",
    source: "LiveMint",
    date: "June 16, 2025",
  },
];

const MarketNews = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-b from-[#0b1120] to-[#1c2c49] text-white dark:from-gray-900 dark:to-gray-800 py-12 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-10 text-[#00B4D8]"
        >
          📰 Market News
        </motion.h1>

        <div className="grid gap-6">
          {dummyNews.map((news, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#1c2c49] dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out"
            >
              <h2 className="text-xl font-semibold mb-2 text-[#00B4D8]">{news.title}</h2>
              <p className="text-gray-300 mb-3">{news.summary}</p>
              <div className="text-sm text-gray-400">
                {news.source} • {news.date}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MarketNews;
