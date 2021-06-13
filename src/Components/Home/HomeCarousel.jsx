import React from "react";
import { useSelector } from "react-redux";
import { Carousel } from "antd";

const HomeCarousel = () => {
  const data = useSelector(state => state.movies.upcomingMoviesList);
  const carouselData =
    data &&
    data.map(item => {
      return {
        img: item.backdrop_path,
        name: item.title
      };
    });
  console.log(carouselData);

  return (
    <Carousel autoplay effect="fade">
      {carouselData &&
        carouselData.map((row, index) => {
          return (
            <div className="carousel-item">
              <img
                class="d-block w-100"
                src={`https://image.tmdb.org/t/p/w1280${row.img}`}
                alt="First slide"
              />
              <div class="carousel-caption d-none d-md-block">
                <h3 className="text-white fornt-weight-bold">{row.name}</h3>
              </div>
            </div>
          );
        })}
    </Carousel>
  );
};

export default HomeCarousel;
