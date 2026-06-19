import { useState } from 'react';
import SearchBar from './SearchBar';
import LocationBanner from './LocationBanner';
import MovieInfo from './MovieInfo';
import TheaterList from './TheaterList';

function MovieDashboard() {
  const dashboardContainer = "w-full flex flex-col gap-4 sm:gap-6 md:gap-8";
  const statusText = "text-center text-base sm:text-lg md:text-xl font-medium text-gray-600 mt-6 sm:mt-8";
  const errorText = "text-center text-base sm:text-lg md:text-xl font-bold text-red-500 mt-6 sm:mt-8";

  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [locationStatus, setLocationStatus] = useState({
    loading: false,
    coords: null,
    error: null
  });

  const mockTheaters = [
    { name: "Regal Cinema Downtown", distance: "1.2 miles", showtimes: ["12:30 PM", "3:45 PM", "7:00 PM"] },
    { name: "AMC Town Centre 15", distance: "3.4 miles", showtimes: ["1:15 PM", "4:30 PM", "8:00 PM"] }
  ];

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setLocationStatus({ loading: false, coords: null, error: "Your browser doesn't support geolocation." });
      return;
    }

    setLocationStatus({ loading: true, coords: null, error: null });

    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Latitude:", position.coords.latitude, "Longitude:", position.coords.longitude);
        setLocationStatus({
          loading: false,
          coords: { lat: position.coords.latitude, lng: position.coords.longitude },
          error: null
        });
      },
      (err) => {
        setLocationStatus({ loading: false, coords: null, error: "Location access denied or unavailable." });
      }
    );
  };

  const handleSearch = async (searchTerm) => {
    if (!searchTerm.trim()) return;
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

  return (
    <div className={dashboardContainer}>
      <SearchBar handleSearch={handleSearch} />
      
      <LocationBanner 
        locationStatus={locationStatus} 
        onRequestLocation={handleGetLocation} 
      />
      
      {isLoading && <p className={statusText}>Searching global database...</p>}
      {error && !isLoading && <p className={errorText}>{error}</p>}
      
      {movieData && !isLoading && (
        <>
          <MovieInfo movie={movieData} />
          {locationStatus.coords ? (
            <TheaterList theaters={mockTheaters} />
          ) : (
            <p className="text-center text-gray-500 mt-6 italic">Share your location to see nearby showtimes.</p>
          )}
        </>
      )}
    </div>
  );
}

export default MovieDashboard;