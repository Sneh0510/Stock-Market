import React, { useState } from "react";
import { motion } from "framer-motion";

const Predictions = () => {
  const [symbol, setSymbol] = useState("");
  const [result, setResult] = useState(null);

  const handlePredict = (e) => {
    e.preventDefault();
    if (!symbol) return;

    // Dummy prediction logic
    const dummyPrediction = {
      symbol: symbol.toUpperCase(),
      currentPrice: 2465.2,
      predictedPrice: 2520.75,
      date: "June 20, 2025",
    };

    setResult(dummyPrediction);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1120] to-[#1c2c49] text-white dark:from-gray-900 dark:to-gray-800 py-12 px-6">
      <motion.div
        className="max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-extrabold text-center mb-10 text-[#00B4D8]">
          🔮 Stock Price Prediction
        </h1>

        <motion.form
          onSubmit={handlePredict}
          className="mb-8"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex gap-4 items-center">
            <input
              type="text"
              placeholder="Enter stock symbol (e.g. TCS)"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
              className="flex-1 p-3 rounded border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00B4D8] shadow-sm bg-white dark:bg-gray-800 dark:text-white"
            />
            <button
              type="submit"
              className="bg-[#00B4D8] hover:bg-[#009ec2] text-white px-6 py-3 rounded shadow transition duration-300"
            >
              Predict
            </button>
          </div>
        </motion.form>

        {result && (
          <motion.div
            className="bg-white dark:bg-gray-900 dark:text-white p-6 rounded-lg shadow-lg text-center space-y-3 border-t-4 border-[#00B4D8]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-[#00B4D8]">
              {result.symbol} Prediction
            </h2>
            <p className="text-lg">📉 <strong>Current Price:</strong> ₹{result.currentPrice}</p>
            <p className="text-lg">📈 <strong>Predicted Price:</strong> ₹{result.predictedPrice}</p>
            <p className="text-lg">📅 <strong>Prediction Date:</strong> {result.date}</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Predictions;
