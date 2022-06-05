import { useState, useEffect } from "react"; 

function useTeams(id) {
    const [teams, setTeams] = useState({});

    useEffect(() => {
      fetch(`https://www.balldontlie.io/api/v1/teams/${id}`)
        .then((res) => res.json())
        .then((data) => setTeams(data)); 
    }, [id]); 

    return teams;
}

export default useTeams;