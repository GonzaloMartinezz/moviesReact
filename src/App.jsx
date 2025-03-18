import './App.css'
import movieList from "./data/movies.json"

function App() {
  console.log(movieList);


  return (
    <>
    <div>
      <h1>MOVIES</h1>
    </div>
    <div className="poster">
      {movieList.map((movie) => (
           <div className="container-img" key={movie.id}>
            <img className="movie-grid-image" src ={movie.image} alt={movie.title} />
           </div>
          )
        )}
    </div>
    </>
  )
}

export default App;

