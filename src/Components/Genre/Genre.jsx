import React, { useEffect, useState } from "react";
import { fetchGenreMovies } from "../../redux/actions/genre";
import { useDispatch, useSelector } from "react-redux";
import { getGenreName } from "../../Utils/genreName";
import { Pagination, Spin } from "antd";
import MovieCard from "../Common/MovieCard";
import Loader from "../../Utils/Loader";
import logo from "../../Assets/Logo/logo.svg";
import SerachForm from "../Common/SerachForm";
import AOS from "aos";

import { getVideo } from "../../redux/actions/movies";

const Genre = props => {
  const dispatch = useDispatch();
  const [vid, setVid] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [searchPaginationPage, setSearchPaginationPage] = useState(1);
  const data = useSelector(state => state.genre.genreMoviesList);
  const searchResult = useSelector(state => state.search.searchMovieListResult);
  const totalPage = useSelector(state => state.genre);
  const totalPageInSearch = useSelector(state => state.search);
  const poster = data !== [] && data[0] && data[0].backdrop_path;

  //Animation call
  // useEffect(() => {
  //   AOS.init({
  //     duration: 2000
  //   });
  // }, []);

  //Render first time and when some parameter changes
  useEffect(() => {
    genre(props.match.params.id, page);
  }, [props.match.params.id, page]);

  const genre = async (id, page) => {
    setIsLoading(true);
    await dispatch(fetchGenreMovies(id, page));
    setIsLoading(false);
  };

  // Setting video ID
  const handleBtnClick = async id => {
    await dispatch(getVideo(id));
  };

  //Handle Page Change
  const onChange = (page, pageSize) => {
    if (searchResult.length > 0) {
      setSearchPaginationPage(page);
    } else {
      setPage(page);
    }
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
        <div className="h-100 d-flex flex-column justify-content-center align-items-center">
          <p className="genre-title">{getGenreName(props.match.params.id)}</p>
          <div
            className="mt-4 w-100"
            // data-aos="fade-up"
            // data-aos-duration="3000"
          >
            <SerachForm
              genre={props.match.params.id}
              page={searchPaginationPage}
            />
          </div>
        </div>
      </div>
      <div
        className="container mt-4 "
        // data-aos="fade-up"
        // data-aos-duration="3000"
      >
        <Spin spinning={isLoading} indicator={logo}>
          <div className="row justify-content-center">
            {searchResult.length > 0
              ? searchResult.map((row, index) => {
                  return (
                    <MovieCard
                      row={row}
                      index={index}
                      handleBtnClick={handleBtnClick}
                    />
                  );
                })
              : data.reverse().map((row, index) => {
                  return (
                    <MovieCard
                      row={row}
                      index={index}
                      handleBtnClick={handleBtnClick}
                    />
                  );
                })}
          </div>
        </Spin>

        <div class="w-100 py-5 mt-md-0 d-flex  justify-content-center ">
          {searchResult.length > 0 ? (
            <Pagination
              current={searchPaginationPage}
              total={totalPageInSearch && 10 * totalPageInSearch.totalPages}
              onChange={onChange}
              showSizeChanger={false}
              hideOnSinglePage={true}
            />
          ) : (
            <Pagination
              current={page}
              total={totalPage && 10 * totalPage.totalPages}
              onChange={onChange}
              showSizeChanger={false}
              hideOnSinglePage={true}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Genre;
