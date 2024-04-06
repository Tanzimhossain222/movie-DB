import MovieList from '@/components/MovieList';

//dynamic import data
const importData = async () => {
  const data = await import('@/db/data.json');
  return data.default;
}

const HomePage = async () => {
  const movies = await importData();


  return (
    <>

      <MovieList movies={movies} />
    </>
  )
}

export default HomePage;