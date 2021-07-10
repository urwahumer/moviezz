import React, { useEffect, useState } from "react";
import TrailerModal from "./TrailerModal";
import { useDispatch, useSelector } from "react-redux";
import { upcomingMovies, getVideo } from "../../redux/actions/movies";
import MovieCard from "../Common/MovieCard";
// import AOS from "aos";
// import "aos/dist/aos.css";

const Upcoming = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.movies.upcomingMoviesList);
  const [vid, setVid] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(upcomingMovies("1"));
  }, []);

  //Set video
  const handleBtnClick = async id => {
    setLoading(true);
    await dispatch(getVideo(id));
    setLoading(false);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        {data &&
          data.reverse().map((row, index) => {
            return (
              <MovieCard
                row={row}
                index={index}
                handleBtnClick={handleBtnClick}
                loading={loading}
              />
            );
          })}
      </div>
      <TrailerModal />
    </div>
  );
};

export default Upcoming;
