import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { blogPosts } from '../data/blogPosts';

function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-6 py-24"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h1
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="text-4xl font-bold text-dark mb-6"
        >
          {post.title}
        </motion.h1>

        <div className="flex items-center mb-8 text-gray-600">
          <span>{format(new Date(post.date), 'MMMM dd, yyyy')}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
          <span className="mx-2">•</span>
          <span>By {post.author}</span>
        </div>

        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="mb-8 rounded-lg overflow-hidden"
        >
          <img
            src={post.image}
            alt={post.imageAlt}
            className="w-full h-[400px] object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="prose prose-lg max-w-none"
        >
          {post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>
    </motion.article>
  );
}

export default BlogPost;