import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { NavLink } from "react-router-dom";
import fallback from "../../Assets/Images/fallback-img.svg";
import TrailerModal from "../Home/TrailerModal";

const MovieCard = ({ row, index, settingVideoid }) => {
  const [vid, setVid] = useState("");

  return (
    <div className="col-10 col-md-3" key={index}>
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
              <h3>{row.title}</h3>
              <p className="text">{row.overview}</p>
            </div>
            <div>
              <ReactStars
                value={row.vote_average}
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
                  settingVideoid(row.id);
                  setVid(row.id);
                }}
              >
                Trailer
              </button>
              <NavLink to={`/movie/${row.id}`}> More info</NavLink>
            </div>
          </div>
        </figcaption>
      </figure>
      <TrailerModal id={vid} image={row.poster_path} />
    </div>
  );
};

export default MovieCard;
