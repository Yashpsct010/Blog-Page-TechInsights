import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HomeIcon, UserIcon, FolderIcon, SunIcon, MoonIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { HomeIcon as HomeIconSolid, UserIcon as UserIconSolid, FolderIcon as FolderIconSolid, EnvelopeIcon as EnvelopeIconSolid } from '@heroicons/react/24/solid';
import SearchBar from './SearchBar';
import { useTheme } from '../context/ThemeContext';
import PropTypes from 'prop-types';

// Define NavLink PropTypes outside the component
const NavLinkPropTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  icon: PropTypes.elementType.isRequired,
  activeIcon: PropTypes.elementType.isRequired,
};

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

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
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${active
          ? 'text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-gray-700'
          : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-700'
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

  NavLink.propTypes = NavLinkPropTypes;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white dark:bg-gray-800 backdrop-blur-md border-b border-gray-100 dark:border-gray-700 fixed w-full top-0 z-50"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
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
            <NavLink to="/contact" icon={EnvelopeIcon} activeIcon={EnvelopeIconSolid}>
              Contact
            </NavLink>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="w-64">
              <SearchBar />
            </div>

            {/* Theme Toggle - Desktop */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </div>

          <div className="flex md:hidden items-center space-x-2">
            {/* Theme Toggle - Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>

            <button
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-gray-700 dark:text-gray-300"
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
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 space-y-2 pb-4"
          >
            <div className="mb-4">
              <SearchBar />
            </div>
            <NavLink to="/" icon={HomeIcon} activeIcon={HomeIconSolid}>
              Home
            </NavLink>
            <NavLink to="/about" icon={UserIcon} activeIcon={UserIconSolid}>
              About
            </NavLink>
            <NavLink to="/categories" icon={FolderIcon} activeIcon={FolderIconSolid}>
              Categories
            </NavLink>
            <NavLink to="/contact" icon={HomeIcon} activeIcon={HomeIconSolid}>
              Contact
            </NavLink>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}

export default Header;