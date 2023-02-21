import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TvDetails() {
  let y = useParams();

  let [tvDetails, setTvDetails] = useState("");
  let getTvDetails = async (id) => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=52bbcddeda849047525b51d6f8a12361`
    );
    console.log(data);
    setTvDetails(data);
  };
  useEffect(() => {
    getTvDetails(y.id);
  }, []);
  return (
    <>
      {tvDetails ? (
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                className="w-100 rounded-2"
                src={`https://image.tmdb.org/t/p/w500/${tvDetails.poster_path}`}
                alt=""
              />
            </div>
            <div className="col-md-8">
              <div>
                <h2>{tvDetails.name}</h2>
                {tvDetails.genres.map((value, index) => (
                  <span key={index} className="badge bg-info p-2 mx-3">
                    {value.name}
                  </span>
                ))}

                <ul className="my-3">
                  <li className="fs-5">Vote : {tvDetails.vote_average}</li>
                  <li className="fs-5">Vote count : {tvDetails.vote_count}</li>
                  <li className="fs-5">popularity : {tvDetails.popularity}</li>
                  <li className="fs-5">
                    release date : {tvDetails.first_air_date}
                  </li>
                </ul>
                <h3 className="text-warning">Over view : </h3>

                <p className="fs-5">{tvDetails.overview}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
