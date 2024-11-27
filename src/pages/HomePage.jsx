import { motion } from 'framer-motion';
import BlogList from '../components/BlogList';

function HomePage() {
  return (
    <div className="container mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-dark mb-4">
          Welcome to TechInsights
        </h1>
        <p className="text-xl text-gray-600">
          Exploring the latest in technology and software development
        </p>
      </motion.div>
      
      <BlogList />
    </div>
  );
}

export default HomePage;