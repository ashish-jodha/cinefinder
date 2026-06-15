function SearchBar() {
  const containerStyle = "w-full sm:w-11/12 md:w-10/12 lg:w-3/4 xl:w-2/3 2xl:w-1/2 mx-auto mt-2 sm:mt-4 md:mt-6";
  const formStyle = "relative flex items-center w-full h-12 sm:h-14 md:h-16 bg-white rounded-md sm:rounded-lg shadow-sm border border-gray-200 overflow-hidden focus-within:shadow-md focus-within:border-indigo-400 transition-all";
  const iconWrapper = "grid place-items-center h-full w-10 sm:w-12 md:w-14 text-gray-400";
  const inputStyle = "peer h-full w-full outline-none text-sm sm:text-base md:text-lg text-gray-700 pr-2 bg-transparent placeholder-gray-400";
  const buttonStyle = "h-full px-4 sm:px-6 md:px-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm sm:text-base md:text-lg transition-colors flex items-center justify-center";

  return (
    <div className={containerStyle}>
      <form className={formStyle} onSubmit={(e) => e.preventDefault()}>
        
        <div className={iconWrapper}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <input
          className={inputStyle}
          type="text"
          id="search"
          placeholder="Search for a movie..."
          autoComplete="off"
        />

        <button type="submit" className={buttonStyle}>
          Search
        </button>

      </form>
    </div>
  );
}

export default SearchBar;