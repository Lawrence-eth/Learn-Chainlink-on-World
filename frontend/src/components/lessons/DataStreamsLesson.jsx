import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronRight, FaChevronLeft, FaCheck, FaLock, FaShieldAlt, FaCode, FaExchangeAlt, FaTimes, FaStream } from 'react-icons/fa';

const DataStreamsLesson = () => {
  const { '*': path } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(0);
  const [completedSections, setCompletedSections] = useState([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  
  const content = {
    'understanding': {
      title: 'Understanding Chainlink Data Streams',
      sections: [
        {
          title: 'The Power of Real-Time Data',
          content: [
            {
              title: 'Beyond Periodic Updates',
              text: `Imagine a financial application that only updates prices every hour in a market that changes by the second. This is the challenge that Chainlink Data Streams solves. Unlike traditional oracle solutions that provide periodic updates, Data Streams delivers continuous, real-time data flows directly to your applications, enabling a new generation of responsive and precise blockchain solutions.`,
              image: '/images/lessons/chainlink-datastreams.png'
            },
            {
              title: 'A New Paradigm for Blockchain Data',
              text: `Chainlink Data Streams represents a fundamental evolution in how blockchain applications consume external data. Rather than operating on snapshots of information that might be minutes or hours old, applications can now tap into the same real-time data streams used by traditional financial markets, IoT networks, and other time-sensitive systems. This shift from periodic to continuous data delivery opens up entirely new use cases and possibilities.`
            },
            {
              title: 'The Architecture of Speed',
              text: `What makes Chainlink Data Streams remarkable is its innovative architecture that balances speed, reliability, and cost-effectiveness. By leveraging a combination of off-chain computation and on-chain verification, Data Streams can deliver updates in milliseconds rather than minutes, while still providing the cryptographic guarantees and decentralized security that blockchain applications require.`
            },
            {
              title: 'The Scale Advantage',
              text: `The power of Chainlink Data Streams isn't just about speed—it's about scale. Traditional oracle solutions face significant limitations when trying to serve high-frequency data to many users simultaneously. Data Streams is designed from the ground up to support millions of concurrent users and billions of data points, making it possible to build truly mainstream blockchain applications that can match the performance of their centralized counterparts.`
            },
            {
              title: 'Real-World Impact',
              text: `The impact of Data Streams extends far beyond technical metrics. It's enabling entirely new business models that depend on timely data, from high-frequency trading protocols to real-time insurance services to dynamic NFTs that respond to world events. By bringing the speed of the real world to blockchains, Data Streams is bridging one of the fundamental gaps between traditional and decentralized systems.`
            },
            {
              title: 'A Foundation for Responsiveness',
              text: `Chainlink Data Streams has become more than just an oracle service—it's a foundation for building responsive applications. Developers around the world are creating systems that can detect and react to real-world events within seconds, providing users with experiences that feel immediate and connected rather than delayed and isolated. This responsiveness is critical for user adoption and satisfaction, especially for applications competing with centralized alternatives.`
            },
            {
              title: 'The Future of Connected Systems',
              text: `As we look to the future, the role of Data Streams in the blockchain ecosystem will only grow. It's not just providing data—it's fundamentally changing how blockchain applications relate to the external world, moving from periodic batch processing to continuous, event-driven architectures. By enabling this transition, Data Streams is helping to create a more responsive, efficient, and interconnected blockchain ecosystem.`
            }
          ],
          keyPoints: [
            {
              title: 'Transforming Data Consumption Patterns',
              description: `The story of Chainlink Data Streams is one of transformation—from pull to push, from request to stream, from delay to immediacy. This isn't merely a technical improvement; it's a paradigm shift in how blockchain applications interact with the world around them.

What makes this transformation particularly powerful is that it aligns blockchain applications with how data naturally flows in most real-world systems. Stock markets don't wait for someone to ask for a price update—they continuously publish changes as they happen. Weather sensors don't hold back data until queried—they stream readings in real-time. By adopting this push-based, streaming model, blockchain applications can more naturally integrate with existing data ecosystems and provide more timely responses to real-world events.

The impact of this shift extends far beyond just performance metrics. It changes how developers design their applications, how users experience blockchain services, and how quickly value can flow through decentralized systems. Applications that previously had to work around data delays can now respond instantly, creating more seamless and intuitive user experiences.`
            },
            {
              title: 'Building Efficiency Through Continuity',
              description: `In a world where efficiency is measured in milliseconds and gas units, Chainlink Data Streams offers something revolutionary—efficiency through continuity. Instead of requiring applications to repeatedly request the same data, incurring gas costs and delays each time, Data Streams provides a continuous feed that applications can tap into on-demand.

This approach to efficiency has profound implications for blockchain economics. Gas costs for data access become more predictable and often lower, as the overhead of repeated requests is eliminated. Application performance becomes more consistent, as developers can count on having the latest data without additional queries. And the blockchain itself faces reduced congestion, as the volume of oracle request transactions decreases despite an increase in data delivery.

What's particularly powerful about this approach is how it scales. As more applications connect to the same stream, the economic efficiency increases. One data point can serve thousands of applications simultaneously, creating an economy of scale that benefits the entire ecosystem. This shared infrastructure model creates a network effect where each new application makes the system more valuable for everyone.`
            }
          ]
        },
        {
          title: 'Data Streams in the Real World',
          content: [
            {
              title: 'Revolutionizing DeFi Trading',
              text: `The most immediate impact of Chainlink Data Streams can be seen in DeFi trading platforms. Traditional DEXs rely on periodic price updates, creating opportunities for frontrunning and inefficient price execution. With Data Streams, these platforms can now offer millisecond-level price accuracy, enabling advanced trading strategies like limit orders, stop losses, and algorithmically managed positions that previously were only available on centralized exchanges.`,
              image: '/images/lessons/defi-trading.png'
            },
            {
              title: 'Enabling Responsive Insurance',
              text: `Insurance protocols built on blockchain technology have traditionally struggled with timely claim processing. Data Streams is transforming this sector by enabling parametric insurance products that can automatically detect triggering events—from flight delays to weather conditions to market crashes—and issue payments within seconds of the event occurring. This dramatically improves the user experience and reduces the operational overhead of claims processing.`
            },
            {
              title: 'Powering Dynamic NFTs and Gaming',
              text: `The world of NFTs and blockchain gaming is being transformed by real-time data capabilities. Dynamic NFTs that change based on real-world events, in-game assets that respond to market conditions, and gaming experiences that incorporate live sports or entertainment data are all being enabled by Data Streams. This creates more engaging and interactive experiences that blur the line between digital and physical worlds.`
            },
            {
              title: 'Advancing Supply Chain Visibility',
              text: `Supply chain management systems built on blockchain can now offer real-time visibility into the movement of goods. With Data Streams, these systems can continuously ingest data from IoT sensors, shipping databases, and logistics providers, providing all participants with an up-to-the-minute view of where products are and when they'll arrive. This level of transparency and predictability helps reduce inventory costs, minimize delays, and build trust across complex supply networks.`
            },
            {
              title: 'Enhancing DAO Governance',
              text: `Decentralized Autonomous Organizations (DAOs) are using Data Streams to create more responsive governance mechanisms. Rather than waiting for periodic votes or manual interventions, these organizations can now implement policy changes or treasury management decisions that automatically execute based on predefined conditions. For example, a DAO might automatically adjust its lending rates based on real-time utilization metrics or market volatility indicators.`
            },
            {
              title: 'Optimizing Energy Management',
              text: `Blockchain-based energy trading and management systems rely on real-time data to function effectively. With Data Streams, these platforms can continuously track energy production, consumption, and grid conditions, enabling automatic trading of excess capacity, dynamic pricing based on demand, and optimal scheduling of energy-intensive activities. This helps maximize renewable energy utilization and reduce costs for all participants.`
            },
            {
              title: 'The Next Wave of Innovation',
              text: `As Data Streams technology continues to evolve, we're seeing the emergence of entirely new application categories that weren't previously possible. Cross-chain liquidity management systems that instantly balance assets across multiple blockchains, predictive market platforms that adjust in real-time to emerging trends, and decentralized social networks that can filter and prioritize content based on live engagement metrics are just a few examples of the innovation happening at the frontier of real-time blockchain applications.`
            }
          ],
          keyPoints: [
            {
              title: 'Creating New User Experiences',
              description: `The impact of Chainlink Data Streams on user experiences has been profound. It's closing the gap between what users expect from web2 applications and what they experience in web3. No more refreshing pages to see if prices have updated. No more waiting for transactions to settle before seeing their impact. No more disconnect between what's happening in the world and what's reflected on-chain.

What's particularly exciting is how these improved experiences are attracting new users to blockchain applications. People who were previously deterred by the clunky, delayed nature of many decentralized apps are now finding experiences that match or exceed those offered by centralized alternatives, but with the added benefits of transparency, ownership, and open access that only blockchain can provide.

The impact extends beyond just convenience. Real-time data enables more effective decision-making, more precise risk management, and more opportunities for value creation. Traders can respond immediately to market movements. Insurance clients can receive funds when they need them most. Supply chain participants can adjust their operations as conditions change. This timely information flow makes blockchain applications not just more user-friendly, but fundamentally more valuable to everyone who uses them.`
            },
            {
              title: 'Building the Real-Time Future',
              description: `As we look to the future, Chainlink Data Streams is paving the way for a real-time blockchain ecosystem where data flows continuously and applications respond instantly. This future isn't just about faster updates—it's about fundamentally changing how blockchain applications participate in the world's information flows.

The technology continues to evolve, with ongoing improvements in latency, throughput, and supported data types. New streams are being added for more data sources, from traditional market data to climate measurements to social media sentiment. And the integration points are expanding beyond smart contracts to include Layer 2 solutions, cross-chain protocols, and direct connections to traditional systems.

Perhaps most importantly, Data Streams is showing that blockchain applications don't have to sacrifice responsiveness for security or decentralization. It's possible to have systems that react in real-time while still providing the fundamental guarantees that make blockchain valuable. This proof of concept has implications beyond just data delivery—it shows a path forward for addressing other performance challenges while staying true to the core principles of decentralization.`
            }
          ]
        }
      ]
    },
    'real-world': {
      title: 'Data Streams in Action',
      sections: [
        {
          title: 'Practical Applications and Use Cases',
          content: [
            {
              title: 'High-Frequency DeFi Trading',
              text: `The most transformative application of Data Streams can be seen in high-frequency trading protocols. These platforms leverage millisecond-level price updates to offer sophisticated trading features like true limit orders (not approximations), real-time portfolio rebalancing, and automatic arbitrage execution across multiple venues. The result is DeFi trading experiences that rival traditional finance in both functionality and performance, while maintaining the transparency and accessibility benefits of decentralized systems.`,
              image: '/images/lessons/high-frequency-trading.png'
            },
            {
              title: 'Real-Time Risk Management',
              text: `Lending and derivatives protocols are using Data Streams to implement sophisticated risk management systems that continuously monitor positions and market conditions. These protocols can automatically adjust collateral requirements, trigger liquidations before positions become underwater, and dynamically modify interest rates based on utilization and market volatility. This reduces systemic risk and creates more capital-efficient lending markets with lower default rates.`
            },
            {
              title: 'Responsive Asset Management',
              text: `Portfolio management protocols can now implement advanced strategies that were previously impossible on blockchain. Index funds that rebalance in real-time as market conditions change, yield farming strategies that automatically shift capital to the highest-performing opportunities, and risk-managed vaults that adjust allocations based on real-time volatility metrics are all enabled by the continuous data flows provided by Data Streams.`
            },
            {
              title: 'Event-Driven Insurance',
              text: `Insurance protocols have evolved from manual claims processes to fully automated, event-driven coverage. These systems can now offer flight delay insurance that pays out the moment a delay is confirmed, crop insurance that responds to weather data, and financial protection that triggers as soon as predefined market conditions occur. This increases trust in blockchain insurance, as users can see exactly when and why claims are paid, with no human intervention required.`
            },
            {
              title: 'Interactive Gaming and NFTs',
              text: `The gaming and NFT sectors are leveraging Data Streams to create more dynamic and engaging experiences. Games can incorporate real-world events like sports scores or weather conditions into their mechanics. NFT collections can evolve based on external data, creating digital assets that reflect real-world conditions or respond to community activities. These applications blur the line between digital and physical experiences, making blockchain gaming and collectibles more immersive and relevant.`
            },
            {
              title: 'Automated DAO Operations',
              text: `Decentralized organizations are implementing data-driven automation to operate more efficiently. Treasury management systems can automatically rebalance holdings based on real-time market conditions, adjust compensation based on performance metrics, or fund initiatives that meet predefined success criteria. This reduces the governance overhead for DAOs and allows them to respond more quickly to changing market conditions and opportunities.`
            },
            {
              title: 'Predictive Market Intelligence',
              text: `Prediction markets and analytics platforms are using Data Streams to create more accurate forecasting systems. By continuously incorporating new information from multiple sources, these platforms can generate real-time probability estimates for future events, identify emerging trends before they become obvious, and provide users with timely insights for decision-making. This improves the overall information efficiency of blockchain markets and helps participants make better-informed choices.`
            }
          ],
          keyPoints: [
            {
              title: 'Real-World Success Stories',
              description: `Major DeFi protocols have already demonstrated the transformative impact of Data Streams. Trading platforms that implemented real-time price feeds have seen dramatic increases in trading volume and user satisfaction, along with significant reductions in failed transactions and price slippage. Lending protocols that adopted continuous risk monitoring have been able to safely reduce collateral requirements, increasing capital efficiency while maintaining or improving their safety records.

Enterprise blockchain deployments leveraging Data Streams have achieved new levels of coordination and efficiency. Supply chain networks can now synchronize operations across multiple companies with minimal delays, reducing inventory requirements and improving delivery reliability. Energy trading platforms can optimize grid balancing in real-time, reducing waste and lowering costs for all participants.

Perhaps most tellingly, many protocols that initially built their own custom data solutions have migrated to Chainlink Data Streams, recognizing the efficiency and security benefits of a specialized, battle-tested infrastructure. This trend toward shared data infrastructure is creating a more robust and interconnected blockchain ecosystem.`
            },
            {
              title: 'Future Horizons and Possibilities',
              description: `As Data Streams technology continues to evolve, we can expect to see even more innovative applications emerge. Cross-chain liquidity networks could use real-time data to automatically balance assets across different blockchains, making the user experience more seamless regardless of which chain they're interacting with. Decentralized compute networks could allocate resources based on real-time demand and pricing information, creating more efficient markets for computational resources.

The convergence of Data Streams with other emerging technologies presents particularly exciting possibilities. Combined with Layer 2 scaling solutions, Data Streams could enable social applications with millions of users sharing and reacting to information in real-time. Integrated with AI systems, it could power autonomous agents that make complex decisions based on continuously updating market conditions and predictive models.

As traditional financial systems and web3 continue to integrate, Data Streams will play a crucial role in ensuring that blockchain applications can match the performance expectations of mainstream users while maintaining the unique benefits of decentralization. This bridging function—connecting the speed of traditional systems with the transparency and accessibility of blockchain—may ultimately be the most important contribution of Data Streams to the future of finance and digital interaction.`
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
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ 
                  duration: 0.5,
                  ease: "easeInOut"
                }}
                className="bg-white rounded-xl shadow-lg p-4 sm:p-8 will-change-transform"
              >
                <h2 className="text-xl sm:text-2xl font-semibold text-indigo-900 mb-4 sm:mb-6">
                  {currentContent.sections[activeSection].title}
                </h2>

                <div className="space-y-6 sm:space-y-8">
                  {Array.isArray(currentContent.sections[activeSection].content) ? (
                    currentContent.sections[activeSection].content.map((section, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ 
                          delay: index * 0.15,
                          duration: 0.4,
                          ease: "easeOut"
                        }}
                        className="bg-indigo-50 p-4 sm:p-6 rounded-lg shadow-sm will-change-transform"
                      >
                        <h3 className="text-lg sm:text-xl font-semibold text-indigo-900 mb-2 sm:mb-3">
                          {section.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                          {section.text}
                        </p>
                        {section.image && (
                          <motion.div 
                            className="mt-3 sm:mt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ 
                              delay: 0.2,
                              duration: 0.4
                            }}
                          >
                            <img
                              src={section.image}
                              alt={section.title}
                              className="w-full rounded-lg shadow-md"
                              loading="lazy"
                            />
                          </motion.div>
                        )}
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
                        {point.title === 'Real-time data streams' && <FaStream className="mr-2" />}
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

export default DataStreamsLesson; 