import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useGenres } from "../store/state";
import Genres from "./Genres";
export default function Movies() {
  //   const selectedGenres = useGenres((state) => state.selectedGenres);
  //   const [movies, setMovies] = useState([]);
  const [content, setContent] = useState([]);
  const setMovies = useGenres((state) => state.setMovies);
  const selectedMovies = useGenres((state) => state.selectedMovies);

  const fetchMovies = async () => {
    const { data } = await axios.get(`
    https://api.themoviedb.org/3/discover/movie?api_key=b34e165c7c0fffee30e7641c95f2f53b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`);
    console.log(data)
    setMovies(data.results);
    // setNumOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="m-8 flex gap-4 justify-center">
      {
      selectedMovies.map((movie) => {
          return (
            <div key={movie.id} className="m-4 border-black">
              {movie.original_title}
              {movie.poster_path}
            </div>
            
          );
        })
        
      }
    </div>
  );
}
