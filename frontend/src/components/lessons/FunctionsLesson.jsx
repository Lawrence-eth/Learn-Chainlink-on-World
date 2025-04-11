import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaChevronLeft, FaCheck, FaLock, FaShieldAlt, FaCode, FaExchangeAlt, FaTimes, FaServer } from 'react-icons/fa';

const FunctionsLesson = () => {
  const { '*': path } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(0);
  const [completedSections, setCompletedSections] = useState([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  
  const content = {
    'understanding': {
      title: 'Understanding Chainlink Functions',
      sections: [
        {
          title: 'The Power of Web3 Functions',
          content: [
            {
              title: 'Bridging Smart Contracts to Web2',
              text: `Chainlink Functions solves one of the most critical challenges in blockchain development: how to securely access off-chain resources and perform complex computations from your smart contracts. Unlike traditional oracles that deliver pre-specified data, Functions empowers developers to write and execute custom code that can fetch any API, perform complex computations, and return results directly to your smart contracts.`,
              image: '/images/lessons/chainlink-functions.png'
            },
            {
              title: 'Beyond Basic Data Feeds',
              text: `While data feeds are powerful for standardized data like price information, many applications require custom data processing logic. Chainlink Functions enables you to write JavaScript code that can access any API, perform transformations, validations, and complex calculations before delivering the result to your smart contract. It's like having a serverless compute platform specifically designed for the secure off-chain needs of blockchain applications.`
            },
            {
              title: 'Decentralized Execution',
              text: `Security is paramount in blockchain applications, and Chainlink Functions delivers by executing your code across a decentralized network of nodes. Unlike centralized alternatives, this eliminates single points of failure and creates a trustless computation environment. Your code executes across multiple independent nodes, with the results aggregated to ensure reliability and tamper-resistance.`
            },
            {
              title: 'The Technical Architecture',
              text: `Chainlink Functions operates through a sophisticated system where your JavaScript functions are encrypted, distributed to Decentralized Oracle Networks (DONs), executed securely, and the results are delivered back to your smart contracts. The system utilizes threshold encryption to maintain the privacy of API keys and sensitive information, while ensuring that no single node has complete control over the execution process.`
            },
            {
              title: 'Limitless Integration Possibilities',
              text: `The true power of Chainlink Functions lies in its flexibility. You can integrate with any public API, including weather services, sports results, AI models, traditional finance systems, IoT devices, and more. This opens up a vast array of possibilities for creating blockchain applications that interact with real-world systems in ways that were previously impossible.`
            },
            {
              title: 'Gas-Efficient Design',
              text: `Chainlink Functions is designed with gas efficiency in mind. By moving complex computations off-chain, your smart contracts become simpler and more cost-effective to deploy and interact with. The system handles the heavy computational lifting off-chain, while delivering only the essential results back to your smart contract, minimizing on-chain gas costs.`
            },
            {
              title: 'Privacy and Security',
              text: `Security is built into every aspect of Chainlink Functions. The platform provides secure handling of API keys and sensitive information through threshold encryption, ensuring that your credentials remain private while still enabling the decentralized computation. This allows you to safely connect to authenticated APIs without exposing your credentials to any single party.`
            }
          ],
          keyPoints: [
            {
              title: 'The Evolution of Smart Contract Capabilities',
              description: `Chainlink Functions represents a significant evolution in what's possible with smart contracts. Traditional smart contracts are limited to on-chain data and simple logic, but Functions removes these constraints by enabling complex off-chain computations and seamless API integrations.

This evolution means that smart contracts can now interact with virtually any external system, access real-time data sources, and perform computations that would be prohibitively expensive on-chain. From AI-powered NFTs to complex financial instruments using real-world data, the possibilities are endless.

What makes this particularly powerful is how it preserves the security guarantees of blockchain while extending its capabilities. By executing code across a decentralized network of nodes, Functions maintains the trustless nature of blockchain while dramatically expanding what developers can build.`
            },
            {
              title: 'The Innovation Catalyst',
              description: `Chainlink Functions is acting as a catalyst for innovation across the entire blockchain ecosystem. By removing the technical barriers between smart contracts and the vast world of Web2 APIs, it's enabling developers to create entirely new categories of applications.

Consider how this impacts various industries: DeFi protocols can now access traditional financial data for more sophisticated instruments; gaming applications can integrate with real-world events; insurance products can utilize weather data for parametric policies; supply chain solutions can connect with IoT devices for real-time tracking.

This innovation catalyst effect extends beyond just what can be built—it's changing how developers approach blockchain application design. Rather than working around the limitations of smart contracts, developers can now design with the assumption that they can access any data or computation they need, leading to more powerful and user-friendly applications.`
            }
          ]
        },
        {
          title: 'Real-World Applications',
          content: [
            {
              title: 'DeFi Beyond Basic Price Feeds',
              text: `Chainlink Functions is transforming DeFi by enabling protocols to access complex financial data and perform sophisticated calculations off-chain. From yield farming strategies that utilize machine learning algorithms to risk assessment protocols that analyze multiple data sources, Functions is allowing DeFi to compete with traditional finance in terms of sophistication and capabilities.`,
              image: '/images/lessons/defi-applications.png'
            },
            {
              title: 'AI-Powered NFTs & Gaming',
              text: `The integration of AI with blockchain is made possible through Chainlink Functions. Developers can now create NFTs that evolve based on AI algorithms, games that generate dynamic content using off-chain computations, and metaverse experiences that adapt based on external data. These applications maintain blockchain's trustless properties while leveraging the power of modern AI systems.`
            },
            {
              title: 'Parametric Insurance Solutions',
              text: `Insurance on the blockchain becomes truly powerful with Functions. Parametric insurance policies can now automatically process claims based on real-world data from weather APIs, flight status databases, crop yield information, and more. This reduces the need for manual claims processing, minimizes disputes, and creates a more efficient insurance ecosystem.`
            },
            {
              title: 'Supply Chain Verification',
              text: `Supply chain applications can leverage Functions to connect blockchain records with real-world verification systems. From temperature monitoring for pharmaceuticals to verification of ethical sourcing for luxury goods, Functions allows supply chain applications to bridge the gap between on-chain records and off-chain reality.`
            },
            {
              title: 'Dynamic NFTs & Content',
              text: `NFTs become more than static tokens with Functions. Developers can create NFTs that update based on real-world events, incorporate live data streams, or transform based on external triggers. This creates more engaging and valuable digital assets that can reflect real-world conditions and changes.`
            },
            {
              title: 'Cross-Platform Integrations',
              text: `Chainlink Functions enables seamless integrations between blockchain applications and traditional web platforms. From social media verification to e-commerce inventory systems, Functions serves as the bridge that allows blockchain applications to interact with existing digital infrastructure.`
            },
            {
              title: 'Compliance & Regulatory Solutions',
              text: `Functions can help blockchain applications meet regulatory requirements by connecting to authorized data sources, performing KYC/AML checks through verified APIs, and implementing compliance rules off-chain. This helps bridge the gap between decentralized applications and regulatory frameworks.`
            }
          ],
          keyPoints: [
            {
              title: 'Beyond Theoretical Use Cases',
              description: `What makes Chainlink Functions particularly powerful is that these applications aren't just theoretical—they're being built and deployed today. Developers across the ecosystem are using Functions to create applications that were previously impossible or impractical to build on blockchain.

The rapid adoption of Functions demonstrates its value proposition. Projects that would have required complex custom infrastructure or centralized components can now be built in a fully decentralized manner. This is accelerating the development cycle for blockchain applications and enabling smaller teams to build sophisticated solutions.

As these applications gain traction, they're creating network effects that further enhance the blockchain ecosystem. Each successful deployment serves as both proof of concept and inspiration for new innovations, creating a virtuous cycle of development and adoption.`
            },
            {
              title: 'The Composability Advantage',
              description: `One of the most exciting aspects of Chainlink Functions is how it enhances blockchain's inherent composability. By enabling access to any API and custom computation, Functions creates new building blocks that developers can mix and match to create increasingly sophisticated applications.

This composability means that each new integration or computation pattern becomes a reusable component for the entire ecosystem. A Function that processes weather data for an insurance application might be repurposed for an agricultural supply chain solution. An AI integration for NFTs might be adapted for predictive market analysis in DeFi.

The result is an ecosystem where innovation compounds, with each new application creating possibilities for even more advanced solutions. This exponential growth in capabilities is making blockchain technology more useful and accessible for solving real-world problems across industries.`
            }
          ]
        }
      ]
    },
    'implementation': {
      title: 'Implementing Chainlink Functions',
      sections: [
        {
          title: 'Technical Implementation',
          content: [
            {
              title: 'Getting Started with Functions',
              text: `Implementing Chainlink Functions begins with understanding the basic architecture. You'll write JavaScript code that will be executed off-chain by Chainlink's decentralized oracle network. This code can make API calls, perform computations, and return results to your smart contract. The system provides a secure, decentralized execution environment for your custom logic.`,
              image: '/images/lessons/functions-architecture.png'
            },
            {
              title: 'Writing Your First Function',
              text: `Chainlink Functions use JavaScript as the primary language, making it accessible to a wide range of developers. Your function will typically follow a pattern: fetch data from an API, process that data, and return a formatted result. The Functions toolkit provides utilities for handling common tasks like HTTP requests, data parsing, and response formatting.`
            },
            {
              title: 'Secure API Key Management',
              text: `Many APIs require authentication keys, which need to be kept secure. Chainlink Functions provides a threshold encryption system that allows you to securely use API keys without exposing them to any single party. This system splits your API keys across multiple nodes, ensuring that no single entity can access your credentials.`
            },
            {
              title: 'Integrating with Smart Contracts',
              text: `Your smart contract will need to be set up to request and receive data from Chainlink Functions. This typically involves implementing a consumer contract that can make requests to the Functions coordinator contract, process the responses, and handle any necessary logic based on the received data.`
            },
            {
              title: 'Subscription Management',
              text: `Chainlink Functions operates on a subscription model, where you deposit LINK tokens to pay for function executions. You'll need to create a subscription, fund it with LINK, and authorize your consumer contracts to use it. The Functions interface provides tools for managing these subscriptions and monitoring usage.`
            },
            {
              title: 'Testing and Debugging',
              text: `Before deploying to production, you'll want to thoroughly test your functions. The Chainlink Functions toolkit includes simulators and testing frameworks that allow you to verify your function's behavior locally before deploying it to the network. This helps catch issues early and ensures your function performs as expected.`
            },
            {
              title: 'Monitoring and Maintenance',
              text: `Once your function is deployed, it's important to monitor its performance and make updates as needed. The Functions interface provides tools for tracking execution history, debugging failed requests, and updating your function code when necessary. Regular maintenance ensures your function continues to operate reliably.`
            }
          ],
          keyPoints: [
            {
              title: 'Best Practices for Implementation',
              description: `Successful implementation of Chainlink Functions requires following several best practices. First, keep your function code efficient and focused. Since you're paying for execution, unnecessary computations can increase costs. Second, implement robust error handling to deal with API failures, unexpected data formats, and other potential issues.

It's also crucial to thoroughly test your functions before deploying them to production. This includes testing with various input parameters, simulating API responses, and verifying the correct handling of edge cases. The Chainlink Functions simulator is an invaluable tool for this process.

Security considerations should be at the forefront of your implementation. This includes secure management of API keys, validation of input data, and careful consideration of how the returned data will be used in your smart contract. Following security best practices helps protect your application and its users.`
            },
            {
              title: 'Scaling and Optimization Strategies',
              description: `As your application grows, you'll need to consider scaling and optimization strategies for your Chainlink Functions. This might include batching requests where appropriate, implementing caching mechanisms for frequently accessed data, or optimizing your smart contract to minimize the frequency of function calls.

Performance optimization is also important. This includes structuring your JavaScript code for efficiency, minimizing unnecessary API calls, and formatting your return data to reduce on-chain gas costs. Small optimizations can lead to significant cost savings as your application scales.

Finally, consider implementing monitoring and alerting systems to quickly identify and respond to any issues with your functions. This proactive approach helps maintain the reliability of your application and ensures a smooth user experience even as external APIs and services evolve.`
            }
          ]
        }
      ]
    }
  };

  // Extract just the path after the last slash
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

  // Add this function to handle section selection from the sidebar
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
                        {point.title === 'The Evolution of Smart Contract Capabilities' && <FaServer className="mr-2" />}
                        {point.title === 'The Innovation Catalyst' && <FaCode className="mr-2" />}
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

export default FunctionsLesson; 