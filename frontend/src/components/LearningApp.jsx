import React from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import IntroductionLesson from './lessons/IntroductionLesson';
import PriceFeedsLesson from './lessons/PriceFeedsLesson';
import VRFLesson from './lessons/VRFLesson';
import AutomationLesson from './lessons/AutomationLesson';
import CCIPLesson from './lessons/CCIPLesson';
import ProofOfReserveLesson from './lessons/ProofOfReserveLesson';
import FunctionsLesson from './lessons/FunctionsLesson';
import DataStreamsLesson from './lessons/DataStreamsLesson';
import CourseCompletion from './lessons/CourseCompletion';

const modules = [
  {
    id: 1,
    title: 'Introduction to Chainlink',
    description: 'Learn the basics of Chainlink and its role in blockchain technology',
    component: IntroductionLesson,
    iconPath: '/images/icons/introduction-icon.png',
    lessons: [
      { title: 'What is Chainlink?', path: '/introduction/what-is-chainlink' },
      { title: 'How Chainlink Works', path: '/introduction/how-it-works' },
      { title: 'Use Cases and Applications', path: '/introduction/use-cases' }
    ]
  },
  {
    id: 2,
    title: 'Chainlink Price Feeds',
    description: 'Master working with Chainlink Price Feeds',
    component: PriceFeedsLesson,
    iconPath: '/images/icons/price-feeds-icon.png',
    lessons: [
      { title: 'Understanding Price Feeds', path: '/price-feeds/understanding' },
      { title: 'Best Practices', path: '/price-feeds/best-practices' }
    ]
  },
  {
    id: 3,
    title: 'Chainlink VRF',
    description: 'Learn about Verifiable Random Functions',
    component: VRFLesson,
    iconPath: '/images/icons/vrf-icon.png',
    lessons: [
      { title: 'Understanding VRF', path: '/vrf/understanding' },
      { title: 'VRF in the Real World', path: '/vrf/real-world' }
    ]
  },
  {
    id: 4,
    title: 'Chainlink Automation',
    description: 'Explore automated smart contract execution',
    component: AutomationLesson,
    iconPath: '/images/icons/automation-icon.png',
    lessons: [
      { title: 'Understanding Automation', path: '/automation/understanding' },
      { title: 'Automation in the Real World', path: '/automation/real-world' }
    ]
  },
  {
    id: 5,
    title: 'Chainlink CCIP',
    description: 'Explore cross-chain interoperability solutions',
    component: CCIPLesson,
    iconPath: '/images/icons/ccip-icon.png',
    lessons: [
      { title: 'Understanding CCIP', path: '/ccip/understanding' },
      { title: 'CCIP in the Real World', path: '/ccip/real-world' }
    ]
  },
  {
    id: 6,
    title: 'Chainlink Proof of Reserve',
    description: 'Learn about verifying asset reserves in DeFi',
    component: ProofOfReserveLesson,
    iconPath: '/images/icons/proof-of-reserve-icon.png',
    lessons: [
      { title: 'The Foundation of Trust in DeFi', path: '/proof-of-reserve/understanding' },
      { title: 'Technical Implementation', path: '/proof-of-reserve/implementation' }
    ]
  },
  {
    id: 7,
    title: 'Chainlink Functions',
    description: 'Learn about connecting smart contracts to any API',
    component: FunctionsLesson,
    iconPath: '/images/icons/functions-icon.png',
    lessons: [
      { title: 'The Power of Web3 Functions', path: '/functions/understanding' },
      { title: 'Technical Implementation', path: '/functions/implementation' }
    ]
  },
  {
    id: 8,
    title: 'Chainlink Data Streams',
    description: 'Explore real-time data streaming capabilities',
    component: DataStreamsLesson,
    iconPath: '/images/icons/data-streams-icon.png',
    lessons: [
      { title: 'Understanding Data Streams', path: '/data-streams/understanding' },
      { title: 'Data Streams in the Real World', path: '/data-streams/real-world' }
    ]
  }
];

const ModuleCard = ({ module }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ 
        type: "spring",
        stiffness: 200,
        damping: 25,
        mass: 1
      }}
      className="bg-[rgb(245,247,252)] rounded-xl shadow-lg p-6 cursor-pointer hover:shadow-xl transition-all active:scale-95 will-change-transform"
      onClick={() => navigate(`/module/${module.id}`)}
    >
      <div className="flex items-center mb-4">
        <img 
          src={module.iconPath} 
          alt={`${module.title} icon`} 
          className="w-10 h-10 object-contain mr-4"
        />
        <h2 className="text-2xl font-semibold text-indigo-800">
          {module.title}
        </h2>
      </div>
      <p className="text-gray-600 mb-4">{module.description}</p>
      <div className="space-y-2">
        {module.lessons.map((lesson, index) => (
          <div
            key={index}
            className="flex items-center text-gray-700"
          >
            <svg
              className="w-5 h-5 text-indigo-500 mr-2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-700">
              {lesson.title}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const ModuleContent = () => {
  const { id } = useParams();
  const module = modules.find(m => m.id === parseInt(id));
  
  if (!module) {
    return <div>Module not found</div>;
  }

  const ModuleComponent = module.component;
  return <ModuleComponent />;
};

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:p-8">
      <header className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-indigo-900 mb-3 sm:mb-4">
          Learn Chainlink
        </h1>
        <p className="text-base sm:text-lg text-gray-600">
          Master the world's leading oracle network
        </p>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {modules.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </div>
    </div>
  );
};

const LearningApp = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/module/:id" element={<ModuleContent />} />
          <Route path="/introduction/*" element={<IntroductionLesson />} />
          <Route path="/price-feeds/*" element={<PriceFeedsLesson />} />
          <Route path="/vrf/*" element={<VRFLesson />} />
          <Route path="/automation/*" element={<AutomationLesson />} />
          <Route path="/ccip/*" element={<CCIPLesson />} />
          <Route path="/proof-of-reserve/*" element={<ProofOfReserveLesson />} />
          <Route path="/functions/*" element={<FunctionsLesson />} />
          <Route path="/data-streams/*" element={<DataStreamsLesson />} />
          <Route path="/course-completion" element={<CourseCompletion />} />
        </Routes>
      </div>
    </Router>
  );
};

export default LearningApp; 