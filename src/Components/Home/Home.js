import React,{useEffect, useState} from 'react';
import TrailerModal from './TrailerModal';
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from 'react-redux';
import { upcomingMovies } from '../../redux/actions/movies';

const Home = () => {
    const dispatch=useDispatch()
const data = useSelector((state) => state.movies.upcomingMoviesList);
const [vid,setVid]=useState("")

  useEffect(()=>{
    dispatch(upcomingMovies("hello"));
  },[])

    return (
        <div className="container">
<div className="row flex-column-reverse flex-md-row">
         {data.map((i,index)=>{
       return(
        <div className="col-4" key={index}>
        <figure className="image-block">
        {/* <h1>{i.title}</h1> */}
        <img  src={`https://image.tmdb.org/t/p/w500/${i.poster_path}`} alt="" />
        <figcaption>
          <h3>
            More Info
          </h3>
          <p className="text">{i.overview}</p>
        
         <ReactStars
         value={i.vote_average}
    count={5}
   
    size={24}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  />
          <button data-toggle="modal" data-target=".bd-example-modal-lg" onClick={()=>{setVid(i.id)}}>
            More Info
          </button>
        </figcaption>
      </figure>
      </div>


//   <div className="col-4">
//     <div className="card">   
//       <div className="card-header">
//         <img className="card-img" src={`https://image.tmdb.org/t/p/w500/${i.poster_path}`} alt="Card image" />
//       </div>  
//       <div className="card-body">
//         <h1 className="card-title">{i.title}</h1>
//         <div className="container">
//           <div className="row">
//             <div className="col-4 metadata">
//               <i className="fa fa-star" aria-hidden="true" /> 
//               <p>9.5/10</p>
//             </div>
//             <div className="col-8 metadata">Adventure. Sci-Fi</div>
//           </div>
//         </div>      
//         <p className="card-text">{i.overview}</p>
//         <a className="trailer-preview" href="https://youtu.be/ePbKGoIGAXY" target="new">
//           <i className="fa fa-play" aria-hidden="true" />
//         </a>
//       </div>
//     </div>
//   </div>
  

      
       )
     })} 
     
     </div>
     <TrailerModal id={vid}/>
</div>
    );
};

export default Home;