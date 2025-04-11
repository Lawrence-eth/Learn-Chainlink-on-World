import React from 'react';
import { useParams } from 'react-router-dom';

const VRFLesson = () => {
  const { '*': path } = useParams();
  
  const content = {
    'basics': {
      title: 'VRF Basics',
      sections: [
        {
          title: 'What is Chainlink VRF?',
          content: 'Chainlink VRF (Verifiable Random Function) is a provably fair and verifiable random number generator (RNG) that enables smart contracts to access random values without compromising security or usability.',
          keyPoints: [
            'Provably fair randomness',
            'Cryptographically secure',
            'On-chain verification',
            'Decentralized generation'
          ]
        },
        {
          title: 'How VRF Works',
          content: 'VRF combines block data with the oracle node\'s pre-committed private key to generate both a random number and a cryptographic proof.',
          steps: [
            'Request generation',
            'Private key usage',
            'Proof generation',
            'On-chain verification'
          ]
        }
      ]
    },
    'implementation': {
      title: 'Implementation Guide',
      sections: [
        {
          title: 'Basic Implementation',
          content: 'To implement Chainlink VRF in your smart contract:',
          steps: [
            'Import the VRF interface',
            'Initialize the VRF coordinator',
            'Request randomness',
            'Handle the callback'
          ],
          code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";

contract RandomNumberConsumer is VRFConsumerBase {
    bytes32 internal keyHash;
    uint256 internal fee;
    uint256 public randomResult;

    constructor() 
        VRFConsumerBase(
            0xdD3782915140c8f3b190B5D67eAc6dc5760C46E9, // VRF Coordinator
            0xa36085F69e2889c224210F603D836748e7dC0088  // LINK Token
        )
    {
        keyHash = 0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4;
        fee = 0.1 * 10 ** 18; // 0.1 LINK
    }

    function getRandomNumber() public returns (bytes32 requestId) {
        require(LINK.balanceOf(self) >= fee, "Not enough LINK");
        return requestRandomness(keyHash, fee);
    }

    function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override {
        randomResult = randomness;
    }
}`
        }
      ]
    },
    'security': {
      title: 'Security Considerations',
      sections: [
        {
          title: 'Best Practices',
          content: 'When implementing VRF, consider these security measures:',
          points: [
            'Verify the VRF coordinator address',
            'Implement proper access controls',
            'Handle failed requests',
            'Use appropriate key hashes'
          ]
        },
        {
          title: 'Common Pitfalls',
          content: 'Avoid these common security issues:',
          points: [
            'Insufficient LINK balance',
            'Improper request handling',
            'Missing access controls',
            'Incorrect callback implementation'
          ]
        }
      ]
    }
  };

  const currentContent = content[path] || content['basics'];

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

export default VRFLesson; 