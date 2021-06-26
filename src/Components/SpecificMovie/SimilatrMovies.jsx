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
      <div className="container-fluid mt-5 ">
        <div data-aos="fade-up" data-aos-duration="3000">
          {data && data.length > 0 ? (
            <div>
              <p className="text-center text-white h2 mb-3">Similar Movies</p>
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
          ) : null}
        </div>
      </div>
    </Carousel>
  );
};

export default SimilatrMovies;
