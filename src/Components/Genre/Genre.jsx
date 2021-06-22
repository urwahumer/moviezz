import React, { useEffect, useState } from "react";
import { fetchGenreMovies } from "../../redux/actions/genre";
import { useDispatch, useSelector } from "react-redux";
import { getGenreName } from "../../Utils/genreName";
import { Pagination, Spin } from "antd";
import MovieCard from "../Common/MovieCard";
import Loader from "../../Utils/Loader";
import logo from "../../Assets/Logo/logo.svg";

const Genre = props => {
  const dispatch = useDispatch();
  const [vid, setVid] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const data = useSelector(state => state.genre.genreMoviesList);
  const totalPage = useSelector(
    state => state.genre.genreMoviesList.total_pages
  );

  const poster = data !== [] && data[0] && data[0].backdrop_path;

  useEffect(() => {
    genre(props.match.params.id, page);
  }, [props.match.params.id, page]);

  const genre = async (id, page) => {
    setIsLoading(true);
    await dispatch(fetchGenreMovies(id, page));
    setIsLoading(false);
  };

  // Setting video ID
  const settingVideoid = id => {
    console.log("Id", id);
    setVid(id);
  };

  //Handle Page Change
  const onChange = (page, pageSize) => {
    setPage(page);
  };

  return (
    <div className="h-100 genre">
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7)),
              url(https://image.tmdb.org/t/p/w1280${poster})`,
          backgroundSize: "cover",
          height: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="h-100 d-flex justify-content-center align-items-center">
          <p className="genre-title">{getGenreName(props.match.params.id)}</p>
        </div>
      </div>
      <div className="container mt-4 ">
        <Spin spinning={isLoading} indicator={logo}>
          <div className="row justify-content-center">
            {data &&
              data.reverse().map((row, index) => {
                return (
                  <MovieCard
                    row={row}
                    index={index}
                    settingVideoid={settingVideoid}
                  />
                );
              })}
          </div>
        </Spin>

        <div class="w-50 mt-3 mt-md-0 d-flex justify-content-md-end justify-content-center mb-3">
          <Pagination
            current={page}
            total={10 * 50}
            onChange={onChange}
            showSizeChanger={false}
            hideOnSinglePage={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Genre;
