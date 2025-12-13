import React, { useState, useEffect } from 'react'
// import myaxios from '../../utils/axios'
// import requests from '../../utils/requist'
// import requist from '../../utils/requist';
import Container from 'react-bootstrap/esm/Container';

import './banner.css'
const Banner = () => {
    const [movie, setMovie]=useState();

    // Banner.jsx (Simplified logic for clarity)
// ...


    useEffect(()=>{   
               fetch('https://api.themoviedb.org/3/discover/movie?api_key=f549f66608f7c005efefaeeb98e2087a&language=en-US&page=1&sort_by=popularity.desc').then((res)=>res.json()).then((result)=>{

                const i =Math.floor ( Math.random () * result.results.length);
                // console.log(i)
   
                // console.log(result.results[i].backdrop_path)
                 const path= result.results[i];
                   setMovie(path)

                 console.log(path)
                 

             
             
       }) 
              
            }
          
      
    ,[]);

    function truncate(str,n){
      return str?.length > n ? str.substr(0,n-1)+'...':str;
    }
    return(
 <div>
  

      <Container fluid className="banner" style={{
        backgroundSize:"cover",
        backgroundImage:`url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition:"center",
        backgroundRepeat:"no repeat",
    width:'100%',
    height:'70vh'


      }} >
        <div className='banner_contets'>
          <h1 className='banner_title' >
           {movie?.title || movie?.name || movie?.orignal_name}

          </h1>
          <div className="banner_buttons">
            <button className='banner_button play'>Play</button>
            <button className='banner_button list' >My List</button>
          </div>
          <p className="banner_description">{truncate(movie?.overview, 75)}</p>
        </div>

      </Container>
    </div>
)
 
}

export default Banner
