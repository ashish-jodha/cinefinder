import { useState } from 'react';
import SearchBar from './SearchBar';
import MovieInfo from './MovieInfo';
import TheaterList from './TheaterList';

function MovieDashboard() {
  const dashboardContainer = "w-full flex flex-col gap-4 sm:gap-6 md:gap-8";
  const statusText = "text-center text-base sm:text-lg md:text-xl font-medium text-gray-600 mt-6 sm:mt-8";
  const errorText = "text-center text-base sm:text-lg md:text-xl font-bold text-red-500 mt-6 sm:mt-8";

  const [movieData, setMovieData] = useState({
    title: "Interstellar",
    rating: "PG-13",
    runtime: "169 min",
    year: "2014",
    genres: "Adventure, Drama, Sci-Fi",
    synopsis: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const mockTheaters = [
    {
      name: "Regal Cinema Downtown",
      distance: "1.2 miles",
      showtimes: ["12:30 PM", "3:45 PM", "7:00 PM", "10:15 PM"]
    },
    {
      name: "AMC Town Centre 15",
      distance: "3.4 miles",
      showtimes: ["1:15 PM", "4:30 PM", "8:00 PM"]
    },
    {
      name: "Cinemark Majestic Cinema",
      distance: "5.8 miles",
      showtimes: ["11:00 AM", "2:15 PM", "5:30 PM", "8:45 PM", "11:30 PM"]
    }
  ];

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
          title: data.Title,
          rating: data.Rated,
          runtime: data.Runtime,
          year: data.Year,
          genres: data.Genre,
          synopsis: data.Plot,
          poster: data.Poster
        });
      } else {
        setMovieData(null);
        setError(`We couldn't find anything for "${searchTerm}"`);
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
      
      {isLoading && <p className={statusText}>Searching global database...</p>}
      {error && !isLoading && <p className={errorText}>{error}</p>}
      
      {movieData && !isLoading && (
        <>
          <MovieInfo movie={movieData} />
          <TheaterList theaters={mockTheaters} />
        </>
      )}
    </div>
  );
}

export default MovieDashboard;