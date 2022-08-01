import './App.css';

export default function App() {

  function headleAddTask() {
    const input = document.querySelector('#input-task');
    const ul = document.querySelector('ul');

    if (!input.value) return;

    const li = document.createElement('li');

    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);

    input.value = '';
  };

  return (
    <div className="App">
      <input type="text" placeholder="Adicionar tarefa" id="input-task"></input>
      <button onClick={() => headleAddTask()}>
        Adicionar
      </button>
      <ul>

      </ul>
    </div>
  );
};

