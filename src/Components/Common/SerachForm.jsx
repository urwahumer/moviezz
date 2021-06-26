import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovie, clearSearchMovie } from "../../redux/actions/search";

const SerachForm = ({ genre, page }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  console.log(page);
  useEffect(() => {
    handleMovieSearch();
  }, [search, genre, page]);

  const handleMovieSearch = async () => {
    await dispatch(searchMovie(search, genre, page));
  };

  const clearSearch = () => {
    setSearch("");
    dispatch(clearSearchMovie());
  };

  return (
    <div class="container search-box w-100 h-100">
      <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
        <div class="input-group px-3">
          <input
            type="search"
            placeholder="What're you searching for?"
            aria-describedby="button-addon1"
            class="form-control border-0 bg-light"
            value={search}
            onChange={e => {
              setSearch(e.target.value);
            }}
          />
          <div class="input-group-append">
            {search.length >= 1 ? (
              <button
                id="button-addon1"
                type="submit"
                class="btn btn-link text-primary"
                onClick={clearSearch}
              >
                <i class="fa fa-times" aria-hidden="true"></i>
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SerachForm;
