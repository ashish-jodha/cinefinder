import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import LocationBanner from './LocationBanner';
import DateSelector from './DateSelector';
import MovieInfo from './MovieInfo';
import TheaterList from './TheaterList';

function MovieDashboard() {
  const dashboardContainer = "w-full flex flex-col gap-4 sm:gap-6 md:gap-8";
  const statusText = "text-center text-base sm:text-lg md:text-xl font-medium text-gray-600 mt-6 sm:mt-8";
  const errorText = "text-center text-base sm:text-lg md:text-xl font-bold text-red-500 mt-6 sm:mt-8";

  const { query } = useParams(); 
  const navigate = useNavigate();

  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userCity, setUserCity] = useState(null);
  const [locationStatus, setLocationStatus] = useState({ loading: false, coords: null, error: null });
  const [activeDate, setActiveDate] = useState("Today");

  const showtimesByDate = {
    Today: [
      { name: "Regal Cinema Downtown", distance: "1.2 miles", showtimes: ["12:30 PM", "3:45 PM", "7:00 PM"] },
      { name: "AMC Town Centre 15", distance: "3.4 miles", showtimes: ["1:15 PM", "4:30 PM", "8:00 PM"] }
    ],
    Tomorrow: [
      { name: "Regal Cinema Downtown", distance: "1.2 miles", showtimes: ["11:00 AM", "2:15 PM", "6:30 PM", "9:45 PM"] },
      { name: "AMC Town Centre 15", distance: "3.4 miles", showtimes: ["12:00 PM", "3:15 PM", "7:30 PM"] }
    ],
    Weekend: [
      { name: "Regal Cinema Downtown", distance: "1.2 miles", showtimes: ["10:30 AM", "1:45 PM", "5:00 PM", "8:15 PM"] },
      { name: "AMC Town Centre 15", distance: "3.4 miles", showtimes: ["11:15 AM", "2:30 PM", "6:00 PM", "9:30 PM"] },
      { name: "Cinemark Majestic Cinema", distance: "5.8 miles", showtimes: ["1:00 PM", "4:15 PM", "7:30 PM", "10:45 PM"] }
    ]
  };

  useEffect(() => {
    if (query) {
      executeSearch(query);
    }
  }, [query]);

  const executeSearch = async (searchTerm) => {
    setIsLoading(true);
    setError(null);
    try {
      const API_KEY = "79c8609b"; 
      const response = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(searchTerm)}&apikey=${API_KEY}`);
      const data = await response.json();

      if (data.Response === "True") {
        setMovieData({
          title: data.Title, rating: data.Rated, runtime: data.Runtime,
          year: data.Year, genres: data.Genre, synopsis: data.Plot, poster: data.Poster
        });
      } else {
        setMovieData(null);
        setError(`We couldn't find anything for "${searchTerm}". Check the spelling!`);
      }
    } catch (err) {
      setMovieData(null);
      setError("Something went wrong connecting to the movie database.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewSearch = (newTerm) => {
    if (newTerm.trim()) {
      navigate(`/search/${encodeURIComponent(newTerm)}`);
    }
  };

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus({ loading: false, coords: null, error: "Browser doesn't support geolocation." });
      return;
    }
    setLocationStatus({ loading: true, coords: null, error: null });
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setLocationStatus({ loading: false, coords: { lat, lng }, error: null });
        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
          const data = await response.json();
          const exactCity = data.address.city || data.address.town || data.address.village || data.address.county;
          if (exactCity) setUserCity(exactCity);
        } catch (err) {}
      },
      (err) => {
        setLocationStatus({ loading: false, coords: null, error: "Location access denied." });
      }
    );
  };

  return (
    <div className={dashboardContainer}>
      <SearchBar handleSearch={handleNewSearch} />
      <LocationBanner locationStatus={locationStatus} onRequestLocation={handleGetLocation} />
      
      {isLoading && <p className={statusText}>Searching global database...</p>}
      {error && !isLoading && <p className={errorText}>{error}</p>}
      
      {movieData && !isLoading && (
        <>
          <MovieInfo movie={movieData} />
          <DateSelector activeDate={activeDate} setActiveDate={setActiveDate} />
          
          {locationStatus.coords ? (
            <TheaterList theaters={showtimesByDate[activeDate]} userCity={userCity} />
          ) : (
            <p className="text-center text-gray-500 mt-6 italic">Share your location to see nearby showtimes.</p>
          )}
        </>
      )}
    </div>
  );
}

export default MovieDashboard;