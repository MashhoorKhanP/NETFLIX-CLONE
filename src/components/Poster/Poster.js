import React, { useEffect, useState } from "react"
import axios from "../../axios"
import "./Poster.css"
import { API_KEY, imageURL } from "../constants/constants"
import Youtube from 'react-youtube'

function Poster(props) {
  const [movies, setMovies] = useState([]);
  const [ytkey,setYtKey] = useState('');

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
        alert("Network error");
      });
  }, [props.url]);
  const opts = {
    height: '550px',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMoviesTrailer=(movieId)=>{
    console.log(movieId);
    axios.get(`/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`).then(response =>{
      console.log(response.data)

      response.data.results.length!==0 ? setYtKey(response.data.results[0]) : console.log('Array empty');
    }).catch(err =>console.log(err));
  }
  return (
    <div className="row">
      <h5 className="">{props.title}</h5>
      <div className="posters">
        {movies.map((movie) => 
          <img onClick={()=>handleMoviesTrailer(movie.id)}
            className={`${props.isBig ? 'bigPoster-img':'poster-img'}`}
            src={`${imageURL+movie.backdrop_path}`}
            alt="Poster"
          ></img>
        )}
      </div>
      { ytkey && <Youtube opts={opts} videoId={ytkey.key}/> }
    </div>
  );
}

export default Poster;
