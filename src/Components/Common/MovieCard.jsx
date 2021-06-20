import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { NavLink } from "react-router-dom";
import fallback from "../../Assets/Images/fallback-img.svg";
import TrailerModal from "../Home/TrailerModal";

const MovieCard = ({ row, index, settingVideoid }) => {
  const [vid, setVid] = useState("");

  return (
    <div className="col-10 col-md-4 col-lg-3 movie-card" key={index}>
      <figure className="image-block">
        {/* <h1>{i.title}</h1> */}
        <img
          src={
            row.poster_path !== null
              ? `https://image.tmdb.org/t/p/w500/${row.poster_path}`
              : fallback
          }
          alt=""
        />
        <figcaption className="">
          <div className="d-flex flex-column justify-content-between h-100">
            <div>
              <h4 className="primary-text-color">{row.title}</h4>
              <p className="text">{row.overview}</p>
            </div>
            <div>
              <div classname="mb-3 ">
                <span className="primary-text-color">
                  {`${row.vote_average}`}
                </span>
                <span>/10</span>
              </div>
              <div className="d-flex flex-row justify-content-between align-items-center mt-3">
                <div>
                  <button
                    type="button"
                    data-toggle="modal"
                    data-target=".bd-example-modal-lg"
                    onClick={() => {
                      settingVideoid(row.id);
                      setVid(row.id);
                    }}
                  >
                    <i class="fa fa-play" aria-hidden="true"></i>
                  </button>
                </div>
                <div>
                  <NavLink
                    to={`/movie/${row.id}`}
                    className="primary-text-color"
                  >
                    {" "}
                    More info
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </figcaption>
      </figure>
      <TrailerModal id={vid} image={row.poster_path} />
    </div>
  );
};

export default MovieCard;
