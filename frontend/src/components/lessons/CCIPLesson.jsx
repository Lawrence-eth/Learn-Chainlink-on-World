import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaChevronLeft, FaCheck, FaLock, FaShieldAlt, FaCode, FaExchangeAlt, FaTimes, FaLink } from 'react-icons/fa';

const CCIPLesson = () => {
  const { '*': path } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(0);
  const [completedSections, setCompletedSections] = useState([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  
  const content = {
    'understanding': {
      title: 'Understanding Chainlink CCIP',
      sections: [
        {
          title: 'The Power of Cross-Chain Interoperability',
          content: [
            {
              title: 'Breaking Down Blockchain Barriers',
              text: `Imagine a world where different blockchain networks operate as isolated islands, unable to communicate with each other. This is the challenge that Chainlink Cross-Chain Interoperability Protocol (CCIP) solves. It's not just a bridge between blockchains - it's a revolutionary technology that enables seamless interaction and value transfer across previously siloed networks.`,
              image: '/images/lessons/chainlink-ccip.png'
            },
            {
              title: 'A New Era of Blockchain Connectivity',
              text: `Chainlink CCIP represents a breakthrough in how we think about blockchain interoperability. In the early days of blockchain, each network was designed to operate independently, with limited ability to interact with other chains. CCIP changes this by providing a secure, standardized way for blockchains to communicate and transfer value, creating a new paradigm for cross-chain applications.`
            },
            {
              title: 'The Architecture of Trust',
              text: `What makes Chainlink CCIP truly remarkable is its security-first architecture. Each cross-chain message or token transfer is protected by multiple layers of validation and verification. This creates a level of security that was previously impossible to achieve in cross-chain communications, making it possible to build truly trustworthy cross-chain applications.`
            },
            {
              title: 'The Network Effect',
              text: `The success of Chainlink CCIP isn't just about the technology - it's about the network of blockchains it connects. As more chains integrate with CCIP, the value of the network grows exponentially. This creates a virtuous cycle where each new integration makes the entire ecosystem more valuable, driving further adoption and innovation.`
            },
            {
              title: 'Real-World Impact',
              text: `The impact of Chainlink CCIP extends far beyond technical integration. It's enabling entirely new business models and applications that require cross-chain functionality. From DeFi protocols that operate across multiple chains to gaming applications that leverage the strengths of different networks, CCIP is powering the next generation of blockchain innovation.`
            },
            {
              title: 'A Foundation for Innovation',
              text: `Chainlink CCIP has become more than just a protocol - it's a foundation for innovation. Developers around the world are building new cross-chain applications with the confidence that they can securely access and transfer data and assets across blockchain networks. This has led to an explosion of creativity in the blockchain space, with new cross-chain applications being developed that were previously impossible.`
            },
            {
              title: 'The Future of Blockchain',
              text: `As we look to the future, the role of Chainlink CCIP in the blockchain ecosystem will only grow. It's not just enabling interoperability - it's fundamentally changing how we think about blockchain architecture and application design. By making cross-chain communication seamless and secure, it's helping to create a more connected and efficient blockchain ecosystem.`
            }
          ],
          keyPoints: [
            {
              title: 'Transforming Blockchain Architecture',
              description: `The story of Chainlink CCIP is one of transformation. It's taken the fragmented blockchain landscape and created a pathway to a unified, interoperable ecosystem. This transformation isn't just about technology - it's about changing how we think about blockchain architecture and application design.

What's particularly fascinating is how this transformation is happening. It's not through replacing existing blockchains, but by enhancing them with interoperability capabilities. CCIP has shown that it's possible to maintain the unique strengths of different blockchain networks while enabling them to work together in powerful new ways.

The impact of this transformation extends far beyond just the technical aspects. It's changing how developers approach blockchain projects, how users interact with blockchain applications, and how value flows through the digital economy. Applications that previously had to choose a single blockchain can now operate across multiple networks, creating new possibilities for functionality and user experience.`
            },
            {
              title: 'Building Security Through Standardization',
              description: `In a world where cross-chain security breaches have resulted in massive losses, Chainlink CCIP offers something different - security through standardization. The protocol doesn't ask developers to reinvent the wheel for each cross-chain integration. Instead, it provides a battle-tested, standardized way to handle cross-chain communications securely.

This approach to security has profound implications. It means that developers can focus on building innovative applications rather than worrying about the complex security considerations of cross-chain messaging. The protocol handles the security heavy lifting, ensuring that cross-chain messages and token transfers are protected by the same rigorous security measures regardless of which chains they're connecting.

What's particularly powerful about this approach is how it evolves. As the protocol encounters and addresses new security challenges, all applications built on CCIP benefit from these improvements. This creates a shared security infrastructure that becomes stronger over time, providing a solid foundation for the entire cross-chain ecosystem.`
            }
          ]
        },
        {
          title: 'CCIP in the Real World',
          content: [
            {
              title: 'Powering Cross-Chain Finance',
              text: `The story of DeFi's evolution is becoming increasingly intertwined with Chainlink CCIP. As DeFi protocols seek to expand beyond their original blockchain environments, CCIP provides the secure infrastructure needed to deploy cross-chain financial applications. From lending protocols that can access liquidity across multiple chains to DEXs that can aggregate trading opportunities from different networks, CCIP is enabling a new generation of cross-chain financial services.`,
              image: '/images/lessons/crosschain-finance.png'
            },
            {
              title: 'Transforming Digital Asset Management',
              text: `One of the most powerful applications of Chainlink CCIP is in digital asset management. CCIP enables seamless token transfers across different blockchain networks, making it possible for users to move their assets wherever they can get the best utility or returns. This has profound implications for portfolio management, as users are no longer constrained by the limitations of any single blockchain network.`
            },
            {
              title: 'Creating Unified Gaming Experiences',
              text: `In the world of blockchain gaming, Chainlink CCIP is helping to create more unified player experiences. Game developers can leverage the unique strengths of different blockchains - such as the security of Ethereum, the speed of Avalanche, or the specific gaming features of dedicated gaming chains - while still providing a seamless experience for players. This enables more sophisticated game mechanics and economies that operate across blockchain boundaries.`
            },
            {
              title: 'Enabling Cross-Chain Governance',
              text: `Chainlink CCIP has enabled the creation of more sophisticated cross-chain governance systems. DAO proposals and votes can be collected and aggregated across multiple chains, enabling organizations to have a unified governance system even when their operations and assets span multiple networks. This creates more inclusive and comprehensive governance for decentralized organizations.`
            },
            {
              title: 'Powering Enterprise Blockchain Solutions',
              text: `For enterprise blockchain applications, Chainlink CCIP provides a critical missing piece - the ability to connect private blockchain deployments with public networks and with each other. This makes it possible to design systems that leverage both the privacy and control of private chains and the transparency and security of public networks, creating more powerful and flexible enterprise blockchain solutions.`
            },
            {
              title: 'Connecting Blockchain and Traditional Systems',
              text: `As blockchain technology continues to evolve, Chainlink CCIP is helping to connect not just different blockchain networks, but also traditional financial and business systems. Through CCIP and other Chainlink services, blockchain applications can securely interface with traditional databases, payment systems, and enterprise software, creating bridges between the blockchain world and existing business infrastructure.`
            },
            {
              title: 'The Next Chapter',
              text: `The story of Chainlink CCIP is still being written. As more developers and organizations discover the power of secure cross-chain interoperability, new applications and use cases continue to emerge. From cross-chain identity systems to interoperable metaverse platforms, CCIP is enabling innovations that bridge the gaps between different blockchain ecosystems and create a more connected digital future.`
            }
          ],
          keyPoints: [
            {
              title: 'Creating New Possibilities',
              description: `The impact of Chainlink CCIP on the blockchain ecosystem has been profound. It's made it possible to create applications and services that were previously constrained by the limitations of single-chain architectures. This isn't just about making existing applications more efficient - it's about creating entirely new possibilities.

What's particularly exciting is how these new possibilities build upon each other. One cross-chain innovation leads to another, creating a virtuous cycle of development and improvement. This has led to an explosion of creativity in the blockchain space, with new cross-chain applications being developed at an unprecedented pace.

The impact extends beyond just developers and technologists. End users now have access to more powerful, flexible, and user-friendly blockchain applications that can leverage the strengths of multiple networks. Businesses can deploy blockchain solutions that aren't constrained by the technical limitations of any single platform. And investors can access opportunities across the entire blockchain landscape more seamlessly than ever before.`
            },
            {
              title: 'Building the Future',
              description: `As we look to the future, the role of Chainlink CCIP in the blockchain ecosystem will only grow. The demand for secure, standardized cross-chain communication isn't going away - if anything, it's increasing as the blockchain landscape becomes more diverse and specialized.

The protocol continues to evolve, with regular updates and improvements being made to meet the changing needs of the ecosystem. New features are being added, security measures are being enhanced, and more blockchains are being integrated into the network.

Perhaps most importantly, Chainlink CCIP has shown that interoperability doesn't have to come at the expense of security or decentralization. It's possible to build a more connected blockchain ecosystem while maintaining the core values that make blockchain technology revolutionary. This proof of concept has implications far beyond just cross-chain messaging - it shows a path forward for addressing other challenges in blockchain adoption while staying true to the technology's foundational principles.`
            }
          ]
        }
      ]
    },
    'real-world': {
      title: 'CCIP in the Real World',
      sections: [
        {
          title: 'Cross-Chain Applications and Use Cases',
          content: [
            {
              title: 'DeFi Without Boundaries',
              text: `Decentralized Finance (DeFi) is perhaps the most immediate beneficiary of CCIP's capabilities. Cross-chain lending protocols can now access liquidity pools across multiple blockchains, offering users better rates and more options. Decentralized exchanges can aggregate liquidity from different chains, providing better pricing and reduced slippage. And yield aggregators can automatically move assets to wherever they can generate the highest returns, regardless of which blockchain those opportunities exist on.`,
              image: '/images/lessons/defi-without-boundaries.png'
            },
            {
              title: 'Enterprise Solutions Across Chains',
              text: `For enterprises, CCIP solves the critical challenge of connecting different blockchain deployments. Supply chain tracking systems can now span both private enterprise chains and public verification layers. Payment systems can connect traditional financial infrastructure with multiple blockchain networks. And data sharing initiatives can securely transfer information between different organizational blockchain deployments while maintaining appropriate access controls.`
            },
            {
              title: 'Cross-Chain NFT Ecosystems',
              text: `The world of NFTs is being transformed by cross-chain capabilities. NFT marketplaces can now display and trade assets from multiple chains in a single interface. Gaming items can move between different blockchain environments, following the player's journey across different games. And metaverse platforms can connect digital assets and identities across different blockchain-based worlds, creating more seamless virtual experiences.`
            },
            {
              title: 'Unified DAO Governance',
              text: `Decentralized Autonomous Organizations (DAOs) can now operate across multiple chains while maintaining unified governance. Proposals can be submitted on any connected chain and votes can be collected and aggregated regardless of where participants hold their governance tokens. This enables DAOs to expand their operations across the blockchain ecosystem without fragmenting their governance processes.`
            },
            {
              title: 'Cross-Chain Identity and Reputation',
              text: `Digital identity systems powered by CCIP can aggregate a user's identity attestations, credentials, and reputation scores across different blockchains. This creates a more comprehensive view of a user's blockchain activity and trustworthiness, which can be leveraged by applications across the ecosystem for more personalized experiences and more accurate risk assessment.`
            },
            {
              title: 'Multi-Chain Insurance and Risk Management',
              text: `Insurance protocols can now offer coverage for assets and activities across multiple chains while managing their risk pools on the most suitable networks. Claims verification can incorporate data from any connected blockchain, enabling more comprehensive and accurate coverage. And risk assessment can take into account cross-chain exposures and correlations, leading to more robust insurance models.`
            },
            {
              title: 'Global Token Standards',
              text: `CCIP is enabling the emergence of truly cross-chain token standards that maintain their properties and functionalities regardless of which blockchain they're currently on. This creates more consistent user experiences when interacting with tokens across different environments and enables developers to design multi-chain applications with predictable token behaviors.`
            }
          ],
          keyPoints: [
            {
              title: 'Real-World Adoption Stories',
              description: `Major financial institutions are already leveraging CCIP to connect their blockchain initiatives with public networks while maintaining appropriate security and privacy boundaries. Global enterprises are using CCIP to create unified supply chain tracking systems that span multiple blockchain environments, ensuring end-to-end visibility regardless of which networks their partners use.

Leading DeFi protocols have integrated CCIP to offer cross-chain services, dramatically expanding their addressable markets and providing users with more options and better rates. Popular games and metaverse platforms are using CCIP to enable players to carry their digital assets and achievements across different blockchain-based worlds.

Infrastructure providers are building CCIP into their core offerings, making cross-chain capabilities a standard feature rather than a specialized addition. And blockchain developers are increasingly designing with cross-chain functionality in mind from the beginning, rather than treating it as an afterthought.`
            },
            {
              title: 'Future Directions and Possibilities',
              description: `As CCIP continues to evolve and expand, we can expect to see even more innovative use cases emerge. Cross-chain prediction markets could aggregate liquidity and information from across the blockchain ecosystem, leading to more efficient price discovery. Decentralized social media platforms could span multiple chains, allowing users to maintain their social graphs and content regardless of which network they're currently using.

Sophisticated cross-chain derivatives and synthetic assets could unlock new forms of risk management and investment strategies. Interoperable smart contract platforms could enable developers to compose functionality across different blockchain environments, creating more powerful and flexible applications.

And as traditional systems increasingly connect with blockchain networks through oracle services, CCIP will play a crucial role in ensuring that these connections span the entire blockchain ecosystem rather than being limited to any single network.`
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
                        {point.title === 'Cross-chain interoperability' && <FaLink className="mr-2" />}
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

export default CCIPLesson; 