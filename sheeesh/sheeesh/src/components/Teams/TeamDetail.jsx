import Navbar from "../Navbar";
import { useParams } from "react-router-dom";
import useTeams from "../../hooks/useTeams";

function TeamDetail() {
    const { id } = useParams();
    const teams = useTeams(id);

    return (
        <>
        <Navbar />
        <div className="team-detail">
        <h2>{teams?.full_name}</h2>
            <p>City: {teams?.city}</p>
            <p>Conference: {teams?.conference}</p>
            <p>Division: {teams?.division}</p>
        </div>
        </>
    )
}

export default TeamDetail;