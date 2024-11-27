import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';

function BlogCard({ post }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl overflow-hidden card-hover-effect"
    >
      <Link to={`/blog/${post.id}`} className="block">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
          <img
            src={post.image}
            alt={post.imageAlt}
            className="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute bottom-4 left-4 z-20">
            <span className="category-pill">
              {post.category}
            </span>
          </div>
        </div>
      </Link>

      <div className="p-6">
        <div className="flex items-center mb-4 text-sm">
          <img
            src={`https://ui-avatars.com/api/?name=${post.author}&background=random`}
            alt={post.author}
            className="w-6 h-6 rounded-full mr-2"
          />
          <span className="text-gray-600">{post.author}</span>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-gray-600">
            {format(new Date(post.date), 'MMM dd, yyyy')}
          </span>
        </div>
        
        <Link to={`/blog/${post.id}`}>
          <h2 className="font-space-grotesk text-xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h2>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <Link 
          to={`/blog/${post.id}`}
          className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
        >
          Read More
          <svg 
            className="w-4 h-4 ml-1" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.article>
  );
}

export default BlogCard;