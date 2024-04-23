import { useState } from 'react';
import './App.css';
import Counter1 from './Components/useState/Counter-1';
import AgeMy_AgeNoSib from './Components/useState/Counter -2';
import Counter3 from './Components/useState/Counter -3';
import Effect from './Components/useState/Counter-6_UseEffect';
import ParentContext from "./Components/UseContext/Parentcontext"
import Counter4 from './Components/useState/Counter-4';
import { useContext } from 'react';
import { AppContext } from './Components/UseContext/Parentcontext';
function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow(!show)}>Change</button>
      {show ? (
        
        <>
        <Effect />
          
        </>
      ) : (
        <>
        <Counter1 />
          <AgeMy_AgeNoSib />
          <Counter3 />
          <ParentContext/>
          <Counter4/>
          </>
      )}
    </>
  );
}

export default App;
