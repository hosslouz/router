import React, { useState } from 'react'
import StarRating from './StarRating'
import { Rating } from 'react-simple-star-rating'

function Filter(props) {
  const [rating, setRating] = useState();
  const [filter,setFilter]=useState("");


//functions setstate

  const onStarClick = (nextValue, prevValue, name) =>{
      setRating(nextValue);
      props.rating(nextValue); 
    };
  const onStarHover = (nextValue, prevValue, name)=>{
      setRating(nextValue);
      props.rating(nextValue); 
    }
  const handleFilter=(val)=>{
      setFilter(val)
    }
  return (
    <div>
        Search: <input type="text" placeholder='Search' onChange = {(e)=>props.handleFilter(e.target.value) }/>

      
        <br/>

        <Rating value={rating} starCount={5}  name="rate" onStarClick={onStarClick} onStarHover={onStarHover}/>
    </div>
  )
}

export default Filter;