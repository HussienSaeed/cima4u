import React from "react";
import { Link } from "react-router-dom";

export default function TvItem(props) {
  let { name, poster_path, overview, vote_average,id } = props.data;
  return (
    <>
      <div className="col-md-2">
        <div>
          <div className="item position-relative overflow-hidden">
            <img
              className="w-100"
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt=""
            />
            <div>
              <Link className="text-light" to={`/details/tv/${id}`}>
                {" "}
                <div className="overlay d-flex align-item-center  text-center">
                  <p>{overview.split(" ").slice(0, 30).join(" ")}</p>
                </div>
              </Link>
            </div>
            <span className="vote">{vote_average.toFixed(1)}</span>
          </div>
          <div>
            {" "}
            <h5 className="my-3">{name}</h5>
          </div>
        </div>
      </div>
    </>
  );
}
