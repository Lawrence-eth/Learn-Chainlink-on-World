import { IDKitWidget } from '@worldcoin/idkit';
import { useState } from 'react';

const WorldIDAuth = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(null);

  const handleVerify = (proof) => {
    try {
      // Here you would typically send the proof to your backend for verification
      console.log('Proof received:', proof);
      setIsVerified(true);
      setError(null);
    } catch (err) {
      setError('Verification failed. Please try again.');
      console.error('Verification error:', err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {error && (
        <div className="text-red-500 mb-4">
          {error}
        </div>
      )}
      {!isVerified ? (
        <IDKitWidget
          app_id={import.meta.env.VITE_WORLD_ID_APP_ID}
          action={import.meta.env.VITE_WORLD_ID_ACTION}
          signal={import.meta.env.VITE_WORLD_ID_SIGNAL}
          onSuccess={handleVerify}
          onError={(error) => {
            console.error('World ID error:', error);
            setError('Authentication failed. Please try again.');
          }}
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