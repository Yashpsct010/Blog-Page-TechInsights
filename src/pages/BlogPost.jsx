import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { sampleArticles } from '../data/sampleData';
import ImageWithFallback from '../components/ImageWithFallback';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate loading delay
    setIsLoading(true);
    setError(null);

    setTimeout(() => {
      const foundPost = sampleArticles.find(article => article.id.toString() === id);

      if (foundPost) {
        setPost(foundPost);
        setIsLoading(false);
      } else {
        setError('Post not found');
        setIsLoading(false);
      }
    }, 500);
  }, [id]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">{error}</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The article you are looking for doesn&apos;t exist or has been removed.
          </p>
          <Link
            to="/"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    );
  }

  if (!post) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 mb-6 hover:underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Articles
        </Link>

        <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-64 md:h-96">
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
              <span className="mr-4">
                <span className="font-medium text-gray-700 dark:text-gray-300">By {post.author}</span>
              </span>
              <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
              <span className="mr-4">•</span>
              <span className="mr-4">
                <Link to={`/categories?cat=${post.category}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                  {post.category}
                </Link>
              </span>
              <span>{post.readTime} min read</span>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-700 dark:text-gray-300">
                  {paragraph.trim()}
                </p>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <Link
                    key={tag}
                    to={`/search?q=${tag}`}
                    className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;