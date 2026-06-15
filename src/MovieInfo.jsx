function MovieInfo({ movie }) {
  const containerStyle = "w-full sm:w-11/12 md:w-10/12 lg:w-3/4 xl:w-2/3 2xl:w-1/2 mx-auto mt-4 sm:mt-6 md:mt-8 p-4 sm:p-6 md:p-8 bg-white rounded-md sm:rounded-lg shadow-sm sm:shadow-md";
  const headerStyle = "flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 md:gap-8";
  const posterPlaceholder = "w-32 sm:w-40 md:w-48 lg:w-56 h-48 sm:h-60 md:h-72 lg:h-84 bg-gray-200 rounded-md flex-shrink-0 flex items-center justify-center text-gray-500 text-sm sm:text-base border border-gray-300";
  const infoWrapper = "flex flex-col items-center sm:items-start text-center sm:text-left mt-2 sm:mt-0 w-full";
  const titleStyle = "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900";
  const metadataContainer = "flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3 mt-3 sm:mt-4";
  const badgeStyle = "px-2 sm:px-3 py-1 bg-gray-100 border border-gray-200 text-gray-700 text-xs sm:text-sm md:text-base rounded-md font-medium";
  const genreText = "text-sm sm:text-base md:text-lg text-gray-600 mt-2 sm:mt-3 font-medium";
  const synopsisWrapper = "mt-4 sm:mt-5 md:mt-6 w-full";
  const synopsisHeading = "text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2";
  const synopsisText = "text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed sm:leading-loose text-justify sm:text-left";
  const actionContainer = "w-full mt-6 sm:mt-8 flex justify-center sm:justify-start";
  const ctaButton = "w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-md sm:rounded-lg transition-all text-base sm:text-lg shadow-md hover:shadow-lg flex items-center justify-center gap-2";

  return (
    <div className={containerStyle}>
      <div className={headerStyle}>

        <div className={posterPlaceholder}>
          <span className="text-center px-2">{movie.title} Poster</span>
        </div>

        <div className={infoWrapper}>
          <h2 className={titleStyle}>{movie.title}</h2>

          <div className={metadataContainer}>
            <span className={badgeStyle}>{movie.rating}</span>
            <span className={badgeStyle}>{movie.runtime}</span>
            <span className={badgeStyle}>{movie.year}</span>
          </div>

          <p className={genreText}>
            {movie.genres}
          </p>

          <div className={synopsisWrapper}>
            <h3 className={synopsisHeading}>Synopsis</h3>
            <p className={synopsisText}>
              {movie.synopsis}
            </p>
          </div>

          <div className={actionContainer}>
            <button className={ctaButton}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Find Theaters & Showtimes
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default MovieInfo;