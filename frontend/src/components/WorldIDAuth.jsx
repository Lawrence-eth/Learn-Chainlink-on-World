import { IDKitWidget } from '@worldcoin/idkit';
import { useState } from 'react';

const WorldIDAuth = () => {
  const [isVerified, setIsVerified] = useState(false);

  const handleVerify = (proof) => {
    // Here you would typically send the proof to your backend for verification
    console.log('Proof received:', proof);
    setIsVerified(true);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {!isVerified ? (
        <IDKitWidget
          app_id="app_staging_123" // Replace with your actual app ID
          action="login"
          signal="user-login"
          onSuccess={handleVerify}
          theme="light"
          autoClose
        >
          {({ open }) => (
            <button
              onClick={open}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Sign in with World ID
            </button>
          )}
        </IDKitWidget>
      ) : (
        <div className="text-green-500 font-semibold">
          Successfully verified with World ID!
        </div>
      )}
    </div>
  );
};

export default WorldIDAuth; 