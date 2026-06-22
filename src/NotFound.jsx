import { Link } from 'react-router-dom';

function NotFound() {
  const containerStyle = "w-full flex flex-col items-center justify-center min-h-[50vh] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 text-center gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-10";
  const errorNumber = "text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-[7rem] font-black text-indigo-100 tracking-tight leading-none";
  const textWrapper = "flex flex-col gap-1 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-3 2xl:gap-4 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto";
  const headingStyle = "text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight";
  const subHeading = "text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl text-gray-500 font-medium leading-relaxed";
  const actionButton = "inline-flex items-center justify-center gap-2 px-4 sm:px-5 md:px-6 lg:px-6 xl:px-7 2xl:px-8 py-2 sm:py-2.5 md:py-3 lg:py-3 xl:py-3.5 2xl:py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm md:text-base lg:text-base xl:text-lg 2xl:text-xl rounded-md sm:rounded-md md:rounded-lg lg:rounded-lg xl:rounded-lg 2xl:rounded-xl shadow-sm transition-colors mt-2 sm:mt-3";

  return (
    <div className={containerStyle}>
      <h1 className={errorNumber}>404</h1>
      
      <div className={textWrapper}>
        <h2 className={headingStyle}>Page Not Found</h2>
        <p className={subHeading}>The page you are looking for doesn't exist or has been moved.</p>
      </div>

      <Link to="/" className={actionButton}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-5 lg:w-5 xl:h-5 xl:w-5 2xl:h-6 2xl:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        Return to Home
      </Link>
    </div>
  );
}

export default NotFound;