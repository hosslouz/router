import React, {useState, useEffect} from 'react';
import './App.css';
import MovieList from './components/MovieList'
import Add from './components/Add'
import Filter from './components/Filter';
import Description from './components/Description';
import { v4 as uuidv4 } from 'uuid';
import Joker from './components/images/Joker.jpg'
import TheAvengers from './components/images/TheAvengers.jpg'
import Parasite from './components/images/Parasite.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom';

function App() {
  const [filter,setFilter]=useState("")
  const [rating, setRating] = useState();
  
  
  const [movieList, setMovieList] = useState([
    {
        id: uuidv4(),
        "Title": "Joker",
        "Description": 'American psychological thriller that is set in 1981 Gotham City ',
        "PosterURL":Joker,
        "trailerURL" : "https://www.youtube.com/watch?v=t433PEQGErc&ab_channel=WarnerBros.Pictures",
        "Rating": 4
    },
    {
        id: uuidv4(),
        "Title":"TheAvengers",
        "Description":  '  A drift in space with no food or water' ,
        "PosterURL": TheAvengers,
        "trailerURL" : "https://www.youtube.com/watch?v=TcMBFSGVi1c&ab_channel=MarvelEntertainment",
        "Rating": 3
    },
    {
        id: uuidv4(),
        "Title":"Parasite",
        "Description": " South Korean dark comedy thriller " ,
        "PosterURL": Parasite,
        "trailerURL" : "https://www.youtube.com/watch?v=SEUXfv87Wpk&ab_channel=MadmanFilms",
        "Rating": 4
    }
    ])
    
    const addMovie=(newMovie) => {
      setMovieList([...movieList,newMovie])
      };
      const handleFilter=(val)=>{
        setFilter(val)
      }
    
  return (
    <div className="App">

      <header className="App-header">
     
      <Filter handleFilter={handleFilter}/> 
      
      <div className='row'>
      <MovieList movies={movieList.filter((elm=>(elm.Title.toUpperCase().includes(filter.toUpperCase()))|| ((elm.Rating)>=(rating))))} ></MovieList>
      <Add addMovie={addMovie}/>
      
      </div>
      <Routes>
      <Route path="/movie/:id" element= {<Description movies={movieList}/>}/>
      </Routes>
      </header>
    </div>
  );
}

export default App;
