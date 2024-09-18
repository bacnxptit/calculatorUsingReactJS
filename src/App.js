import React ,{useState} from 'react'

import './App.css';

function App() {
  const [value,setvalue]=useState(' ')
  const [color,setcolor] = useState('red')
  function handle(e){
    setvalue(value + e.target.innerHTML)

  }
  function equal(){
    setvalue(eval(value))
  }
  function AC(){
    setvalue("")
  }
  function DELL(){
    setvalue(value.toString().slice(0,-1))
  }
  return (
    
    <div class = "container">
      <div style={{textAlign:"center",fontSize:"30px",color:{color}}}>Calculator</div>
    <input type='text' placeholder= " 0" value ={value} />
     <div >
      <button style={{fontSize:"15px"}} onClick={AC}>AC</button>
      <button style={{fontSize:"15px"}}   onClick={DELL}>DELL</button>
      <button onClick={handle} >%</button>
      <button style={{backgroundColor:"orange"}} onClick={handle}>/</button>
    
     </div>
     <div >
      <button onClick={handle}>7</button>
      <button onClick={handle}>8</button>
      <button onClick={handle}>9</button>
      <button style={{backgroundColor:"orange"}}  onClick={handle}>*</button>
    
     </div>
     <div >
      <button onClick={handle}>4</button>
      <button onClick={handle}>5</button>
      <button onClick={handle}>6</button>
      <button style={{backgroundColor:"orange"}}  onClick={handle}>-</button>
    
     </div>
     <div >
      <button onClick={handle}>1</button>
      <button onClick={handle}>2</button>
      <button onClick={handle}>3</button>
      <button style={{backgroundColor:"orange"}}  onClick={handle}>+</button>
    
     </div>
     <div >
      
      <button style={{width:"150px",borderRadius:"61px"}} onClick={handle}>0</button>
      <button onClick={handle}>,</button>
      <button style={{backgroundColor:"orange"}}  onClick={equal}>=</button>
    
     </div>
     </div>
  );
}

export default App;
