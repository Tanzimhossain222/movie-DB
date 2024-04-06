//dynamic import data
const importData = async () => {
  const data = await import("@/db/data.json");
  return data.default;
};

const MovieDetails = async ({ id }) => {
  const allMovies = await importData();
  const findMovie = allMovies.find((movie) => movie.id === parseInt(id));

  return (
    <>
      <section>
        <div>
          <img
            className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
            src={findMovie.backdrop_path}
            alt={findMovie.title}
          />
        </div>

        <div className="grid grid-cols-12 py-12 gap-8">
          <div className="col-span-2">
            <img src={findMovie.poster_path} alt={findMovie.title} />
          </div>
          <div className="col-span-8">
            <h2 className="font-bold text-slate-300 text-2xl">
              {findMovie.title}
            </h2>
            <p className="my-2 text-slate-400 italic">{findMovie.overview}</p>
            <ul className="text-slate-300 space-y-2 my-8">
              <li>Release Date : {findMovie.release_date} </li>
              <li>Average Vote : {findMovie.vote_average} </li>
              <li>Vote Count :{findMovie.vote_count} </li>
              <li>Popularity :{findMovie.popularity} </li>
            </ul>
          </div>
          <div className="col-span-2 space-y-4">
            <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
              Stream In HD
            </button>
            <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
              Download In HD
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieDetails;
