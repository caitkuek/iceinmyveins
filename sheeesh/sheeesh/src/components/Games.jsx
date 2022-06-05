import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import GamesRow from "./GamesRow";

function Games() {
    const [games, setGames] = useState(null);

    // retrieving games data for each games row
    useEffect(() => {
        fetch("https://www.balldontlie.io/api/v1/games?per_page=12")
        .then((response) => response.json())
        .then((data) => {
        setGames(data)
        // console.log(data)
    });
    }, []);

    return (
        <div>
            <Navbar />
            <h2>Games</h2>
            <div className="games-container">
            <table className="games-table">
                <thead className="games-header">
                <tr>
                    <th>Home</th>
                    <th>Score</th>
                    <th>Visitor</th>
                    <th>Season</th>
                </tr>
                </thead>   
                <tbody>
                    {games?.data.map((item, index) => <GamesRow item={item} key={index}/>)}
                </tbody>
            </table>
            </div>
        </div>
    )
};

export default Games;