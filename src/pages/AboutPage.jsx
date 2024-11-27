import { motion } from 'framer-motion';

function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-dark mb-8">About TechInsights</h1>
        
        <div className="prose prose-lg">
          <p>
            Welcome to TechInsights, your premier destination for in-depth analysis and insights into the world of technology and software development. Our platform is dedicated to bringing you high-quality content that matters to developers, tech enthusiasts, and industry professionals.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
          <p>
            We strive to provide comprehensive, accessible, and practical insights into the ever-evolving tech landscape. Our articles cover everything from cutting-edge developments in AI and machine learning to practical coding tutorials and best practices in software development.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Contributors</h2>
          <p>
            Our content is crafted by experienced developers, tech leaders, and industry experts who bring their real-world experience and insights to every article. We believe in sharing knowledge that can help others grow and succeed in their tech journey.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4">Topics We Cover</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Software Development Best Practices</li>
            <li>Artificial Intelligence and Machine Learning</li>
            <li>Web Development and Architecture</li>
            <li>Security and Performance Optimization</li>
            <li>Emerging Technologies and Trends</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutPage;