import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ImageWithFallback from '../components/ImageWithFallback';

const teamMembers = [
  {
    name: 'Jane Smith',
    role: 'Editor in Chief',
    image: 'https://source.unsplash.com/random/300x300/?portrait,woman',
    bio: 'Jane has over 15 years of experience in tech journalism and has previously worked at TechCrunch and WIRED.',
  },
  {
    name: 'Michael Johnson',
    role: 'Senior Editor',
    image: 'https://source.unsplash.com/random/300x300/?portrait,man',
    bio: 'Michael specializes in cybersecurity and blockchain technology. He holds a PhD in Computer Science from MIT.',
  },
  {
    name: 'Alex Chen',
    role: 'Content Strategist',
    image: 'https://source.unsplash.com/random/300x300/?portrait,person',
    bio: 'Alex has helped dozens of tech brands develop their content strategy. Previously worked at Google and Twitter.',
  },
  {
    name: 'Emma Williams',
    role: 'Tech Reporter',
    image: 'https://source.unsplash.com/random/300x300/?portrait,face',
    bio: 'Emma covers emerging technologies and startups. She has a background in electrical engineering and product design.',
  }
];

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* About Us Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mb-16"
      >
        <motion.div
          variants={itemVariants}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About TechInsights
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Your trusted source for in-depth technology news, trends, and insights since 2018.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-10"
        >
          <div className="md:flex">
            <div className="md:w-1/2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1500&q=80"
                alt="TechInsights office"
                className="h-64 md:h-full w-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                At TechInsights, we believe that technology has the power to transform lives, businesses, and society. Our mission is to provide accurate, accessible, and insightful coverage of the technology landscape to help our readers navigate this rapidly evolving world.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Whether you&apos;re a tech professional, an enthusiast, or simply curious about how technology is shaping our future, we&apos;re here to keep you informed with quality journalism and expert analysis.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Our Team Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mb-16"
      >
        <motion.h2
          variants={itemVariants}
          className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center"
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-duration-300"
            >
              <ImageWithFallback
                src={member.image}
                alt={member.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Our Values Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mb-16"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Our Values
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Accuracy</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We are committed to thorough research, fact-checking, and providing accurate information to our readers.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Accessibility</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We believe technology coverage should be accessible to everyone, regardless of their technical background.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Independence</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Our editorial decisions are independent and not influenced by advertisers or other commercial interests.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Innovation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We embrace new technologies and formats to deliver content in ways that best serve our audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-blue-50 dark:bg-gray-800/80 rounded-xl p-6 md:p-8 text-center border border-blue-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Have questions, feedback, or want to work with us? We&apos;d love to hear from you!
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;