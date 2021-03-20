import React, { useEffect, useState } from 'react';
import axios from './axios';
import './Row.css';
const baseurl="https://image.tmdb.org/t/p/original/";
const Row = ({title,fetchUrl,isLargeRow}) => {
    const [movies,setMovies]=useState([]);
    //snippedt of code runs on specific condition
    useEffect(()=>{
        async function fetchData(){
            const request =await axios.get(fetchUrl);
             setMovies(request.data.results);
      
       return request;
        }
        fetchData();

    },[fetchUrl]);
    console.table(movies);
    return (
        <div className="row">

           <h2>{title}</h2> 
        <div className="row_posters">
        {movies.map(movie=>{
            <img 
            className={`row-poster ${isLargeRow && "row_posterLarge"}`}
            key={movie.id}
            className="row-poster" src={`${baseurl}${isLargeRow ? movie.poster_path :movie.backdrop_path}`} alt={movie.name}/>
        })}
        </div>
           </div>
    )
}

export default Row;
