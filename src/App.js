import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Animals Border</h1>
        <Animals></Animals>

      </header>
    </div>
  );
}

function Animals() {
  const [animals, setAnimals] = useState([]);
  const [pet, setPet] = useState(0);
  useEffect(async () => {
    const url = `https://jsonplaceholder.typicode.com/comments`;
    try {
      const promise = await fetch(url); const data = await promise.json();
      setAnimals(data);
      console.log(data);
    }
    catch (error) {
      console.log(error);
    }
  }, [])
  return (
    <div className="animal-list">
      {
        animals.map(animal => {
          return (
            <div className="Child-div">
              <h1 className="comment">Comment : {pet}</h1>
              <button onClick={() => setPet(pet - 1)}>Remove</button>
              <button onClick={() => setPet(pet + 1)}>Add Comment</button>
              <h3>ID : {animal.id}</h3>
              <h1>Name : {animal.name}</h1>
              <h4>Email : {animal.email}</h4>
              <h3>Body : {animal.body}</h3>
            </div>
          )
        })
      }
    </div>
  )
}

export default App;
