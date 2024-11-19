import movies from "./movie.js"
import "./MoviesList.css";
const MoviesList = () => {
  return (
    <div className="movie-List">
       {
        movies.map((movie)=>(
        <div key={movie.id} className="movie-card">
            <img src={movie.image} className="movie-image"/>
            <h1>Title:{movie.title}</h1> 
            <h2>Language:{movie.language}</h2>
            <h3>cost: {movie.cost}</h3>
                        </div>
        ))
       }
    </div>
  )
}
export default MoviesList;
