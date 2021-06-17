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
    <div
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7)), 
        url(https://image.tmdb.org/t/p/w1280${data.backdrop_path})`,

        backgroundSize: "cover",
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
            <div className="border border-primary rounded">
              <div className="my-5 no-repeat center center fixed">
                <button className="w-100 border py-2 border-success ">
                  WATCH TRAILER
                </button>
              </div>
            </div>
          </div>
          <div className="col-10 col-md-8">
            <div>
              <h3 className="text-white">{data.title}</h3>
              {data &&
                data.length !== 0 &&
                data.genres.length !== 0 &&
                data.genres.map((row, index) => {
                  return (
                    <span className="text-muted mr-2" key={index}>
                      <small>{row.name}</small>
                    </span>
                  );
                })}
            </div>
            <div className="mt-4">
              <p className="text-white">{data.overview}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificMovie;
