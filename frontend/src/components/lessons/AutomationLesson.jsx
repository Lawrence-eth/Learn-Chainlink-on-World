import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaChevronLeft, FaCheck, FaLock, FaShieldAlt, FaCode, FaExchangeAlt, FaTimes, FaRobot } from 'react-icons/fa';

const AutomationLesson = () => {
  const { '*': path } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(0);
  const [completedSections, setCompletedSections] = useState([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  
  const content = {
    'understanding': {
      title: 'Understanding Chainlink Automation',
      sections: [
        {
          title: 'The Power of Smart Automation',
          content: [
            {
              title: 'The Automation Revolution',
              text: `Imagine a world where your smart contracts can execute themselves automatically, without any human intervention. This is the promise of Chainlink Automation - a revolutionary system that brings the power of automation to blockchain applications. It's not just about making things easier - it's about creating a new paradigm for how smart contracts operate.`,
              image: '/images/lessons/chainlink-automation.png'
            },
            {
              title: 'Beyond Human Limitations',
              text: `Traditional smart contracts have a fundamental limitation - they can't execute themselves. They need someone to trigger them, whether that's a user, a developer, or a centralized service. Chainlink Automation changes this by providing a decentralized network that can trigger smart contracts automatically based on predefined conditions.`
            },
            {
              title: 'The Trust Factor',
              text: `What makes Chainlink Automation truly remarkable is how it handles trust. Instead of relying on a single entity to trigger contracts, it uses a decentralized network of nodes that work together to ensure reliable execution. This creates a system that's both secure and reliable, with no single point of failure.`
            },
            {
              title: 'The Network Effect',
              text: `The success of Chainlink Automation isn't just about the technology - it's about the network of node operators who maintain it. These operators work together to ensure that smart contracts are executed reliably and on time, creating a system that's both secure and efficient.`
            },
            {
              title: 'Real-World Impact',
              text: `The impact of Chainlink Automation extends far beyond just executing smart contracts. It's enabling new types of applications that require reliable, automated execution, from DeFi protocols to gaming platforms. These applications can now operate with a level of reliability and efficiency that was previously impossible to achieve.`
            },
            {
              title: 'A Foundation for Innovation',
              text: `Chainlink Automation has become more than just a service - it's a foundation for innovation. Developers around the world are building new applications with the confidence that their smart contracts will execute reliably and automatically. This has led to an explosion of creativity in the blockchain space.`
            },
            {
              title: 'The Future of Automation',
              text: `As we look to the future, the role of Chainlink Automation in blockchain applications will only grow. It's not just changing how smart contracts execute - it's changing how we think about automation in digital systems. By making reliable automation accessible to everyone, it's helping to create a more efficient and reliable digital world.`
            }
          ],
          keyPoints: [
            {
              title: 'Transforming Smart Contract Execution',
              description: `The story of Chainlink Automation is one of transformation. It's taken something that was once limited by human intervention and made it fully automated in a way that's both reliable and decentralized. This transformation isn't just about technology - it's about changing how we think about smart contract execution.

What's particularly fascinating is how this transformation has happened. It wasn't through incremental improvements to existing systems, but through a fundamental rethinking of how smart contracts should operate. Chainlink Automation has shown that it's possible to create a system that's both more reliable and more efficient than traditional execution methods.

The impact of this transformation extends far beyond just the technical aspects. It's changing how people think about automation in blockchain applications. Systems that previously required constant human oversight can now operate autonomously, creating new possibilities for innovation and growth.`
            },
            {
              title: 'Building Reliability Through Decentralization',
              description: `In a world where reliability in digital systems is often in short supply, Chainlink Automation offers something different - reliability through decentralization. The system doesn't ask you to trust any single entity. Instead, it uses a network of nodes to ensure that smart contracts are executed reliably and on time.

This approach to reliability has profound implications. It means that anyone, anywhere can build applications that execute automatically with a high degree of reliability. They don't need to rely on the word of a central authority or trust in a particular institution. The network itself provides the reliability needed to ensure consistent execution.

What's particularly powerful about this approach is how it scales. As more applications use Chainlink Automation, the system becomes more reliable and more efficient. Each new user adds to the network's strength, creating a positive feedback loop that makes the system more robust over time. This is the power of decentralized networks - they get stronger as they grow.`
            }
          ]
        },
        {
          title: 'Automation in the Real World',
          content: [
            {
              title: 'Powering DeFi Innovation',
              text: `The story of DeFi is, in many ways, the story of Chainlink Automation. Without reliable automation, many DeFi protocols would be impossible to operate efficiently. From liquidations to yield harvesting, Automation provides the foundation that makes complex DeFi operations possible.`,
              image: '/images/lessons/defi-innovation.png'
            },
            {
              title: 'Transforming Gaming Experiences',
              text: `One of the most exciting applications of Chainlink Automation is in the world of blockchain gaming. Game developers can use Automation to create dynamic, evolving game worlds that update automatically based on predefined conditions. This enables new types of gaming experiences that were previously impossible.`
            },
            {
              title: 'Creating Efficient Markets',
              text: `In the world of decentralized markets, Chainlink Automation helps create more efficient trading environments. It can be used to automatically execute trades, manage positions, or rebalance portfolios based on market conditions. This creates a more efficient market where opportunities can be captured automatically.`
            },
            {
              title: 'Innovating Digital Services',
              text: `Chainlink Automation has enabled the creation of entirely new types of digital services. From automated insurance claims to self-executing governance proposals, Automation makes it possible to create services that operate with minimal human intervention. This has opened up new possibilities for service delivery in the digital space.`
            },
            {
              title: 'Protecting Value',
              text: `In the world of digital assets, Chainlink Automation plays a crucial role in protecting value. By ensuring that critical operations like liquidations and risk management are executed reliably and automatically, it helps maintain the stability of digital markets and protects the value of digital assets.`
            },
            {
              title: 'Connecting Systems',
              text: `As blockchain technology continues to evolve, Chainlink Automation is helping to connect different types of digital systems. It provides the reliable automation needed to create seamless interactions between different applications and platforms, creating a more interconnected and efficient digital ecosystem.`
            },
            {
              title: 'The Next Chapter',
              text: `The story of Chainlink Automation is still being written. As more developers discover the power of reliable automation, new applications and use cases continue to emerge. From enterprise systems to consumer applications, Automation is enabling innovations that bridge the gap between the digital and physical worlds.`
            }
          ],
          keyPoints: [
            {
              title: 'Creating New Possibilities',
              description: `The impact of Chainlink Automation on the digital world has been profound. It's made it possible to create applications and services that were previously impossible. This isn't just about making existing services more efficient - it's about creating entirely new possibilities.

What's particularly exciting is how these new possibilities build upon each other. One innovation leads to another, creating a virtuous cycle of development and improvement. This has led to an explosion of creativity in the blockchain space, with new applications and services being developed at an unprecedented pace.

The impact extends beyond just DeFi and gaming. Developers are using Automation to create automated governance systems, self-executing insurance policies, and innovative financial products. Even traditional businesses are exploring how they can use this technology to create more efficient and reliable digital services. This is the power of reliable automation - it enables innovation across a wide range of industries and applications.`
            },
            {
              title: 'Building the Future',
              description: `As we look to the future, the role of Chainlink Automation in the digital world will only grow. The demand for reliable automation isn't going away - if anything, it's increasing as more value moves into the digital space and new applications are developed.

The system continues to evolve, with regular updates and improvements being made to meet the changing needs of the ecosystem. New features are being added, the security measures are being enhanced, and the user experience is being improved.

Perhaps most importantly, Chainlink Automation has shown that it's possible to bridge the gap between the need for automation and the need for reliability in a way that's both secure and decentralized. This proof of concept has implications far beyond just smart contract execution - it shows a path forward for creating more efficient and reliable digital systems.`
            }
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
                        {point.title === 'Automated execution' && <FaRobot className="mr-2" />}
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

export default AutomationLesson; 