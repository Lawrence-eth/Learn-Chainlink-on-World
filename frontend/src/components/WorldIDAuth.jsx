import { IDKitWidget, VerificationLevel, ISuccessResult } from '@worldcoin/idkit';
import { useState } from 'react';

const WorldIDAuth = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(null);

  const handleVerify = async (proof) => {
    try {
      console.log('Sending proof to backend:', proof);
      
      // Send the proof to your backend for verification
      const response = await fetch("/api/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(proof),
      });

      if (!response.ok) {
        throw new Error("Verification failed"); // IDKit will display this error
      }

      const data = await response.json();
      console.log('Verification response:', data);
      
      return true; // This is required by IDKit
    } catch (err) {
      console.error('Verification error:', err);
      throw err; // IDKit will display this error
    }
  };

  const onSuccess = (result) => {
    console.log('Successful verification! Result:', result);
    setIsVerified(true);
    setError(null);
    // You can redirect user or update UI
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-4">
      <div className="text-sm text-gray-600">
        <div>Current domain: {window.location.origin}</div>
      </div>
      
      {error && (
        <div className="text-red-500 p-3 bg-red-50 rounded-lg">
          <div className="font-semibold">Error:</div>
          <div>{error}</div>
        </div>
      )}

      {!isVerified ? (
        <IDKitWidget
          app_id={import.meta.env.VITE_WORLD_ID_APP_ID}
          action={import.meta.env.VITE_WORLD_ID_ACTION}
          signal="login" // This should match what you set in the World ID dashboard
          handleVerify={handleVerify}
          onSuccess={onSuccess}
          verification_level={VerificationLevel.Orb}
          theme="light"
          autoClose
        >
          {({ open }) => (
            <button
              onClick={open}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Verify with World ID
            </button>
          )}
        </IDKitWidget>
      ) : (
        <div className="text-green-500 font-semibold p-3 bg-green-50 rounded-lg">
          Successfully verified with World ID!
        </div>
      )}
    </div>
  );
};

export default WorldIDAuth; 