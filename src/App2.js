import './App.css';

export default function App() {

  function handleMouseOver() {
    const h1 = document.querySelector('h1');
    h1.innerHTML = 'Você passou o mouse!'
  };

  function handleMouseLeave() {
    const h1 = document.querySelector('h1');
    h1.innerHTML = 'Você tirou o mouse!'
  };

  return (
    <div className="App">
      <strong
        onMouseOver={() => handleMouseOver()}
        onMouseLeave={() => handleMouseLeave()}>
        passe o mouse aqui...
      </strong>
      <h1></h1>
    </div>
  );
};

