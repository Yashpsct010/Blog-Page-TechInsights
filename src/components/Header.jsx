import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HomeIcon, UserIcon, FolderIcon } from '@heroicons/react/24/outline';
import { HomeIcon as HomeIconSolid, UserIcon as UserIconSolid, FolderIcon as FolderIconSolid } from '@heroicons/react/24/solid';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const NavLink = ({ to, children, icon: Icon, activeIcon: ActiveIcon }) => {
    const active = isActive(to);
    return (
      <Link
        to={to}
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
          active
            ? 'text-primary font-medium bg-blue-50'
            : 'text-gray-600 hover:text-primary hover:bg-gray-50'
        }`}
      >
        {active ? (
          <ActiveIcon className="w-5 h-5" />
        ) : (
          <Icon className="w-5 h-5" />
        )}
        <span>{children}</span>
      </Link>
    );
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white/80 backdrop-blur-md border-b border-gray-100 fixed w-full top-0 z-50"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-space-grotesk font-bold gradient-text">
              TechInsights
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-2">
            <NavLink to="/" icon={HomeIcon} activeIcon={HomeIconSolid}>
              Home
            </NavLink>
            <NavLink to="/about" icon={UserIcon} activeIcon={UserIconSolid}>
              About
            </NavLink>
            <NavLink to="/categories" icon={FolderIcon} activeIcon={FolderIconSolid}>
              Categories
            </NavLink>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 space-y-2 pb-4"
          >
            <NavLink to="/" icon={HomeIcon} activeIcon={HomeIconSolid}>
              Home
            </NavLink>
            <NavLink to="/about" icon={UserIcon} activeIcon={UserIconSolid}>
              About
            </NavLink>
            <NavLink to="/categories" icon={FolderIcon} activeIcon={FolderIconSolid}>
              Categories
            </NavLink>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}

export default Header;