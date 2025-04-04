
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Leaf, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

// This would be replaced with actual auth logic in a complete implementation
const useAuth = () => {
  // Simulating auth state - replace with actual auth logic later
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return {
    isLoggedIn,
    login: () => setIsLoggedIn(true),
    logout: () => setIsLoggedIn(false),
    user: isLoggedIn ? { name: 'Farmer' } : null
  };
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn, login, logout, user } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle login for demo purposes
  const handleLoginClick = () => {
    login();
    // Navigate to dashboard (in a real app, this would be handled by proper routing)
    window.location.href = '/dashboard';
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
            
            {isLoggedIn ? (
              // Logged in menu options
              <>
                <Link to="/dashboard" className="text-foreground hover:text-kisan-green transition-colors">
                  Dashboard
                </Link>
                <div className="flex items-center gap-4">
                  <Link to="/profile" className="flex items-center gap-2 text-foreground hover:text-kisan-green transition-colors">
                    <User className="h-4 w-4" />
                    <span>{user?.name}</span>
                  </Link>
                  <Button 
                    className="kisan-btn-primary px-6 py-2"
                    onClick={logout}
                  >
                    Logout
                  </Button>
                </div>
              </>
            ) : (
              // Public menu options
              <>
                <Link to="/about" className="text-foreground hover:text-kisan-green transition-colors">
                  About
                </Link>
                <Link to="/support" className="text-foreground hover:text-kisan-green transition-colors">
                  Support
                </Link>
                <Button 
                  className="kisan-btn-primary px-6 py-2"
                  onClick={handleLoginClick}
                >
                  Sign In
                </Button>
              </>
            )}
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
              
              {isLoggedIn ? (
                // Logged in mobile menu
                <>
                  <Link
                    to="/dashboard"
                    className="text-foreground hover:text-kisan-green transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/profile"
                    className="text-foreground hover:text-kisan-green transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <Button 
                    className="kisan-btn-primary py-2 w-full"
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                // Public mobile menu
                <>
                  <Link
                    to="/about"
                    className="text-foreground hover:text-kisan-green transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    to="/support"
                    className="text-foreground hover:text-kisan-green transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Support
                  </Link>
                  <Button 
                    className="kisan-btn-primary py-2 w-full"
                    onClick={() => {
                      handleLoginClick();
                      setIsMenuOpen(false);
                    }}
                  >
                    Sign In
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
