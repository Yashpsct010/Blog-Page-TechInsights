import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

function CategoriesPage() {
  const categories = [...new Set(blogPosts.map(post => post.category))];
  const categoryStats = categories.map(category => ({
    name: category,
    count: blogPosts.filter(post => post.category === category).length,
    posts: blogPosts.filter(post => post.category === category),
  }));

  return (
    <div className="container mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-dark mb-8">Categories</h1>
        
        <div className="grid gap-8">
          {categoryStats.map(({ name, count, posts }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-dark">{name}</h2>
                <span className="px-4 py-1 bg-primary text-white rounded-full text-sm">
                  {count} posts
                </span>
              </div>
              
              <div className="space-y-3">
                {posts.map(post => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="block hover:bg-gray-50 p-3 rounded-lg transition-colors"
                  >
                    <h3 className="text-lg font-medium text-dark hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">{post.excerpt}</p>
                  </Link>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default CategoriesPage;