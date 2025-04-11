import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaChevronLeft, FaCheck, FaLock, FaShieldAlt, FaCode, FaExchangeAlt, FaTimes, FaDatabase } from 'react-icons/fa';

const ProofOfReserveLesson = () => {
  const { '*': path } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(0);
  const [completedSections, setCompletedSections] = useState([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  
  const content = {
    'understanding': {
      title: 'Understanding Chainlink Proof of Reserve',
      sections: [
        {
          title: 'The Foundation of Trust in DeFi',
          content: [
            {
              title: 'The Importance of Reserve Verification',
              text: `In the world of decentralized finance, trust is paramount. Chainlink Proof of Reserve (PoR) provides a critical solution for verifying that assets backing tokenized representations actually exist. This system ensures that when you hold a tokenized asset, there's a real, verifiable reserve backing it up, creating a foundation of trust that's essential for the growth and stability of DeFi.`,
              image: '/images/lessons/chainlink-por.png'
            },
            {
              title: 'How Proof of Reserve Works',
              text: `Chainlink Proof of Reserve operates through a sophisticated system of automated verification. It continuously monitors and verifies the reserves backing tokenized assets by connecting to various data sources, including bank APIs, custodians, and blockchain explorers. This data is then aggregated and verified through Chainlink's decentralized oracle network, providing real-time, tamper-proof verification of reserve holdings.`
            },
            {
              title: 'The Technical Architecture',
              text: `The technical architecture of Chainlink Proof of Reserve is built on three key components: data collection, verification, and reporting. Data collection involves connecting to multiple authoritative sources of reserve information. Verification uses cryptographic proofs and consensus mechanisms to ensure data accuracy. Reporting delivers this verified information to smart contracts and users in a transparent, auditable format.`
            },
            {
              title: 'The Role of Decentralization',
              text: `Decentralization is at the heart of Chainlink Proof of Reserve. By distributing the verification process across multiple independent nodes, the system eliminates single points of failure and prevents manipulation. This decentralized approach ensures that reserve verification is resistant to censorship, tampering, and provides a level of security that centralized verification systems cannot match.`
            },
            {
              title: 'Real-Time Monitoring',
              text: `Unlike traditional audit processes that provide periodic snapshots, Chainlink Proof of Reserve offers continuous, real-time monitoring of reserves. This constant verification means that any discrepancies or issues can be detected immediately, allowing for rapid response and maintaining the integrity of the tokenized asset ecosystem.`
            },
            {
              title: 'The Impact on DeFi',
              text: `The introduction of Chainlink Proof of Reserve has had a transformative impact on DeFi. It has enabled the creation of more secure and trustworthy tokenized assets, increased confidence in cross-chain bridges, and provided a foundation for new financial products that require verified collateral. This has led to increased adoption of DeFi protocols and greater institutional participation in the space.`
            },
            {
              title: 'Building Trust Through Transparency',
              text: `Chainlink Proof of Reserve doesn't just verify reserves—it makes the verification process transparent. Anyone can independently verify the proof of reserve data, creating a system where trust is built through transparency rather than blind faith. This transparency is crucial for the long-term sustainability and growth of the DeFi ecosystem.`
            }
          ],
          keyPoints: [
            {
              title: 'The Evolution of Reserve Verification',
              description: `The story of Chainlink Proof of Reserve is one of evolution—from manual audits to automated verification, from periodic checks to continuous monitoring, from opaque processes to transparent systems. This evolution represents a fundamental shift in how we think about and implement trust in financial systems.

What makes this evolution particularly powerful is how it addresses the unique challenges of the DeFi ecosystem. Traditional financial systems rely on centralized authorities and periodic audits to verify reserves. While this approach works in traditional finance, it's incompatible with the decentralized, real-time nature of DeFi. Chainlink Proof of Reserve provides a solution that's specifically designed for the needs of decentralized systems, combining the security of blockchain with the reliability of real-world data.

The impact of this evolution extends beyond just technical improvements. It's changing how users interact with DeFi protocols, how developers design their applications, and how the entire ecosystem approaches the concept of trust. By providing a reliable, transparent way to verify reserves, Chainlink Proof of Reserve is helping to build a more robust and trustworthy DeFi ecosystem.`
            },
            {
              title: 'The Security Advantage',
              description: `Chainlink Proof of Reserve offers a unique security advantage through its combination of decentralization, cryptographic verification, and real-time monitoring. This multi-layered approach to security ensures that reserve verification is resistant to manipulation, fraud, and system failures.

The security benefits of this approach are particularly important in the context of DeFi, where the consequences of reserve verification failures can be severe. By providing continuous, tamper-proof verification of reserves, Chainlink Proof of Reserve helps prevent situations where tokenized assets become unbacked, protecting users and maintaining the stability of the ecosystem.

What's particularly powerful about this security model is how it scales. As more assets and protocols adopt Chainlink Proof of Reserve, the security of the entire ecosystem improves. Each new integration creates additional verification points and increases the overall resilience of the system. This network effect makes the entire DeFi ecosystem more secure as it grows.`
            }
          ]
        },
        {
          title: 'Proof of Reserve in Practice',
          content: [
            {
              title: 'Tokenized Asset Verification',
              text: `One of the most common applications of Chainlink Proof of Reserve is in verifying tokenized assets. Whether it's stablecoins, tokenized securities, or wrapped assets, Proof of Reserve provides continuous verification that the underlying assets exist and are properly accounted for. This verification is crucial for maintaining trust in these tokenized representations and ensuring their value remains pegged to the underlying assets.`,
              image: '/images/lessons/tokenized-assets.png'
            },
            {
              title: 'Cross-Chain Bridge Security',
              text: `Cross-chain bridges are another critical application of Proof of Reserve. These bridges often hold significant amounts of assets as they facilitate transfers between different blockchains. Chainlink Proof of Reserve helps ensure that these bridges maintain proper reserves, preventing situations where users' assets might be at risk due to insufficient backing.`
            },
            {
              title: 'Lending Protocol Safety',
              text: `Lending protocols use Proof of Reserve to verify the collateral backing their loans. This verification helps ensure that the protocol remains solvent and can meet its obligations to lenders. By continuously monitoring collateral reserves, these protocols can maintain higher levels of safety and trust while still offering competitive lending terms.`
            },
            {
              title: 'Stablecoin Integrity',
              text: `Stablecoins are perhaps the most visible application of Proof of Reserve. These digital assets, which aim to maintain a stable value relative to traditional currencies, rely heavily on reserve verification to maintain trust. Chainlink Proof of Reserve provides the continuous, transparent verification needed to ensure that stablecoins remain fully backed and maintain their peg.`
            },
            {
              title: 'Institutional Adoption',
              text: `The transparency and reliability of Chainlink Proof of Reserve have made it particularly attractive to institutional users. These users, who often have strict compliance and risk management requirements, can use Proof of Reserve to independently verify the backing of tokenized assets, making it easier to integrate DeFi into traditional financial operations.`
            },
            {
              title: 'Regulatory Compliance',
              text: `As regulatory frameworks for digital assets develop, Proof of Reserve is becoming increasingly important for compliance. The transparent, auditable nature of Chainlink's verification system makes it easier for projects to demonstrate compliance with reserve requirements and other regulations, helping to bridge the gap between DeFi and traditional regulatory frameworks.`
            },
            {
              title: 'Risk Management',
              text: `Beyond verification, Proof of Reserve plays a crucial role in risk management. By providing real-time data on reserve levels, protocols can implement automated risk controls, such as adjusting collateral requirements or limiting withdrawals when reserves fall below certain thresholds. This proactive approach to risk management helps prevent issues before they become problems.`
            }
          ],
          keyPoints: [
            {
              title: 'Real-World Impact',
              description: `The impact of Chainlink Proof of Reserve extends far beyond technical implementation. It's changing how users interact with DeFi, how protocols manage risk, and how the entire ecosystem approaches the concept of trust. This impact is particularly visible in the growth of stablecoins and other tokenized assets, where Proof of Reserve has become a standard feature.

What's particularly powerful about this impact is how it's enabling new use cases and applications. Projects that previously couldn't operate in DeFi due to trust issues can now leverage Proof of Reserve to build confidence with users. New financial products that require verified collateral can be created. Cross-chain operations that need reliable reserve verification can be implemented safely.

The success stories are already emerging. Stablecoins using Proof of Reserve have seen increased adoption and trust. Lending protocols have been able to offer better terms while maintaining safety. Cross-chain bridges have operated more reliably. These successes demonstrate the real-world value of reliable reserve verification in the DeFi ecosystem.`
            },
            {
              title: 'Future Developments',
              description: `As Chainlink Proof of Reserve continues to evolve, we can expect to see even more innovative applications and improvements. The system is already expanding to cover more types of assets and verification methods, making it applicable to an even wider range of use cases.

One particularly exciting area of development is the integration of Proof of Reserve with other Chainlink services. Combined with Price Feeds, it can provide comprehensive verification of both the existence and value of reserves. Integrated with Automation, it can enable automated responses to reserve-related events. These combinations create even more powerful tools for building secure, reliable DeFi applications.

As the DeFi ecosystem continues to grow and mature, the role of Proof of Reserve will only become more important. It's not just a technical feature—it's a fundamental building block for trust in decentralized finance, enabling the creation of more secure, reliable, and innovative financial products and services.`
            }
          ]
        }
      ]
    },
    'implementation': {
      title: 'Implementing Proof of Reserve',
      sections: [
        {
          title: 'Technical Implementation',
          content: [
            {
              title: 'Integration Architecture',
              text: `Implementing Chainlink Proof of Reserve requires careful consideration of the integration architecture. The system needs to connect with various data sources, handle verification processes, and deliver results to smart contracts. This architecture typically involves multiple components working together to ensure reliable, secure verification of reserves.`,
              image: '/images/lessons/por-architecture.png'
            },
            {
              title: 'Data Source Integration',
              text: `The first step in implementing Proof of Reserve is integrating with the necessary data sources. This might include bank APIs for fiat reserves, blockchain explorers for crypto assets, or custodian systems for other types of assets. Each data source needs to be carefully vetted and integrated to ensure reliable data delivery.`
            },
            {
              title: 'Verification Process',
              text: `The verification process is the heart of Proof of Reserve. This involves collecting data from multiple sources, comparing and validating the information, and generating cryptographic proofs of the verification. The process needs to be both secure and efficient, ensuring that verification can be performed continuously without excessive costs or delays.`
            },
            {
              title: 'Smart Contract Integration',
              text: `Once verification is complete, the results need to be delivered to smart contracts. This integration needs to be carefully designed to ensure that contracts can access the verification data when needed and respond appropriately to changes in reserve status. The integration should also consider gas efficiency and security implications.`
            },
            {
              title: 'Monitoring and Alerts',
              text: `Continuous monitoring is a crucial part of Proof of Reserve implementation. The system needs to track reserve levels, verify their accuracy, and alert relevant parties if issues are detected. This monitoring should be both automated and transparent, allowing for quick response to any problems that arise.`
            },
            {
              title: 'Security Considerations',
              text: `Security is paramount in Proof of Reserve implementation. The system needs to protect against various threats, including data manipulation, system failures, and malicious actors. This requires careful attention to cryptographic security, system architecture, and operational procedures.`
            },
            {
              title: 'Scalability and Performance',
              text: `As DeFi protocols grow, their Proof of Reserve systems need to scale accordingly. The implementation needs to handle increasing numbers of assets, higher verification frequencies, and growing data volumes without compromising performance or reliability. This requires careful planning and optimization.`
            }
          ],
          keyPoints: [
            {
              title: 'Best Practices for Implementation',
              description: `Implementing Chainlink Proof of Reserve successfully requires following several best practices. First, it's crucial to carefully select and vet data sources, ensuring they're reliable and secure. Second, the verification process should be designed with redundancy and fail-safes to ensure continuous operation. Third, smart contract integration should be thoroughly tested and audited to prevent vulnerabilities.

What's particularly important is maintaining transparency throughout the implementation. Users and stakeholders should be able to verify the implementation themselves, building trust in the system. This transparency extends to the verification process, data sources, and any changes or updates to the system.

Another key best practice is continuous monitoring and improvement. The implementation should include mechanisms for detecting and responding to issues, as well as processes for regular review and enhancement. This ensures that the Proof of Reserve system remains effective as the protocol and the broader ecosystem evolve.`
            },
            {
              title: 'Future-Proofing Your Implementation',
              description: `As the DeFi ecosystem continues to evolve, Proof of Reserve implementations need to be designed with the future in mind. This means building in flexibility to accommodate new types of assets, verification methods, and integration requirements. It also means considering how the implementation will scale as the protocol grows.

One important aspect of future-proofing is modularity. The implementation should be designed in a way that allows components to be updated or replaced without disrupting the entire system. This makes it easier to adopt new technologies or respond to changing requirements.

Another key consideration is interoperability. As DeFi becomes more interconnected, Proof of Reserve implementations need to work seamlessly with other protocols and systems. This requires careful attention to standards and interfaces, ensuring that the implementation can communicate effectively with other components of the ecosystem.`
            }
          ]
        }
      ]
    }
  };

  const pathSegment = path ? path.split('/').pop() : 'understanding';
  const currentContent = content[pathSegment] || content['understanding'];

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
                      </motion.div>
                    ))
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.4,
                        ease: "easeOut"
                      }}
                      className="bg-indigo-50 p-4 sm:p-6 rounded-lg shadow-sm will-change-transform"
                    >
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {currentContent.sections[activeSection].content}
                      </p>
                    </motion.div>
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
                        {point.title === 'Real-time data streams' && <FaDatabase className="mr-2" />}
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

export default ProofOfReserveLesson; 