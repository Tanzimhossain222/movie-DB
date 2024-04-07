import MovieList from '@/components/MovieList';
import Sidebar from '@/components/Sidebar';
import { getDictionary } from './dictionaries';

//dynamic import data
const importData = async () => {
  const data = await import('@/db/data.json');
  return data.default;
}

const HomePage = async ({ params: { lang } }) => {
  const movies = await importData();
  const dictionary = await getDictionary(lang);

  return (
    <>
      <Sidebar dictionary={dictionary} />
      <MovieList movies={movies} dictionary={dictionary} />
    </>
  )
}

export default HomePage;