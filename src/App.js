import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { upcomingMovies } from './redux/actions/movies';
import { useDispatch, useSelector } from 'react-redux';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import AuthenticatedRoutes from './Utils/Routes/AuthenticatedRoutes';
import Upcoming from './Components/Upcoming/Upcoming';


function App() {

  return (
    <div >
     <Router>
       <Switch>
         <AuthenticatedRoutes exact path="/" component={Home}/>
         <AuthenticatedRoutes exact path="/upcoming" component={Upcoming}/>
           
         
       </Switch>
     </Router>
   
      
    </div>
  );
}

export default App;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./App.css";

// const api_key = "435c8880fa41fdbe5fba133c47f78d2b";
// const BASE_URL = "https://api.themoviedb.org/3";
// const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

// function App() {
//   const [data, setData] = useState([]);

//   const api = axios.create({ baseURL: BASE_URL });

//   const getUpcoming = api.get("movie/upcoming", { params: { api_key } });

//   useEffect(() => {
//     getUpcoming.then((res) => {
//       setData(res.data.results);
//     });
//   }, []);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div className="grid">
//           {data.map((movie) => (
//             <div className="item">
//               <img src={getImage(movie.poster_path)} />
//               <p>{movie.original_title}</p>
//             </div>
//           ))}
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;
