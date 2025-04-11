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
          content: 'Chainlink is a decentralized oracle network that enables smart contracts to securely interact with real-world data and external APIs. It acts as a bridge between blockchain networks and the outside world, providing reliable, tamper-proof inputs and outputs for complex smart contracts.',
          image: '/images/lessons/chainlink-bridge.png',
          keyPoints: [
            {
              title: 'Decentralized Oracle Network',
              description: `Chainlink's decentralized oracle network represents a fundamental shift in how smart contracts interact with external data. Unlike traditional centralized oracles that present single points of failure, Chainlink's network consists of multiple independent nodes that work together to provide reliable data feeds.

Key Features:
- Multiple independent node operators
- Decentralized data aggregation
- Cryptographic security
- Economic incentives
- Reputation system
- Geographic distribution

Benefits:
1. Enhanced Security: No single point of failure
2. Increased Reliability: Multiple data sources
3. Better Accuracy: Consensus-based validation
4. Improved Transparency: On-chain verification
5. Greater Scalability: Distributed architecture`
            },
            {
              title: 'Secure Data Delivery',
              description: `Chainlink's secure data delivery mechanism is built on multiple layers of security to ensure the integrity and reliability of data provided to smart contracts.

Security Layers:
1. Cryptographic Security:
   - Digital signatures
   - Hash verification
   - Proof of origin
   - Data integrity checks
   - Timestamp validation

2. Economic Security:
   - Node operator staking
   - Reputation system
   - Slashing conditions
   - Insurance funds
   - Performance bonds

3. Network Security:
   - Multiple data sources
   - Geographic distribution
   - Redundant infrastructure
   - DDoS protection
   - Access control

4. Operational Security:
   - Regular audits
   - Monitoring systems
   - Incident response
   - Backup procedures
   - Update management`
            }
          ]
        },
        {
          title: 'Core Components',
          content: 'Chainlink consists of several key components that work together to provide secure and reliable oracle services:',
          image: '/images/lessons/chainlink-architecture.png',
          keyPoints: [
            {
              title: 'Chainlink Nodes',
              description: `Chainlink nodes are the backbone of the network, responsible for retrieving, validating, and delivering data to smart contracts.

Node Responsibilities:
1. Data Collection:
   - Source selection
   - Data retrieval
   - Format validation
   - Time verification
   - Quality checks

2. Data Processing:
   - Aggregation
   - Validation
   - Transformation
   - Error handling
   - Format conversion

3. Data Delivery:
   - On-chain submission
   - Proof generation
   - Transaction management
   - Gas optimization
   - Error recovery

4. Node Management:
   - Performance monitoring
   - Resource allocation
   - Security maintenance
   - Update management
   - Backup procedures`
            },
            {
              title: 'Chainlink Network',
              description: `The Chainlink network is a decentralized infrastructure that coordinates node operations and ensures reliable data delivery.

Network Features:
1. Decentralized Architecture:
   - Multiple nodes
   - Geographic distribution
   - Redundant paths
   - Load balancing
   - Fault tolerance

2. Consensus Mechanism:
   - Data aggregation
   - Validation rules
   - Dispute resolution
   - Reputation tracking
   - Performance scoring

3. Network Services:
   - Data feeds
   - Random number generation
   - Automation services
   - Cross-chain communication
   - API connectivity

4. Network Management:
   - Node coordination
   - Resource allocation
   - Performance optimization
   - Security monitoring
   - Update distribution`
            }
          ]
        },
        {
          title: 'Use Cases',
          content: 'Chainlink enables a wide range of applications across various industries:',
          image: '/images/lessons/chainlink-use-cases.png',
          keyPoints: [
            {
              title: 'DeFi Applications',
              description: `Chainlink is widely used in DeFi for various critical operations.

Key Applications:
1. Price Feeds:
   - DEX trading
   - Lending protocols
   - Derivatives
   - Stablecoins
   - Insurance products

2. Lending Protocols:
   - Collateral valuation
   - Loan-to-value ratios
   - Liquidation triggers
   - Interest rate calculation
   - Risk assessment

3. Derivatives:
   - Price settlement
   - Margin calculations
   - Position management
   - Risk management
   - Contract execution

4. Stablecoins:
   - Price pegging
   - Collateral management
   - Minting/burning
   - Stability mechanisms
   - Reserve management`
            },
            {
              title: 'Enterprise Solutions',
              description: `Chainlink provides enterprise-grade solutions for various industries.

Key Applications:
1. Supply Chain:
   - Tracking shipments
   - Quality verification
   - Automated payments
   - Inventory management
   - Compliance tracking

2. Insurance:
   - Claim verification
   - Payout automation
   - Risk assessment
   - Policy management
   - Fraud prevention

3. Gaming:
   - Random number generation
   - In-game events
   - Reward distribution
   - Asset verification
   - Tournament management

4. Cross-Chain:
   - Asset transfers
   - Message passing
   - State verification
   - Bridge security
   - Network integration`
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