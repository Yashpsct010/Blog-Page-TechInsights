import { useState } from 'react';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
    const [submissionStatus, setSubmissionStatus] = useState(null);

    const handleFormSubmit = (formData) => {
        // Simulate API call to submit form data
        console.log('Form submission data:', formData);

        // Simulate successful submission after delay
        setTimeout(() => {
            setSubmissionStatus('success');
            // Reset status after showing success message
            setTimeout(() => {
                setSubmissionStatus(null);
            }, 5000);
        }, 1000);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
                >
                    Contact Us
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="prose dark:prose-invert max-w-none">
                            <p className="text-lg text-gray-700 dark:text-gray-300">
                                Have a question, feedback, or want to collaborate with us?
                                We&apos;d love to hear from you! Fill out the form and we&apos;ll get
                                back to you as soon as possible.
                            </p>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="mt-6"
                            >
                                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Our Office</h3>
                                <address className="not-italic text-gray-600 dark:text-gray-400">
                                    123 Tech Avenue<br />
                                    San Francisco, CA 94107<br />
                                    United States
                                </address>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="mt-6"
                            >
                                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Email Us</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    General Inquiries: <a href="mailto:info@techinsights.com" className="text-blue-600 dark:text-blue-400">info@techinsights.com</a><br />
                                    Press: <a href="mailto:press@techinsights.com" className="text-blue-600 dark:text-blue-400">press@techinsights.com</a>
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="mt-6"
                            >
                                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Connect With Us</h3>
                                <div className="flex space-x-4 text-gray-700 dark:text-gray-300">
                                    <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        <span className="sr-only">Twitter</span>
                                        <i className="fab fa-twitter text-2xl"></i>
                                    </a>
                                    <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        <span className="sr-only">LinkedIn</span>
                                        <i className="fab fa-linkedin text-2xl"></i>
                                    </a>
                                    <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        <span className="sr-only">Facebook</span>
                                        <i className="fab fa-facebook text-2xl"></i>
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
                    >
                        {submissionStatus === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                                className="bg-green-100 border border-green-400 text-green-700 dark:bg-green-900/30 dark:border-green-600 dark:text-green-400 px-4 py-3 rounded mb-4"
                            >
                                <p>Thank you for contacting us! We&apos;ll get back to you soon.</p>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                <ContactForm onSubmit={handleFormSubmit} />
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
