import { Link } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Subscribing email:', email);
        setEmail('');
        alert('Thanks for subscribing!');
    };

    return (
        <footer className="bg-gray-800 text-white pt-10 pb-5">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">TechInsights</h3>
                        <p className="text-gray-300">
                            Your source for the latest in technology news, trends, and insights.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-blue-400 transition-colors">About</Link></li>
                            <li><Link to="/categories" className="hover:text-blue-400 transition-colors">Categories</Link></li>
                            <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Twitter">
                                <i className="fab fa-twitter"></i> Twitter
                            </a>
                            <a href="#" className="hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                                <i className="fab fa-linkedin"></i> LinkedIn
                            </a>
                            <a href="#" className="hover:text-blue-400 transition-colors" aria-label="GitHub">
                                <i className="fab fa-github"></i> GitHub
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="px-3 py-2 border border-gray-500 dark:border-gray-600 text-black dark:text-white dark:bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 dark:placeholder-gray-400"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-6 text-center">
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} TechInsights. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
