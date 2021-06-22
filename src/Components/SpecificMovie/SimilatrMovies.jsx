import React from "react";
import { Carousel } from "antd";
import { useSelector } from "react-redux";
import MovieCard from "../Common/MovieCard";

const SimilatrMovies = () => {
  const data = useSelector(
    state => state.specificMovie.similarMoviesList.results
  );

  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  const settingVideoid = id => {
    console.log("Id", id);
    // setVid(id);
  };

  return (
    <Carousel afterChange={onChange}>
      <div className="container-fluid mt-4">
        <div className="row justify-content-center">
          {data &&
            data.slice(0, 4).map((row, index) => {
              return (
                <MovieCard
                  row={row}
                  index={index}
                  settingVideoid={settingVideoid}
                />
              );
            })}
        </div>
      </div>
    </Carousel>
  );
};

export default SimilatrMovies;
