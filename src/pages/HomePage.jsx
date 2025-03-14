import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { sampleArticles } from '../data/sampleData';
import ImageWithFallback from '../components/ImageWithFallback';

const HomePage = () => {
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [recentArticles, setRecentArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    setIsLoading(true);
    setTimeout(() => {
      // Sort articles by date (newest first)
      const sortedArticles = [...sampleArticles].sort((a, b) =>
        new Date(b.date) - new Date(a.date)
      );

      // Set featured article (most recent)
      setFeaturedArticle(sortedArticles[0]);

      // Set other recent articles
      setRecentArticles(sortedArticles.slice(1, 7));

      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      {featuredArticle && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <ImageWithFallback
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="h-64 md:h-full w-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
                  Featured
                </span>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {featuredArticle.title}
                </h1>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
                  <span className="mr-4">{new Date(featuredArticle.date).toLocaleDateString()}</span>
                  <span className="mr-4">•</span>
                  <span>{featuredArticle.readTime} min read</span>
                </div>
                <Link
                  to={`/blog/${featuredArticle.id}`}
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Read Article
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Recent Articles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recent Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * (index + 1) }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <Link to={`/blog/${article.id}`}>
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
              </Link>
              <div className="p-6">
                <Link to={`/categories?cat=${encodeURIComponent(article.category)}`}>
                  <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium mb-2">
                    {article.category}
                  </span>
                </Link>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  <Link to={`/blog/${article.id}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">
                    {new Date(article.date).toLocaleDateString()}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {article.readTime} min read
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="bg-blue-50 dark:bg-gray-800/80 rounded-xl p-6 md:p-8 border border-blue-100 dark:border-gray-700"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Stay Updated With Our Newsletter
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Get the latest tech insights delivered straight to your inbox. No spam, just the content you care about.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default HomePage;