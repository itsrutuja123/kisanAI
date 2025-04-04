
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-kisan-green-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and about */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6" />
              <span className="text-xl font-bold">KisanAI</span>
            </div>
            <p className="text-sm text-gray-200 mb-4">
              Empowering farmers with AI-driven insights for better crop management, disease prevention, and market decisions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/analysis" className="text-gray-200 hover:text-white transition-colors">
                  Analysis
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-200 hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Features</h3>
            <ul className="space-y-2">
              <li className="text-gray-200">Crop Recommendations</li>
              <li className="text-gray-200">Disease Detection</li>
              <li className="text-gray-200">Market Trends</li>
              <li className="text-gray-200">Crop Lifecycle Planner</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-200">
                <Mail className="h-4 w-4" />
                <span>support@kisanai.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-200">
                <Phone className="h-4 w-4" />
                <span>+91 1234567890</span>
              </li>
              <li className="flex items-center gap-2 text-gray-200">
                <MapPin className="h-4 w-4" />
                <span>Agritech Park, Pune, Maharashtra</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} KisanAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
