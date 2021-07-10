import React from "react";
import { Carousel } from "antd";
import { useSelector } from "react-redux";
import MovieCard from "../Common/MovieCard";
import { getVideo } from "../../redux/actions/movies";
import { useDispatch } from "react-redux";
import HorizontalScrollablecard from "../Common/HorizontalScrollablecard";
import HorizontalMovieCardScroller from "../Common/HorizontalMovieCardScroller";

const SimilatrMovies = () => {
  const dispatch = useDispatch();
  const data = useSelector(
    state => state.specificMovie.similarMoviesList.results
  );

  return (
    <div className="container-fluid mt-5 ">
      <div data-aos="fade-in" data-aos-duration="3000">
        {data && data.length > 0 ? (
          <div>
            <p className="text-center text-white h2 mb-3">Similar Movies</p>
            <HorizontalMovieCardScroller dataArray={data} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default SimilatrMovies;
