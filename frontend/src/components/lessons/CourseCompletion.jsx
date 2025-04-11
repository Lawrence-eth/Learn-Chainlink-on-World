import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaChevronLeft, FaHome } from 'react-icons/fa';

const CourseCompletion = () => {
  const navigate = useNavigate();

  const handleBackToLessons = () => {
    navigate('/lessons');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full mx-4"
      >
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-6"
          >
            <FaCheckCircle className="text-green-500 text-6xl" />
          </motion.div>
          
          <h1 className="text-3xl font-bold text-indigo-900 mb-4">
            Congratulations!
          </h1>
          
          <p className="text-gray-600 mb-8">
            You have successfully completed the course. Your knowledge of Chainlink will help you build secure and reliable blockchain applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleBackToLessons}
              className="px-6 py-3 bg-indigo-100 text-indigo-900 rounded-lg hover:bg-indigo-200 transition-colors flex items-center justify-center space-x-2"
            >
              <FaChevronLeft />
              <span>Back to Lessons</span>
            </button>

            <button
              onClick={handleBackToHome}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2"
            >
              <FaHome />
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CourseCompletion; 