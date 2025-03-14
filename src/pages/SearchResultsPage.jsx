import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { sampleArticles } from '../data/sampleData';

const SearchResultsPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const searchArticles = () => {
            setIsLoading(true);

            // Simulate API call with timeout
            setTimeout(() => {
                if (!query.trim()) {
                    setResults([]);
                    setIsLoading(false);
                    return;
                }

                // Filter articles that contain the search query in title or excerpt
                const filteredResults = sampleArticles.filter(article =>
                    article.title.toLowerCase().includes(query.toLowerCase()) ||
                    article.excerpt.toLowerCase().includes(query.toLowerCase()) ||
                    article.content.toLowerCase().includes(query.toLowerCase())
                );

                setResults(filteredResults);
                setIsLoading(false);
            }, 600); // Simulate loading delay
        };

        searchArticles();
    }, [query]);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        Search Results
                    </h1>

                    <p className="text-gray-600 dark:text-gray-300 mb-8">
                        {query ? `Showing results for "${query}"` : 'Enter a search term to find articles'}
                    </p>
                </motion.div>

                {isLoading ? (
                    <div className="flex justify-center py-10">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                    </div>
                ) : (
                    <>
                        {results.length > 0 ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-6"
                            >
                                {results.map((article, index) => (
                                    <motion.div
                                        key={article.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
                                    >
                                        <div className="p-6">
                                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                                <Link
                                                    to={`/blog/${article.id}`}
                                                    className="hover:text-blue-600 dark:hover:text-blue-400"
                                                >
                                                    {article.title}
                                                </Link>
                                            </h2>

                                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                                                <span>{new Date(article.date).toLocaleDateString()}</span>
                                                <span className="mx-2">•</span>
                                                <span>{article.category}</span>
                                                <span className="mx-2">•</span>
                                                <span>{article.readTime} min read</span>
                                            </div>

                                            <p className="text-gray-600 dark:text-gray-300 mb-4">
                                                {article.excerpt}
                                            </p>

                                            <Link
                                                to={`/blog/${article.id}`}
                                                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                                            >
                                                Read more →
                                            </Link>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4 }}
                                className="text-center py-10"
                            >
                                {query ? (
                                    <div className="space-y-3">
                                        <p className="text-xl text-gray-700 dark:text-gray-300">No results found for &quot;{query}&quot;</p>
                                        <p className="text-gray-600 dark:text-gray-400">Try different keywords or check the spelling</p>
                                    </div>
                                ) : (
                                    <p className="text-xl text-gray-700 dark:text-gray-300">Enter a search term to find articles</p>
                                )}
                            </motion.div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default SearchResultsPage;
