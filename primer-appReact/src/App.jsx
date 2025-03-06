import './App.css'
import movieList from './data/movies.json'
function App() {
  console.log(movieList);


  return (
    <>
    <div>
      <h1>MOVIES</h1>
    </div>
    <div className="poster">
      {
        movieList.map((movie) => {

          return (
           <div className="container-img">
            
           </div>
          )
        })
      }
    </div>
    </>
  )
}

export default App
