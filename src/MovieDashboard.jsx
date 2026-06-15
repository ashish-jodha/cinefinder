import SearchBar from './SearchBar';
import MovieInfo from './MovieInfo';

function MovieDashboard() {
  const dashboardContainer = "w-full flex flex-col gap-4 sm:gap-6 md:gap-8";

  const sampleMovie = {
    title: "Interstellar",
    rating: "PG-13",
    runtime: "2h 49m",
    year: "2014",
    genres: "Sci-Fi • Adventure • Drama",
    synopsis: "When Earth becomes uninhabitable, a team of explorers undertakes the most important mission in human history: traveling beyond this galaxy to discover whether mankind has a future among the stars."
  };

  return (
    <div className={dashboardContainer}>
      <SearchBar />
      <MovieInfo movie={sampleMovie} />
    </div>
  );
}

export default MovieDashboard;