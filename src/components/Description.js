import React from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom';
import { useState,useEffect } from "react"
import { Rating } from 'react-simple-star-rating'
import {Outlet,useNavigate} from 'react-router-dom'



function Description({movies}) {
    
    const navigate = useNavigate()
    const goBack=()=>{
        if(true)
        navigate(-1)
    }
    const params=useParams()
    console.log(params)
    const desc = movies.find(el=>el.id === params.id)
    

  return (
    <div>
      
         <div className="card-body" key={desc.id}>
          <br />
         
            <h5 className="card-title">{desc.Title}</h5>
            
            <p className="card-text">{desc.Description}</p>
          
            <iframe src={desc.trailerURL}></iframe>
         
            
         </div>
            

         
        <button className="btn btn-primary"
            onClick={() => { goBack() } }>Go back
          </button>
          
   
    </div>
  )
  
}

export default Description