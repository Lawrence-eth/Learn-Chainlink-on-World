import { IDKitWidget, VerificationLevel, ISuccessResult } from '@worldcoin/idkit';
import { useState } from 'react';

const WorldIDAuth = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(null);
  const [verificationResult, setVerificationResult] = useState(null);

  const handleVerify = async (proof) => {
    try {
      console.log('Full World ID proof received:', {
        merkle_root: proof.merkle_root,
        nullifier_hash: proof.nullifier_hash,
        proof: proof.proof,
        credential_type: proof.credential_type,
        signal: import.meta.env.VITE_WORLD_ID_SIGNAL,
      });

      // Optional: Verify the proof on your backend
      // const response = await fetch('/api/verify', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     merkle_root: proof.merkle_root,
      //     nullifier_hash: proof.nullifier_hash,
      //     proof: proof.proof,
      //     credential_type: proof.credential_type,
      //     signal: import.meta.env.VITE_WORLD_ID_SIGNAL,
      //   }),
      // });
      // const result = await response.json();
      // setVerificationResult(result);

      setIsVerified(true);
      setError(null);
    } catch (err) {
      console.error('Verification error details:', err);
      setError(err.message || 'Verification failed. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="mb-4 text-sm text-gray-600">
        Current domain: {window.location.origin}
      </div>
      
      {error && (
        <div className="text-red-500 mb-4 p-3 bg-red-50 rounded-lg">
          <div className="font-semibold">Error:</div>
          <div>{error}</div>
        </div>
      )}

      {verificationResult && (
        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <pre className="text-xs">{JSON.stringify(verificationResult, null, 2)}</pre>
        </div>
      )}

      {!isVerified ? (
        <IDKitWidget
          app_id={import.meta.env.VITE_WORLD_ID_APP_ID}
          action={import.meta.env.VITE_WORLD_ID_ACTION}
          signal={import.meta.env.VITE_WORLD_ID_SIGNAL}
          verification_level={VerificationLevel.Orb}
          onSuccess={handleVerify}
          onError={(error) => {
            console.error('World ID widget error:', error);
            setError(`Authentication failed: ${error.message || 'Unknown error'}`);
          }}
          theme="light"
          autoClose
        >
          {({ open }) => (
            <button
              onClick={() => {
                console.log('Opening World ID widget with config:', {
                  app_id: import.meta.env.VITE_WORLD_ID_APP_ID,
                  action: import.meta.env.VITE_WORLD_ID_ACTION,
                  signal: import.meta.env.VITE_WORLD_ID_SIGNAL,
                });
                open();
              }}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Sign in with World ID
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