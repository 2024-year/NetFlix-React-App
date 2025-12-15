import React, { useState, useEffect } from 'react'
import axios from '../../utils/axios'
import requests from '../../utils/requist'
import instance from '../../utils/axios';

import Container from 'react-bootstrap/esm/Container';

import './banner.css'
const Banner2 = () => {
    const [movie, setMovie]=useState({});



     useEffect(()=>{   
       (async()=>{
          try{ 
            const requist = await axios.get(requests.fetchTrending);          
            console.log("hi from banner 2",requist)}
          catch(error)
          {
            console.log("shtet new >>>>>>>>",error)

          }
        })();}
      
    ,[]);


    // function truncate(str,n){
    //   return str?.length > n ? str.substr(0,n-1)+'...':str;
    // }
    return(
 <div>
  

      {/* <Container fluid className="banner" style={{
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

      </Container> */}
    </div>
)
 
}

export default Banner2
