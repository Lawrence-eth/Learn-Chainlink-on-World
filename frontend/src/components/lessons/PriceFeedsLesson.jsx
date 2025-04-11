import React from 'react';
import { useParams } from 'react-router-dom';

const PriceFeedsLesson = () => {
  const { '*': path } = useParams();
  
  const content = {
    'understanding': {
      title: 'Understanding Price Feeds',
      sections: [
        {
          title: 'What are Chainlink Price Feeds?',
          content: 'Chainlink Price Feeds are decentralized data feeds that provide real-time price data for various assets. They are maintained by a network of independent node operators who source and aggregate price data from multiple sources.',
          keyPoints: [
            'Decentralized price data',
            'Multiple data sources',
            'Real-time updates',
            'High accuracy'
          ]
        },
        {
          title: 'How Price Feeds Work',
          content: 'Price feeds work by aggregating data from multiple sources and using a decentralized network of oracles to ensure data accuracy and reliability.',
          steps: [
            'Data collection from multiple sources',
            'Aggregation by node operators',
            'On-chain verification',
            'Smart contract integration'
          ]
        }
      ]
    },
    'implementation': {
      title: 'Implementing Price Feeds',
      sections: [
        {
          title: 'Basic Implementation',
          content: 'To implement Chainlink Price Feeds in your smart contract, you need to:',
          steps: [
            'Import the Chainlink interface',
            'Initialize the price feed contract',
            'Request price data',
            'Handle the response'
          ],
          code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PriceConsumerV3 {
    AggregatorV3Interface internal priceFeed;

    constructor() {
        priceFeed = AggregatorV3Interface(0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419);
    }

    function getLatestPrice() public view returns (int) {
        (
            uint80 roundID, 
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = priceFeed.latestRoundData();
        return price;
    }
}`
        }
      ]
    },
    'best-practices': {
      title: 'Best Practices',
      sections: [
        {
          title: 'Security Considerations',
          content: 'When using Chainlink Price Feeds, follow these security best practices:',
          points: [
            'Verify the price feed address',
            'Check for stale data',
            'Implement circuit breakers',
            'Use multiple price feeds for critical operations'
          ]
        },
        {
          title: 'Performance Optimization',
          content: 'Optimize your price feed implementation:',
          points: [
            'Cache price data when possible',
            'Use appropriate update intervals',
            'Implement fallback mechanisms',
            'Monitor gas costs'
          ]
        }
      ]
    }
  };

  const currentContent = content[path] || content['understanding'];

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

            {section.steps && (
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h3 className="font-semibold text-indigo-700 mb-2">Steps:</h3>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  {section.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            )}

            {section.code && (
              <div className="mt-4">
                <pre className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{section.code}</code>
                </pre>
              </div>
            )}

            {section.points && (
              <div className="bg-indigo-50 p-4 rounded-lg">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {section.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default PriceFeedsLesson; 