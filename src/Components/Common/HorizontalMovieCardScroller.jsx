import React from "react";
import HorizontalScrollablecard from "./HorizontalScrollablecard";
import { getVideo } from "../../redux/actions/movies";
import { useDispatch } from "react-redux";

const HorizontalMovieCardScroller = ({ dataArray }) => {
  const dispatch = useDispatch();
  const handleBtnClick = async id => {
    await dispatch(getVideo(id));
  };

  const right = () => {
    document.getElementById("container").scrollLeft += 50;
  };
  const left = () => {
    document.getElementById("container").scrollLeft -= 50;
  };

  return (
    <div>
      <div
        className="position-relative container scrolling-wrapper-flexbox"
        id="container"
      >
        {dataArray &&
          dataArray.map((row, index) => {
            return (
              <HorizontalScrollablecard
                row={row}
                index={index}
                handleBtnClick={handleBtnClick}
              />
            );
          })}
      </div>
      <button
        id="slideLeft"
        type="button"
        className="text-white right-scroll"
        onClick={left}
      >
        <i class="fa fa-chevron-left" aria-hidden="true"></i>
      </button>
      <button
        id="slideRight"
        type="button"
        className="text-white left-scroll"
        onClick={right}
      >
        <i class="fa fa-chevron-right" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default HorizontalMovieCardScroller;
