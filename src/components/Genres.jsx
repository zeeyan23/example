
// import { useEffect } from "react";
// import { useGenres } from "../store/state";
// import axios from "axios";
// import Chip from "@mui/material/Chip";

// export default function Genres() {

//   const genres = useGenres((state) => state.genres);
//   const selectedGenres = useGenres((state) => state.selectedGenres);
  
//   const setGenres = useGenres((state) => state.setGenres);
//   const addSelectedGenre = useGenres((state) => state.addSelectedGenre);
//   const removeSelectedGenre = useGenres((state) => state.removeSelectedGenre);

//   // useEffect(() => {
//   //   const genres = [
//   //     { id: 1, type: "action" },
//   //     { id: 2, type: "comedy" },
//   //     { id: 3, type: "romance" },
      
//   //   ];
//   //   setGenres(genres);
//   // }, []);

//   const fetchGenres = async () => {
//     const { data } = await axios.get(
//       `https://api.themoviedb.org/3/genre/list?api_key=b34e165c7c0fffee30e7641c95f2f53b&language=en-US`
//     );
//     console.log(data)
//     setGenres(data.genres);
//   };

//   useEffect(() => {
//     fetchGenres();

//     return () => {
//       setGenres([]);
//     };
//   }, []);

//   // function handleGenre(name) {
//   //   const isGenrePresent = selectedGenres.find(
//   //     (genreType) => genreType === name
//   //   );

//   //   if (isGenrePresent) {
      
//   //     removeSelectedGenre(name);
//   //   } else {
      
//   //     addSelectedGenre(name);
//   //   }
//   // }

//   const handleAdd = (genre) => {
//  addSelectedGenre(genre)
//     setGenres([...genres, genre]);
//     // setPage(1);
//   };

//   const handleRemove = (genre) => {
//    removeSelectedGenre(genre)
//     setGenres(genres.filter((g) => g.name !== genre.name));
    
//     // setPage(1);
//   };

//   return (
//     <div className="m-8 flex gap-1 justify-center">
//       {/* {genres.map((genre) => {
//         const isGenrePresent = selectedGenres.find(
//           (genreType) => genreType === genre.type
//         ); */}

//           {selectedGenres &&
//             selectedGenres.map((genre) => (
//               <Chip
//                 key={genre.id}
//                 // variant={isGenrePresent ? "contained" : "outlined"}
//                 label={genre.name}
                
//                 size="small"
//                 color="primary"
//                 clickable
//                 onDelete={() => handleRemove(genre)}
                
//               />
//             ))}
//           {genres &&
//             genres.map((genre) => (
//               <Chip
//                 key={genre.id}
//                 // variant={isGenrePresent ? "contained" : "outlined"}
//                 label={genre.name}
//                 style={{ margin: 2 }}
//                 size="small"
//                 clickable
//                 onClick={() => handleAdd(genre)}
//               />
//             ))}
//        {/* })} */}
//     </div>
//   );
// }






import React ,{useEffect}from 'react'
import { useGenres } from '../store/state';
import axios from 'axios';
import { Chip } from '@mui/material';

const Genres = () => {
  const genres = useGenres((state) => state.genres);
  const setGenres = useGenres((state) => state.setGenres);
  const selectedGenres = useGenres((state) => state.selectedGenres);
  const addSelectedGenre = useGenres((state) => state.addSelectedGenre);
  const removeSelectedGenre = useGenres((state) => state.removeSelectedGenre);


  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/list?api_key=b34e165c7c0fffee30e7641c95f2f53b&language=en-US`
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres([]);
    };
  }, []);

  function handleRemove(genre){
    removeSelectedGenre(genre);
    setGenres([...genres, genre]);
   
  }

  function handleAdd(genre){
    addSelectedGenre(genre);
    setGenres(genres.filter((g) => g.name !== genre.name));

  }

  return (
    <>
    
    <div style={{ padding: "6px 0" }}>
      Genres
      {selectedGenres &&
        selectedGenres.map((genre) => (
          <Chip
            key={genre.id}
            label={genre.name}
            style={{ margin: 2 }}
            size="small"
            color="primary"
            clickable
            onDelete={() => handleRemove(genre)}
          />
        ))}
      {genres &&
        genres.map((genre) => (
          <Chip
            key={genre.id}
            label={genre.name}
            style={{ margin: 2 }}
            size="small"
            clickable
            onClick={() => handleAdd(genre)}
          />
        ))}
    </div>
  
    </>
  )
}

export default Genres
