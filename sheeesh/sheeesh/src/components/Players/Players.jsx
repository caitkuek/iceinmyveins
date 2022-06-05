import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";
import PlayersCard from "./PlayersCard"


function Players() {
    const [player, setPlayer] = useState("");

    // const [result, setResults] = useState({
    //     "data": [

    //     ]
    // });

    const [result, setResults] = useState([]);

    const search = async (player) => {
        const response = await fetch(`https://www.balldontlie.io/api/v1/players/?search=${player}`)
        const data = await response.json();
        // console.log(data.data)
        setResults(data);
    }

    // sorry simon :(
    // const MakeCard = () => {
    //     const resultArr = []
    //     for (let i = 0; i < result.data.length; i++) {
    //         resultArr.push(
    //             <PlayersCard 
    //             firstname={result.data[i]["first_name"]} 
    //             lastname={result.data[i]["last_name"]}
    //             team={result.data[i]["team"]["full_name"]}
    //             position={result.data[i]["position"]}
    //             key={i}
    //             />
    //         )
    //     }
    //     return resultArr;
    // }

    const handleSearch = () => {
        // console.log(player)
        search(player);
    }

    return (
    <>
    <Navbar />
    <h2>Search Players</h2>
    <form className="search-form" onSubmit={(event) => event.preventDefault()}>
    <input type="search" 
    className="player-search"
    id="player"
    name="player"
    value={player}
    placeholder="SEARCH FOR A PLAYER E.G. JAMES HARDEN"
    onChange={(event) => setPlayer(event.target.value)}/>
    <button className="player-search-button" onClick={handleSearch}>SEARCH</button>
    </form>

    <div className="set-players-list">
    { result?.data?.map((r, index) => (
    <PlayersCard 
    firstname={r?.["first_name"]} 
    lastname={r?.["last_name"]} 
    team={r?.["team"]["full_name"]} 
    position={r?.["position"]}
    key={index} 
    playerID={r?.id}/>
    ))}
    </div>

    </>
    )
}

export default Players;