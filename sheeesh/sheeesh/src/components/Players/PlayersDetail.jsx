import Navbar from "../Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SeasonAvg from "./SeasonAvg";

function PlayersDetail(props) {
  const { playerID } = useParams();
  const [playeravg, setPlayerAvg] = useState(null);
  const [playername, setPlayerName] = useState("");

  // retrieve player season avg
useEffect(() => {
    fetch(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${playerID}`)
    .then((response) => response.json())
    .then((data) => {
        setPlayerAvg(data)
    })
}, [playerID]);

useEffect(() => {
    fetch(`https://www.balldontlie.io/api/v1/players/${playerID}`)
    .then((response) => response.json())
    .then((data) => {
        setPlayerName(data)
    }) 
}, [playerID]);

  return (
    <>
      <Navbar />
      {/* <img id="shaq-img" src="https://i.imgur.com/uys5mfv.jpg" alt="shaq placeholder" /> */}
      <div>
        <div>
        <h3 className="seasonavg-header"> {playername?.first_name} {playername?.last_name} Season Averages</h3>
        <p>Current team: {playername?.team?.full_name}</p>
        </div>
        {playeravg?.data.map((item, index) => <SeasonAvg item={item} key={index}/>)}
        <div className="glossary">
        <p>Unsure of what these abbreviations mean? <a id="stats-glossary" href="https://www.nba.com/stats/help/glossary" target="_blank"> Click here!</a></p>
        </div>
      </div>
    </>
  );
}

export default PlayersDetail;
