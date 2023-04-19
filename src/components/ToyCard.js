import React, { useState } from "react";



function ToyCard({toy, setToys}) {


  const [likes, setLikes] = useState(toy.likes)

  function handleLike() {

    setLikes(toy.likes += 1)
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: likes + 1
      })

    })
    .then((res) => res.json())
    .then((data) => console.log(data))



  }

  function handleDelete() {
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "DELETE"
    })
    .then((res) => res.json())
    .then((data) => {
      setToys(data)
    }
    
    )
  }
  
  return (
    <div key={toy.id} className="card">
      <h2>{toy.id}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button onClick={handleLike}className="like-btn">Like {"<3"}</button>
      <button onClick={handleDelete} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
