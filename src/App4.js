import './App.css';
import { useRef } from 'react';

export default function App() {
  const inputRef = useRef(null);
  const ulRef = useRef(null);

  function handleAddTask() {
    if (!inputRef.current.value) return;

    const li = document.createElement('li');

    li.appendChild(document.createTextNode(inputRef.current.value));
    ulRef.current.appendChild(li);

    inputRef.current.value = '';
  };



  return (
    <div className="App">
      <input
        type="text"
        placeholder="Adicionar tarefa"
        id="input-task"
        ref={inputRef}
      ></input>
      <button
        onClick={() => handleAddTask()}>
        Adicionar
      </button>
      <ul ref={ulRef}>

      </ul>
    </div >
  );
};

