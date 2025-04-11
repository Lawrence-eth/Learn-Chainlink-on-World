import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CourseCompletion = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full mx-4"
      >
        <div className="text-center mb-8">
          <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-indigo-900 mb-2">Lesson Completed!</h1>
          <p className="text-gray-600">Congratulations on completing this lesson. You've taken an important step in learning about Chainlink.</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => navigate('/lessons')}
            className="w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-indigo-100 text-indigo-900 hover:bg-indigo-200 transition-colors"
          >
            <FaArrowLeft />
            <span>Back to Lessons</span>
          </button>

          <button
            onClick={() => navigate('/')}
            className="w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
          >
            <span>Back to Home</span>
            <FaArrowRight />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default CourseCompletion; 