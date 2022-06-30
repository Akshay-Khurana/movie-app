
// action types 

export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FROM_FAVOURITE = 'REMOVE_FROM_FAVOURITE';
export const SET_SHOW_FAVOURITE = 'SET_SHOW_FAVOURITE';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';


// action creators

export function addMovies(movies){
    return ({
        type : ADD_MOVIES,
        movies
    })
}

export function addFavourite(movie){
    return ({
        type : ADD_FAVOURITE,
        movie
    })
}

export function removeFromFavourites(movie){
    return ({
        type : REMOVE_FROM_FAVOURITE,
        movie
    })
}

export function setShowFavourites(val){
    return ({
        type : SET_SHOW_FAVOURITE,
        val
    })
}

export function handleAddMovieToList(movie){
    return {
        type : ADD_MOVIE_TO_LIST,
        movie
    }

}


export function handleMovieSearch(movie) {
    console.log(movie);
    const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;
    return function(dispatch){
      fetch(url)
        .then((response) => response.json())
        .then((movie) => {
          console.log("movie", movie);
          //dispatch an action to store the movie to the store
          dispatch(addMovieSearchResult(movie));
        });
    }
}

export function addMovieSearchResult(movie){
    return {
        type : 'ADD_SEARCH_RESULT',
        movie
    }
}
