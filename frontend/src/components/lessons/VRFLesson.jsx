import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaChevronLeft, FaCheck, FaLock, FaShieldAlt, FaCode, FaExchangeAlt, FaTimes, FaDice } from 'react-icons/fa';

const VRFLesson = () => {
  const { '*': path } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(0);
  const [completedSections, setCompletedSections] = useState([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  
  const content = {
    'understanding': {
      title: 'Understanding Chainlink VRF',
      sections: [
        {
          title: 'The Power of Verifiable Randomness',
          content: [
            {
              title: 'The Challenge of Randomness',
              text: `Imagine you're playing a game where the outcome depends on a random number. How can you be sure that the number is truly random and hasn't been manipulated? This is the fundamental challenge that Chainlink VRF (Verifiable Random Function) solves. It's not just about generating random numbers - it's about generating random numbers that everyone can verify are truly random.`,
              image: '/images/lessons/chainlink-vrf.png'
            },
            {
              title: 'A New Era of Fairness',
              text: `Chainlink VRF represents a breakthrough in how we think about randomness in blockchain applications. In traditional systems, randomness was either centralized (and potentially manipulable) or required trust in a single entity. Chainlink VRF changes this by providing a way to generate random numbers that are both verifiable and decentralized, creating a new standard for fairness in blockchain applications.`
            },
            {
              title: 'The Mathematics of Trust',
              text: `What makes Chainlink VRF truly remarkable is its mathematical foundation. Each random number comes with cryptographic proof that it was generated fairly and hasn't been tampered with. This proof can be verified by anyone, creating a level of transparency and security that was previously impossible to achieve in random number generation.`
            },
            {
              title: 'The Network Effect',
              text: `The success of Chainlink VRF isn't just about the technology - it's about the network of node operators who maintain it. These operators work together to ensure that the random numbers generated are truly random and can be verified by anyone. This decentralized approach creates a system that's both secure and reliable, with no single point of failure or control.`
            },
            {
              title: 'Real-World Impact',
              text: `The impact of Chainlink VRF extends far beyond just generating random numbers. It's enabling new types of applications that require provable fairness, from gaming and gambling to lotteries and NFT generation. These applications can now operate with a level of transparency and fairness that was previously impossible to achieve.`
            },
            {
              title: 'A Foundation for Innovation',
              text: `Chainlink VRF has become more than just a service - it's a foundation for innovation. Developers around the world are building new applications with the confidence that they can generate truly random numbers that everyone can verify. This has led to an explosion of creativity in the blockchain space, with new applications being developed that were previously impossible.`
            },
            {
              title: 'The Future of Fairness',
              text: `As we look to the future, the role of Chainlink VRF in blockchain applications will only grow. It's not just changing how we generate random numbers - it's changing how we think about fairness and transparency in digital systems. By making verifiable randomness accessible to everyone, it's helping to create a more fair and transparent digital world.`
            }
          ],
          keyPoints: [
            {
              title: 'Transforming Digital Fairness',
              description: `The story of Chainlink VRF is one of transformation. It's taken something that was once controlled by centralized entities and made it accessible to everyone in a way that's both verifiable and decentralized. This transformation isn't just about technology - it's about changing how we think about fairness in digital systems.

What's particularly fascinating is how this transformation has happened. It wasn't through regulation or government intervention, but through innovation and the power of decentralized networks. Chainlink VRF has shown that it's possible to create a system that's both more secure and more accessible than traditional random number generation methods.

The impact of this transformation extends far beyond just the technical aspects. It's changing how people think about fairness and transparency in digital systems. Applications that previously had to rely on trust in a central authority can now operate with provable fairness, creating new possibilities for innovation and growth.`
            },
            {
              title: 'Building Trust Through Mathematics',
              description: `In a world where trust in digital systems is often in short supply, Chainlink VRF offers something different - trust through mathematics. The system doesn't ask you to trust any single entity. Instead, it uses cryptographic proofs to demonstrate that the random numbers generated are truly random and haven't been tampered with.

This approach to trust has profound implications. It means that anyone, anywhere can verify the fairness of random number generation for themselves. They don't need to rely on the word of a central authority or trust in a particular institution. The mathematics itself provides the proof needed to verify the system's fairness.

What's particularly powerful about this approach is how it scales. As more applications use Chainlink VRF, the system becomes more secure and more reliable. Each new user adds to the network's strength, creating a positive feedback loop that makes the system more robust over time. This is the power of decentralized networks - they get stronger as they grow.`
            }
          ]
        },
        {
          title: 'VRF in the Real World',
          content: [
            {
              title: 'Powering the Gaming Revolution',
              text: `The story of blockchain gaming is, in many ways, the story of Chainlink VRF. Without verifiable randomness, many types of games would be impossible to create in a fair and transparent way. From loot boxes to character generation, VRF provides the foundation that makes provably fair gaming possible.`,
              image: '/images/lessons/gaming-revolution.png'
            },
            {
              title: 'Transforming Digital Art',
              text: `One of the most exciting applications of Chainlink VRF is in the world of NFTs and digital art. Artists and creators can use VRF to generate unique attributes and characteristics for their digital creations, ensuring that each piece is truly unique and that the distribution of rare traits is fair and transparent.`
            },
            {
              title: 'Creating Fair Markets',
              text: `In the world of decentralized finance, Chainlink VRF helps create fair and transparent markets. It can be used to randomly select winners in lotteries, distribute rewards in a fair manner, or determine the outcome of prediction markets. This creates a level playing field where everyone can trust that the results are truly random.`
            },
            {
              title: 'Innovating Digital Experiences',
              text: `Chainlink VRF has enabled the creation of entirely new types of digital experiences. From randomized quests in games to surprise rewards in applications, VRF makes it possible to create engaging and fair experiences that users can trust. This has opened up new possibilities for creativity and innovation in the digital space.`
            },
            {
              title: 'Protecting Value',
              text: `In the world of digital assets and collectibles, Chainlink VRF plays a crucial role in protecting value. By ensuring that rare items and attributes are distributed fairly and transparently, it helps maintain the integrity of digital markets and protects the value of digital assets.`
            },
            {
              title: 'Connecting Worlds',
              text: `As blockchain technology continues to evolve, Chainlink VRF is helping to connect different types of digital experiences. It provides the verifiable randomness needed to create seamless and fair interactions between different applications and platforms, creating a more interconnected and efficient digital ecosystem.`
            },
            {
              title: 'The Next Chapter',
              text: `The story of Chainlink VRF is still being written. As more developers and creators discover the power of verifiable randomness, new applications and use cases continue to emerge. From virtual worlds to digital economies, VRF is enabling innovations that bridge the gap between the digital and physical worlds.`
            }
          ],
          keyPoints: [
            {
              title: 'Creating New Possibilities',
              description: `The impact of Chainlink VRF on the digital world has been profound. It's made it possible to create experiences and applications that were previously impossible. This isn't just about making existing services more efficient - it's about creating entirely new possibilities.

What's particularly exciting is how these new possibilities build upon each other. One innovation leads to another, creating a virtuous cycle of development and improvement. This has led to an explosion of creativity in the blockchain space, with new applications and experiences being developed at an unprecedented pace.

The impact extends beyond just gaming and digital art. Developers are using VRF to create fair voting systems, transparent lotteries, and innovative financial products. Even traditional businesses are exploring how they can use this technology to create more engaging and fair digital experiences. This is the power of verifiable randomness - it enables innovation across a wide range of industries and applications.`
            },
            {
              title: 'Building the Future',
              description: `As we look to the future, the role of Chainlink VRF in the digital world will only grow. The demand for verifiable randomness isn't going away - if anything, it's increasing as more value moves into the digital space and new applications are developed.

The system continues to evolve, with regular updates and improvements being made to meet the changing needs of the ecosystem. New features are being added, the security measures are being enhanced, and the user experience is being improved.

Perhaps most importantly, Chainlink VRF has shown that it's possible to bridge the gap between the need for randomness and the need for verifiability in a way that's both secure and decentralized. This proof of concept has implications far beyond just random number generation - it shows a path forward for creating more fair and transparent digital systems.`
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
    } else {
      handleCompleteLesson();
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

  const handleCompleteLesson = () => {
    setCompletedSections(Array.from({ length: currentContent.sections.length }, (_, i) => i));
    navigate('/course-completion');
  };

  const handleExit = () => {
    navigate('/');
  };

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
                      onClick={() => setActiveSection(index)}
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
                        {point.title === 'Verifiable randomness' && <FaDice className="mr-2" />}
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

export default VRFLesson; 