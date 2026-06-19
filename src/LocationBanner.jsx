function LocationBanner({ locationStatus, onRequestLocation }) {
  const bannerContainer = "w-full sm:w-11/12 md:w-10/12 lg:w-3/4 xl:w-2/3 2xl:w-1/2 mx-auto mt-4 sm:mt-5 bg-indigo-50 border border-indigo-100 rounded-md sm:rounded-lg p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-sm";
  const textWrapper = "flex items-center gap-2 text-indigo-800";
  const statusText = "text-sm sm:text-base md:text-lg font-medium text-center sm:text-left";
  const actionButton = "w-full sm:w-auto px-4 sm:px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm sm:text-base font-bold rounded-md transition-colors shadow-sm flex items-center justify-center gap-2";
  const errorText = "text-sm sm:text-base md:text-lg font-medium text-red-600 text-center sm:text-left";

  if (locationStatus.error) {
    return (
      <div className={`${bannerContainer} bg-red-50 border-red-100`}>
        <span className={errorText}>{locationStatus.error}</span>
        <button onClick={onRequestLocation} className="text-sm text-red-600 underline font-medium">Try Again</button>
      </div>
    );
  }

  return (
    <div className={bannerContainer}>
      <div className={textWrapper}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
        <span className={statusText}>
          {locationStatus.coords ? "GPS Active: Showing local theaters" : "Enable location for local showtimes"}
        </span>
      </div>

      {!locationStatus.coords && (
        <button onClick={onRequestLocation} disabled={locationStatus.loading} className={actionButton}>
          {locationStatus.loading ? "Locating..." : "Use My Location"}
        </button>
      )}
    </div>
  );
}

export default LocationBanner;