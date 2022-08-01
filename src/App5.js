import './App.css';
import { useRef } from 'react';

export default function App() {
  let count = 0;
  const countRef = useRef(0);
  const spanRef = useRef(null);
  const spanLetRef = useRef(null);

  function incrementeRef() {
    countRef.current += 1

    spanRef.current.innerText = countRef.current;
  };


  function incrementeLet() {
    count += 1;
    spanLetRef.current.textContent = count;
  };


  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <h1> useREF </h1>
      <div>
        <button onClick={() => incrementeRef()}>
          Incrementar useRef
        </button>
        <div>
          <strong style={{ marginRight: '10px' }}>Valor do useRef</strong>
          <span ref={spanRef}>{countRef.current}</span>
        </div>
      </div>

      <div>
        <button onClick={() => incrementeLet()}>
          Incrementar let
        </button>
        <div>
          <strong style={{ marginRight: '10px' }}>Valor do let</strong>
          <span ref={spanLetRef}>{count}</span>
        </div>
      </div>


    </div >
  );
};

