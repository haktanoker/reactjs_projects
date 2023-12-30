import './App.css';
import Card from './card';

function App() {
  return (
    <div className="App">
      <Card
      img="https://i.pinimg.com/474x/c0/0d/59/c00d59f00fc8f23e7b94d61e1510528b.jpg"
      title="Karakter 1"
      />
      <Card
      img="https://i.pinimg.com/474x/d3/bb/ef/d3bbeffae0eac0f6e63b9269b95c3e2e.jpg"
      title="Karakter 2"
      />
      <Card
      img="https://i.pinimg.com/474x/4f/9b/3c/4f9b3cc1ce96db71c6c7f1c86c7b4e6d.jpg"
      title="Karakter 3"
      />
    </div>
  );
}

export default App;
