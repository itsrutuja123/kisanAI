
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-kisan-green" />
            <span className="text-xl font-bold text-kisan-green-dark">KisanAI</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-kisan-green transition-colors">
              Home
            </Link>
            <Link to="/analysis" className="text-foreground hover:text-kisan-green transition-colors">
              Analysis
            </Link>
            <Link to="/dashboard" className="text-foreground hover:text-kisan-green transition-colors">
              Dashboard
            </Link>
            <Button className="kisan-btn-primary px-6 py-2">Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-foreground"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-foreground hover:text-kisan-green transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/analysis"
                className="text-foreground hover:text-kisan-green transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Analysis
              </Link>
              <Link
                to="/dashboard"
                className="text-foreground hover:text-kisan-green transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Button className="kisan-btn-primary py-2 w-full">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
