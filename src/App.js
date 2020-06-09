import React from 'react';
import './App.css';
import Children from './components/Children'
import {useSelector,useDispatch} from 'react-redux'

function App() {

  let count = useSelector(state => state.count)
  let color = useSelector(state => state.color)
  const dispatch = useDispatch()

  const increaseNum = () =>{
    dispatch({type:'LOVE'})
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={()=>increaseNum()}>Increment</button>
      <button onClick={()=>dispatch({type:"Decrement", payload:{num:1, color:"red"}})}>Decrement</button>
      <button onClick={()=>dispatch({type:"Reset"})}>Reset</button>
      <input type="text" onChange={ (e) => dispatch({type:"Color",payload:{ color:(e.target.value) }})} ></input>

      <Children/>
    </div>
  );
}

export default App;
