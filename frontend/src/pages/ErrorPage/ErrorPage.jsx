import React from 'react';

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-red-100 text-center">
      <h1 className="text-3xl font-bold text-red-600">Oops! Something went wrong.</h1>
      <p className="mt-4 text-lg text-red-500">
        There was an issue fetching the data from the CoinGecko API.
      </p>
      <p className="mt-2 text-gray-600 text-sm">
        Note: The CoinGecko API has a rate limiter, which may cause delays or prevent data from loading.
      </p>
    </div>
  );
}

export default ErrorPage;
