import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { NavLink, useHistory } from "react-router-dom";
import fallback from "../../Assets/Images/fallback-img.svg";
import TrailerModal from "../Home/TrailerModal";
import { Spin } from "antd";
import AOS from "aos";

const HorizontalScrollablecard = ({ row, index, handleBtnClick }) => {
  const [vid, setVid] = useState("");
  const history = useHistory();
  //Animation call
  // useEffect(() => {
  //   AOS.init({
  //     duration: 2000
  //   });
  // }, []);
  const handleMoreInfo = row => {
    history.push(`/movie/${row.id}`);
    const localArr = JSON.parse(localStorage.getItem("recents"));

    localArr && localArr.push(row);
    console.log(localArr);
    localStorage.setItem("recents", JSON.stringify(localArr));
    console.log(localStorage.getItem("recents"));
  };

  return (
    <div className="horizontal-scrollable-movie-card mr-5 " key={index}>
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
                    onClick={() => {
                      handleBtnClick(row.id);
                      setVid(row.id);
                    }}
                    data-toggle="modal"
                    data-target=".bd-example-modal-lg"
                  >
                    <i class="fa fa-play" aria-hidden="true"></i>
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      handleMoreInfo(row);
                    }}
                    className=""
                  >
                    {" "}
                    <i class="fa fa-info" aria-hidden="true"></i>
                  </button>
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

export default HorizontalScrollablecard;
