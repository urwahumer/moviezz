import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { currencyFormatter, convertNumberToTime } from "../../Utils/utility";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovieDetails,
  fetchSimilarMovies
} from "../../redux/actions/specificMovie";
import SimilatrMovies from "./SimilatrMovies";
import Loader from "../../Utils/Loader";
import TrailerModal from "../Home/TrailerModal";
import MovieInfoTabs from "./MovieInfoTabs";

const SpecificMovie = props => {
  const [loading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector(state => state.specificMovie.specificMovieDetail);
  console.log(props.match.params.id);
  useEffect(() => {
    fetchdetail(props.match.params.id);
  }, [props.match.params.id]);
  const fetchdetail = async id => {
    setIsLoading(true);
    await dispatch(fetchMovieDetails(id));
    await dispatch(fetchSimilarMovies(id));
    setIsLoading(false);
  };
  return (
    <div
      className="specific-movie "
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7)), 
        url(https://image.tmdb.org/t/p/w1280${data.backdrop_path})`,
        backgroundSize: "cover",
        minHeight: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="container pt-5">
        <div className="row justify-content-center pt-5">
          <div className="col-10 col-md-4">
            <img
              className="w-100 rounded movie-poster"
              height="500px"
              src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            ></img>
            <div className="priamry-border primary-border-color rounded">
              <div className="my-5 no-repeat center center fixed">
                <button
                  className="w-100 primary-background-color rounded py-2  "
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg"
                >
                  WATCH TRAILER
                </button>
              </div>
            </div>
          </div>
          <div className="col-10 col-md-8 mt-5 mt-md-0">
            <div>
              <h3 className="text-white movie-name">{data.title}</h3>
              {data &&
                data.length !== 0 &&
                data.genres.length !== 0 &&
                data.genres.map((row, index) => {
                  return (
                    <span className="text-muted mr-2" key={index}>
                      <Link to={`/genre/${row.id}`}>
                        <small className="primary-text-color movie-genre">
                          {row.name}
                        </small>
                      </Link>
                    </span>
                  );
                })}
            </div>
            <div className="mt-4">
              <p className="text-white movie-overview">{data.overview}</p>

              <div className="d-flex flex-row flex-md-column movie-info-tabs py-3 justify-content-between">
                <div className="row flex-column flex-md-row  justify-content-between ">
                  <div className=" col-3 text-center py-1 py-md-0  ">
                    <i class="fa fa-money" aria-hidden="true"></i>
                  </div>
                  <div className="col-3 text-center py-1 py-md-0  ">
                    <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
                  </div>
                  <div className="col-3 text-center py-1 py-md-0 ">
                    <i class="fa fa-language" aria-hidden="true"></i>
                  </div>
                  <div className="col-3 text-center py-1 py-md-0  ">
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                  </div>
                </div>

                <div className="py-1 py-md-0 row flex-column flex-md-row justify-content-between mt-0 mt-2">
                  <div className="col-5 col-md-3 text-center py-1 py-md-0 text-white ">
                    ${data.budget && currencyFormatter(data.budget)}
                  </div>
                  <div className="col-5 col-md-3 text-center py-1 py-md-0 text-white ">
                    {data && data.release_date}
                  </div>
                  <div className="col-5 col-md-3 text-center py-1 py-md-0 text-white text-capitalize">
                    {data && data.original_language}
                  </div>
                  <div className="col-5 col-md-3 text-center py-1 py-md-0 text-white ">
                    {data.runtime && convertNumberToTime(data.runtime)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TrailerModal id={data.id} image={data.poster_path} />
      <SimilatrMovies />
    </div>
  );
};

export default SpecificMovie;
