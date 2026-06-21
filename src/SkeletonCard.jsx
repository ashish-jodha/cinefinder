function SkeletonCard() {
  const containerStyle = "w-full sm:w-11/12 md:w-10/12 lg:w-3/4 xl:w-2/3 2xl:w-1/2 mx-auto mt-4 sm:mt-6 md:mt-8 p-4 sm:p-6 md:p-8 bg-white rounded-md sm:rounded-lg shadow-sm sm:shadow-md animate-pulse border border-gray-100";
  const headerStyle = "flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 md:gap-8";
  const posterSkeleton = "w-32 sm:w-40 md:w-48 lg:w-56 h-48 sm:h-60 md:h-72 lg:h-84 bg-gray-200 rounded-md flex-shrink-0";
  const infoWrapper = "flex flex-col items-center sm:items-start w-full gap-3 sm:gap-4 mt-2 sm:mt-0";
  const titleSkeleton = "h-8 sm:h-10 md:h-12 bg-gray-200 rounded w-3/4 sm:w-2/3";
  const badgesSkeleton = "flex gap-2 sm:gap-3 w-full justify-center sm:justify-start";
  const badgePill = "h-6 sm:h-8 w-12 sm:w-16 bg-gray-200 rounded-md";
  const textLineShort = "h-4 sm:h-5 bg-gray-200 rounded w-1/2";
  const synopsisSkeleton = "w-full mt-4 sm:mt-6 flex flex-col gap-2 sm:gap-3";
  const textLineLong = "h-4 sm:h-5 bg-gray-200 rounded w-full";
  const textLineMedium = "h-4 sm:h-5 bg-gray-200 rounded w-5/6";
  const buttonSkeleton = "w-full sm:w-48 h-12 sm:h-14 bg-gray-200 rounded-md sm:rounded-lg mt-4 sm:mt-6";

  return (
    <div className={containerStyle}>
      <div className={headerStyle}>
        
        <div className={posterSkeleton}></div>

        <div className={infoWrapper}>
          <div className={titleSkeleton}></div>
          
          <div className={badgesSkeleton}>
            <div className={badgePill}></div>
            <div className={badgePill}></div>
            <div className={badgePill}></div>
          </div>

          <div className={textLineShort}></div>
          
          <div className={synopsisSkeleton}>
            <div className={textLineLong}></div>
            <div className={textLineLong}></div>
            <div className={textLineMedium}></div>
          </div>

          <div className={buttonSkeleton}></div>
        </div>

      </div>
    </div>
  );
}

export default SkeletonCard;