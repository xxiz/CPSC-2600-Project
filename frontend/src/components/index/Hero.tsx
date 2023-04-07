import React from "react";

function Hero() {
  return (
    <div className="max-w-2xl py-24 mx-auto text-center sm:py-32">
      <h1 className="text-3xl font-extrabold text-gray-800 sm:text-5xl">
        Never Miss A Deal!
        <strong className="block font-extrabold text-red-600">
          Get The Deals You Want!
        </strong>
      </h1>

      <p className="mt-4 sm:text-xl sm:leading-relaxed">
        Tired of spending hours constantly checking RedFlagDeals for deals?
        We'll deliver only the best deals!
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <a
          className="block w-full px-12 py-3 font-medium text-white bg-red-600 rounded shadow text-md hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="/deals"
        >
          Trending Deals
        </a>

        <a
          className="block w-full px-12 py-3 font-medium text-red-600 rounded shadow text-md hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
          href="/dashboard"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

export default Hero;
