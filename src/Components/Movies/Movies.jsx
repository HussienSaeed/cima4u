import axios from "axios";
import React, { useEffect, useState } from "react";
import Item from "../Item/Item";

export default function Movies() {
  let [movies, setMovies] = useState([]);
  let getTrending = async () => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=52bbcddeda849047525b51d6f8a12361`
    );
    console.log(data.results);
    setMovies(data.results);
  };
  useEffect(() => {
    getTrending();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 ">
            <div className="item text-start">
              <div className="bord w-25"></div>
              <h1>
                Trending <br /> Movies <br /> To Watch Now
              </h1>
              <p className="secondFontColor">Most Watched Movie By Days</p>
              <div className="bord w-100"></div>
            </div>
          </div>
          {movies.map((movie, index) => {
            return <Item key={index} data={movie} />;
          })}
        </div>
      </div>
    </>
  );
}
