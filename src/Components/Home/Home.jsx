import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Item from '../Item/Item';
import TvItem from '../TV/tvItem';
import { Offline } from "react-detect-offline";
import Disconnected from '../Disconnected/Disconnected';

export default function Home() {
  let [movies, setMovies] = useState([]);
    let [tv, setTv] = useState([]);

   let getTrending = async () => {
       let { data } = await axios.get(
         `https://api.themoviedb.org/3/trending/movie/week?api_key=52bbcddeda849047525b51d6f8a12361`
       );
       setMovies(data.results)
  }
   let getTv = async () => {
     let { data } = await axios.get(
       `https://api.themoviedb.org/3/trending/tv/week?api_key=52bbcddeda849047525b51d6f8a12361`
     );
     setTv(data.results);
   };
    useEffect(() => {
      getTrending();
      getTv()
    },[])
  return (
    <>
      <Offline><Disconnected/></Offline>
      {movies.length > 0 ? (
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
            <r />
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
      ) : (
        <h1>Loading</h1>
      )}
    </>
  );
}
