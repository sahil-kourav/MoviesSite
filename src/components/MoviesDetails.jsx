// import React, { useEffect, useState } from "react";
// import { fetchMovieDetails, getImageURL } from "../services/api";

// const MoviesDetails = ({ movieId, onClose }) => {
//   const [movie, setMovie] = useState(null);
//   const [loading, setIsLoading] = useState(true);
//   const [error, setIsError] = useState(null);

//   useEffect(() => {
//     async function getMoviesDetails() {
//       try {
//         setIsLoading(true);
//         const movieData = await fetchMovieDetails(movieId);
//         setMovie(movieData);
//       } catch (error) {
//         console.error("Failed to load movie details, please try again.");
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     if (movieId) {
//       getMoviesDetails();
//     }
//   }, [movieId]);

//   if (movieId) return null;

//   const formatRunTime = (minutes) => {
//     if (!minutes) return "N/A";
//     const hours = Math.floor(minutes / 60);
//     const remainingMinutes = minutes % 60;
//     return `${hours}h ${remainingMinutes}m`;
//   };

//   const formatRating = (rating) => {
//     return (Math.round(rating * 10) / 10).toFixed(1);
//   };

//   const formatRevenue = (revenue) => {
//     if (!revenue) return "N/A";
//     return new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//       notation: "compact",
//       maximumFractionDigits: 1,
//     }).format(revenue);
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/95 backdrop-blur-sm overflow-y-auto">
//       <div className="relative w-full max-w-5xl bg-neutral-800 rounded-lg shadow-xl max-h-[90vh] overflow-y-auto">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-700/80 text-white hover:bg-neutral-600/80 transition-colors"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M6 18L18 6M6 6l12 12"
//             />
//           </svg>
//         </button>

//         {/* Conditional Rendering */}
//         {loading ? (
//           <div className="flex items-center justify-center h-96">
//             {/* Loader */}
//             <div className="animate-pulse">
//               <div className="w-16 h-16 border border-purple-500 border-t-transparent rounded-full animate-spin"></div>
//               <p>Loading Details............</p>
//             </div>
//           </div>
//         ) : error ? (
//           <div className="flex items-center justify-center h-96">
//             <div className="text-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-16 w-16 mx-auto text-red-500"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3.113l-3.732-7-1.333-2.694-1.333-3.464 0l3.34 16c-.77 1.333-1.92 3 1.732 3z"
//                 />
//               </svg>
//               <h2 className="text-xl font-bold mt-4">
//                 Failed to Load Movies Details
//               </h2>
//               <p className="mt-2 text-neutral-400">Error</p>
//               <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-6 rounded-md">
//                 Close
//               </button>
//             </div>
//           </div>
//         ) :  movie ? (
//           <div>
//           {/* Backdrop Header */}
//           <div className="relative h-72 md:h-96 w-full">
//             {
//               movie.backdrop_path ? (
//                 <img src={getImageURL(movie.backdrop_path)} 
//                 alt={movie.title}
//                 className="w-full h-full object-cover" />
//               ) : (
//                 <div className="w-full h-full bg-neutral-700"></div>
//               )}
//               </div>

//             {/* Gradient Overlay */}
//             <div className="absolute insert-0 bg-gradient-to-t from-neutral-800 via-neutral-800/70 to-transparent"></div>

//             <div className="p-6 md:p-8">
//               <div className="md:flex gap-8 -mt-32 md:-mt-48 relative">
//                 {/* Poster */}
//                 <div className="w-32 md:w-64 flex-shrink-0 mb-4 md:mb-0">
//                   <div className="rounded-lg overflow-hidden shadow-lg border border-neutral-700">
//                      {
//               movie.backdrop_path ? (
//                      <img src={getImageURL(movie.backdrop_path)} 
//                      alt={movie.title}
//                      className="w-full h-auto" />
//               ) : (
//                      <div className="w-full aspect-[2/3] bg-neutral-700 flex items-center justify-center">
//                       <span className="text-neutral-500">
//                       No Poster Available
//                       </span>
//                     </div>
//         )}
//                   </div>
//                 </div>

//                 {/* Movies Info */}
//                 <div className="flex-1">
//                   <h1 className="text-3xl md:text-4xl font-bold text-white">
//                    {movie.title}
                   
//                    {movie.release_date && (
//                    <span className="text-neutral-400 font-normal ml-2">
//                     ({movie.release_date.substring(0,4)})
//                    </span>
//                    )}
//                   </h1>

//                   {/* Rating and Other meta */}
//                   <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 text-sm items-center">
//                     {/* Conditional Rendring */}
//                     {movie.vote_average > 0 && (

                   
//                     <div className="flex items-center">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className="h-5 w-5 text-yellow-500"
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                       >
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.959.69h3.452c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.99 8.72c-.783-.57-.38-1.81.588-1.81h3.452a1 1 0 00.959-.69l1.07-3.292z" />
//                       </svg>
//                       <span className="ml-1 font-medium">
//                         {formatRating(movie.vote_average)}
//                       </span>
//                     </div>
//                      )}

//                     {movie.runtime > 0 && (
//                       <span className="text-neutral-300">
//                         {formatRunTime(movie.runtime)}
//                       </span>
//                     )}
//                     {movie.release_date && (
//                       <span className="text-neutral-300">Movie Release Date</span>
//                     )}
//                     {movie.adult && (

//                       <span className="bg-red-500/80 text-white text-xs px-2 py-0.5 rounded">
//                       18+
//                     </span>
//                     )}
//                   </div>

//                   {/* Genres */}
//                   {movie.genres && movie.genres.length > 0 && (
//                   <div className="mt-4 flex flex-wrap gap-2">
//                     {movie.genres.map((genre)=> {
//                       <span
//                       key={genre.id}
//                       className="bg-neutral-700 text-neutral-300 px-3 py-1 rounded-full text-xs">
//                       {genre.name}
//                     </span>
//                     })}
//                   </div>
//                   )}

//                 </div>
//                 </div>

//                 {/* Tagline */}
//                {movie.tagline && (
//                  <p className="mt-4 text-neutral-400 italic">
//                   {movie.tagline}
//                 </p>
//                )}

//                 {/* Overview */}
//                 <div className="mt-6">
//                   <h2 className="text-xl font-semibold text-white mb-2">
//                     Overview
//                   </h2>
//                   <p className="text-neutral-300">
//                     {movie.overview || "No overview available"}
//                   </p>
//                 </div>

//                 {/* Buttons */}
//                 <div className="mt-8 flex flex-wrap gap-3">
//                   <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10 18a8 8 0 100-16 8 8 0 000 16zm-9.555 7.168A1 1 0 008v4a1 1 0 01-1.555.832L3-2a1 1 0 00-1.664L-3-2z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     Watch Now
//                   </button>
//                   <button className="bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M12 4v16m-8-8h16"
//                       />
//                     </svg>
//                     Add to Watchlist
//                   </button>
//                 </div>
//               </div>
//               </div>

//               {/* Additional Details */}
//               <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div>
//                 <h2 className="text-xl font-semibold text-white mb-4">
//                   Details
//                 </h2>
//                 <div className="space-y-4">
//                  {movie.production_companies && 
//                  movie.production_companies.length > 0 && (
//                   <div>
//                     <h3 className="text-neutral-400 text-sm mb-1">
//                       Production Companies
//                     </h3>
//                     <p className="text-white">
//                       {movie.production_companies.map((company)=> company.name).join(", ")}
//                     </p>
//                   </div>
//                    )}

//                  {movie.production_countries && 
//                  movie.production_countries.length > 0 && (
//                   <div>
//                     <h3 className="text-neutral-400 text-sm mb-1">
//                       Production Countries
//                     </h3>
//                     <p className="text-white">
//                       {movie.production_countries.map((country)=> country.name).join(", ")}
//                     </p>
//                   </div>
//                  )}



//                  {movie.spoken_languages && 
//                  movie.spoken_languages.length > 0 && (
//                   <div>
//                     <h3 className="text-neutral-400 text-sm mb-1">
//                       Languages
//                     </h3>                   
//                     <p className="text-white">
//                       {movie.spoken_languages.map((language)=> language.english_name).join(", ")}
//                     </p>
//                   </div>
//                   )}

// {movie.budget > 0 && (
//   <div>
//     <h3 className="text-neutral-400 text-sm mb-1">
//       Budget
//     </h3>
//     <p className="text-white">
//       {formatRevenue(movie.budget)}
//     </p>
//   </div>
// )}

// {movie.revenue > 0 && (
//   <div>
//     <h3 className="text-neutral-400 text-sm mb-1">
//       Revenue
//     </h3>
//     <p className="text-white">
//       {formatRevenue(movie.revenue)}
//     </p>
//   </div>
// )}

// {movie.status && (
//   <div>
//     <h3 className="text-neutral-400 text-sm mb-1">
//       Status
//     </h3>
//     <p className="text-white">{movie.status}</p>
//   </div>
// )}

// {movie.original_language && (
//   <div>
//     <h3 className="text-neutral-400 text-sm mb-1">
//       Original Language
//     </h3>
//     <p className="text-white">
//       {movie.original_language.toUpperCase()}
//     </p>
//   </div>
// )}

//               {/* Right Column */}
//               <div>
//                 <h2 className="text-xl font-semibold text-white mb-4">
//                   Rating
//                 </h2>
//                 {movie.vote_average > 0 ? (

//                 <div className="flex items-center">
//                   <div className="w-24 h-24 rounded-full border-4 border-purple-500 flex items-center justify-center mr-4">
//                     <span className="text-3xl font-bold">
//                       {formatRating(movie.vote_average)}
//                     </span>
//                   </div>
//                   <div>
//                     <p className="text-neutral-300">
//                       From {movie.vote_count.toLocaleString()} votes
//                     </p>
//                     <div className="w-full bg-neutral-700 rounded-full h-2.5 mt-2">
//                       <div className="bg-purple-600 h-2.5 rounded-full"
//                       style={{
//                         width: `${(movie.vote_average / 10) * 100}%`,
//                       }} 
//                       ></div>
//                     </div>
//                   </div>
//                 </div>
//                 ) : (
//                   <p className="text-neutral-400">No Rating Available</p>
//                 )}

//               {/* IMDB and Home Page Link */}
//               <div className="mt-8 space-y-4">
//                 {movie.homepage && (
//                 <a
//                   href={movie.homepage}
//                   target="_blank"
//                   ref="noopener noreferrer" 
//                   className="inline-flex items-center bg-neutral-700 hover:bg-neutral-600 text-white px-4 py-2 rounded transition-colors"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 mr-2"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9h-3m-12 3H3m0 0a3 3 0 003-3m-3 3a3 3 0 013 3m0-6h12a3 3 0 013 3m-3-3m3 3H3m0 0a3 3 0 003-3m-3 3a3 3 0 013 3m0-6h12a3 3 0 013 3m-3-3m3 3H3m0 0a3 3 0 003-3m-3 3a3 3 0 013 3m0-6h12a3 3 0 013 3m-3-3m3 3H3m0 0a3 3 0 003-3m-3 3a3 3 0 013 3m0-6h12a3 3 0 013 3"
//                     />
//                   </svg>
//                   Official Website
//                 </a>
//                 )}

//               {movie.imdb_id && (
//                 <a
//                   href={`https://www.imdb.com/title/${movie.imdb_id}`}
//                   target="_blank"
//                   ref="noopener noreferrer" 
//                   className="inline-flex items-center bg-yellow-700 hover:bg-yellow-600 text-white px-4 py-2 rounded transition-colors"
//                 >
//                   <svg
//                     className="h-5 w-5 mr-2"
//                     viewBox="0 0 24 24"
//                     fill="currentColor"
//                   >
//                     <path d="M14.31 9.588v.005c-.077-.048-.227-.07-.42-.07v4.815c.27.44-.06.5-1.65.062-1.04.095-.405.095-.885V2.866c0-.33-.004-.54-.033-.63-.022-.096-.067-.163-.143-.204Z" />
//                     <path d="M22.416 0H1.62C.742 0 .032.698.032 1.558v20.883c0 .86.71 1.559 1.588 1.559h20.796c.877 0 1.587-.698 1.587-1.559V1.558C24.003.698 23.293 0 22.416 0ZM7.72 13.12c.368-.023.62-.06.767-.046.142-.133-.26.37-1.14.11-.297.194-.48.252-.177.053-.412.08-.697.08H4.868V8.991h3.376c.261 0 .467.027.632.07.163.045.301.113.413.204.11.09.19.203.24.34.052.134.076.313.076.531V.294c0 .253-.038.453-.12.079.15-.21.27-.39.364V.01c.232.1.39.23.48.39.092.154.139.362.139.62V.702zm4.97-.005c0 .424-.11.748-.327.982-.222.233-.488.35-.806.35-.203 0-.356-.035-.48-.103-.121-.068-.217-.155-.297-.26-.071-.11-.133-.215-.156-.343-.023-.126-.04-.345-.04.65V9.42c0-.42-.077-.735-.238-.955-.166-.223-.433-.335-.793-.335.358 0 .624.112.79.342.918-.23.192-.56.288-.988.288h-.5v2.212h14.08V8.989h1.683c.379 0 .69.095.922.28.237.185.35.492.35.918V.656Z" />
//                     <path d="M6.382 10.13c-.039-.086-1.55-.181-.193-.085-.042-.21-.062-.379-.062H5.417v1.723h.392c.172 0 .302-.023.384-.073.086-.047.148-.113.193-2.048-.09.07-.214.07-.366V.468c.15-.028-.274-.074-.36Z" />
//                   </svg>
//                   View on IMDB
//                 </a>
//                  )}
//               </div>
//             </div>
//           </div>
//         </div>
//         </div>
        
//       ) : null}
//     </div>
//   </div>
//   );
// }

// export default MoviesDetails;

















import React, { useEffect, useState } from "react";
import { fetchMovieDetails, getImageURL } from "../services/api";

const MoviesDetails = ({ movieId, onClose }) => {
  const [movie, setMovie] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const [error, setIsError] = useState(null);

  useEffect(() => {
    async function getMoviesDetails() {
      if (!movieId) {
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setIsError(null); // Reset error state
        const movieData = await fetchMovieDetails(movieId);
        if (!movieData) {
          throw new Error("Movie data is empty.");
        }
        setMovie(movieData);
      } catch (err) {
        console.error("Failed to load movie details:", err);
        setIsError(err.message || "Failed to load movie details, please try again."); // Set the error state
      } finally {
        setIsLoading(false);
      }
    }
    getMoviesDetails();
  }, [movieId]); // movieId is a dependency, fetch is always run when it changes

  const formatRunTime = (minutes) => {
    if (!minutes) return "N/A";
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  };

  const formatRating = (rating) => {
    return (Math.round(rating * 10) / 10).toFixed(1);
  };

  const formatRevenue = (revenue) => {
    if (!revenue) return "N/A";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(revenue);
  };

  // The main component render logic starts here
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/95 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-neutral-800 rounded-lg shadow-xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-neutral-700/80 text-white hover:bg-neutral-600/80 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Conditional Rendering: Loading, Error, or Content */}
        {loading ? (
          <div className="flex flex-col items-center justify-center h-96">
            {/* Loader */}
            <div className="animate-pulse">
              <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="mt-4 text-white">Loading Details............</p>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center h-96 text-white">
            <div className="text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mx-auto text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3.113l-3.732-7-1.333-2.694-1.333-3.464 0l3.34 16c-.77 1.333-1.92 3 1.732 3z"
                />
              </svg>
              <h2 className="text-xl font-bold mt-4">
                Failed to Load Movies Details
              </h2>
              <p className="mt-2 text-neutral-400">{error}</p>
              <button
                onClick={onClose} // FIX: Add onClose to close modal
                className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : movie ? (
          <div>
            {/* Backdrop Header */}
            <div className="relative h-72 md:h-96 w-full">
              {movie.backdrop_path ? (
                <img
                  src={getImageURL(movie.backdrop_path)}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-neutral-700"></div>
              )}
            </div>

            {/* Gradient Overlay (FIX: inset-0 typo) */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-800 via-neutral-800/70 to-transparent"></div>

            <div className="p-6 md:p-8">
              <div className="md:flex gap-8 -mt-32 md:-mt-48 relative">
                {/* Poster */}
                <div className="w-32 md:w-64 flex-shrink-0 mb-4 md:mb-0">
                  <div className="rounded-lg overflow-hidden shadow-lg border border-neutral-700">
                    {/* FIX: Use poster_path for the poster, not backdrop_path */}
                    {movie.poster_path ? (
                      <img
                        src={getImageURL(movie.poster_path)}
                        alt={movie.title}
                        className="w-full h-auto"
                      />
                    ) : (
                      <div className="w-full aspect-[2/3] bg-neutral-700 flex items-center justify-center">
                        <span className="text-neutral-500 text-center text-sm p-2">
                          No Poster Available
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Movies Info */}
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold text-white">
                    {movie.title}
                    {movie.release_date && (
                      <span className="text-neutral-400 font-normal ml-2">
                        ({movie.release_date.substring(0, 4)})
                      </span>
                    )}
                  </h1>

                  {/* Rating and Other meta */}
                  <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 text-sm items-center">
                    {/* Conditional Rendring */}
                    {movie.vote_average > 0 && (
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.959.69h3.452c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.99 8.72c-.783-.57-.38-1.81.588-1.81h3.452a1 1 0 00.959-.69l1.07-3.292z" />
                        </svg>
                        <span className="ml-1 font-medium text-white">
                          {formatRating(movie.vote_average)}
                        </span>
                      </div>
                    )}

                    {movie.runtime > 0 && (
                      <span className="text-neutral-300">
                        {formatRunTime(movie.runtime)}
                      </span>
                    )}
                    {movie.release_date && (
                      <span className="text-neutral-300">
                        {/* FIX: Better display for release date */}
                        Released: {new Date(movie.release_date).toLocaleDateString()}
                      </span>
                    )}
                    {movie.adult && (
                      <span className="bg-red-500/80 text-white text-xs px-2 py-0.5 rounded">
                        18+
                      </span>
                    )}
                  </div>

                  {/* Genres */}
                  {movie.genres && movie.genres.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {movie.genres.map((genre) => {
                        // FIX: Must return the JSX element inside map
                        return (
                          <span
                            key={genre.id}
                            className="bg-neutral-700 text-neutral-300 px-3 py-1 rounded-full text-xs"
                          >
                            {genre.name}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* Tagline */}
              {movie.tagline && (
                <p className="mt-4 text-neutral-400 italic">{movie.tagline}</p>
              )}

              {/* Overview */}
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-white mb-2">
                  Overview
                </h2>
                <p className="text-neutral-300">
                  {movie.overview || "No overview available"}
                </p>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                <path
    fillRule="evenodd"
    // Replace the invalid path string below with the correct one
    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
    clipRule="evenodd"
/>
                  </svg>
                  Watch Now
                </button>
                <button className="bg-neutral-700 hover:bg-neutral-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
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
                      d="M12 4v16m-8-8h16"
                    />
                  </svg>
                  Add to Watchlist
                </button>
              </div>
            </div>

            {/* Additional Details */}
            <div className="px-6 pb-6 md:px-8 md:pb-8">
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column: Details */}
                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">
                    Details
                  </h2>
                  <div className="space-y-4">
                    {movie.production_companies &&
                      movie.production_companies.length > 0 && (
                        <div>
                          <h3 className="text-neutral-400 text-sm mb-1">
                            Production Companies
                          </h3>
                          <p className="text-white">
                            {movie.production_companies
                              .map((company) => company.name)
                              .join(", ")}
                          </p>
                        </div>
                      )}

                    {movie.production_countries &&
                      movie.production_countries.length > 0 && (
                        <div>
                          <h3 className="text-neutral-400 text-sm mb-1">
                            Production Countries
                          </h3>
                          <p className="text-white">
                            {movie.production_countries
                              .map((country) => country.name)
                              .join(", ")}
                          </p>
                        </div>
                      )}

                    {movie.spoken_languages &&
                      movie.spoken_languages.length > 0 && (
                        <div>
                          <h3 className="text-neutral-400 text-sm mb-1">
                            Languages
                          </h3>
                          <p className="text-white">
                            {movie.spoken_languages
                              .map((language) => language.english_name)
                              .join(", ")}
                          </p>
                        </div>
                      )}

                    {movie.budget > 0 && (
                      <div>
                        <h3 className="text-neutral-400 text-sm mb-1">
                          Budget
                        </h3>
                        <p className="text-white">
                          {formatRevenue(movie.budget)}
                        </p>
                      </div>
                    )}

                    {movie.revenue > 0 && (
                      <div>
                        <h3 className="text-neutral-400 text-sm mb-1">
                          Revenue
                        </h3>
                        <p className="text-white">
                          {formatRevenue(movie.revenue)}
                        </p>
                      </div>
                    )}

                    {movie.status && (
                      <div>
                        <h3 className="text-neutral-400 text-sm mb-1">
                          Status
                        </h3>
                        <p className="text-white">{movie.status}</p>
                      </div>
                    )}

                    {movie.original_language && (
                      <div>
                        <h3 className="text-neutral-400 text-sm mb-1">
                          Original Language
                        </h3>
                        <p className="text-white">
                          {movie.original_language.toUpperCase()}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column: Rating and Links */}
                <div>
                  <h2 className="text-xl font-semibold text-white mb-4">
                    Rating
                  </h2>
                  {movie.vote_average > 0 ? (
                    <div className="flex items-center">
                      <div className="w-24 h-24 rounded-full border-4 border-purple-500 flex items-center justify-center mr-4">
                        <span className="text-3xl font-bold text-white">
                          {formatRating(movie.vote_average)}
                        </span>
                      </div>
                      <div className="flex-1">
                        <p className="text-neutral-300">
                          From {movie.vote_count.toLocaleString()} votes
                        </p>
                        <div className="w-full bg-neutral-700 rounded-full h-2.5 mt-2">
                          <div
                            className="bg-purple-600 h-2.5 rounded-full"
                            style={{
                              width: `${(movie.vote_average / 10) * 100}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-neutral-400">No Rating Available</p>
                  )}

                  {/* IMDB and Home Page Link */}
                  <div className="mt-8 space-y-4">
                    {movie.homepage && (
                      <a
                        href={movie.homepage}
                        target="_blank"
                        rel="noopener noreferrer" // FIX: Change 'ref' to 'rel'
                        className="inline-flex items-center bg-neutral-700 hover:bg-neutral-600 text-white px-4 py-2 rounded transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9h-3m-12 3H3m0 0a3 3 0 003-3m-3 3a3 3 0 013 3m0-6h12a3 3 0 013 3m-3-3m3 3H3m0 0a3 3 0 003-3m-3 3a3 3 0 013 3m0-6h12a3 3 0 013 3"
                          />
                        </svg>
                        Official Website
                      </a>
                    )}

                    {movie.imdb_id && (
                      <a
                        href={`https://www.imdb.com/title/${movie.imdb_id}`}
                        target="_blank"
                        rel="noopener noreferrer" // FIX: Change 'ref' to 'rel'
                        className="inline-flex items-center bg-yellow-700 hover:bg-yellow-600 text-white px-4 py-2 rounded transition-colors"
                      >
                        <svg
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M14.31 9.588v.005c-.077-.048-.227-.07-.42-.07v4.815c.27.44-.06.5-1.65.062-1.04.095-.405.095-.885V2.866c0-.33-.004-.54-.033-.63-.022-.096-.067-.163-.143-.204Z" />
                          <path d="M22.416 0H1.62C.742 0 .032.698.032 1.558v20.883c0 .86.71 1.559 1.588 1.559h20.796c.877 0 1.587-.698 1.587-1.559V1.558C24.003.698 23.293 0 22.416 0ZM7.72 13.12c.368-.023.62-.06.767-.046.142-.133-.26.37-1.14.11-.297.194-.48.252-.177.053-.412.08-.697.08H4.868V8.991h3.376c.261 0 .467.027.632.07.163.045.301.113.413.204.11.09.19.203.24.34.052.134.076.313.076.531V.294c0 .253-.038.453-.12.079.15-.21.27-.39.364V.01c.232.1.39.23.48.39.092.154.139.362.139.62V.702zm4.97-.005c0 .424-.11.748-.327.982-.222.233-.488.35-.806.35-.203 0-.356-.035-.48-.103-.121-.068-.217-.155-.297-.26-.071-.11-.133-.215-.156-.343-.023-.126-.04-.345-.04.65V9.42c0-.42-.077-.735-.238-.955-.166-.223-.433-.335-.793-.335.358 0 .624.112.79.342.918-.23.192-.56.288-.988.288h-.5v2.212h14.08V8.989h1.683c.379 0 .69.095.922.28.237.185.35.492.35.918V.656Z" />
                          <path d="M6.382 10.13c-.039-.086-1.55-.181-.193-.085-.042-.21-.062-.379-.062H5.417v1.723h.392c.172 0 .302-.023.384-.073.086-.047.148-.113.193-2.048-.09.07-.214.07-.366V.468c.15-.028-.274-.074-.36Z" />
                        </svg>
                        View on IMDB
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MoviesDetails;