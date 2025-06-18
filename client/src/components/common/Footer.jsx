import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0b1120] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2">StockPredict</h3>
            <p className="text-sm text-gray-400">
              Your AI-powered stock market prediction platform. Stay informed, stay ahead.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
              <li><Link to="/predictions" className="hover:text-yellow-400">Predictions</Link></li>
              <li><Link to="/market-news" className="hover:text-yellow-400">Market News</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-sm text-gray-400">Email: snehyadav091@gmail.com</p>
            <p className="text-sm text-gray-400">Phone: +91 98259 21720</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-4 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} StockPredict. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
