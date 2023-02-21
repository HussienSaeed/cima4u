import axios from "axios";
import React, { useEffect, useState } from "react";
import TvItem from "./tvItem";

export default function Tv() {
  let [tv, setTv] = useState([]);
  let getTv = async () => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/tv/day?api_key=52bbcddeda849047525b51d6f8a12361`
    );
    console.log(data.results);
    setTv(data.results);
  };
  
  useEffect(() => {
    getTv();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 ">
            <div className="item text-start">
              <div className="bord w-25"></div>
              <h1>
                Trending <br /> Tv Show <br /> To Watch Now
              </h1>
              <p className="secondFontColor">Most Watched Tv Show By Days</p>
              <div className="bord w-100"></div>
            </div>
          </div>
          {tv.map((tvShow, index) => {
            return <TvItem key={index} data={tvShow} />;
          })}
        </div>
      </div>
    </>
  );
}
