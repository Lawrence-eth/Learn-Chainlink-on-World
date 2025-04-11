import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaChevronLeft, FaCheck, FaLock, FaShieldAlt, FaCode, FaExchangeAlt, FaTimes } from 'react-icons/fa';

const PriceFeedsLesson = () => {
  const { '*': path } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(0);
  const [completedSections, setCompletedSections] = useState([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  
  const content = {
    'understanding': {
      title: 'Understanding Price Feeds',
      sections: [
        {
          title: 'The Power of Price Feeds',
          content: [
            {
              title: 'The Heartbeat of DeFi',
              text: `Imagine walking into a stock exchange where no one knows the current prices. Chaos would ensue, trades would be unfair, and the entire system would collapse. This is the challenge that Chainlink Price Feeds solve in the world of decentralized finance. They're not just data providers - they're the heartbeat that keeps the entire DeFi ecosystem alive and functioning.`,
              image: '/images/lessons/chainlink-price-feeds.png'
            },
            {
              title: 'A Revolution in Financial Data',
              text: `The story of Chainlink Price Feeds is one of innovation and transformation. In traditional finance, price data was controlled by a few powerful institutions. Chainlink changed this by creating a system where price data is gathered, verified, and delivered in a way that's both decentralized and reliable. This revolution has made it possible for anyone, anywhere to access the same high-quality price data that was once only available to large financial institutions.`
            },
            {
              title: 'The Trust Machine',
              text: `What makes Chainlink Price Feeds truly remarkable is how they've solved the trust problem in financial data. In a world where trust is often in short supply, Chainlink has created a system where trust isn't required - it's mathematically proven. Each price update comes with cryptographic proof that it hasn't been tampered with, creating a level of transparency and security that was previously unimaginable.`
            },
            {
              title: 'The Network Effect',
              text: `The success of Chainlink Price Feeds isn't just about technology - it's about people. A global network of professional node operators, each with their own expertise and resources, work together to maintain the system. These aren't just technical operators - they're financial professionals who understand the importance of accurate price data and the impact it has on the entire ecosystem.`
            },
            {
              title: 'Real-World Impact',
              text: `The impact of Chainlink Price Feeds extends far beyond just numbers on a screen. They've enabled the creation of lending protocols that have issued billions in loans to people who previously had no access to credit. They power decentralized exchanges where anyone can trade assets without needing permission from a central authority. They've even made possible entirely new types of financial products that were previously impossible.`
            },
            {
              title: 'A Foundation for Innovation',
              text: `Chainlink Price Feeds have become more than just a service - they're a foundation for innovation. Developers around the world are building new financial applications with the confidence that they'll have access to reliable price data. This has led to an explosion of creativity in the DeFi space, with new applications and services being developed at an unprecedented pace.`
            },
            {
              title: 'The Future of Finance',
              text: `As we look to the future, the role of Chainlink Price Feeds in the financial system will only grow. They're not just changing how we access price data - they're changing how we think about financial markets themselves. By making high-quality price data accessible to everyone, they're helping to create a more open, transparent, and fair financial system for the world.`
            }
          ],
          keyPoints: [
            {
              title: 'Transforming Financial Markets',
              description: `The story of Chainlink Price Feeds is one of transformation. They've taken something that was once controlled by a few powerful institutions and made it accessible to everyone. This transformation isn't just about technology - it's about changing how we think about financial markets and who gets to participate in them.

What's particularly fascinating is how this transformation has happened. It wasn't through regulation or government intervention, but through innovation and the power of decentralized networks. Chainlink Price Feeds have shown that it's possible to create a system that's both more secure and more accessible than the traditional financial system.

The impact of this transformation extends far beyond just the technical aspects. It's changing how people think about finance and their role in it. People who were previously excluded from the financial system now have access to the same high-quality price data that was once only available to large institutions. This is creating new opportunities and possibilities that were previously unimaginable.`
            },
            {
              title: 'Building Trust Through Technology',
              description: `In a world where trust in financial institutions is often in short supply, Chainlink Price Feeds offer something different - trust through technology. The system doesn't ask you to trust any single entity. Instead, it uses mathematics and cryptography to prove that the data is accurate and hasn't been tampered with.

This approach to trust has profound implications. It means that anyone, anywhere can verify the accuracy of price data for themselves. They don't need to rely on the word of a central authority or trust in a particular institution. The system itself provides the proof needed to verify the data's accuracy.

What's particularly powerful about this approach is how it scales. As more people and institutions use Chainlink Price Feeds, the system becomes more secure and more reliable. Each new user adds to the network's strength, creating a positive feedback loop that makes the system more robust over time. This is the power of decentralized networks - they get stronger as they grow.`
            }
          ]
        },
        {
          title: 'Price Feeds in the Real World',
          content: [
            {
              title: 'Powering the DeFi Revolution',
              text: `The story of decentralized finance is, in many ways, the story of Chainlink Price Feeds. Without reliable price data, the entire DeFi ecosystem would be impossible. From lending protocols to decentralized exchanges, these feeds provide the foundation that makes automated financial systems possible.`,
              image: '/images/lessons/defi-transformation.png'
            },
            {
              title: 'Democratizing Access to Credit',
              text: `One of the most powerful applications of Chainlink Price Feeds is in lending protocols. These protocols use price feeds to determine collateral values and manage risk, making it possible for people around the world to access credit without needing to go through traditional financial institutions. This has opened up new opportunities for millions of people who were previously excluded from the financial system.`
            },
            {
              title: 'Creating Fair Markets',
              text: `Decentralized exchanges rely on Chainlink Price Feeds to create fair and efficient markets. The feeds help ensure that trades happen at fair prices, prevent manipulation, and create a level playing field for all participants. This has made it possible for anyone to trade assets without needing to trust a central exchange.`
            },
            {
              title: 'Innovating Financial Products',
              text: `Chainlink Price Feeds have enabled the creation of entirely new types of financial products. From synthetic assets that track the price of real-world assets to complex derivatives that were previously impossible to create, these feeds have opened up new possibilities for financial innovation.`
            },
            {
              title: 'Protecting Value',
              text: `In the world of decentralized insurance, Chainlink Price Feeds play a crucial role in protecting value. They help determine payouts and assess risks, making it possible to create insurance products that are both fair and efficient. This has made it possible to protect against risks that were previously difficult or impossible to insure.`
            },
            {
              title: 'Connecting Worlds',
              text: `As blockchain technology continues to evolve, Chainlink Price Feeds are helping to connect different blockchain networks and traditional financial systems. They provide the reliable price data needed to enable value to flow between different systems, creating a more interconnected and efficient financial ecosystem.`
            },
            {
              title: 'The Next Chapter',
              text: `The story of Chainlink Price Feeds is still being written. As more people and institutions discover the power of reliable price data, new applications and use cases continue to emerge. From gaming economies to real estate tokenization, these feeds are enabling innovations that bridge the gap between traditional finance and the blockchain world.`
            }
          ],
          keyPoints: [
            {
              title: 'Creating New Possibilities',
              description: `The impact of Chainlink Price Feeds on the financial system has been profound. They've made it possible to create financial products and services that were previously impossible. This isn't just about making existing services more efficient - it's about creating entirely new possibilities.

What's particularly exciting is how these new possibilities build upon each other. One innovation leads to another, creating a virtuous cycle of development and improvement. This has led to an explosion of creativity in the DeFi space, with new applications and services being developed at an unprecedented pace.

The impact extends beyond just financial applications. Game developers are using price feeds to create dynamic in-game economies. Insurance protocols are using them to automate claim payments. Even traditional businesses are exploring how they can use this technology to streamline their operations. This is the power of reliable price data - it enables innovation across a wide range of industries and applications.`
            },
            {
              title: 'Building the Future',
              description: `As we look to the future, the role of Chainlink Price Feeds in the financial system will only grow. The demand for reliable price data isn't going away - if anything, it's increasing as more value moves onto blockchains and new applications are developed.

The system continues to evolve, with regular updates and improvements being made to meet the changing needs of the ecosystem. New price feeds are being added for different assets, the aggregation algorithms are being refined, and the security measures are being enhanced.

Perhaps most importantly, Chainlink Price Feeds have shown that it's possible to bridge the gap between the blockchain world and traditional finance in a way that's both secure and decentralized. This proof of concept has implications far beyond just price data - it shows a path forward for bringing other types of real-world information onto the blockchain.`
            }
          ]
        }
      ]
    },
    'implementation': {
      title: 'Implementing Price Feeds',
      sections: [
        {
          title: 'Basic Implementation',
          content: 'To implement Chainlink Price Feeds in your smart contract, you need to:',
          steps: [
            'Import the Chainlink interface',
            'Initialize the price feed contract',
            'Request price data',
            'Handle the response'
          ],
          code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PriceConsumerV3 {
    AggregatorV3Interface internal priceFeed;

    constructor() {
        priceFeed = AggregatorV3Interface(0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419);
    }

    function getLatestPrice() public view returns (int) {
        (
            uint80 roundID, 
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();
        return price;
    }
}`
        }
      ]
    },
    'best-practices': {
      title: 'Best Practices',
      sections: [
        {
          title: 'Security Considerations',
          content: 'When using Chainlink Price Feeds, follow these security best practices:',
          points: [
            'Verify the price feed address',
            'Check for stale data',
            'Implement circuit breakers',
            'Use multiple price feeds for critical operations'
          ]
        },
        {
          title: 'Performance Optimization',
          content: 'Optimize your price feed implementation:',
          points: [
            'Cache price data when possible',
            'Use appropriate update intervals',
            'Implement fallback mechanisms',
            'Monitor gas costs'
          ]
        }
      ]
    }
  };

  const currentContent = content[path] || content['understanding'];

  const handleNext = () => {
    if (activeSection < currentContent.sections.length - 1) {
      setActiveSection(activeSection + 1);
      window.scrollTo(0, 0);
    } else {
      handleCompleteLesson();
    }
  };

  const handlePrevious = () => {
    if (activeSection > 0) {
      setActiveSection(activeSection - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleCompleteSection = () => {
    if (!completedSections.includes(activeSection)) {
      setCompletedSections([...completedSections, activeSection]);
    }
  };

  const handleCompleteLesson = () => {
    setCompletedSections(Array.from({ length: currentContent.sections.length }, (_, i) => i));
    navigate('/course-completion');
  };

  const handleExit = () => {
    navigate('/');
  };

  const handleSectionSelect = (index) => {
    setActiveSection(index);
    window.scrollTo(0, 0);
  };

  // Scroll to top when the component mounts or the path changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-4 sm:py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-8 gap-3">
          <h1 className="text-2xl sm:text-4xl font-bold text-indigo-900">{currentContent.title}</h1>
          <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
            <button
              onClick={handleExit}
              className="p-2 text-gray-500 hover:text-gray-700 touch-manipulation"
              title="Exit Lesson"
            >
              <FaTimes size={20} />
            </button>
            <div className="flex items-center space-x-1 sm:space-x-2">
              {currentContent.sections.map((_, index) => (
                <div
                  key={index}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${
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

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 sticky top-2 sm:top-8 z-10">
              <h2 className="text-lg sm:text-xl font-semibold text-indigo-900 mb-3 sm:mb-4">Course Content</h2>
              <ul className="space-y-1 sm:space-y-2">
                {currentContent.sections.map((section, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleSectionSelect(index)}
                      className={`w-full text-left px-3 sm:px-4 py-2 rounded-lg transition-colors touch-manipulation ${
                        index === activeSection
                          ? 'bg-indigo-100 text-indigo-900'
                          : 'hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm sm:text-base">{section.title}</span>
                        {completedSections.includes(index) && (
                          <FaCheck className="text-green-500 text-sm sm:text-base" />
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
                className="bg-white rounded-xl shadow-lg p-4 sm:p-8"
              >
                <h2 className="text-xl sm:text-2xl font-semibold text-indigo-900 mb-4 sm:mb-6">
                  {currentContent.sections[activeSection].title}
                </h2>

                <div className="space-y-6 sm:space-y-8">
                  {Array.isArray(currentContent.sections[activeSection].content) ? (
                    currentContent.sections[activeSection].content.map((section, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-indigo-50 p-4 sm:p-6 rounded-lg shadow-sm"
                      >
                        <h3 className="text-lg sm:text-xl font-semibold text-indigo-900 mb-2 sm:mb-3">
                          {section.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          {section.text}
                        </p>
                        {section.image && (
                          <div className="mt-3 sm:mt-4">
                            <img
                              src={section.image}
                              alt={section.title}
                              className="w-full rounded-lg shadow-md"
                              loading="lazy"
                            />
                          </div>
                        )}
                      </motion.div>
                    ))
                  ) : (
                    <div className="prose max-w-none mb-6 sm:mb-8">
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {currentContent.sections[activeSection].content}
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-8 sm:space-y-12">
                  {currentContent.sections[activeSection].keyPoints?.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-indigo-50 p-4 sm:p-6 rounded-lg shadow-sm mt-6 sm:mt-8"
                    >
                      <h3 className="text-lg sm:text-xl font-semibold text-indigo-900 mb-2 sm:mb-3 flex items-center">
                        {point.title === 'Decentralized oracle network' && <FaExchangeAlt className="mr-2" />}
                        {point.title === 'Secure data delivery' && <FaLock className="mr-2" />}
                        {point.title === 'Smart contract connectivity' && <FaCode className="mr-2" />}
                        {point.title === 'Enterprise-grade security' && <FaShieldAlt className="mr-2" />}
                        {point.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line">
                        {point.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="flex justify-between mt-6 sm:mt-8 pt-2">
                  <button
                    onClick={handlePrevious}
                    disabled={activeSection === 0}
                    className={`px-4 sm:px-6 py-2 rounded-lg flex items-center space-x-1 sm:space-x-2 touch-manipulation ${
                      activeSection === 0
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-indigo-100 text-indigo-900 hover:bg-indigo-200 active:bg-indigo-300'
                    }`}
                  >
                    <FaChevronLeft />
                    <span className="text-sm sm:text-base">Previous</span>
                  </button>

                  <button
                    onClick={handleNext}
                    className="px-4 sm:px-6 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800 flex items-center space-x-1 sm:space-x-2 touch-manipulation"
                  >
                    <span className="text-sm sm:text-base">
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

export default PriceFeedsLesson; 