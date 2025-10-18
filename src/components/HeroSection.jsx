import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Movies Backdrop */}
      <div className="absolute inset-0 bg-cover bg-center bg-neutral-900 transition-all duration-700"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/70 to-neutral-900/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center z-10 container mx-auto px-4">
        <div className="max-w-3xl">
          {/* Movies info */}
          <div className="transition-all duration-700">
            <div className="flex items-center space-x-3 mb-4">
              <span className="bg-purple-500/90 text-white text-xs font-semibold px-2 py-1 rounded-sm">
                FEATURED
              </span>

              {/* Conditional Rendering */}
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l.98 3.72a1 1 0 01-1.516 1.118L10 14.347l-3.42 2.372a1 1 0 01-1.516-1.118l.98-3.72a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                </svg>
                <span>Movie Voting Average</span>
              </div>

              {/* Conditional Rendering Close */}
              <span className="text-neutral-400">.</span>
              <span className="text-neutral-300 text-sm">
                Movies Release Date
              </span>

              {/* Conditional Rendering */}
              <>
                <span className="text-neutral-400">.</span>
                <span className="bg-neutral-700 text-neutral-300 text-xs px-11.5 py-0.5">
                  18+
                </span>
              </>
            </div>
            {/* Conditional Rendring close */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Movies Title
            </h1>

            <p className="text-neutral-300 text-base md:text-lg mb-8 line-clamp-3 md:line-clamp-4 max-w-2xl">
              Movie Overview
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm-.445-10.832l3.21 1.832a.5.5 0 010 .868l-3.21 1.832A.5.5 0 019 11.268V8.732a.5.5 0 01.555-.564z"
                    clipRule="evenodd"
                  />
                </svg>
                Watch Now
              </button>
              <button className="bg-neutral-800/80 hover:bg-neutral-700/80 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all border border-neutral-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                Add to Watch List
              </button>
            </div>
          </div>
        </div>
      </div>

{/* Pagination */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-10">
        {/* Conditional Rendring */}
        <button className={`h-1.5 rounded-full transition-all`}></button>

      </div>
    </div>
  );
};

export default HeroSection;
