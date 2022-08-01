import './App.css';

export default function App() {

  function handleInput(event) {
    const h1 = document.querySelector('h1');

    h1.innerText = event.target.value;
  };

  return (
    <div className="App">
      <h2>
        Digite aqui
      </h2>
      <input
        type="text"
        placeholder="Mensagem"
        id="input-task"
        onInput={(event) => { handleInput(event) }}
      />
      <h1></h1>
    </div>
  );
};

