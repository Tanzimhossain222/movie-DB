import { getDictionary } from "@/app/[lang]/dictionaries";
import Image from "next/image";
import { notFound } from "next/navigation";

//dynamic import data
const importData = async () => {
  const data = await import("@/db/data.json");
  return data.default;
};

const MovieDetails = async ({ id, dictionary }) => {
  const allMovies = await importData();
  const findMovie = allMovies.find((movie) => movie.id === parseInt(id));

  if(!findMovie){
    notFound();
  }


  return (
    <>
      <section>
        <div>
          <Image
            className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
            src={findMovie.backdrop_path}
            alt={findMovie.title}
            height={400}
            width={600}
          />
        </div>

        <div className="grid grid-cols-12 py-12 gap-8">
          <div className="col-span-2">
            <Image
              src={findMovie.poster_path}
              alt={findMovie.title}
              width={150}
              height={200}
            />
          </div>
          <div className="col-span-8">
            <h2 className="font-bold text-slate-300 text-2xl">
              {findMovie.title}
            </h2>
            <p className="my-2 text-slate-400 italic">{findMovie.overview}</p>
            <ul className="text-slate-300 space-y-2 my-8">
              <li>{dictionary.release_Date} : {findMovie.release_date} </li>
              <li>{dictionary.average_Vote} : {findMovie.vote_average} </li>
              <li>{dictionary.vote_count} :{findMovie.vote_count} </li>
              <li>{dictionary.popularity} :{findMovie.popularity} </li>
            </ul>
          </div>
          <div className="col-span-2 space-y-4">
            <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
              {dictionary.stream_btn}
            </button>
            <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
              {dictionary.download}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieDetails;
