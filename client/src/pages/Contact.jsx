import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-[#0b1120] to-[#1c2c49] text-white dark:from-gray-900 dark:to-gray-800 py-12 px-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-2xl mx-auto">
        <motion.h1
          className="text-3xl font-bold text-center mb-10 text-[#00B4D8]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Contact Us
        </motion.h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#1c2c49] text-white border border-gray-600 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#1c2c49] text-white border border-gray-600 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-300">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-[#1c2c49] text-white border border-gray-600 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#00B4D8] hover:bg-[#009ac0] text-white px-6 py-3 rounded-md transition"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
