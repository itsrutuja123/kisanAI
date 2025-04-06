import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Leaf,
  User,
  Home,
  BarChart2,
  HelpCircle,
  Info,
  ShoppingBag,
  Droplets
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Auth hook using localStorage
const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const login = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
  };

  return {
    isLoggedIn,
    login,
    logout,
    user: isLoggedIn ? { name: 'Farmer' } : null
  };
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn, login, logout, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginClick = () => {
    login();
    navigate('/dashboard');
  };

  const handleLogoutClick = () => {
    logout();
    navigate('/');
  };

  const getNavLinks = () => {
    if (isLoggedIn) {
      return [
        { to: '/dashboard', label: 'Dashboard', icon: <BarChart2 className="h-4 w-4" /> },
        { to: '/crop-recommendation', label: 'Crop Recommendation', icon: <Leaf className="h-4 w-4" /> },
        { to: '/disease-detection', label: 'Disease Detection', icon: <HelpCircle className="h-4 w-4" /> },
        { to: '/marketplace', label: 'Marketplace', icon: <ShoppingBag className="h-4 w-4" /> },
        { to: '/crop-monitoring', label: 'Crop Monitoring', icon: <Droplets className="h-4 w-4" /> },
      ];
    } else {
      return [
        { to: '/', label: 'Home', icon: <Home className="h-4 w-4" /> },
        { to: '/about', label: 'About', icon: <Info className="h-4 w-4" /> },
        { to: '/support', label: 'Support', icon: <HelpCircle className="h-4 w-4" /> },
      ];
    }
  };

  const navLinks = getNavLinks();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40" role="navigation">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to={isLoggedIn ? '/dashboard' : '/'} className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-kisan-green" />
            <span className="text-xl font-bold text-kisan-green-dark">KisanAI</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={index}
                  to={link.to}
                  className={`flex items-center gap-2 transition-colors ${
                    isActive ? 'text-kisan-green font-semibold' : 'text-foreground hover:text-kisan-green'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              );
            })}

            {isLoggedIn ? (
              <div className="flex items-center gap-4">
                <Link to="/profile" className="flex items-center gap-2 text-foreground hover:text-kisan-green transition-colors">
                  <User className="h-4 w-4" />
                  <span>{user?.name}</span>
                </Link>
                <Button className="kisan-btn-primary px-6 py-2" onClick={handleLogoutClick}>
                  Logout
                </Button>
              </div>
            ) : (
              <Button className="kisan-btn-primary px-6 py-2" onClick={handleLoginClick}>
                Sign In
              </Button>
            )}
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button type="button" className="text-foreground" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 transition-all duration-300 ease-in-out">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={index}
                    to={link.to}
                    className={`flex items-center gap-2 transition-colors py-2 ${
                      isActive ? 'text-kisan-green font-semibold' : 'text-foreground hover:text-kisan-green'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </Link>
                );
              })}

              {isLoggedIn ? (
                <>
                  <Link
                    to="/profile"
                    className="flex items-center gap-2 text-foreground hover:text-kisan-green transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User className="h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                  <Button
                    className="kisan-btn-primary py-2 w-full"
                    onClick={() => {
                      handleLogoutClick();
                      setIsMenuOpen(false);
                    }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Button
                  className="kisan-btn-primary py-2 w-full"
                  onClick={() => {
                    handleLoginClick();
                    setIsMenuOpen(false);
                  }}
                >
                  Sign In
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
