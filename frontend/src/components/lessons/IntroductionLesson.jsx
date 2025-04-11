import React from 'react';

const IntroductionLesson = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-indigo-900 mb-8">Introduction to Chainlink</h1>
      
      <div className="space-y-8">
        <section className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">What is Chainlink?</h2>
          <p className="text-gray-700 mb-4">
            Chainlink is a decentralized oracle network that enables smart contracts to securely interact with real-world data and external APIs. It acts as a bridge between blockchain networks and the outside world.
          </p>
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="font-semibold text-indigo-700 mb-2">Key Features:</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Decentralized oracle network</li>
              <li>Secure data delivery</li>
              <li>Multiple data sources</li>
              <li>Tamper-proof data</li>
            </ul>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">How Chainlink Works</h2>
          <p className="text-gray-700 mb-4">
            Chainlink's architecture consists of three main components:
          </p>
          <div className="space-y-4">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-700">1. On-chain Components</h3>
              <p className="text-gray-700 mt-2">
                Smart contracts that handle the request and response cycle, including:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 text-gray-700">
                <li>Reputation contracts</li>
                <li>Order-matching contracts</li>
                <li>Aggregating contracts</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-700">2. Off-chain Components</h3>
              <p className="text-gray-700 mt-2">
                External adapters and nodes that:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 text-gray-700">
                <li>Connect to external data sources</li>
                <li>Process and format data</li>
                <li>Submit data to the blockchain</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-700">3. Oracle Networks</h3>
              <p className="text-gray-700 mt-2">
                Decentralized networks of nodes that:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 text-gray-700">
                <li>Retrieve and validate data</li>
                <li>Ensure data accuracy</li>
                <li>Provide redundancy</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-4">Use Cases and Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-700 mb-2">DeFi Applications</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Price feeds for DEXs</li>
                <li>Lending protocols</li>
                <li>Insurance products</li>
              </ul>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-700 mb-2">Gaming</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Random number generation</li>
                <li>In-game events</li>
                <li>Reward distribution</li>
              </ul>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-700 mb-2">Insurance</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Weather data</li>
                <li>Flight delays</li>
                <li>Natural disasters</li>
              </ul>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-semibold text-indigo-700 mb-2">Supply Chain</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Tracking shipments</li>
                <li>Quality verification</li>
                <li>Automated payments</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IntroductionLesson; 