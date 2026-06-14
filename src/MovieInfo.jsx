function MovieInfo() {
  const containerStyle = "w-full sm:w-11/12 md:w-10/12 lg:w-3/4 xl:w-2/3 2xl:w-1/2 mx-auto mt-4 sm:mt-6 md:mt-8 p-4 sm:p-6 md:p-8 bg-white rounded-md sm:rounded-lg shadow-sm sm:shadow-md";
  const headerStyle = "flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 md:gap-8";
  const posterPlaceholder = "w-32 sm:w-40 md:w-48 lg:w-56 h-48 sm:h-60 md:h-72 lg:h-84 bg-gray-200 rounded-md flex-shrink-0 flex items-center justify-center text-gray-500 text-sm sm:text-base border border-gray-300";
  const titleStyle = "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 text-center sm:text-left mt-2 sm:mt-0";

  return (
    <div className={containerStyle}>
      <div className={headerStyle}>
        
        <div className={posterPlaceholder}>
          <span>Poster Image</span>
        </div>

        <div>
          <h2 className={titleStyle}>Deadpool & Wolverine</h2>
        </div>

      </div>
    </div>
  );
}

export default MovieInfo;