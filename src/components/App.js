import React, { Component } from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard"
import { addMovies, setShowFavourites } from "../actions";
import { connect } from "react-redux";

class App extends React.Component {

  componentDidMount(){
    this.props.dispatch(addMovies(data));

  }

  isMovieFavourite = (movie) =>{
    const {movies} = this.props;
    const index = movies.favourites.indexOf(movie);
    return index!==-1;
  }

  onChangeTab = (val) =>{
    this.props.dispatch(setShowFavourites(val));
  }


  render(){
    // console.log('State',this.props.store.getState());
    const {movies,search} = this.props; // {movies : {} , search : {}}
    const {list,favourites,showFavourites} = movies;
    console.log("Rendered");
    const displayMovies = showFavourites ? favourites : list;
    

    return (
      <div className="App">
        <Navbar search = {search}
        />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick = {()=>this.onChangeTab(false)}> Movies </div>
            <div className={`tab ${showFavourites ? 'active-tabs' : ''}`} onClick = {()=>this.onChangeTab(true)}> Favourites </div>
          </div>
          <div className="list">
            {displayMovies.map((movie,index)=>(
              <MovieCard 
              movie = {movie} 
              key = {`movies-${index}`}
              dispatch = {this.props.dispatch}
              isFavourite = {this.isMovieFavourite(movie)}
              />
            ))
            }
          </div>
          {displayMovies.length === 0 ? <div className="no-movies"> No movies to display!</div> : null}
        </div>
      </div>
    );
  }
}

// class AppWrapper extends React.Component{
//   render(){
//     return (
//       <StoreContext.Consumer>
//         {(store)=><App store = {store}/>}
//       </StoreContext.Consumer>
//     )
//   }
// }

function callback(state){
  return {
    movies:state.movies,
    search : state.movies
  }
}

const connectedAppComponent = connect(callback)(App);
export default connectedAppComponent;
