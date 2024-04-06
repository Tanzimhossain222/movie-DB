import MovieCard from "./MovieCard";

const MovieList = ({ movies, dictionary }) => {
  return (
    <>
      <div className="content">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} dictionary={dictionary} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieList;
