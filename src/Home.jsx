import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

function Home() {
  const containerStyle = "w-full flex flex-col items-center justify-center min-h-[60vh] gap-6 sm:gap-8 md:gap-10 px-4";
  const textWrapper = "text-center flex flex-col gap-3 sm:gap-4";
  const headingStyle = "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-900 to-indigo-600 drop-shadow-sm";
  const subHeading = "text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-medium max-w-2xl mx-auto";
  const searchWrapper = "w-full max-w-3xl mx-auto";

  const navigate = useNavigate();

  const handleInitialSearch = (searchTerm) => {
    if (searchTerm.trim()) {
      navigate(`/search/${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className={containerStyle}>
      <div className={textWrapper}>
        <h2 className={headingStyle}>Find Your Next Movie</h2>
        <p className={subHeading}>Instant showtimes, global reviews, and interactive maps in a single click.</p>
      </div>
      
      <div className={searchWrapper}>
        <SearchBar handleSearch={handleInitialSearch} />
      </div>
    </div>
  );
}

export default Home;