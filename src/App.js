import { useState, useEffect , useRef} from 'react';


function App() {
  const [input, setInput] =useState("")
  const prevState = useRef('')
  const counter = useRef(0)
  useEffect( ()=>{
    prevState.current = input;
    console.log(`rendered.`)
    counter.current++;
  }, [input])
  const formHandler = (e) =>{
    setInput(e.target.value);
  }
  return (
    <div className="App">
      <input value={input} onChange={formHandler} />
      <h4>Applications have been rendered {counter.current} times previous state{prevState.current}. input = {input}.</h4>
    </div>
  );
}

export default App;
