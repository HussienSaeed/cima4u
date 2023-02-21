import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ItemDetails() {
    let x = useParams()
      let [movie, setDetails] = useState('');
      let getMovie = async (id) => {
        let { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=52bbcddeda849047525b51d6f8a12361`
        );
        setDetails(data);
    };
    console.log(movie);
    

        useEffect(() => {
            getMovie(x.id);
        },[]);
  return (
    <>
      {movie ? (
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                className="w-100 rounded "
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
              />
            </div>
            <div className="col-md-7">
              <div>
                <h2>{movie.title}</h2>
                {movie.genres.map((value, index) => (
                  <span key={index} className="badge bg-info p-2 mx-3">
                    {value.name}
                  </span>
                ))}

                <ul className="my-3">
                  <li className="fs-5">Vote : {movie.vote_average}</li>
                  <li className="fs-5">Vote count : {movie.vote_count}</li>
                  <li className="fs-5 ">popularity : {movie.popularity}</li>
                  <li className="fs-5">release date : {movie.release_date}</li>
                </ul>
                <h3 className='text-warning'>Over view : </h3>
                <p className="fs-5">{movie.overview}</p>
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
