import React from "react";

const MovieSlider = () => {
  return (
    <section className="py-12" id="">
      <div className="container mx-auto px-4">
        <div className="flex items-baseline justify-between mb-8">
          <div className="text-2xl md:text-3xl font-bold text-white">
            <h2>Title</h2>
            {/* Conditional Rendering */}
            <p className="text-neutral-400 text-sm mt-1">Subtitle</p>
          </div>
          <div className="flex space-x-2">
            <button
              className="p-2 rounded-full bg-neutral-800/70 hover:bg-neutral-700 text-white transition-all"
              aria-label="scroll left"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              className="p-2 rounded-full bg-neutral-800/70 hover:bg-neutral-700 text-white transition-all"
              aria-label="Scroll right"
            >
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Slider */}
        <div className="relative">
          <div className="flex space-x-4 overflow-x-hidden scrollbar-hide pb-4 snap-x">
            {/* Conditional Rendering */}
            <div className="min-w-[200px] md:min-w-[240px] snap-start relative group cursor-pointer">
              <div className="rounded-lg overflow-hidden bg-neutral-800">
                <div className="relative aspect-[2/3]">
                  <img
                    src=""
                    alt=""
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 group-hover:opacity-35"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.062 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.292.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.83-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.3 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.951-.69l1.048-3.292z" />
                          </svg>
                          <span className="text-yellow-400 text-sm font-medium">
                            Movies Vote Average
                          </span>
                        </div>
                        <span className="text-neutral-400 text-sm">
                          Movies Release Date
                        </span>
                      </div>

                      <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md flex items-center justify-center gap-1 transition-all text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A11 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Movies Info */}
              <div className="mt-3">
                <h3 className="text-white text-sm font-medium truncate">
                  Movies Title
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.292.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.83-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.951-.69l1.048-3.292z" />
                    </svg>
                    <span className="text-neutral-400 text-xs">
                      Movies Vote Average
                    </span>
                  </div>
                </div>
                <span className="text-neutral-500 text-xs">
                  Movies Release Date
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default MovieSlider;
