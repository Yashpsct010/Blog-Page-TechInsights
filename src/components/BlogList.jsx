import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BlogCard from './BlogCard';
import CategoryFilter from './CategoryFilter';
import { blogPosts } from '../data/blogPosts';

function BlogList() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  const categories = [...new Set(blogPosts.map(post => post.category))];
  
  const filteredPosts = selectedCategory
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts;

  return (
    <div>
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory || 'all'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default BlogList;