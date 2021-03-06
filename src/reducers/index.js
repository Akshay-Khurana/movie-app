import { combineReducers } from "redux";
import { ADD_FAVOURITE, ADD_MOVIES, ADD_MOVIE_TO_LIST, ADD_SEARCH_RESULT, REMOVE_FROM_FAVOURITE, SET_SHOW_FAVOURITE } from "../actions";
const initialMovieState = {
    list : [],
    favourites : [],
    showFavourites : false
}
export function movies(state=initialMovieState,action){
    console.log("MOVIES REDUCER");
    switch (action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list : action.movies
            }
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites : [action.movie,...state.favourites]
            }
        case REMOVE_FROM_FAVOURITE:
            const filteredArray = state.favourites.filter(movie=>
                movie.Title !== action.movie.Title)
            return {
                ...state,
                favourites : filteredArray
            }
        case SET_SHOW_FAVOURITE:
            return {
                ...state,
                showFavourites : action.val
            }
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                list : [action.movie, ...state.list]
            }
        default:
            return state;
    }
}

const initialSearchState = {
    result : [],
    showSearchResults : false
}
export function search(state= initialSearchState,action){
    switch(action.type){
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result : action.movie,
                showSearchResults : true
            }
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                showSearchResults : false

            }
        
        default:
            return state;

    }
}

// const initialRootReducerState = {
//     movies : initialMovieState,
//     search : initialSearchState
// }
// export default function rootReducer(state = initialRootReducerState,action){

//     return {
//         movies : movies(state.movies,action),
//         search : search(state.search,action)
//     }

// }

export default combineReducers({
    movies,
    search
});