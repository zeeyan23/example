import create from "zustand";

export const useGenres = create((set) => ({
  genres: [],
  movies: [],
  selectedGenres: [],
  selectedMovies: [],
  setSelectedGenre : [],

  setGenres: (genres) => set(() => ({ genres: genres })),
  setMovies: (movies) =>
    set(() => ({ movies: movies, selectedMovies: movies })),

  addSelectedGenre: (genre) =>
    set((state) => {
      const selectedGenres = [...state.selectedGenres, genre];

      return {
 
        selectedGenres: selectedGenres,
     
      };
    }),

  


    // addSelectedGenre: (genre) =>
    // set((state) => ({ selectedGenres: [...state.selectedGenres, genre] })),



removeSelectedGenre: (genre) =>
set((state) => {
  const selectedGenres = state.selectedGenres.filter((g) => g !== genre);
  return {
    selectedGenres: selectedGenres,
    selectedMovies: getMovies(state.movies, selectedGenres),
  };
}),
}));

function getMovies(movies, selectedGenres) {
  return movies.filter((movie) => {
    return selectedGenres.length === 0
      ? true
      : selectedGenres.includes(movie.type);
  });
}
