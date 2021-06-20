import React, { useEffect, useState } from "react";
import TrailerModal from "./TrailerModal";
import { useDispatch, useSelector } from "react-redux";
import { upcomingMovies } from "../../redux/actions/movies";
import MovieCard from "../Common/MovieCard";

const Upcoming = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.movies.upcomingMoviesList);
  const [vid, setVid] = useState("");

  useEffect(() => {
    dispatch(upcomingMovies("1"));
  }, []);

  const settingVideoid = id => {
    console.log("Id", id);
    setVid(id);
  };
  console.log(vid);
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        {data &&
          data.reverse().map((row, index) => {
            return (
              <MovieCard
                row={row}
                index={index}
                settingVideoid={settingVideoid}
              />
            );
          })}
      </div>
      {/* <TrailerModal id={vid} /> */}
    </div>
  );
};

export default Upcoming;
