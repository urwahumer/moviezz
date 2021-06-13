import React, { useEffect, useState } from "react";
import TrailerModal from "../Home/TrailerModal";
import { Pagination } from "antd";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from "react-redux";
import { upcomingMovies } from "../../redux/actions/movies";

const Upcoming = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.movies.upcomingMoviesList.reverse());
  const [vid, setVid] = useState("");

  useEffect(() => {
    dispatch(upcomingMovies("1"));
  }, []);

  return (
    <div className="container">
      <div className="row flex-column-reverse flex-md-row">
        {data.map((i, index) => {
          return (
            <div className="col-4" key={index}>
              <figure className="image-block">
                {/* <h1>{i.title}</h1> */}
                <img
                  src={`https://image.tmdb.org/t/p/w500/${i.poster_path}`}
                  alt=""
                />
                <figcaption>
                  <h3>{i.title}</h3>
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
                  <button
                    data-toggle="modal"
                    data-target=".bd-example-modal-lg"
                    onClick={() => {
                      setVid(i.id);
                    }}
                  >
                    More Info
                  </button>
                </figcaption>
              </figure>
            </div>
          );
        })}
      </div>
      <TrailerModal id={vid} />
    </div>
  );
};

export default Upcoming;
