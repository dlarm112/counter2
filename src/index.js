import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  count: 0,
  color: "black",
  boxArray: [],
  colorEach: null,
  boxNum: null,
}

function reducer(state=initialState, action){
  if(action.type === 'LOVE'){
    state.count++
    state.boxArray.push(state.count)
  }else if (action.type === 'Decrement'  && state.count > 0){
    state.count = state.count - action.payload.num;
    state.boxArray.pop()



  }else if (action.type === 'Reset'){
    state.count = 0
    state.boxArray = []
  }
  if(state.count >= 10){
    state.color = "red"
  }else{
    state.color = "white"
  }
  if(action.type == 'Color'){
    state.color=action.payload.color
  }
  if (action.type == 'ColorEach'){
    state.color = action.payload.colorEach
  }
  console.log(state.boxArray)

  return {...state}
}
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
