import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <>
      <div class="content">
        <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
