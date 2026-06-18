function TheaterList({ theaters }) {
  const listContainer = "w-full sm:w-11/12 md:w-10/12 lg:w-3/4 xl:w-2/3 2xl:w-1/2 mx-auto mt-6 sm:mt-8 md:mt-10 flex flex-col gap-4 sm:gap-6 md:gap-8";
  const headingStyle = "text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 px-1";
  const theaterCard = "w-full bg-white rounded-md sm:rounded-lg shadow-sm sm:shadow-md p-4 sm:p-6 md:p-8 border border-gray-100 flex flex-col gap-3 sm:gap-4";
  const infoRow = "flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-0 border-b border-gray-100 pb-2 sm:pb-3";
  const nameStyle = "text-base sm:text-lg md:text-xl font-bold text-gray-800";
  const distanceStyle = "text-xs sm:text-sm md:text-base text-gray-500 font-medium";
  const timeGrid = "flex flex-wrap gap-2 sm:gap-3 mt-1 sm:mt-2";
  const timePill = "px-3 sm:px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-semibold text-xs sm:text-sm md:text-base rounded-md border border-indigo-100 transition-colors text-center cursor-pointer";

  if (!theaters || theaters.length === 0) {
    return null;
  }

  return (
    <div className={listContainer}>
      <h3 className={headingStyle}>Nearby Showtimes</h3>
      
      {theaters.map((theater, idx) => (
        <div key={idx} className={theaterCard}>
          
          <div className={infoRow}>
            <h4 className={nameStyle}>{theater.name}</h4>
            <span className={distanceStyle}>{theater.distance} away</span>
          </div>

          <div className={timeGrid}>
            {theater.showtimes.map((time, timeIdx) => (
              <button key={timeIdx} className={timePill}>
                {time}
              </button>
            ))}
          </div>

        </div>
      ))}
    </div>
  );
}

export default TheaterList;