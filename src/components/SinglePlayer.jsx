import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import { getDataById } from "../API"; //destructure because its not default export
import { deletePlayer } from "../API";
import {useNavigate} from "react-router-dom"


export default function SinglePlayer() {
    
    const  {playerId} = useParams();
    const [player, setPlayer] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        async function fetchPlayer(){
            const data = await getDataById(playerId)
            setPlayer(data)
        }
        
        fetchPlayer()
    },[playerId])

    console.log(player)

const deleteHandler = async (playerId) => {
  await deletePlayer(playerId)
  navigate("/allplayers")
}



    return (
      <div className="single-player">
        <h1>Single Player</h1>
        <div className="player-card">
        <div className="player-image-container">
          <img src={player.imageUrl} alt={player.name} className="player-image" />
        </div>
        <div className="player-details">
          <h2>{player.name}</h2>
          <p>Breed: {player.breed}</p>
          <p>Status: {player.status}</p>
          <button onClick={()=> {deleteHandler(player.id)}}>Delete</button>
        </div>
      </div>

      </div>
    );
  }

