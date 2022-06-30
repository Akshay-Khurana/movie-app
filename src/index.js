import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';


//function logger(obj,next,action)
// logger(obj)(next)(action)

// const logger = function({dispatch,getState}){
//   return function(next){
//     return function(action){
//       console.log('Action Type = ',action.type);
//       next(action);
//     }
//   }
// }

const logger = ({dispatch,getState}) => (next) => (action) =>{
  console.log('Action Type = ',action.type);
  next(action)
}


const store = createStore(rootReducer,applyMiddleware(logger));
console.log('store',store);
// console.log('Before State',store.getState());

// store.dispatch({
//   type : 'ADD_MOVIES',
//   movies : [{name : 'superman'}]
// });

// console.log('After State',store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App store = {store}/>
);
