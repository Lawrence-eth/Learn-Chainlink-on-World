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
          keyPoints: [
            'Decentralized oracle network',
            'Secure data delivery',
            'Multiple data sources',
            'Tamper-proof data',
            'Smart contract connectivity'
          ]
        },
        {
          title: 'Core Components',
          content: 'Chainlink consists of several key components that work together to provide secure and reliable oracle services:',
          components: [
            {
              name: 'Chainlink Nodes',
              description: 'Independent operators that retrieve, validate, and deliver data to smart contracts',
              features: [
                'Data sourcing',
                'Data validation',
                'Data delivery',
                'Reputation management'
              ]
            },
            {
              name: 'Chainlink Network',
              description: 'A decentralized network of nodes that work together to provide reliable data',
              features: [
                'Decentralized consensus',
                'Fault tolerance',
                'Data aggregation',
                'Network security'
              ]
            },
            {
              name: 'Chainlink Contracts',
              description: 'Smart contracts that manage the oracle service agreements and payments',
              features: [
                'Service agreements',
                'Payment processing',
                'Reputation tracking',
                'Dispute resolution'
              ]
            }
          ]
        },
        {
          title: 'Use Cases',
          content: 'Chainlink enables a wide range of applications across various industries:',
          useCases: [
            {
              category: 'DeFi',
              examples: [
                'Price feeds for DEXs',
                'Lending protocols',
                'Insurance products',
                'Derivatives trading',
                'Yield farming'
              ]
            },
            {
              category: 'Gaming',
              examples: [
                'Random number generation',
                'In-game events',
                'Reward distribution',
                'NFT minting',
                'Tournament results'
              ]
            },
            {
              category: 'Insurance',
              examples: [
                'Weather data',
                'Flight delays',
                'Natural disasters',
                'Crop insurance',
                'Health insurance'
              ]
            },
            {
              category: 'Supply Chain',
              examples: [
                'Tracking shipments',
                'Quality verification',
                'Automated payments',
                'Inventory management',
                'Compliance tracking'
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
          layers: [
            {
              name: 'On-chain Layer',
              description: 'Smart contracts that handle the request and response cycle',
              components: [
                'Reputation contracts',
                'Order-matching contracts',
                'Aggregating contracts',
                'Service agreements'
              ]
            },
            {
              name: 'Off-chain Layer',
              description: 'External adapters and nodes that connect to data sources',
              components: [
                'External adapters',
                'Node operators',
                'Data processing',
                'Result aggregation'
              ]
            },
            {
              name: 'Oracle Network',
              description: 'Decentralized network of nodes providing the service',
              components: [
                'Node selection',
                'Data collection',
                'Result verification',
                'Consensus mechanism'
              ]
            }
          ]
        },
        {
          title: 'Data Flow Process',
          content: 'The process of getting data from external sources to smart contracts involves several steps:',
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
          applications: [
            {
              name: 'Price Feeds',
              description: 'Secure and reliable price data for various assets',
              features: [
                'Multiple data sources',
                'High-frequency updates',
                'Volume-weighted prices',
                'Market depth data'
              ]
            },
            {
              name: 'Lending Protocols',
              description: 'Automated lending and borrowing systems',
              features: [
                'Collateral valuation',
                'Liquidation triggers',
                'Interest rate calculation',
                'Risk assessment'
              ]
            },
            {
              name: 'Derivatives',
              description: 'Complex financial instruments',
              features: [
                'Price settlement',
                'Expiration triggers',
                'Margin calculations',
                'Position management'
              ]
            }
          ]
        },
        {
          title: 'Enterprise Solutions',
          content: 'Chainlink enables enterprise blockchain applications:',
          solutions: [
            {
              name: 'Supply Chain',
              description: 'End-to-end supply chain tracking',
              features: [
                'Real-time tracking',
                'Quality verification',
                'Automated payments',
                'Compliance monitoring'
              ]
            },
            {
              name: 'Insurance',
              description: 'Automated insurance products',
              features: [
                'Claim verification',
                'Payout automation',
                'Risk assessment',
                'Fraud prevention'
              ]
            },
            {
              name: 'Gaming',
              description: 'Provably fair gaming systems',
              features: [
                'Random number generation',
                'Tournament management',
                'Reward distribution',
                'Asset verification'
              ]
            }
          ]
        },
        {
          title: 'Emerging Applications',
          content: 'New and innovative use cases for Chainlink:',
          applications: [
            {
              name: 'NFTs',
              description: 'Dynamic NFT applications',
              features: [
                'Real-time updates',
                'External data integration',
                'Dynamic pricing',
                'Cross-chain functionality'
              ]
            },
            {
              name: 'DAO Governance',
              description: 'Decentralized autonomous organizations',
              features: [
                'Voting mechanisms',
                'Proposal validation',
                'Treasury management',
                'Member verification'
              ]
            },
            {
              name: 'Cross-chain Bridges',
              description: 'Interoperability solutions',
              features: [
                'Asset transfers',
                'Message passing',
                'State verification',
                'Security monitoring'
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
            
            {section.keyPoints && (
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h3 className="font-semibold text-indigo-700 mb-2">Key Points:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {section.keyPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
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