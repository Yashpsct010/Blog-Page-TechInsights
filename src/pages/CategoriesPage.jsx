import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { sampleArticles } from '../data/sampleData';
import ImageWithFallback from '../components/ImageWithFallback';

const CategoriesPage = () => {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('cat');

  const [categories, setCategories] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    // Extract unique categories and count articles in each
    const categoryCounts = sampleArticles.reduce((acc, article) => {
      if (!acc[article.category]) {
        acc[article.category] = 0;
      }
      acc[article.category]++;
      return acc;
    }, {});

    // Convert to array and sort alphabetically
    const categoryArray = Object.keys(categoryCounts).map(category => ({
      name: category,
      count: categoryCounts[category]
    })).sort((a, b) => a.name.localeCompare(b.name));

    setCategories(categoryArray);

    // Filter articles based on selected category
    if (selectedCategory) {
      const filtered = sampleArticles.filter(article =>
        article.category === selectedCategory
      );
      setFilteredArticles(filtered);
    } else {
      // Show all articles if no category is selected
      setFilteredArticles(sampleArticles);
    }

    setIsLoading(false);
  }, [selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-5xl mx-auto"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-8"
        >
          {selectedCategory ? `${selectedCategory} Articles` : 'Categories'}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap mb-8"
        >
          <Link
            to="/categories"
            className={`m-1 px-4 py-2 rounded-full text-sm font-medium ${!selectedCategory
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              } transition-colors`}
          >
            All
          </Link>

          {categories.map(category => (
            <Link
              key={category.name}
              to={`/categories?cat=${encodeURIComponent(category.name)}`}
              className={`m-1 px-4 py-2 rounded-full text-sm font-medium ${selectedCategory === category.name
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                } transition-colors`}
            >
              {category.name} <span className="text-xs">({category.count})</span>
            </Link>
          ))}
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * (index % 4) }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                <Link to={`/blog/${article.id}`} className="block h-48 overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                <div className="p-6 flex-grow flex flex-col">
                  <Link to={`/categories?cat=${encodeURIComponent(article.category)}`}>
                    <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium mb-2">
                      {article.category}
                    </span>
                  </Link>

                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    <Link to={`/blog/${article.id}`} className="hover:text-blue-600 dark:hover:text-blue-400">
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500 dark:text-gray-400">
                      {new Date(article.date).toLocaleDateString()}
                    </span>
                    <Link
                      to={`/blog/${article.id}`}
                      className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {filteredArticles.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">
              No articles found
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              There are no articles in this category yet. Check back later or explore other categories.
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default CategoriesPage;