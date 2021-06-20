import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../../redux/actions/specificMovie";

const SpecificMovie = props => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.specificMovie.specificMovieDetail);
  console.log(props.match.params.id);
  useEffect(() => {
    fetchdetail(props.match.params.id);
  }, []);
  const fetchdetail = async id => {
    await dispatch(fetchMovieDetails(id));
  };
  return (
    <div className="h-100 specific-movie">
      <div
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7)), 
        url(https://image.tmdb.org/t/p/w1280${data.backdrop_path})`,
          backgroundSize: "cover",
          height: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="container pt-5">
          <div className="row justify-content-center pt-5">
            <div className="col-10 col-md-4">
              <img
                className="w-100 rounded"
                height="500px"
                src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
              ></img>
              <div className="priamry-border primary-border-color rounded">
                <div className="my-5 no-repeat center center fixed">
                  <button className="w-100 primary-background-color rounded py-2  ">
                    WATCH TRAILER
                  </button>
                </div>
              </div>
            </div>
            <div className="col-10 col-md-8">
              <div>
                <h3 className="text-white movie-name">{data.title}</h3>
                {data &&
                  data.length !== 0 &&
                  data.genres.length !== 0 &&
                  data.genres.map((row, index) => {
                    return (
                      <span className="text-muted mr-2" key={index}>
                        <small className="primary-text-color movie-genre">
                          {row.name}
                        </small>
                      </span>
                    );
                  })}
              </div>
              <div className="mt-4">
                <p className="text-white movie-overview">{data.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificMovie;
