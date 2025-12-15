import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container';
import trailer from 'movie-trailer';
import YouTube from 'react-youtube';
import './row.css'
import { height, width } from '@mui/system';

const Row = () => {
    const [movies, setMovies]=useState([]);  
    const [urltrailer,setTrailer]=useState("");

    useEffect(()=>{
         fetch('https://api.themoviedb.org/3/discover/movie?api_key=f549f66608f7c005efefaeeb98e2087a&language=en-US&page=1&sort_by=popularity.desc').then((res)=>res.json()).then((result)=>{
                // const i =Math.floor (Math.random () * result.results.length);         
                 const path= result.results;
                   setMovies(path)
                //  console.log(path)   
       }) 
              
            },[])

          let  handleClick=(singlemovie)=>{
             if(urltrailer){
              setTrailer('')
             }else{
              trailer(singlemovie?.title || singlemovie?.name || singlemovie?.original_name).then((url)=>{
                console.log(url)
                const urlparam = new URLSearchParams(new URL(url).search)
                console.log(urlparam)
                console.log(urlparam.get('v'))
                setTrailer(urlparam.get('v'))
              })
             }
            }
const opts={
  height:'390px',
  width:'100%',
  playerVars:{
    autoplay:1,
  }
}

return(

  <div className='row-poster'>
     <h1 className='poster_title' >{movies[0]?.title}</h1> 
        <div className='poster_img'>
          {/* <h1 className='' >{movies?.title}, ggggg </h1> */}     
          {movies.map((singlemovie) => (       
         <img src={`https://image.tmdb.org/t/p/original${singlemovie.poster_path}`} onClick={()=>handleClick(singlemovie)} alt=""  width='200px' />  
           
      ))      
      }
      
          {/* <h1 className='poster_title' >{movies[3]?.title}</h1>

              {movies.map((singlemovie) => (       
         <img src={`https://image.tmdb.org/t/p/original${singlemovie.poster_path}`} alt=""  width='10%'/>
        
      ))} */}
             
               



    </div>
    <div style={{padding:'40px'}}>
  
  {urltrailer && <YouTube videoId={urltrailer} opts={opts}/>}

</div>
    </div>
    
)
}

export default Row
