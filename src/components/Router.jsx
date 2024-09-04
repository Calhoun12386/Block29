import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import AllPlayers from "./AllPlayers";
import NewPlayerForm from "./NewPlayerForm";
import SinglePlayer from "./SinglePlayer";


export default function Router() {
  return (

<div id="main-section">
          <Routes>
              <Route path="/" element={<Home/>}> </Route>
              <Route path="/allplayers" element={<AllPlayers/>}></Route>
              <Route path="/newplayerform" element={<NewPlayerForm/>}></Route>
              <Route path="/singleplayer/:playerId" element={<SinglePlayer/>}></Route>
          </Routes>
      </div>

  )
}