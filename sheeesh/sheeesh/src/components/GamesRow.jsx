
function GamesRow({item}) {
    return (
    <tr className="games-row">
        <td>{item?.home_team?.abbreviation}</td>
        <td><span className="">{item?.home_team_score}</span>:<span>{item?.visitor_team_score}</span></td>
        <td>{item?.visitor_team?.abbreviation}</td>
        <td>{item?.season}</td>
    </tr>
    )
}

export default GamesRow;