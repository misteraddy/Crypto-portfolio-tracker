import React from 'react';

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-16 h-16 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
      <p className="mt-4 text-black text-lg font-semibold">Loading...</p>
      <p className="mt-2 text-gray-500 text-sm">
        Note: The CoinGecko API has a rate limiter, so the result may take a moment to load.
      </p>
    </div>
  );
}

export default Loader;
