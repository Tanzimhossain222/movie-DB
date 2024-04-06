import MovieDetails from "@/components/MovieDetails"

const MoviePage = ({params:{id}}) => {
  return (
    <div>
        <MovieDetails id={id} />
    </div>
  )
}

export default MoviePage