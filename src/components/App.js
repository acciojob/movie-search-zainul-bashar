
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const[movie,setMovie] = useState('');
  const[movies,setMovies] = useState([]);
  
 
  const searchMovie = () => {
    
    fetch(`http://www.omdbapi.com/?s=${movie}&apiKey=c4c5dd67`)
    .then((res) => res.json())
    .then((data) => setMovies(data.Search))
   setMovie('')
   setMovies('')
    
    
  }
    
 
  return (
    <div>
        {/* Do not remove the main div */}
       
        <label>Search Movie</label>
        <input type="text" onChange={(e) => setMovie(e.target.value)} value={movie}/>
        <button onClick={searchMovie}>Search</button>
        {
          movies.map((mov) => {
            return (
              <div>
                <li key={mov.imdbID}>{mov.Title}<p>({mov.Year})</p></li>
                <img src={mov.Poster} alt="poster"></img>
              </div>
            )
          }
          )
        }
    </div>
  )
}

export default App
