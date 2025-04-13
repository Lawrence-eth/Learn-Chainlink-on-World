import { IDKitWidget, VerificationLevel, ISuccessResult } from '@worldcoin/idkit';
import { useState, useEffect } from 'react';

const WorldIDAuth = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(null);

  // Debug environment variables on mount
  useEffect(() => {
    const config = {
      app_id: import.meta.env.VITE_WORLD_ID_APP_ID,
      action: import.meta.env.VITE_WORLD_ID_ACTION,
      signal: import.meta.env.VITE_WORLD_ID_SIGNAL
    };
    console.log('World ID Config:', config);
  }, []);

  const onSuccess = (result) => {
    try {
      console.log('Verification Result:', result);
      setIsVerified(true);
      setError(null);
    } catch (err) {
      console.error('Success callback error:', err);
      setError(err.message);
    }
  };

  const onError = (error) => {
    console.error('World ID Error:', error);
    setError(error.message || 'Verification failed');
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 space-y-4">
      <div className="text-sm text-gray-600 space-y-1">
        <div>Domain: {window.location.origin}</div>
        <div>App ID: {import.meta.env.VITE_WORLD_ID_APP_ID}</div>
        <div>Action: {import.meta.env.VITE_WORLD_ID_ACTION}</div>
      </div>
      
      {error && (
        <div className="text-red-500 p-3 bg-red-50 rounded-lg max-w-md">
          <div className="font-semibold">Error:</div>
          <div>{error}</div>
        </div>
      )}

      {!isVerified ? (
        <IDKitWidget
          app_id={import.meta.env.VITE_WORLD_ID_APP_ID || 'app_6efcf3754383176ad7a70ff3597d183a'}
          action="login"
          signal="my_signal"
          onSuccess={onSuccess}
          onError={onError}
          verification_level={VerificationLevel.Device}
          theme="light"
          walletConnectProjectId="none"
          enableTelemetry
        >
          {({ open }) => (
            <button
              onClick={() => {
                console.log('Opening World ID widget...');
                open();
              }}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              Verify with World ID
            </button>
          )}
        </IDKitWidget>
      ) : (
        <div className="text-green-500 font-semibold p-4 bg-green-50 rounded-lg max-w-md text-center">
          ✅ Successfully verified with World ID!
        </div>
      )}
    </div>
  );
};

export default WorldIDAuth; 