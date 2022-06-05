import { Link } from "react-router-dom";

function PlayersCard(props) {
    return (
        <>
        <div className="players-card">
            <Link to={`/players/${props.playerID}`} className="players-link"><h3>{props.firstname} {props.lastname}</h3></Link>
            <p><span className="position-bold">Position:</span> {props.position}</p>
            <p><span className="teams-bold">Team:</span> {props.team}</p>
        </div>
        </>
    )
}

export default PlayersCard;