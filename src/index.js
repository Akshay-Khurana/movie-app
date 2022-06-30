import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';


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
  if (typeof action !== 'function'){
    console.log('Action Type = ',action.type);
  }
  next(action)
}

// const thunk = ({dispatch,getState}) => (next) => (action) =>{
//   if (typeof action === 'function'){
//     action(dispatch);
//     return;
//   }
//   next(action)
// }


const store = createStore(rootReducer,applyMiddleware(logger,thunk));
console.log('store',store);


// export const StoreContext = createContext();
// console.log('Store Context' , StoreContext);

// class Provider extends React.Component{
//   render(){
//     const {store} = this.props;
//     return <StoreContext.Provider value = {store}> 
//     {this.props.children}
//     </StoreContext.Provider>
//   }
// }

// const connectedComponent = connect(callback)(App);
// export function connect(callback) {
//   return function (Component) {
//     class ConnectedComponent extends React.Component {
//       constructor(props) {
//         super(props);
//         this.unsubscribe = this.props.store.subscribe(() => {
//           this.forceUpdate();
//         });
//       }

//       componentWillUnmount() {
//         this.unsubscribe();
//       }
//       render() {
//         const { store } = this.props;
//         const state = store.getState();
//         const dataToBeSentAsProps = callback(state);

//         return <Component dispatch={store.dispatch} {...dataToBeSentAsProps} />;
//       }
//     }

//     class ConnectedComponentWrapper extends React.Component {
//       render() {
//         return (
//           <StoreContext.Consumer>
//             {(store) => {
//               return <ConnectedComponent store={store} />;
//             }}
//           </StoreContext.Consumer>
//         );
//       }
//     }
//     return ConnectedComponentWrapper;
//   };
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    <App/>
  </Provider>
);