import getData from "../API";
import {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import "../index.css"


export default function AllPlayers(){

    const [players, setPlayers]= useState([])

    useEffect(()=>{
        async function fetchPlayers(){
            const playersArray =  await getData();
            setPlayers(playersArray)
        }

        fetchPlayers();
    },[])

console.log(players)

const navigate= useNavigate()
const viewDetails = (playerID)=>{
    navigate(`/singleplayer/${playerID}`)
}
    
    return(
        <div>
        <h1>This is the All Players Component</h1>
        <div className="players-container">
          {players.map((player) => (
            <div key={player.id} className="player-card">
              <div className="player-image-container">
                <img src={player.imageUrl} alt={player.name} className="player-image" />
              </div>
              <div className="player-details">
                <h2>{player.name}</h2>
                <p>{player.breed}</p>
                <p>{player.status}</p>
                <button onClick={()=> viewDetails(player.id)}>View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
);
}