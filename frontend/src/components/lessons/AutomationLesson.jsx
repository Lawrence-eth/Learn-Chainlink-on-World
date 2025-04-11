import React from 'react';
import { useParams } from 'react-router-dom';

const AutomationLesson = () => {
  const { '*': path } = useParams();
  
  const content = {
    'overview': {
      title: 'Automation Overview',
      sections: [
        {
          title: 'What is Chainlink Automation?',
          content: 'Chainlink Automation is a decentralized service that enables smart contracts to be automated in a trust-minimized and cost-effective manner. It allows developers to create automated workflows for their smart contracts without relying on centralized services.',
          keyPoints: [
            'Decentralized automation',
            'Trust-minimized execution',
            'Cost-effective',
            'Flexible triggers'
          ]
        },
        {
          title: 'How Automation Works',
          content: 'Chainlink Automation uses a network of nodes to monitor and execute smart contract functions based on predefined conditions.',
          steps: [
            'Condition monitoring',
            'Function execution',
            'Result verification',
            'Transaction submission'
          ]
        }
      ]
    },
    'setup': {
      title: 'Setting Up Automation',
      sections: [
        {
          title: 'Basic Setup',
          content: 'To set up Chainlink Automation for your smart contract:',
          steps: [
            'Register your contract',
            'Define automation conditions',
            'Configure upkeep parameters',
            'Fund your upkeep'
          ],
          code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/interfaces/AutomationCompatibleInterface.sol";

contract AutomationExample is AutomationCompatibleInterface {
    uint256 public counter;
    uint256 public immutable interval;
    uint256 public lastTimeStamp;

    constructor(uint256 updateInterval) {
        interval = updateInterval;
        lastTimeStamp = block.timestamp;
    }

    function checkUpkeep(bytes calldata /* checkData */) external view override returns (bool upkeepNeeded, bytes memory performData) {
        upkeepNeeded = (block.timestamp - lastTimeStamp) > interval;
        performData = "";
    }

    function performUpkeep(bytes calldata /* performData */) external override {
        if ((block.timestamp - lastTimeStamp) > interval) {
            lastTimeStamp = block.timestamp;
            counter = counter + 1;
        }
    }
}`
        }
      ]
    },
    'advanced': {
      title: 'Advanced Features',
      sections: [
        {
          title: 'Advanced Configuration',
          content: 'Chainlink Automation offers several advanced features:',
          points: [
            'Custom gas limits',
            'Multiple conditions',
            'Conditional logic',
            'Gas optimization'
          ]
        },
        {
          title: 'Best Practices',
          content: 'Follow these best practices for optimal automation:',
          points: [
            'Optimize gas usage',
            'Implement proper error handling',
            'Use appropriate intervals',
            'Monitor upkeep status'
          ]
        }
      ]
    }
  };

  const currentContent = content[path] || content['overview'];

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

export default AutomationLesson; 