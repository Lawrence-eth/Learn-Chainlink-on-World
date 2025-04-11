import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaChevronLeft, FaCheck, FaLock, FaShieldAlt, FaCode, FaExchangeAlt, FaTimes } from 'react-icons/fa';

const IntroductionLesson = () => {
  const { '*': path } = useParams();
  const navigate = useNavigate();
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
          content: [
            {
              title: 'The Bridge Between Blockchains and the Real World',
              text: `Imagine you're building a smart contract that needs to know the current price of Bitcoin to execute a trade. How would your contract get this information? This is where Chainlink comes in - it's like a bridge that connects your smart contracts to the real world.`,
              image: '/images/lessons/chainlink-bridge.png'
            },
            {
              title: 'Solving a Critical Challenge',
              text: `Chainlink is a revolutionary technology that solves one of the biggest challenges in blockchain: how to get reliable, real-world data onto the blockchain. Think of it as a decentralized network of data providers that work together to bring accurate information to your smart contracts.`
            },
            {
              title: 'The Power of Decentralization',
              text: `The beauty of Chainlink lies in its decentralized nature. Instead of relying on a single source of truth (which could be manipulated or fail), Chainlink uses multiple independent nodes that collect, verify, and deliver data. This means your smart contracts can access the same high-quality data that traditional financial institutions use, but in a way that's secure, reliable, and transparent.`
            },
            {
              title: 'How Chainlink Works',
              text: `But Chainlink isn't just about getting data - it's about getting the right data, at the right time, in a way that's secure and reliable. Each piece of data that comes through Chainlink is verified by multiple independent sources, aggregated to ensure accuracy, and then delivered to your smart contract with cryptographic proof that it hasn't been tampered with.`
            },
            {
              title: 'The LINK Token',
              text: `The network is powered by LINK tokens, which serve as both a payment mechanism and a security guarantee. Node operators stake LINK tokens as collateral, creating a strong economic incentive to provide accurate data. If they provide incorrect information, they risk losing their stake. This creates a system where honesty is the most profitable strategy.`
            },
            {
              title: 'Cross-Chain Compatibility',
              text: `What makes Chainlink truly special is its ability to work with any blockchain. Whether you're building on Ethereum, Polygon, or any other blockchain, Chainlink can provide the data your smart contracts need. This interoperability has made Chainlink the industry standard for decentralized oracle services, securing billions of dollars in value across various DeFi applications.`
            },
            {
              title: 'Reliability and Security',
              text: `The network's architecture is designed for maximum reliability. Nodes are distributed across different geographic locations, preventing regional outages from affecting the entire network. The system includes sophisticated monitoring and alerting mechanisms, ensuring that any issues are quickly identified and addressed.`
            },
            {
              title: 'Real-World Impact',
              text: `Chainlink's impact on the blockchain ecosystem has been profound. It has enabled the creation of complex financial products, automated insurance policies, and sophisticated gaming applications - all of which require reliable, real-world data to function properly. The network's proven track record in high-value environments has made it the go-to solution for developers who need secure, reliable data for their smart contracts.`
            },
            {
              title: 'The Future of Chainlink',
              text: `As we continue to explore the world of blockchain and smart contracts, Chainlink's role as a bridge between the blockchain and the real world will only become more important. It's not just a tool for developers - it's a fundamental building block of the decentralized future we're creating together.`
            }
          ],
          image: '/images/lessons/chainlink-bridge.png',
          keyPoints: [
            {
              title: 'The Power of Decentralization',
              description: `In the world of blockchain, decentralization isn't just a buzzword - it's a fundamental principle that ensures security and reliability. Chainlink takes this principle to heart, creating a network where no single entity can control or manipulate the data.

The network's decentralized architecture means that data is collected and verified by multiple independent nodes, each operating in different locations and under different jurisdictions. This geographic and organizational diversity creates a robust system that can withstand various types of attacks and failures.

What's particularly interesting is how Chainlink's decentralization extends beyond just the technical layer. The network's economic model is also decentralized, with node operators competing to provide the best service while being economically incentivized to maintain high standards of accuracy and reliability.

This multi-layered approach to decentralization has proven incredibly effective. The network has successfully operated through market crashes, exchange outages, and various other challenges that would have crippled a centralized system. It's this resilience that has made Chainlink the backbone of the DeFi ecosystem, securing billions of dollars in value across various applications.`
            },
            {
              title: 'Security Through Innovation',
              description: `Security in blockchain isn't just about preventing hacks - it's about creating systems that are fundamentally resistant to manipulation and failure. Chainlink's approach to security is both innovative and comprehensive, combining multiple layers of protection to create a system that's as secure as it is reliable.

At the heart of Chainlink's security model is its use of multiple independent data sources. Instead of relying on a single price feed or data provider, the network aggregates data from numerous sources, using sophisticated algorithms to detect and filter out any anomalies or attempts at manipulation.

The system's cryptographic security is particularly impressive. Each piece of data that comes through the network is signed by the node operators, creating a verifiable chain of custody that can be audited on the blockchain. This means that if there's ever any question about the accuracy of the data, it's possible to trace it back to its source and verify its authenticity.

What's perhaps most innovative about Chainlink's security model is its economic security layer. Node operators must stake LINK tokens as collateral, creating a strong economic incentive to provide accurate data. If they provide incorrect information, they risk losing their stake. This creates a system where honesty isn't just the right thing to do - it's the most profitable strategy.`
            }
          ]
        },
        {
          title: 'Core Components',
          content: [
            {
              title: 'The Building Blocks of Chainlink',
              text: `To truly understand how Chainlink works, we need to look at its core components - the building blocks that make this revolutionary technology possible. Each component plays a crucial role in ensuring that the network can reliably deliver real-world data to smart contracts.`,
              image: '/images/lessons/chainlink-architecture.png'
            },
            {
              title: 'Chainlink Nodes',
              text: `At the foundation of the network are the Chainlink nodes. These aren't just simple data relays - they're sophisticated systems that perform multiple critical functions. Each node is responsible for collecting data from various sources, validating its accuracy, and delivering it to the blockchain in a secure and reliable manner.`
            },
            {
              title: 'The Node Network',
              text: `The nodes operate in a decentralized network, working together to ensure that the data they provide is accurate and reliable. They use sophisticated algorithms to detect and filter out any anomalies or attempts at manipulation, ensuring that only high-quality data makes it to the blockchain.`
            },
            {
              title: 'Smart Contract Integration',
              text: `One of Chainlink's greatest strengths is how seamlessly it integrates with smart contracts. The network provides a simple, standardized interface that developers can use to access real-world data in their applications. This interface abstracts away the complexity of the underlying system, making it easy for developers to focus on building their applications.`
            },
            {
              title: 'Data Aggregation',
              text: `What's particularly interesting about the node architecture is how it handles data aggregation. Instead of simply taking an average of all the data it receives, the network uses sophisticated algorithms to weight different data sources based on their reliability and track record. This creates a system where more reliable sources have more influence on the final result.`
            },
            {
              title: 'Security and Reliability',
              text: `The network's architecture is designed for maximum reliability and security. Nodes are distributed across different geographic locations, preventing regional outages from affecting the entire network. The system includes sophisticated monitoring and alerting mechanisms, ensuring that any issues are quickly identified and addressed.`
            }
          ],
          keyPoints: [
            {
              title: 'Node Architecture',
              description: `The Chainlink node network is a marvel of modern technology, combining sophisticated software with economic incentives to create a system that's both secure and reliable. Each node in the network is a complex system that performs multiple critical functions, from data collection to validation and delivery.

What's particularly impressive about the node network is how it handles the challenge of data aggregation. Instead of simply taking an average of all the data it receives, the network uses sophisticated algorithms to weight different data sources based on their reliability and track record. This creates a system where more reliable sources have more influence on the final result.

The nodes also play a crucial role in maintaining the network's security. Each node operator must stake LINK tokens as collateral, creating a strong economic incentive to provide accurate data. If they provide incorrect information, they risk losing their stake. This creates a system where honesty isn't just the right thing to do - it's the most profitable strategy.`
            },
            {
              title: 'Integration Features',
              description: `The integration process is designed to be as straightforward as possible. Developers can simply import the Chainlink interface into their smart contracts and start using it to access data. The network handles all the complexity of data collection, validation, and delivery, allowing developers to focus on building their applications.

What's particularly impressive about the integration is how it handles edge cases and error conditions. The system includes sophisticated error handling and fallback mechanisms, ensuring that applications can continue to function even if there are temporary issues with the network.

The integration also includes features for gas optimization and cost management. Developers can configure their contracts to use different levels of data quality and update frequency, allowing them to balance cost with performance. This flexibility has been crucial to Chainlink's adoption, making it accessible to projects of all sizes.`
            }
          ]
        },
        {
          title: 'Use Cases',
          content: [
            {
              title: 'Transforming Industries with Chainlink',
              text: `Chainlink's impact extends far beyond just providing data to smart contracts. It's transforming entire industries by enabling new types of applications and business models that were previously impossible. From decentralized finance to supply chain management, Chainlink is powering the next generation of blockchain applications.`,
              image: '/images/lessons/chainlink-use-cases.png'
            },
            {
              title: 'Decentralized Finance (DeFi)',
              text: `In the world of DeFi, Chainlink is the backbone of many critical operations. Price feeds enable accurate trading on decentralized exchanges, while lending protocols use Chainlink to determine collateral values and trigger liquidations. The network's reliability and security make it the go-to solution for DeFi applications that handle billions of dollars in value.`
            },
            {
              title: 'Supply Chain Management',
              text: `Chainlink is revolutionizing supply chain management by providing verifiable data about product movements, quality checks, and delivery confirmations. This enables automated payments, inventory management, and compliance tracking, all while maintaining transparency and security throughout the supply chain.`
            },
            {
              title: 'Insurance and Risk Management',
              text: `The insurance industry is being transformed by Chainlink's ability to provide reliable data for claim verification and automated payouts. Smart contracts can now automatically process claims based on verified data, reducing fraud and improving efficiency in the claims process.`
            },
            {
              title: 'Gaming and NFTs',
              text: `In the gaming and NFT space, Chainlink provides verifiable randomness for fair gameplay and unique asset generation. This enables provably fair gaming experiences and ensures that NFT attributes are generated in a way that's transparent and tamper-proof.`
            },
            {
              title: 'Cross-Chain Applications',
              text: `Chainlink's ability to work across different blockchains is enabling a new wave of cross-chain applications. From asset transfers to message passing, Chainlink provides the secure infrastructure needed to connect different blockchain networks and enable seamless interoperability.`
            }
          ],
          keyPoints: [
            {
              title: 'DeFi Applications',
              description: `Chainlink is widely used in DeFi for various critical operations. Price feeds enable accurate trading on decentralized exchanges, while lending protocols use Chainlink to determine collateral values and trigger liquidations. The network's reliability and security make it the go-to solution for DeFi applications that handle billions of dollars in value.

What's particularly impressive about Chainlink's role in DeFi is how it enables complex financial products that were previously impossible. From sophisticated derivatives to automated trading strategies, Chainlink provides the reliable data infrastructure needed to make these applications work securely and efficiently.

The network's impact on DeFi has been profound. It has enabled the creation of complex financial products, automated insurance policies, and sophisticated trading strategies - all of which require reliable, real-world data to function properly. The network's proven track record in high-value environments has made it the go-to solution for developers who need secure, reliable data for their smart contracts.`
            },
            {
              title: 'Enterprise Solutions',
              description: `Chainlink provides enterprise-grade solutions for various industries. In supply chain management, it enables tracking of shipments, quality verification, and automated payments. In insurance, it facilitates claim verification, payout automation, and risk assessment.

What makes Chainlink particularly valuable for enterprises is its ability to provide secure, reliable data while maintaining privacy and compliance requirements. The network's architecture allows for custom configurations that meet specific industry standards and regulatory requirements.

The success of Chainlink in enterprise applications has demonstrated something important about blockchain technology: true innovation isn't just about creating new features - it's about making those features accessible and useful for real-world business applications. Chainlink's enterprise solutions show how careful design and attention to detail can create systems that are both powerful and practical.`
            }
          ]
        }
      ]
    },
    'price-feeds': {
      title: 'Chainlink Price Feeds',
      sections: [
        {
          title: 'Introduction to Price Feeds',
          content: 'Chainlink Price Feeds provide secure, reliable, and decentralized price data for various assets. These feeds are crucial for DeFi applications that require accurate price information.',
          image: '/images/lessons/chainlink-price-feeds.png',
          keyPoints: [
            {
              title: 'What are Price Feeds?',
              description: `Chainlink Price Feeds are decentralized oracle networks that provide real-time price data for various assets to smart contracts on blockchain networks.

Key Features:
1. Data Sources:
   - Multiple exchanges
   - Market makers
   - Trading platforms
   - Data aggregators
   - Traditional providers

2. Data Quality:
   - High accuracy
   - Low latency
   - Regular updates
   - Wide coverage
   - Historical data

3. Security Measures:
   - Decentralized validation
   - Cryptographic proofs
   - Economic incentives
   - Reputation system
   - Audit trails

4. Implementation:
   - Easy integration
   - Gas optimization
   - Error handling
   - Update management
   - Monitoring tools`
            },
            {
              title: 'How They Work',
              description: `Price feeds operate through a sophisticated process to ensure reliable data delivery.

Process Steps:
1. Data Collection:
   - Source selection
   - Data retrieval
   - Format validation
   - Time verification
   - Quality checks

2. Data Processing:
   - Aggregation
   - Validation
   - Outlier detection
   - Time weighting
   - Volume weighting

3. Data Delivery:
   - On-chain submission
   - Proof generation
   - Transaction management
   - Gas optimization
   - Error recovery

4. Monitoring:
   - Performance tracking
   - Error detection
   - Update frequency
   - Data accuracy
   - System health`
            }
          ]
        }
      ]
    },
    'vrf': {
      title: 'Chainlink VRF',
      sections: [
        {
          title: 'Introduction to VRF',
          content: 'Chainlink VRF (Verifiable Random Function) provides provably fair and verifiable random numbers for blockchain applications.',
          image: '/images/lessons/chainlink-vrf.png',
          keyPoints: [
            {
              title: 'What is VRF?',
              description: `VRF is a cryptographic function that generates random numbers that can be verified as fair and unbiased.

Key Features:
1. Cryptographic Security:
   - Verifiable randomness
   - Proof generation
   - Private key security
   - Public verification
   - Tamper resistance

2. Implementation:
   - Easy integration
   - Gas efficiency
   - Error handling
   - Update management
   - Monitoring tools

3. Use Cases:
   - Gaming
   - Lotteries
   - NFT generation
   - Governance
   - Security applications

4. Security Measures:
   - Private key protection
   - Proof verification
   - Audit trails
   - Monitoring systems
   - Update management`
            },
            {
              title: 'Implementation Guide',
              description: `Implementing VRF requires careful consideration of various factors.

Implementation Steps:
1. Setup:
   - Contract initialization
   - Key management
   - Parameter configuration
   - Error handling
   - Testing procedures

2. Integration:
   - Interface design
   - Function calls
   - Event handling
   - State management
   - Error recovery

3. Security:
   - Access control
   - Input validation
   - Error handling
   - Monitoring systems
   - Update management

4. Best Practices:
   - Gas optimization
   - Error handling
   - Testing procedures
   - Monitoring systems
   - Documentation`
            }
          ]
        }
      ]
    },
    'automation': {
      title: 'Chainlink Automation',
      sections: [
        {
          title: 'Introduction to Automation',
          content: 'Chainlink Automation enables smart contracts to execute automatically based on predefined conditions.',
          image: '/images/lessons/chainlink-automation.png',
          keyPoints: [
            {
              title: 'What is Automation?',
              description: `Automation allows smart contracts to perform actions automatically when certain conditions are met.

Key Features:
1. Core Functionality:
   - Condition monitoring
   - Event triggering
   - Action execution
   - State management
   - Error handling

2. Implementation:
   - Easy integration
   - Gas efficiency
   - Error handling
   - Update management
   - Monitoring tools

3. Use Cases:
   - DeFi protocols
   - NFT systems
   - Governance
   - Supply chain
   - Insurance products

4. Security Measures:
   - Access control
   - Input validation
   - Error handling
   - Monitoring systems
   - Update management`
            },
            {
              title: 'Implementation Guide',
              description: `Implementing automation requires careful planning and execution.

Implementation Steps:
1. Setup:
   - Contract initialization
   - Condition definition
   - Action configuration
   - Error handling
   - Testing procedures

2. Integration:
   - Interface design
   - Function calls
   - Event handling
   - State management
   - Error recovery

3. Security:
   - Access control
   - Input validation
   - Error handling
   - Monitoring systems
   - Update management

4. Best Practices:
   - Gas optimization
   - Error handling
   - Testing procedures
   - Monitoring systems
   - Documentation`
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
    // Mark all sections as completed
    setCompletedSections(Array.from({ length: currentContent.sections.length }, (_, i) => i));
    // Navigate to the next lesson or course completion page
    navigate('/course-completion');
  };

  const handleExit = () => {
    navigate('/lessons');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-indigo-900">{currentContent.title}</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleExit}
              className="p-2 text-gray-500 hover:text-gray-700"
              title="Exit Lesson"
            >
              <FaTimes size={24} />
            </button>
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

                <div className="space-y-8">
                  {Array.isArray(currentContent.sections[activeSection].content) ? (
                    currentContent.sections[activeSection].content.map((section, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-indigo-50 p-6 rounded-lg"
                      >
                        <h3 className="text-xl font-semibold text-indigo-900 mb-3">
                          {section.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {section.text}
                        </p>
                        {section.image && (
                          <div className="mt-4">
                            <img
                              src={section.image}
                              alt={section.title}
                              className="w-full rounded-lg shadow-md"
                            />
                          </div>
                        )}
                      </motion.div>
                    ))
                  ) : (
                    <div className="prose max-w-none mb-8">
                      <p className="text-gray-700 leading-relaxed">
                        {currentContent.sections[activeSection].content}
                      </p>
                    </div>
                  )}
                </div>

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