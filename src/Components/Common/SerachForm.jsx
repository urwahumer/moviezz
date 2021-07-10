import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  searchMovie,
  clearSearchMovie,
  setSearchWord
} from "../../redux/actions/search";
import $ from "jquery";

const SerachForm = ({ genre, page }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const searchResult = useSelector(state => state.search.searchMovieListResult);

  console.log("Page", page);
  useEffect(() => {
    handleMovieSearch();
  }, [genre, page]);

  const handleMovieSearch = async () => {
    const wordSearch =
      localStorage.getItem("wordSearch") &&
      localStorage.getItem("wordSearch") !== "" &&
      localStorage.getItem("wordSearch");
    const search_query = search.length > 0 ? search : wordSearch;
    await dispatch(searchMovie(search_query, genre, page));
  };

  const addingSearchItem = () => {
    localStorage.setItem("wordSearch", search);
  };

  const clearSearch = () => {
    setSearch("");
    dispatch(clearSearchMovie());
    $("#search-input").val("");
    localStorage.setItem("wordSearch", "");
  };

  return (
    <div class="container search-box  h-100" style={{}}>
      <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
        <div class="input-group px-3">
          <input
            type="search"
            id="search-input"
            placeholder="What're you searching for?"
            aria-describedby="button-addon1"
            class="form-control border-0 bg-light"
            defaultValue={
              search == ""
                ? localStorage.getItem("wordSearch") &&
                  localStorage.getItem("wordSearch")
                : search
            }
            onChange={e => {
              setSearch(e.target.value);
            }}
          />
          <div class="input-group-append">
            {search.length > 0 ? (
              <button
                id="button-addon1"
                type="submit"
                class="btn btn-link text-primary"
                onClick={clearSearch}
              >
                <i class="fa fa-times" aria-hidden="true"></i>
              </button>
            ) : localStorage.getItem("wordSearch") &&
              localStorage.getItem("wordSearch") !== "" ? (
              <button
                id="button-addon1"
                type="submit"
                class="btn btn-link text-primary"
                onClick={clearSearch}
              >
                <i class="fa fa-times" aria-hidden="true"></i>
              </button>
            ) : null}

            <button
              id="button-addon1"
              type="submit"
              class="btn btn-link text-primary mr-2"
              onClick={() => {
                handleMovieSearch();
                addingSearchItem();
              }}
            >
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SerachForm;
