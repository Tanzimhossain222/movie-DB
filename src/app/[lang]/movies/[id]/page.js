import MovieDetails from "@/components/MovieDetails";
import Sidebar from "@/components/Sidebar";
import { getDictionary } from "../../dictionaries";

const MoviePage = async ({ params: { id, lang } }) => {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <Sidebar dictionary={dictionary} />
      <MovieDetails id={id} dictionary={dictionary} />
    </>
  )
}

export default MoviePage