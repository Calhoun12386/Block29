import { useState } from "react";
import {useNavigate} from "react-router-dom"

export default function NewPlayerForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const navigate= useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();
    //console.log({ name, breed, status, imageUrl });

    try {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2405-FTB-ET-WEB-PT/players",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            breed: breed,
            status: status,
            imageUrl: imageUrl,
          }),
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (err) {
      console.error(err);
    }
navigate("/allplayers")
    
  };

  return (
    <div>
      <h1>Create a new player</h1>

      <form onSubmit={submitHandler}>
        <label>
          Name: <input value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Breed:{" "}
          <input value={breed} onChange={(e) => setBreed(e.target.value)} />
        </label>
        <label>
          Status:{" "}
          <input value={status} onChange={(e) => setStatus(e.target.value)} />
        </label>
        <label>
          Image URL:{" "}
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
        <button type="submit">Create Player</button>
      </form>
    </div>
  );
}
