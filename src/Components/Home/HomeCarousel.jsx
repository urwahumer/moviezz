import React from "react";
import { useSelector } from "react-redux";
import { Carousel } from "antd";
import { Link } from "react-router-dom";

const HomeCarousel = () => {
  const data = useSelector(state => state.movies.upcomingMoviesList);
  const carouselData =
    data &&
    data.map(item => {
      return {
        img: item.backdrop_path,
        name: item.title,
        id: item.id
      };
    });
  console.log(carouselData);

  return (
    <div>
      <Carousel autoplay effect="fade">
        {carouselData &&
          carouselData.map((row, index) => {
            return (
              <div className="carousel-item">
                <Link to={`/movie/${row.id}`}>
                  <img
                    class="d-block w-100"
                    src={`https://image.tmdb.org/t/p/w1280${row.img}`}
                    alt="First slide"
                  />
                  <div class="carousel-caption d-none d-md-block">
                    <p className="primary-text-color fornt-weight-bold carusel-movie-heading">
                      {row.name}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
