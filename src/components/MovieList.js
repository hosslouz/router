import React,{ useState }  from 'react'
import Filter from './Filter'
import { Rating } from 'react-simple-star-rating'
import {Link} from  'react-router-dom' 

function MovieList({movies}) {
    const [filter, setFilter] = useState("");
    const [rating, setRating] = useState();

    const getRating = (rating) =>{
		setRating(rating) 
	 }
	const getFilter = (valueFilter)=>{
		setFilter(valueFilter)
	  };


  return (
    <div>
        

        <div className="card" style={{width: "18rem",color:"black"}}>
           
        {movies.map((movies) =>

        <div className="card" style={{width: "18rem",color:"black"}}>
        <img className="card-img-top" src={movies.PosterURL} alt="movie"/>
        <div className="card-body">
        <h5 className="card-title">{movies.Title}</h5>
        <h5 className="card-id">{movies.id}</h5>
        <p className="card-text">{movies.Description}</p>
                
        <star>{movies.Rating}</star>
        <br/>
        <Link  to={`/movie/${movies.id}`}>
        <button className="btn btn-primary">More Details</button></Link>
    </div> 
    </div>  
          )}
    
      
    </div>
    </div>
  )
}

export default MovieList;