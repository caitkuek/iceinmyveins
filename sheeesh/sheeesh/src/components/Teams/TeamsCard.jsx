import { Link } from "react-router-dom";
import useTeams from "../../hooks/useTeams";

function TeamsCard({id}) {
    const teams = useTeams(id);

    return (
        <>
        <div className="teams-card">
            <Link className="teams-link" to={`/teams/${id}`}>
                {teams?.full_name}
            </Link>
        </div>
        </>
    )
};

export default TeamsCard;
