export default async function getData() {
  try {
    const response = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2405-FTB-ET-WEB-PT/players" );
    const result = await response.json();
    //console.log(result)
    return result.data.players; // Return the array of players
  } catch (error) {
    console.error("Error fetching players:", error);
    return []; // 
  }
}

export async function getDataById(playerId) {
    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2405-FTB-ET-WEB-PT/players/${playerId}`
      );
      const result = await response.json();
      //console.log(result)
      return result.data.player; // Return the player 
    } catch (error) {
      console.error("Error fetching player details:", error);
      return null; 
    }
  }

  export async function deletePlayer(playerId) {

    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2405-FTB-ET-WEB-PT/players/${playerId}`,
        {
          method: 'DELETE',
          
        }
      );
      const result = await response.json();
      console.log(`Player with ID ${playerId} deleted successfully:`, result);
      return result;
    } catch (error) {
      console.error(`Error deleting player with ID ${playerId}:`, error);
      return null;
    }


  }