import Navbar from "../Navbar";
import TeamsCard from "./TeamsCard";
import teams from "../../data/data";

function Teams() {
    return (
        <>
        <Navbar />
        <h2>NBA Teams</h2>
        <div className="teams-list">
            {teams.map(teams => 
            <TeamsCard id={teams} key={teams} />
            )}
        </div>
        </>
    )
};

export default Teams;