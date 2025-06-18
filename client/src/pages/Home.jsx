import React from "react";
import { Link } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import Ticker from "../components/Ticker";

const Home = () => {
  return (
    <>
      <Ticker />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-b from-[#0b1120] to-[#1c2c49] text-white"
      >
        {/* Hero Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="w-64 md:w-96 mx-auto mb-6">
              <Player
                autoplay
                loop
                src="https://lottie.host/8a880fb2-35df-4311-9130-2febd8a13ea1/BxFDBe46SA.json"
                style={{ height: "300px", width: "300px" }}
              />
            </div>

            <motion.h1
              className="text-4xl md:text-6xl font-extrabold leading-tight text-white"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              AI-Based Stock Market Predictions
            </motion.h1>

            <motion.p
              className="mt-4 text-lg md:text-xl text-gray-300"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Empower your trading decisions with real-time predictions and insights.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-col md:flex-row justify-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link
                to="/predictions"
                className="bg-[#00B4D8] hover:bg-[#009ec2] text-white font-semibold px-6 py-3 rounded-md"
              >
                Get Predictions
              </Link>
              <Link
                to="/market-news"
                className="bg-white hover:bg-gray-100 text-[#1c2c49] font-semibold px-6 py-3 rounded-md"
              >
                Market News
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-10">Why Choose StockPredict?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-[#1c2c49] p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-xl font-semibold text-[#00B4D8] mb-3">AI-Powered Accuracy</h3>
                <p className="text-gray-300">Leverage machine learning models to get highly accurate stock predictions.</p>
              </div>
              <div className="bg-[#1c2c49] p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-xl font-semibold text-[#00B4D8] mb-3">Real-Time Updates</h3>
                <p className="text-gray-300">Stay informed with up-to-date stock news and trends.</p>
              </div>
              <div className="bg-[#1c2c49] p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <h3 className="text-xl font-semibold text-[#00B4D8] mb-3">Intuitive Dashboard</h3>
                <p className="text-gray-300">Track your performance and explore market insights in an easy interface.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-10">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-[#0b1120] p-6 rounded-lg shadow-md">
                <p className="text-lg italic text-gray-300">"StockPredict changed the way I invest. The predictions are accurate and easy to understand!"</p>
                <h4 className="mt-4 font-semibold text-[#00B4D8]">— Rajesh, Investor</h4>
              </div>
              <div className="bg-[#0b1120] p-6 rounded-lg shadow-md">
                <p className="text-lg italic text-gray-300">"As a beginner, I found the interface super friendly. I feel more confident trading now."</p>
                <h4 className="mt-4 font-semibold text-[#00B4D8]">— Priya, Student</h4>
              </div>
              <div className="bg-[#0b1120] p-6 rounded-lg shadow-md">
                <p className="text-lg italic text-gray-300">"Loved the market news and real-time updates. It’s my daily go-to platform!"</p>
                <h4 className="mt-4 font-semibold text-[#00B4D8]">— Ankit, Analyst</h4>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to start trading smarter?</h2>
          <Link
            to="/predictions"
            className="bg-[#00B4D8] hover:bg-[#009ec2] text-white font-semibold px-8 py-4 rounded-md transition"
          >
            View Predictions Now
          </Link>
        </section>
      </motion.div>
    </>
  );
};

export default Home;
