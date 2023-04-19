import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";
import ToyCard from "./ToyCard"

function App() {

  const [toys, setToys] = useState([])


  useEffect(()=> {
    fetch("http://localhost:3001/toys")
    .then((res) => res.json())
    .then((data) => setToys(data))
  }, [])

  function addToy(newToy) {
    setToys([...toys, newToy])
    console.log(toys)

  }


  



  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm setToys={setToys} addToy={addToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} setToys={setToys} />
    </>
  );
}

export default App;
