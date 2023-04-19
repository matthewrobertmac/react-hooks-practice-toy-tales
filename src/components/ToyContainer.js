import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, setToys}) {

  return (
    <div id="toy-collection">{
      toys.map((toy) => {
        return <ToyCard setToys={setToys} toyId={toy.id} toy={toy} key={toy.name}/>

      })}</div>)
      
}

export default ToyContainer;
