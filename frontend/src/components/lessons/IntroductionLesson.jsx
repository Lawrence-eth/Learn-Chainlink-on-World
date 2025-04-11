import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaChevronLeft, FaCheck, FaLock, FaShieldAlt, FaCode, FaExchangeAlt } from 'react-icons/fa';

const IntroductionLesson = () => {
  const { '*': path } = useParams();
  const [activeSection, setActiveSection] = useState(0);
  const [completedSections, setCompletedSections] = useState([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  
  const content = {
    'what-is-chainlink': {
      title: 'What is Chainlink?',
      sections: [
        {
          title: 'Introduction to Chainlink',
          content: 'Chainlink is a decentralized oracle network that enables smart contracts to securely interact with real-world data and external APIs. It acts as a bridge between blockchain networks and the outside world, providing reliable, tamper-proof inputs and outputs for complex smart contracts.',
          image: '/images/lessons/chainlink-bridge.png',
          keyPoints: [
            {
              title: 'Decentralized oracle network',
              description: `Chainlink's decentralized oracle network represents a fundamental shift in how smart contracts interact with external data. Unlike traditional centralized oracles that present single points of failure, Chainlink's network consists of multiple independent nodes that work together to provide reliable data feeds. This decentralization ensures that no single entity can manipulate the data or control the network.

The network operates on a reputation-based system where nodes are incentivized to provide accurate data through economic rewards and penalties. Each node operator must stake LINK tokens as collateral, which can be slashed if they provide incorrect data. This creates a strong economic incentive for nodes to maintain high-quality service.

The decentralized nature of the network also provides redundancy and fault tolerance. If one node goes offline or provides incorrect data, the network can still function properly using data from other nodes. This makes the system highly resilient to attacks and failures.

Furthermore, the network's decentralization extends to its governance. Node operators can participate in network upgrades and parameter changes through a decentralized governance system. This ensures that the network evolves in a way that benefits all participants rather than being controlled by a single entity.

The network's architecture also allows for geographic distribution of nodes, which helps prevent regional outages or censorship from affecting the entire network. This global distribution of nodes ensures that the network can continue operating even if certain regions experience connectivity issues or regulatory challenges.

Chainlink's decentralized oracle network has been battle-tested in production environments, securing billions of dollars in value across various DeFi applications. Its proven track record and robust security model make it the industry standard for decentralized oracle services.`
            },
            {
              title: 'Secure data delivery',
              description: `Chainlink's secure data delivery mechanism is built on multiple layers of security to ensure the integrity and reliability of data provided to smart contracts. The system employs cryptographic proofs, multiple data sources, and a robust validation process to guarantee that the data delivered is accurate and tamper-proof.

At the core of Chainlink's security model is the use of multiple independent data sources. Instead of relying on a single data provider, Chainlink nodes aggregate data from multiple sources and use various statistical methods to validate the data. This multi-source approach helps prevent manipulation and ensures that the final data point is accurate.

The system also implements cryptographic proofs to verify the authenticity of data. Each node signs its data submissions with its private key, creating a cryptographic proof that can be verified on-chain. This ensures that the data can be traced back to its source and that it hasn't been tampered with during transmission.

Chainlink's security model also includes a sophisticated reputation system that tracks the performance of each node. Nodes that consistently provide accurate data build up a strong reputation, while those that provide incorrect data see their reputation decrease. This reputation system helps smart contracts select the most reliable nodes for their data needs.

The network also implements various anti-manipulation measures, such as time-based aggregation and outlier detection. These measures help prevent flash loan attacks and other forms of market manipulation that could affect the accuracy of price feeds and other critical data.

Chainlink's secure data delivery has been proven in high-value environments, securing billions of dollars in DeFi applications. Its security model has been audited by multiple security firms and has withstood numerous stress tests in production environments.`
            }
          ]
        }
      ]
    }
  };

  const currentContent = content[path] || content['what-is-chainlink'];

  const handleNext = () => {
    if (activeSection < currentContent.sections.length - 1) {
      setActiveSection(activeSection + 1);
    } else {
      setShowQuiz(true);
    }
  };

  const handlePrevious = () => {
    if (activeSection > 0) {
      setActiveSection(activeSection - 1);
    }
  };

  const handleCompleteSection = () => {
    if (!completedSections.includes(activeSection)) {
      setCompletedSections([...completedSections, activeSection]);
    }
  };

  const handleQuizSubmit = () => {
    // Handle quiz submission logic here
    console.log('Quiz answers:', quizAnswers);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-indigo-900">{currentContent.title}</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              {currentContent.sections.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    completedSections.includes(index)
                      ? 'bg-green-500'
                      : index === activeSection
                      ? 'bg-indigo-600'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-semibold text-indigo-900 mb-4">Course Content</h2>
              <ul className="space-y-2">
                {currentContent.sections.map((section, index) => (
                  <li key={index}>
                    <button
                      onClick={() => setActiveSection(index)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        index === activeSection
                          ? 'bg-indigo-100 text-indigo-900'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{section.title}</span>
                        {completedSections.includes(index) && (
                          <FaCheck className="text-green-500" />
                        )}
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSection}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-semibold text-indigo-900 mb-6">
                  {currentContent.sections[activeSection].title}
                </h2>

                <div className="prose max-w-none mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    {currentContent.sections[activeSection].content}
                  </p>
                </div>

                {currentContent.sections[activeSection].image && (
                  <div className="mb-8">
                    <img
                      src={currentContent.sections[activeSection].image}
                      alt={currentContent.sections[activeSection].title}
                      className="w-full rounded-lg shadow-md"
                    />
                  </div>
                )}

                <div className="space-y-6">
                  {currentContent.sections[activeSection].keyPoints?.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-indigo-50 p-6 rounded-lg"
                    >
                      <h3 className="text-xl font-semibold text-indigo-900 mb-3 flex items-center">
                        {point.title === 'Decentralized oracle network' && <FaExchangeAlt className="mr-2" />}
                        {point.title === 'Secure data delivery' && <FaLock className="mr-2" />}
                        {point.title === 'Smart contract connectivity' && <FaCode className="mr-2" />}
                        {point.title === 'Enterprise-grade security' && <FaShieldAlt className="mr-2" />}
                        {point.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {point.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-between mt-8">
                  <button
                    onClick={handlePrevious}
                    disabled={activeSection === 0}
                    className={`px-6 py-2 rounded-lg flex items-center space-x-2 ${
                      activeSection === 0
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-indigo-100 text-indigo-900 hover:bg-indigo-200'
                    }`}
                  >
                    <FaChevronLeft />
                    <span>Previous</span>
                  </button>

                  <button
                    onClick={handleNext}
                    className="px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 flex items-center space-x-2"
                  >
                    <span>
                      {activeSection === currentContent.sections.length - 1
                        ? 'Complete Lesson'
                        : 'Next'}
                    </span>
                    <FaChevronRight />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionLesson; 