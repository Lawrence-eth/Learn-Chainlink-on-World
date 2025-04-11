import React from 'react';
import { useParams } from 'react-router-dom';

const IntroductionLesson = () => {
  const { '*': path } = useParams();
  
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
            },
            {
              title: 'Multiple data sources',
              description: `Chainlink's multiple data source architecture is a cornerstone of its reliability and security. The system doesn't rely on a single data provider but instead aggregates data from numerous independent sources to ensure accuracy and prevent manipulation.

The network supports various types of data sources, including:
- Traditional financial data providers
- Web APIs
- IoT devices
- Enterprise systems
- Other blockchain networks
- Custom data feeds

Each data source is carefully vetted before being integrated into the network. The vetting process includes:
- Verification of the source's reliability
- Assessment of data quality
- Evaluation of uptime and availability
- Analysis of historical performance

The system uses sophisticated aggregation methods to combine data from multiple sources:
- Volume-weighted average prices for financial data
- Median values to filter out outliers
- Time-based aggregation to prevent manipulation
- Statistical analysis to detect anomalies

Chainlink also supports different types of data aggregation:
- On-chain aggregation through smart contracts
- Off-chain aggregation through node operators
- Hybrid approaches combining both methods

The multiple data source approach provides several benefits:
- Increased accuracy through data validation
- Protection against single points of failure
- Resistance to manipulation attempts
- Improved reliability and uptime
- Better coverage of different markets

This architecture has proven particularly valuable in DeFi applications, where accurate price data is crucial for:
- Lending protocols
- Decentralized exchanges
- Derivatives platforms
- Insurance products
- Stablecoin mechanisms`
            },
            {
              title: 'Tamper-proof data',
              description: `Chainlink's tamper-proof data mechanism is designed to ensure that the data provided to smart contracts cannot be manipulated or altered. This is achieved through a combination of cryptographic proofs, decentralized validation, and economic incentives.

The system uses several layers of protection to prevent data tampering:
1. Cryptographic Signatures: Each data point is signed by the node that provided it, creating a cryptographic proof of its origin and integrity.
2. On-chain Verification: Data is verified on the blockchain, making it immutable once confirmed.
3. Multiple Validators: Data is validated by multiple independent nodes before being accepted.
4. Economic Incentives: Nodes have financial incentives to provide accurate data and penalties for providing incorrect data.

The tamper-proof nature of Chainlink's data is particularly important for:
- Financial applications requiring accurate price data
- Insurance contracts needing reliable event verification
- Supply chain systems tracking goods and payments
- Gaming applications requiring fair random number generation
- Governance systems needing accurate voting results

Chainlink's tamper-proof data mechanism has been battle-tested in high-value environments, securing billions of dollars in DeFi applications. Its security model has proven resilient against various attack vectors, including:
- Flash loan attacks
- Oracle manipulation attempts
- Data source manipulation
- Network-level attacks
- Economic attacks

The system's ability to provide tamper-proof data has made it the industry standard for oracle services, trusted by leading DeFi protocols and enterprise applications.`
            },
            {
              title: 'Smart contract connectivity',
              description: `Chainlink's smart contract connectivity enables seamless interaction between blockchain-based smart contracts and external data sources. This connectivity is achieved through a sophisticated architecture that bridges the gap between on-chain and off-chain environments.

The system provides several types of connectivity:
1. Direct Integration: Smart contracts can directly call Chainlink oracles through standardized interfaces.
2. Custom Integration: Developers can create custom integrations for specific use cases.
3. Cross-chain Connectivity: The system supports data transfer between different blockchain networks.
4. API Connectivity: External APIs can be securely connected to smart contracts.

Chainlink's connectivity features include:
- Standardized interfaces for easy integration
- Support for multiple blockchain networks
- Flexible data formatting and transformation
- Secure communication channels
- Reliable message delivery
- Error handling and retry mechanisms

The system's connectivity is particularly valuable for:
- DeFi applications needing real-time market data
- Insurance contracts requiring external event verification
- Supply chain systems tracking goods and payments
- Gaming applications needing external randomness
- Governance systems requiring external data

Chainlink's smart contract connectivity has been proven in production environments, powering numerous high-value applications across various industries.`
            },
            {
              title: 'Cross-chain interoperability',
              description: `Chainlink's cross-chain interoperability enables seamless data and value transfer between different blockchain networks. This capability is crucial for creating a connected blockchain ecosystem where applications can leverage the strengths of multiple networks.

The system supports various types of cross-chain interactions:
1. Data Transfer: Secure and reliable data transfer between chains
2. Value Transfer: Movement of assets between different networks
3. State Verification: Verification of state across multiple chains
4. Message Passing: Secure communication between chains

Chainlink's cross-chain capabilities include:
- Support for multiple blockchain networks
- Secure bridging mechanisms
- Atomic cross-chain transactions
- State verification systems
- Message routing protocols
- Error handling and recovery

The system's cross-chain interoperability is particularly valuable for:
- Multi-chain DeFi applications
- Cross-chain asset management
- Interoperable gaming platforms
- Multi-chain governance systems
- Cross-chain supply chain solutions

Chainlink's cross-chain capabilities have been proven in production, enabling secure and reliable interactions between various blockchain networks.`
            },
            {
              title: 'Enterprise-grade security',
              description: `Chainlink's enterprise-grade security model is designed to meet the highest standards of security and reliability required by enterprise applications. The system implements multiple layers of security to protect against various attack vectors and ensure data integrity.

The security model includes:
1. Cryptographic Security: Advanced cryptographic techniques for data protection
2. Network Security: Protection against network-level attacks
3. Economic Security: Incentive mechanisms to prevent malicious behavior
4. Operational Security: Best practices for node operation
5. Compliance Security: Meeting regulatory requirements

Chainlink's enterprise security features:
- Multi-signature requirements
- Advanced encryption
- Secure key management
- Audit trails
- Compliance reporting
- Incident response

The system's security model has been:
- Audited by leading security firms
- Tested in high-value environments
- Proven in production systems
- Validated by enterprise users
- Certified for various standards

Chainlink's enterprise-grade security makes it suitable for:
- Financial institutions
- Insurance companies
- Supply chain systems
- Government applications
- Healthcare systems
- Enterprise blockchain solutions`
            },
            {
              title: 'Scalable infrastructure',
              description: `Chainlink's scalable infrastructure is designed to handle growing demand while maintaining performance and reliability. The system's architecture allows for horizontal scaling to accommodate increasing numbers of requests and data sources.

The infrastructure includes:
1. Node Scaling: Ability to add more nodes to handle increased load
2. Data Scaling: Support for growing data volumes and types
3. Network Scaling: Expansion of network capacity
4. Geographic Scaling: Distribution across multiple regions

Chainlink's scalability features:
- Load balancing
- Resource optimization
- Performance monitoring
- Capacity planning
- Geographic distribution
- Network optimization

The system's scalability has been proven in:
- High-volume DeFi applications
- Enterprise-scale deployments
- Global data distribution
- Multi-chain environments
- High-frequency trading

Chainlink's scalable infrastructure makes it suitable for:
- Large-scale DeFi protocols
- Enterprise applications
- Global supply chains
- High-volume trading
- Mass-market applications
- Enterprise blockchain solutions`
            }
          ]
        },
        {
          title: 'Core Components',
          content: 'Chainlink consists of several key components that work together to provide secure and reliable oracle services:',
          image: '/images/lessons/chainlink-architecture.png',
          components: [
            {
              name: 'Chainlink Nodes',
              description: 'Independent operators that retrieve, validate, and deliver data to smart contracts',
              features: [
                'Data sourcing',
                'Data validation',
                'Data delivery',
                'Reputation management',
                'Performance monitoring',
                'Service level agreements'
              ]
            },
            {
              name: 'Chainlink Network',
              description: 'A decentralized network of nodes that work together to provide reliable data',
              features: [
                'Decentralized consensus',
                'Fault tolerance',
                'Data aggregation',
                'Network security',
                'Load balancing',
                'Geographic distribution'
              ]
            },
            {
              name: 'Chainlink Contracts',
              description: 'Smart contracts that manage the oracle service agreements and payments',
              features: [
                'Service agreements',
                'Payment processing',
                'Reputation tracking',
                'Dispute resolution',
                'Automated settlements',
                'Contract upgrades'
              ]
            }
          ]
        },
        {
          title: 'Use Cases',
          content: 'Chainlink enables a wide range of applications across various industries:',
          image: '/images/lessons/chainlink-use-cases.png',
          useCases: [
            {
              category: 'DeFi',
              examples: [
                'Price feeds for DEXs',
                'Lending protocols',
                'Insurance products',
                'Derivatives trading',
                'Yield farming',
                'Automated market makers',
                'Liquidity pools',
                'Stablecoin mechanisms'
              ]
            },
            {
              category: 'Gaming',
              examples: [
                'Random number generation',
                'In-game events',
                'Reward distribution',
                'NFT minting',
                'Tournament results',
                'Player rankings',
                'Item rarity',
                'Cross-game assets'
              ]
            },
            {
              category: 'Insurance',
              examples: [
                'Weather data',
                'Flight delays',
                'Natural disasters',
                'Crop insurance',
                'Health insurance',
                'Auto insurance',
                'Property insurance',
                'Supply chain insurance'
              ]
            },
            {
              category: 'Supply Chain',
              examples: [
                'Tracking shipments',
                'Quality verification',
                'Automated payments',
                'Inventory management',
                'Compliance tracking',
                'Temperature monitoring',
                'Location tracking',
                'Customs clearance'
              ]
            }
          ]
        }
      ]
    },
    'how-it-works': {
      title: 'How Chainlink Works',
      sections: [
        {
          title: 'Architecture Overview',
          content: 'Chainlink\'s architecture is designed to provide secure, reliable, and decentralized oracle services. It consists of three main layers:',
          image: '/images/lessons/chainlink-layers.png',
          layers: [
            {
              name: 'On-chain Layer',
              description: 'Smart contracts that handle the request and response cycle',
              components: [
                'Reputation contracts',
                'Order-matching contracts',
                'Aggregating contracts',
                'Service agreements',
                'Payment contracts',
                'Access control'
              ]
            },
            {
              name: 'Off-chain Layer',
              description: 'External adapters and nodes that connect to data sources',
              components: [
                'External adapters',
                'Node operators',
                'Data processing',
                'Result aggregation',
                'API integration',
                'Data transformation'
              ]
            },
            {
              name: 'Oracle Network',
              description: 'Decentralized network of nodes providing the service',
              components: [
                'Node selection',
                'Data collection',
                'Result verification',
                'Consensus mechanism',
                'Network monitoring',
                'Performance optimization'
              ]
            }
          ]
        },
        {
          title: 'Data Flow Process',
          content: 'The process of getting data from external sources to smart contracts involves several steps:',
          image: '/images/lessons/chainlink-data-flow.png',
          steps: [
            {
              step: 1,
              title: 'Request Initiation',
              description: 'Smart contract initiates a request for external data'
            },
            {
              step: 2,
              title: 'Node Selection',
              description: 'Chainlink network selects appropriate nodes based on reputation and capabilities'
            },
            {
              step: 3,
              title: 'Data Collection',
              description: 'Selected nodes retrieve data from specified sources'
            },
            {
              step: 4,
              title: 'Data Processing',
              description: 'Nodes process and validate the collected data'
            },
            {
              step: 5,
              title: 'Result Aggregation',
              description: 'Results are aggregated and consensus is reached'
            },
            {
              step: 6,
              title: 'On-chain Delivery',
              description: 'Final result is delivered to the requesting smart contract'
            }
          ]
        },
        {
          title: 'Security Mechanisms',
          content: 'Chainlink implements multiple security measures to ensure data reliability:',
          image: '/images/lessons/chainlink-security.png',
          mechanisms: [
            {
              name: 'Decentralization',
              description: 'Multiple independent nodes provide redundancy and prevent single points of failure'
            },
            {
              name: 'Cryptographic Proofs',
              description: 'Nodes provide cryptographic proofs of their data sources and processing'
            },
            {
              name: 'Reputation System',
              description: 'Nodes are rated based on their historical performance and reliability'
            },
            {
              name: 'Economic Incentives',
              description: 'Nodes are financially incentivized to provide accurate data'
            },
            {
              name: 'Data Verification',
              description: 'Multiple data sources are used to verify accuracy'
            },
            {
              name: 'Audit Trails',
              description: 'All operations are recorded on-chain for transparency'
            }
          ]
        }
      ]
    },
    'use-cases': {
      title: 'Use Cases and Applications',
      sections: [
        {
          title: 'DeFi Applications',
          content: 'Chainlink plays a crucial role in the DeFi ecosystem:',
          image: '/images/lessons/chainlink-defi.png',
          applications: [
            {
              name: 'Price Feeds',
              description: 'Secure and reliable price data for various assets',
              features: [
                'Multiple data sources',
                'High-frequency updates',
                'Volume-weighted prices',
                'Market depth data',
                'Historical data',
                'Real-time updates'
              ]
            },
            {
              name: 'Lending Protocols',
              description: 'Automated lending and borrowing systems',
              features: [
                'Collateral valuation',
                'Liquidation triggers',
                'Interest rate calculation',
                'Risk assessment',
                'Credit scoring',
                'Loan management'
              ]
            },
            {
              name: 'Derivatives',
              description: 'Complex financial instruments',
              features: [
                'Price settlement',
                'Expiration triggers',
                'Margin calculations',
                'Position management',
                'Risk management',
                'Market making'
              ]
            }
          ]
        },
        {
          title: 'Enterprise Solutions',
          content: 'Chainlink enables enterprise blockchain applications:',
          image: '/images/lessons/chainlink-enterprise.png',
          solutions: [
            {
              name: 'Supply Chain',
              description: 'End-to-end supply chain tracking',
              features: [
                'Real-time tracking',
                'Quality verification',
                'Automated payments',
                'Compliance monitoring',
                'Inventory management',
                'Logistics optimization'
              ]
            },
            {
              name: 'Insurance',
              description: 'Automated insurance products',
              features: [
                'Claim verification',
                'Payout automation',
                'Risk assessment',
                'Fraud prevention',
                'Policy management',
                'Underwriting'
              ]
            },
            {
              name: 'Gaming',
              description: 'Provably fair gaming systems',
              features: [
                'Random number generation',
                'Tournament management',
                'Reward distribution',
                'Asset verification',
                'Player tracking',
                'Game mechanics'
              ]
            }
          ]
        },
        {
          title: 'Emerging Applications',
          content: 'New and innovative use cases for Chainlink:',
          image: '/images/lessons/chainlink-emerging.png',
          applications: [
            {
              name: 'NFTs',
              description: 'Dynamic NFT applications',
              features: [
                'Real-time updates',
                'External data integration',
                'Dynamic pricing',
                'Cross-chain functionality',
                'Metadata management',
                'Royalty distribution'
              ]
            },
            {
              name: 'DAO Governance',
              description: 'Decentralized autonomous organizations',
              features: [
                'Voting mechanisms',
                'Proposal validation',
                'Treasury management',
                'Member verification',
                'Decision making',
                'Resource allocation'
              ]
            },
            {
              name: 'Cross-chain Bridges',
              description: 'Interoperability solutions',
              features: [
                'Asset transfers',
                'Message passing',
                'State verification',
                'Security monitoring',
                'Transaction routing',
                'Network integration'
              ]
            }
          ]
        }
      ]
    }
  };

  const currentContent = content[path] || content['what-is-chainlink'];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-indigo-900 mb-8">{currentContent.title}</h1>
      
      <div className="space-y-8">
        {currentContent.sections.map((section, index) => (
          <section key={index} className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-4">{section.title}</h2>
            <p className="text-gray-700 mb-4">{section.content}</p>
            
            {section.image && (
              <div className="mb-6">
                <img 
                  src={section.image} 
                  alt={section.title}
                  className="w-full rounded-lg shadow-md"
                />
                <p className="text-sm text-gray-500 mt-2 text-center">Figure {index + 1}: {section.title}</p>
              </div>
            )}
            
            {section.keyPoints && (
              <div className="space-y-6">
                {section.keyPoints.map((point, i) => (
                  <div key={i} className="bg-indigo-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-indigo-700 mb-2">{point.title}</h3>
                    <p className="text-gray-700 whitespace-pre-line">{point.description}</p>
                  </div>
                ))}
              </div>
            )}

            {section.components && (
              <div className="space-y-4">
                {section.components.map((component, i) => (
                  <div key={i} className="bg-indigo-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-indigo-700 mb-2">{component.name}</h3>
                    <p className="text-gray-700 mb-2">{component.description}</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {component.features.map((feature, j) => (
                        <li key={j}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {section.layers && (
              <div className="space-y-4">
                {section.layers.map((layer, i) => (
                  <div key={i} className="bg-indigo-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-indigo-700 mb-2">{layer.name}</h3>
                    <p className="text-gray-700 mb-2">{layer.description}</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {layer.components.map((component, j) => (
                        <li key={j}>{component}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {section.steps && (
              <div className="space-y-4">
                {section.steps.map((step, i) => (
                  <div key={i} className="bg-indigo-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-indigo-700 mb-2">Step {step.step}: {step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                ))}
              </div>
            )}

            {section.mechanisms && (
              <div className="space-y-4">
                {section.mechanisms.map((mechanism, i) => (
                  <div key={i} className="bg-indigo-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-indigo-700 mb-2">{mechanism.name}</h3>
                    <p className="text-gray-700">{mechanism.description}</p>
                  </div>
                ))}
              </div>
            )}

            {section.applications && (
              <div className="space-y-4">
                {section.applications.map((app, i) => (
                  <div key={i} className="bg-indigo-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-indigo-700 mb-2">{app.name}</h3>
                    <p className="text-gray-700 mb-2">{app.description}</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {app.features.map((feature, j) => (
                        <li key={j}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {section.solutions && (
              <div className="space-y-4">
                {section.solutions.map((solution, i) => (
                  <div key={i} className="bg-indigo-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-indigo-700 mb-2">{solution.name}</h3>
                    <p className="text-gray-700 mb-2">{solution.description}</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {solution.features.map((feature, j) => (
                        <li key={j}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {section.useCases && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.useCases.map((useCase, i) => (
                  <div key={i} className="bg-indigo-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-indigo-700 mb-2">{useCase.category}</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {useCase.examples.map((example, j) => (
                        <li key={j}>{example}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default IntroductionLesson; 