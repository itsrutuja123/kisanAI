import { Leaf, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-kisan-green-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Logo and About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-white" />
              <span className="text-2xl font-bold tracking-wide">KisanAI</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Empowering farmers with AI-driven insights for smarter crop planning, timely disease alerts, and accurate market forecasting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 uppercase tracking-wide text-gray-100">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/analysis" className="text-gray-300 hover:text-white transition duration-200">
                  Analysis
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-300 hover:text-white transition duration-200">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-lg mb-4 uppercase tracking-wide text-gray-100">Features</h3>
            <ul className="space-y-3 text-gray-300">
              <li>🌱 Crop Recommendations</li>
              <li>🦠 Disease Detection</li>
              <li>📈 Market Trends</li>
              <li>📅 Crop Lifecycle Planner</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 uppercase tracking-wide text-gray-100">Contact Us</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@kisanai.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 1234567890</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Agritech Park, Pune, Maharashtra</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-600 mt-12 pt-6 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} <span className="font-semibold">KisanAI</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
